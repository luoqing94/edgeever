const HOP = new Set([
  'connection', 'keep-alive', 'proxy-authenticate', 'proxy-authorization',
  'te', 'trailers', 'transfer-encoding', 'upgrade', 'host', 'content-length',
]);

function readEnv(context, name) {
  return context?.env?.[name]
    || (typeof process !== 'undefined' && process.env?.[name])
    || '';
}

export default async function onRequest(context) {
  const { request } = context;
  const ORIGIN_HOST = readEnv(context, 'ORIGIN_HOST') || 'CHANGE_ME.workers.dev';
  const ORIGIN = `https://${ORIGIN_HOST}`;
  const path = new URL(request.url).pathname;
  const verifies = {
    '/.well-known/teo-verification/8zmywxm3bk.txt':
      readEnv(context, 'TEO_VERIFICATION_8ZMYWXM3BK') || 'CHANGE_ME_TEO_VERIFICATION',
    '/.well-known/teo-verification/5wdeolbm95.txt':
      readEnv(context, 'TEO_VERIFICATION_5WDEOLBM95') || 'CHANGE_ME_TEO_VERIFICATION',
  };
  if (verifies[path]) {
    return new Response(verifies[path], {
      headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' },
    });
  }


  const inbound = new URL(request.url);
  const targetUrl = ORIGIN + inbound.pathname + inbound.search;

  const headers = new Headers();
  for (const [k, v] of request.headers) {
    if (HOP.has(k.toLowerCase())) continue;
    headers.append(k, v);
  }
  headers.set('host', ORIGIN_HOST);
  headers.set('x-forwarded-host', inbound.host);
  headers.set('x-forwarded-proto', inbound.protocol.replace(':', ''));
  if (!headers.has('x-forwarded-for')) {
    const ip = request.headers.get('cf-connecting-ip')
      || request.headers.get('x-real-ip')
      || '';
    if (ip) headers.set('x-forwarded-for', ip);
  }

  const method = request.method || 'GET';
  const init = { method, headers, redirect: 'manual' };
  if (method !== 'GET' && method !== 'HEAD') {
    init.body = request.body;
  }

  let upstream;
  try {
    upstream = await fetch(targetUrl, init);
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: 'origin_fetch_failed', detail: String(err) }),
      { status: 502, headers: { 'content-type': 'application/json; charset=utf-8' } },
    );
  }

  const out = new Headers();
  for (const [k, v] of upstream.headers) {
    const lk = k.toLowerCase();
    if (lk === 'transfer-encoding' || lk === 'content-encoding') continue;
    if (lk === 'location' || lk === 'set-cookie') {
      out.append(k, v.split(ORIGIN).join(inbound.origin)
        .split(`https://${ORIGIN_HOST}`).join(inbound.origin)
        .split(ORIGIN_HOST).join(inbound.host));
      continue;
    }
    out.append(k, v);
  }
  // Avoid EdgeOne caching dynamic API/auth pages aggressively
  if (inbound.pathname.startsWith('/api/') || inbound.pathname === '/login' || inbound.pathname === '/') {
    out.set('cache-control', 'no-store');
  }

  return new Response(upstream.body, {
    status: upstream.status,
    statusText: upstream.statusText,
    headers: out,
  });
}
