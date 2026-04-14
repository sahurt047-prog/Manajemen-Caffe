import { NextResponse } from "next/server";
import { buildSession, getAdminCredentials } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string; password?: string };
  const admin = getAdminCredentials();

  if (body.email !== admin.email || body.password !== admin.password) {
    return NextResponse.json({ message: "Email atau password tidak valid." }, { status: 401 });
  }

  const response = NextResponse.json({ success: true, user: buildSession() });
  response.cookies.set({
    name: "cafeflow_admin_session",
    value: JSON.stringify(buildSession()),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });

  return response;
}

