import { redirect } from "next/navigation";
import { LoginForm } from "@/components/forms/login-form";
import { getSession } from "@/lib/auth";

export default async function LoginPage() {
  const session = await getSession();
  if (session) {
    redirect("/dashboard");
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-10 lg:px-10">
      <section className="grid w-full gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="glass-panel p-8 lg:p-12">
          <p className="mb-4 inline-flex rounded-full border border-white/40 bg-white/40 px-4 py-2 text-sm text-slate-600 dark:border-white/10 dark:bg-slate-900/35 dark:text-slate-300">
            Login admin ringan berbasis cookie
          </p>
          <h1 className="font-serif text-5xl font-semibold text-slate-700 dark:text-slate-100">Akses operasional CafeFlow dengan tampilan glass yang nyaman di mata.</h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Gunakan akun admin demo untuk preview lokal. Kredensial default bisa diganti lewat environment variable `ADMIN_EMAIL` dan `ADMIN_PASSWORD`.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="glass-card p-5">
              <p className="text-sm text-slate-500 dark:text-slate-300">Email demo</p>
              <p className="mt-2 font-medium text-slate-700 dark:text-slate-100">admin@cafeflow.id</p>
            </div>
            <div className="glass-card p-5">
              <p className="text-sm text-slate-500 dark:text-slate-300">Password demo</p>
              <p className="mt-2 font-medium text-slate-700 dark:text-slate-100">admin123</p>
            </div>
          </div>
        </div>
        <div className="glass-panel p-8 lg:p-10">
          <h2 className="font-serif text-4xl font-semibold text-slate-700 dark:text-slate-100">Sign in</h2>
          <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">Template ini sekarang sudah punya auth ringan tanpa backend kompleks.</p>
          <div className="mt-8">
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}

