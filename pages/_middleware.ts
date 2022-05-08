import { NextRequest, NextResponse } from "next/server";
import { getURL } from "../lib/redis";

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname.split("/")[1];

  if (["favicon.ico", "api", ""].includes(path)) return;

  const url = await getURL(path);

  if (url) {
    return NextResponse.redirect(url);
  }
}
