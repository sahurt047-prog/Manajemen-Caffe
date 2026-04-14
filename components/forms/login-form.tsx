"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@cafeflow.id");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="space-y-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          const payload = (await response.json()) as { message?: string };
          setError(payload.message ?? "Login gagal.");
          setLoading(false);
          return;
        }

        router.push("/dashboard");
        router.refresh();
      }}
    >
      <label className="block space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <span>Email admin</span>
        <input value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-2xl border border-white/30 bg-white/40 px-4 py-3 outline-none dark:border-white/10 dark:bg-slate-900/35" />
      </label>
      <label className="block space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <span>Password</span>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-2xl border border-white/30 bg-white/40 px-4 py-3 outline-none dark:border-white/10 dark:bg-slate-900/35" />
      </label>
      {error ? <p className="rounded-2xl bg-rose-100/80 px-4 py-3 text-sm text-rose-700 dark:bg-rose-500/15 dark:text-rose-200">{error}</p> : null}
      <Button type="submit" className="w-full justify-center">{loading ? "Memproses..." : "Masuk ke Dashboard"}</Button>
    </form>
  );
}

