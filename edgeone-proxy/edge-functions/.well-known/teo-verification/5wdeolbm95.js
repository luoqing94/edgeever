export default function onRequest() {
  return new Response('CHANGE_ME_TEO_VERIFICATION', {
    headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store' },
  });
}
