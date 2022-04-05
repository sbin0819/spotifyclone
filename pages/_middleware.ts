import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req: NextRequest, ev: NextFetchEvent) {
  const { pathname, origin } = req.nextUrl;
  if (signedinPages.find((p) => p == pathname)) {
    const token = req.cookies.SB_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect(`${origin}/signin`);
    }
  }
}
