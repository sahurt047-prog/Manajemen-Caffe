"use client";

import { useEffect, useState } from "react";
import { FileUpload } from "@/components/forms/file-upload";
import { GlassCard } from "@/components/ui/glass-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { CafeProfile } from "@/types";

export function IdentityOverview() {
  const [profile, setProfile] = useState<CafeProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cafe-profile")
      .then((response) => response.json())
      .then((payload: { data: CafeProfile }) => setProfile(payload.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
      <GlassCard className="space-y-4">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-300">Identitas cafe</p>
          <h2 className="font-serif text-3xl font-semibold text-slate-700 dark:text-slate-100">Profil usaha dan dokumen legal</h2>
        </div>
        {loading || !profile ? (
          <Skeleton className="h-72 w-full" />
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-white/30 p-4 dark:bg-slate-900/30">
              <p className="text-sm text-slate-500 dark:text-slate-300">Nama cafe</p>
              <p className="mt-2 font-medium text-slate-700 dark:text-slate-100">{profile.cafeName}</p>
            </div>
            <div className="rounded-2xl bg-white/30 p-4 dark:bg-slate-900/30">
              <p className="text-sm text-slate-500 dark:text-slate-300">Owner</p>
              <p className="mt-2 font-medium text-slate-700 dark:text-slate-100">{profile.owner}</p>
            </div>
            <div className="rounded-2xl bg-white/30 p-4 dark:bg-slate-900/30">
              <p className="text-sm text-slate-500 dark:text-slate-300">Cabang</p>
              <p className="mt-2 font-medium text-slate-700 dark:text-slate-100">{profile.branch}</p>
            </div>
            <div className="rounded-2xl bg-white/30 p-4 dark:bg-slate-900/30">
              <p className="text-sm text-slate-500 dark:text-slate-300">Jam operasional</p>
              <p className="mt-2 font-medium text-slate-700 dark:text-slate-100">{profile.openingHours}</p>
            </div>
            <div className="rounded-2xl bg-white/30 p-4 md:col-span-2 dark:bg-slate-900/30">
              <p className="text-sm text-slate-500 dark:text-slate-300">Alamat</p>
              <p className="mt-2 font-medium text-slate-700 dark:text-slate-100">{profile.address}</p>
            </div>
          </div>
        )}
      </GlassCard>
      <GlassCard className="space-y-4">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-300">Dokumen legal</p>
          <h2 className="font-serif text-3xl font-semibold text-slate-700 dark:text-slate-100">NIB, NPWP, dan arsip bisnis</h2>
        </div>
        {loading || !profile ? (
          <Skeleton className="h-52 w-full" />
        ) : (
          <div className="space-y-3">
            {profile.documents.map((doc) => (
              <div key={doc.name} className="flex items-center justify-between rounded-2xl bg-white/30 px-4 py-3 text-sm text-slate-600 dark:bg-slate-900/30 dark:text-slate-300">
                <div>
                  <p className="font-medium text-slate-700 dark:text-slate-100">{doc.name}</p>
                  <p>Update {doc.updatedAt}</p>
                </div>
                <span className="rounded-full bg-white/50 px-3 py-1 text-xs dark:bg-slate-800/70">{doc.status}</span>
              </div>
            ))}
          </div>
        )}
        <FileUpload />
      </GlassCard>
    </div>
  );
}

