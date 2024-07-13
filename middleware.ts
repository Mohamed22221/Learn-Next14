
import { NextRequest, NextResponse } from "next/server";
import { isUserAuthenticated } from "./session";

const protectedRoutes = ["/photos"];
export default function middleware(req: NextRequest) {
  if (
    !isUserAuthenticated &&
    protectedRoutes.includes(req?.nextUrl?.pathname)
  ) {
    const absoluteUrl = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteUrl.toString());
  }
  return NextResponse.next();
}