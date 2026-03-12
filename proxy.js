// middleware.js
import { auth } from "./app/_lib/auth";

export default auth((req) => {
  const { nextUrl, auth: session } = req;
  const isLoggedIn = !!session?.user;

  const isOnAccount = nextUrl.pathname.startsWith("/account");
  const isOnLogin = nextUrl.pathname.startsWith("/login");

  // Redirect to /account if already logged in and trying to access /login
  if (isOnLogin && isLoggedIn) {
    return Response.redirect(new URL("/account", nextUrl));
  }

  // Redirect to /login if not logged in and trying to access /account
  if (isOnAccount && !isLoggedIn) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return null; // Continue to the requested page
});

export const config = {
  matcher: ["/account/:path*", "/login"],
};
