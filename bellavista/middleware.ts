import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET;

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });
  const path = req.nextUrl.pathname;

  const isPublicPath = ["/login", "/signup"].includes(path);

  if (!token) {
    if (!isPublicPath) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else {
    const role = token.role as string;
    const rolePath = {
      Client: "/client",
      Administrator: "/admin",
      ReceptionAgent: "/reception",
    }[role];

    if (path === "/dashboard") {
      return NextResponse.redirect(new URL(`${rolePath}/dashboard`, req.url));
    }

    if (path.startsWith("/client/") && role !== "Client") {
      return NextResponse.redirect(new URL(`${rolePath}/dashboard`, req.url));
    }
    if (path.startsWith("/admin/") && role !== "Administrator") {
      return NextResponse.redirect(new URL(`${rolePath}/dashboard`, req.url));
    }
    if (path.startsWith("/reception/") && role !== "ReceptionAgent") {
      return NextResponse.redirect(new URL(`${rolePath}/dashboard`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/client/:path*",
    "/admin/:path*",
    "/reception/:path*",
    "/login",
    "/signup",
  ],
};
