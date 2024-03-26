import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { store } from "./redux/store";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path == "/" || path == "/auth/:path*";
  const isLoggedIn = true; // get logged in user

  const cookies = request.cookies;
  const token = cookies.get("token");
  if (!token)
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));

  const decoded = jwtDecode(token.value);
  const now = new Date().getTime();
  const expiryDate = (decoded.exp as number) * 1000;

  const tokenExpired = now > expiryDate;
  if (tokenExpired)
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
