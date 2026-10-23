const HOP = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailers',
  'transfer-encoding',
  'upgrade',
  'host',
  'content-length',
]);

const RESPONSE_HOP = new Set([
  'connection',
  'keep-alive',
  'proxy-authenticate',
  'proxy-authorization',
  'te',
  'trailers',
  'transfer-encoding',
  'upgrade',
  'content-encoding',
  'content-length',
]);

const STATIC_EXT_RE = /\.(?:js|mjs|css|woff2?|ttf|otf|eot|svg|png|jpe?g|gif|webp|avif|ico|webmanifest|json|txt|map|wasm)$/i;
const PUBLIC_SHARE_GET_RE =
  /^\/api\/public\/(?:shares\/[A-Za-z0-9_-]+(?:\/resources\/[^/]+\/blob)?|notebook-shares\/[A-Za-z0-9_-]+(?:\/memos\/[^/]+|\/resources\/[^/]+\/blob)?)$/;
const SECONDARY_HTML_PATHS = new Set([
  '/desktop-storage-bridge.html',
  '/ime-test.html',
  '/mobile-edit.html',
  '/note-print.html',
  '/tiptap-ime-test.html',
]);

// EE-2: Keep only the lightweight initial bootstrap chunks in <link rel="modulepreload">,
// stripping the 88+ heavy lazy/editor/diagram/mermaid/pdf/math chunks (~3.74 MB)
// while keeping <script type="module"> and <link rel="stylesheet"> 100% intact.
const CORE_PRELOAD_PREFIXES = [
  'rolldown-runtime-',
  'modulepreload-polyfill-',
  'vendor-react-',
  'vendor-query-',
  'vendor-i18n-',
  'vendor-icons-',
  'vendor-radix-slot-',
  'vendor-ui-utils-',
  'vendor-storage-',
  'ui-button-',
  'pwa-update-notice-',
  'app-page-path-',
  'version-',
  'client-id-',
  'api-',
  'local-db-',
  'network-status-',
  'ThemeProvider-',
  'ThemeToggle-',
  'editor-body-font-',
  'editor-body-fonts-',
  'ui-font-',
  'renderer-recovery-',
  'web-',
];

// EE-3: Synchronous <head> FOUC prevention script matching ThemeProvider.tsx initializeTheme()
const THEME_INIT_SCRIPT =
  '<script id="ee-theme-init">(function(){try{var p=localStorage.getItem("edgeever.theme");var d=p==="dark"||(p!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var t=d?"dark":"light";var el=document.documentElement;el.classList.toggle("dark",d);el.style.colorScheme=t;var m=document.querySelector(\'meta[name="theme-color"]\');if(m)m.setAttribute("content",d?"#121315":"#eef1f4");}catch(e){}})();</script>';

const FRESH_TTL_MS = 60 * 1000;
const SWR_TTL_MS = 3600 * 1000;
const MAX_L1_ENTRIES = 128;
const MAX_L1_BODY_BYTES = 1024 * 1024;

const swrMemoryCache =
  globalThis.__edgeeverSwrCache || (globalThis.__edgeeverSwrCache = new Map());
const inFlightRequests =
  globalThis.__edgeeverInFlight || (globalThis.__edgeeverInFlight = new Map());

function readEnv(context, name) {
  return (
    context?.env?.[name] ||
    (typeof process !== 'undefined' && process.env?.[name]) ||
    ''
  );
}

function resolveOrigin(context) {
  const host = readEnv(context, 'ORIGIN_HOST') || 'CHANGE_ME.workers.dev';
  if (host.startsWith('http://') || host.startsWith('https://')) {
    return host.replace(/\/+$/, '');
  }
  return `https://${host}`;
}

