import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { store } from "./redux/store";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path == "/" || path == "/auth/:path*";
  const isLoggedIn = true; // get logged in user

  const state = store.getState();
  console.log(state);

  if (!isPublicPath && !isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/login", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/auth/:path*", "/dashboard/:path*", "/admin/:path*"],
};
