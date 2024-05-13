import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    const url = request.nextUrl.clone();

    if (url.pathname === "/") {
      return NextResponse.next();
    }

    if (request.nextauth.token === null) {
      url.pathname = "/";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized() {
        return true;
      },
    },
    pages: {
      error: "/",
      signIn: "/",
    },
  }
);

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon|images|icons|template|access-denied).*)",
  ],
};
