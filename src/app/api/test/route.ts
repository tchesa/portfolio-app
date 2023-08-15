import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("test", body);

  return NextResponse.json({
    body,
    test: true,
  });
}
