export default function onRequest(context) {
  const body = context?.env?.TEO_VERIFICATION_8ZMYWXM3BK
    || (typeof process !== 'undefined' && process.env?.TEO_VERIFICATION_8ZMYWXM3BK)
    || 'CHANGE_ME_TEO_VERIFICATION';
  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
    },
  });
}