export function optimizeSpaHtml(html) {
  if (typeof html !== 'string' || !html) return html;

  // EE-2: Filter <link rel="modulepreload" ...> to core bootstrap chunks only
  let out = html.replace(
    /[ \t]*<link\b[^>]*\brel=["']modulepreload["'][^>]*>\r?\n?/gi,
    (tag) => {
      const hrefMatch = tag.match(/\bhref=["']\/assets\/([^"'?#]+)["']/i);
      if (!hrefMatch) return tag;
      const file = hrefMatch[1];
      for (let i = 0; i < CORE_PRELOAD_PREFIXES.length; i++) {
        if (file.startsWith(CORE_PRELOAD_PREFIXES[i])) {
          return tag;
        }
      }
      return '';
    }
  );

  // EE-3: Inject synchronous FOUC theme script into <head>
  if (!out.includes('id="ee-theme-init"')) {
    const themeMetaRe = /(<meta\b[^>]*\bname=["']theme-color["'][^>]*>)/i;
    if (themeMetaRe.test(out)) {
      out = out.replace(themeMetaRe, `$1\n    ${THEME_INIT_SCRIPT}`);
    } else if (out.includes('</head>')) {
      out = out.replace('</head>', `    ${THEME_INIT_SCRIPT}\n  </head>`);
    }
  }

  return out;
}

function stripVaryCookie(headers) {
  const vary = headers.get('vary');
  if (!vary) return;
  const parts = vary
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s && s.toLowerCase() !== 'cookie');
  if (parts.length > 0) {
    headers.set('vary', parts.join(', '));
  } else {
    headers.delete('vary');
  }
}

function cleanResponseHeaders(sourceHeaders) {
  const headers = new Headers();
  sourceHeaders.forEach((value, key) => {
    if (!RESPONSE_HOP.has(key.toLowerCase())) {
      headers.append(key, value);
    }
  });
  return headers;
}

function hasShareAccessCookie(cookieHeader) {
  if (!cookieHeader) return false;
  return /(?:^|;\s*)ee_share=/.test(cookieHeader);
}

function isStaticAssetPath(pathname) {
  if (
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/poster-fonts/') ||
    pathname.startsWith('/icons/') ||
    pathname.startsWith('/extensions/')
  ) {
    return true;
  }
  if (SECONDARY_HTML_PATHS.has(pathname)) {
    return false;
  }
  return STATIC_EXT_RE.test(pathname);
}

function isImmutableStaticPath(pathname) {
  return (
    pathname.startsWith('/assets/') ||
    pathname.startsWith('/poster-fonts/') ||
    pathname.startsWith('/workbox-')
  );
}

function isSpaShellRequest(request, pathname) {
  const method = request.method.toUpperCase();
  if (method !== 'GET' && method !== 'HEAD') return false;
  if (
    pathname.startsWith('/api/') ||
    pathname === '/api' ||
    pathname.startsWith('/mcp') ||
    pathname.startsWith('/.well-known/')
  ) {
    return false;
  }
  if (SECONDARY_HTML_PATHS.has(pathname)) return false;
  if (isStaticAssetPath(pathname)) return false;
  if (pathname === '/' || pathname === '/index.html') return true;
  if (pathname.endsWith('.html')) return false;
  const accept = (request.headers.get('accept') || '').toLowerCase();
  return !accept || accept.includes('text/html') || accept.includes('*/*');
}

function buildUpstreamHeaders(request, url, stripCookie) {
  const headers = new Headers();
  request.headers.forEach((value, key) => {
    const lower = key.toLowerCase();
    if (HOP.has(lower)) return;
    if (stripCookie && lower === 'cookie') return;
    headers.set(key, value);
  });
  headers.set('x-forwarded-host', url.host);
  headers.set('x-forwarded-proto', url.protocol.replace(':', ''));
  return headers;
}

function getDefaultCache() {
  try {
    if (typeof caches !== 'undefined' && caches?.default) {
      return caches.default;
    }
  } catch {}
  return null;
}

function setL1Cache(key, entry) {
  if (swrMemoryCache.size >= MAX_L1_ENTRIES && !swrMemoryCache.has(key)) {
    const oldestKey = swrMemoryCache.keys().next().value;
    if (oldestKey !== undefined) swrMemoryCache.delete(oldestKey);
  }
  swrMemoryCache.set(key, entry);
}

function buildResponseFromEntry(entry, method, cacheStatus) {
  const headers = new Headers(entry.headers);
  headers.set('cache-control', 'public, max-age=60');
  headers.set('x-eo-cache', cacheStatus);
  return new Response(method === 'HEAD' ? null : entry.body.slice(0), {
    status: entry.status,
    statusText: entry.statusText,
    headers,
  });
}

async function handleStaticAsset(context, request, url, origin) {
  const method = request.method.toUpperCase();
  const cache = getDefaultCache();
  const cacheKeyReq = new Request(`https://${url.host}${url.pathname}${url.search}`, {
    method: 'GET',
  });

  if (cache && url.pathname !== '/sw.js') {
    try {
      const cached = await cache.match(cacheKeyReq);
      if (cached) {
        const headers = cleanResponseHeaders(cached.headers);
        headers.set('x-eo-cache', 'HIT');
        return new Response(method === 'HEAD' ? null : cached.body, {
          status: cached.status,
          statusText: cached.statusText,
          headers,
        });
      }
    } catch {}
  }

  const upstreamUrl = `${origin}${url.pathname}${url.search}`;
  const upstreamResp = await fetch(upstreamUrl, {
    method: method === 'HEAD' ? 'GET' : method,
    headers: buildUpstreamHeaders(request, url, true),
    redirect: 'manual',
  });

  const headers = cleanResponseHeaders(upstreamResp.headers);
  headers.delete('set-cookie');
  stripVaryCookie(headers);

  if (upstreamResp.status === 200) {
    const cc =
      url.pathname === '/sw.js'
        ? 'no-cache'
        : isImmutableStaticPath(url.pathname)
          ? 'public, max-age=31536000, immutable'
          : 'public, max-age=86400';
    headers.set('cache-control', cc);
    headers.set('x-eo-cache', 'MISS');
    const bodyBuffer = await upstreamResp.arrayBuffer();

    if (cache && url.pathname !== '/sw.js') {
      const putPromise = (async () => {
        try {
          await cache.put(
            cacheKeyReq,
            new Response(bodyBuffer.slice(0), {
              status: 200,
              headers: new Headers(headers),
            })
          );
        } catch {}
      })();
      if (typeof context?.waitUntil === 'function') {
        context.waitUntil(putPromise);
      }
    }

    return new Response(method === 'HEAD' ? null : bodyBuffer, {
      status: 200,
      statusText: upstreamResp.statusText,
      headers,
    });
  }

  return new Response(method === 'HEAD' ? null : upstreamResp.body, {
    status: upstreamResp.status,
    statusText: upstreamResp.statusText,
    headers,
  });
}

async function fetchAndPopulateSwrCache({
  context,
  cacheKey,
  upstreamUrl,
  request,
  url,
  isSpaShell,
}) {
  const existing = inFlightRequests.get(cacheKey);
  if (existing) return existing;

  const promise = (async () => {
    try {
      const upstreamResp = await fetch(upstreamUrl, {
        method: 'GET',
        headers: buildUpstreamHeaders(request, url, true),
        redirect: 'manual',
      });

      const headers = cleanResponseHeaders(upstreamResp.headers);

      if (upstreamResp.status !== 200) {
        headers.set('cache-control', 'private, no-store');
        headers.set('x-eo-cache', 'BYPASS');
        const body = await upstreamResp.arrayBuffer();
        return {
          cacheable: false,
          status: upstreamResp.status,
          statusText: upstreamResp.statusText,
          headers: Array.from(headers.entries()),
          body,
        };
      }

      headers.delete('set-cookie');
      headers.delete('vary');
      headers.set('cache-control', 'public, max-age=60');

      let bodyBuffer;
      if (isSpaShell) {
        const rawHtml = await upstreamResp.text();
        const optimizedHtml = optimizeSpaHtml(rawHtml);
        bodyBuffer = new TextEncoder().encode(optimizedHtml).buffer;
        headers.set('content-type', 'text/html; charset=utf-8');
      } else {
        bodyBuffer = await upstreamResp.arrayBuffer();
      }

      const now = Date.now();
      const entry = {
        cacheable: true,
        status: 200,
        statusText: upstreamResp.statusText || 'OK',
        headers: Array.from(headers.entries()),
        body: bodyBuffer,
        cachedAt: now,
      };

      if (bodyBuffer.byteLength <= MAX_L1_BODY_BYTES) {
        setL1Cache(cacheKey, entry);
      }

      const cache = getDefaultCache();
      if (cache) {
        const l2Headers = new Headers(headers);
        l2Headers.set('cache-control', 'public, max-age=60, s-maxage=3600');
        l2Headers.set('x-eo-cached-at', String(now));
        const putPromise = (async () => {
          try {
            await cache.put(
              new Request(cacheKey, { method: 'GET' }),
              new Response(bodyBuffer.slice(0), {
                status: 200,
                headers: l2Headers,
              })
            );
          } catch {}
        })();
        if (typeof context?.waitUntil === 'function') {
          context.waitUntil(putPromise);
        }
        await putPromise;
      }

      return entry;
    } finally {
      inFlightRequests.delete(cacheKey);
    }
  })();

  inFlightRequests.set(cacheKey, promise);
  return promise;
}

async function handleAnonymousSwrRequest(context, request, url, origin, isSpaShell) {
  const method = request.method.toUpperCase();
  const cacheKey = isSpaShell
    ? `https://${url.host}/__spa_shell__`
    : `https://${url.host}${url.pathname}${url.search}`;
  const upstreamUrl = isSpaShell
    ? `${origin}/`
    : `${origin}${url.pathname}${url.search}`;
  const now = Date.now();

  // 1. Check L1 in-memory SWR cache
  const l1Entry = swrMemoryCache.get(cacheKey);
  if (l1Entry) {
    const age = now - l1Entry.cachedAt;
    if (age <= FRESH_TTL_MS) {
      return buildResponseFromEntry(l1Entry, method, 'HIT');
    }
    if (age <= FRESH_TTL_MS + SWR_TTL_MS) {
      const revalidatePromise = fetchAndPopulateSwrCache({
        context,
        cacheKey,
        upstreamUrl,
        request,
        url,
        isSpaShell,
      }).catch(() => {});
      if (typeof context?.waitUntil === 'function') {
        context.waitUntil(revalidatePromise);
      }
      return buildResponseFromEntry(l1Entry, method, 'STALE');
    }
    swrMemoryCache.delete(cacheKey);
  }

  // 2. Check L2 EdgeOne Cache API (caches.default)
  const cache = getDefaultCache();
  if (cache) {
    try {
      const l2Match = await cache.match(new Request(cacheKey, { method: 'GET' }));
      if (l2Match && l2Match.status === 200) {
        const cachedAt = Number(l2Match.headers.get('x-eo-cached-at') || 0) || now;
        const age = Math.max(0, now - cachedAt);
        const body = await l2Match.arrayBuffer();
        const cleanHeaders = cleanResponseHeaders(l2Match.headers);
        cleanHeaders.delete('x-eo-cached-at');
        const entry = {
          cacheable: true,
          status: 200,
          statusText: l2Match.statusText || 'OK',
          headers: Array.from(cleanHeaders.entries()),
          body,
          cachedAt,
        };
        if (body.byteLength <= MAX_L1_BODY_BYTES) {
          setL1Cache(cacheKey, entry);
        }
        if (age <= FRESH_TTL_MS) {
          return buildResponseFromEntry(entry, method, 'HIT');
        }
        if (age <= FRESH_TTL_MS + SWR_TTL_MS) {
          const revalidatePromise = fetchAndPopulateSwrCache({
            context,
            cacheKey,
            upstreamUrl,
            request,
            url,
            isSpaShell,
          }).catch(() => {});
          if (typeof context?.waitUntil === 'function') {
            context.waitUntil(revalidatePromise);
          }
          return buildResponseFromEntry(entry, method, 'STALE');
        }
      }
    } catch {}
  }

  // 3. Cache miss -> coalesced Singleflight upstream fetch
  const result = await fetchAndPopulateSwrCache({
    context,
    cacheKey,
    upstreamUrl,
    request,
    url,
    isSpaShell,
  });

  if (!result.cacheable) {
    const headers = new Headers(result.headers);
    return new Response(method === 'HEAD' ? null : result.body, {
      status: result.status,
      statusText: result.statusText,
      headers,
    });
  }

  return buildResponseFromEntry(result, method, 'MISS');
}

export default async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // Preserve EdgeOne domain verification routes
  const verifies = {
    '/.well-known/teo-verification/8zmywxm3bk.txt':
      readEnv(context, 'TEO_VERIFICATION_8ZMYWXM3BK') || 'CHANGE_ME_TEO_VERIFICATION',
    '/.well-known/teo-verification/5wdeolbm95.txt':
      readEnv(context, 'TEO_VERIFICATION_5WDEOLBM95') || 'CHANGE_ME_TEO_VERIFICATION_2',
  };
  if (verifies[path]) {
    return new Response(verifies[path], {
      status: 200,
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        'cache-control': 'public, max-age=300',
      },
    });
  }

  const origin = resolveOrigin(context);
  const method = request.method.toUpperCase();

  // EE-4: Static assets fallback with caches.default + immutable headers
  if ((method === 'GET' || method === 'HEAD') && isStaticAssetPath(path)) {
    return handleStaticAsset(context, request, url, origin);
  }

  // EE-2, EE-3, EE-5, EE-6: SPA HTML shell (/, /share/*, /notebook-share/*, /login, etc.)
  if (isSpaShellRequest(request, path)) {
    return handleAnonymousSwrRequest(context, request, url, origin, true);
  }

  // EE-5, EE-6: Anonymous public share API endpoints (only when no ee_share cookie / Range / Authorization)
  if (
    (method === 'GET' || method === 'HEAD') &&
    PUBLIC_SHARE_GET_RE.test(path) &&
    !hasShareAccessCookie(request.headers.get('cookie')) &&
    !request.headers.get('authorization') &&
    !request.headers.get('range')
  ) {
    return handleAnonymousSwrRequest(context, request, url, origin, false);
  }

  // Dynamic / authenticated / write / password-unlocked routes -> strict cache bypass
  const target = origin + path + url.search;
  const headers = buildUpstreamHeaders(request, url, false);
  const init = {
    method,
    headers,
    redirect: 'manual',
  };
  if (method !== 'GET' && method !== 'HEAD') {
    init.body = request.body;
  }

  const resp = await fetch(target, init);
  const out = cleanResponseHeaders(resp.headers);
  if (path.startsWith('/api/') || path.startsWith('/mcp')) {
    out.set('cache-control', 'private, no-store');
    out.set('x-eo-cache', 'BYPASS');
  }
  return new Response(resp.body, {
    status: resp.status,
    statusText: resp.statusText,
    headers: out,
  });
}
