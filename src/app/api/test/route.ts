export async function POST(request: Request) {
  const body = await request.json();

  console.log("test", body);

  return {
    body,
    test: true,
  };
}
