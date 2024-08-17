import { NextResponse } from "next/server";


// To handle a GET request to /api
export async function GET() {
  // Do whatever you want
  return NextResponse.json(
    { buildId: process.env.buildId },
    { status: 200 }
  );
}
