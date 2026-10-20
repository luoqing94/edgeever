function readEnv(context, name) {
  return context?.env?.[name]
    || (typeof process !== 'undefined' && process.env?.[name])
    || '';
}

export default function onRequest(context) {
  const body = readEnv(context, 'TEO_VERIFICATION_8ZMYWXM3BK') || 'CHANGE_ME_TEO_VERIFICATION';
  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}
