import { NextResponse, NextRequest } from "next/server";

const authPaths = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuth = request.cookies.get("refreshToken");

  if (authPaths.some((path) => pathname.startsWith(path))) {
    if (isAuth) {
      return NextResponse.redirect(new URL("/home", request.url));
    }
    return NextResponse.next();
  }

  if (isAuth) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}
