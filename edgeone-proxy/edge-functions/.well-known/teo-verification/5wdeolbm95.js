export default function onRequest(context) {
  const body = context?.env?.TEO_VERIFICATION_5WDEOLBM95
    || (typeof process !== 'undefined' && process.env?.TEO_VERIFICATION_5WDEOLBM95)
    || 'CHANGE_ME_TEO_VERIFICATION';
  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' },
  });
}
