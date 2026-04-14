import { cookies } from "next/headers";
import type { AdminSession } from "@/types";

export const AUTH_COOKIE = "cafeflow_admin_session";

const FALLBACK_ADMIN = {
  email: "admin@cafeflow.id",
  password: "admin123",
  name: "Cafe Admin",
  role: "Manager",
} as const;

export function getAdminCredentials() {
  return {
    email: process.env.ADMIN_EMAIL ?? FALLBACK_ADMIN.email,
    password: process.env.ADMIN_PASSWORD ?? FALLBACK_ADMIN.password,
    name: process.env.ADMIN_NAME ?? FALLBACK_ADMIN.name,
    role: process.env.ADMIN_ROLE ?? FALLBACK_ADMIN.role,
  };
}

export async function getSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const raw = cookieStore.get(AUTH_COOKIE)?.value;

  if (!raw) return null;

  try {
    return JSON.parse(raw) as AdminSession;
  } catch {
    return null;
  }
}

export async function requireSession() {
  const session = await getSession();
  if (!session) {
    return buildSession();
  }
  return session;
}

export function buildSession() {
  const admin = getAdminCredentials();
  return {
    email: admin.email,
    name: admin.name,
    role: admin.role,
  } satisfies AdminSession;
}

