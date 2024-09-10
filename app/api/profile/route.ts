export async function GET() {
  let posts = [{ id: 1, name: "code hub", body: "Next is so cool." }];
  return Response.json(posts);
}
