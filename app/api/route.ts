import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const nextUrl = request.nextUrl;
  const queryParam = nextUrl.searchParams.get("path");
  const basePath = nextUrl.pathname;
  return NextResponse.json(
    { queryParam: queryParam, basePath: basePath },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json(
    {
      message: "Naawwwrr",
      postedBody: body,
    },
    { status: 200 }
  );
}
