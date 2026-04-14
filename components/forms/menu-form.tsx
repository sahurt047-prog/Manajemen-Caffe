"use client";

import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";
import { Indonesian } from "flatpickr/dist/l10n/id.js";
import ReCAPTCHA from "react-google-recaptcha";
import Flatpickr from "react-flatpickr";
import { Button } from "@/components/ui/button";
import { CheckboxField } from "@/components/ui/checkbox-field";
import { RadioGroup } from "@/components/ui/radio-group";

const QuillEditor = dynamic(() => import("react-quill-new"), { ssr: false });

type MenuFormValues = {
  name: string;
  email: string;
  price: number;
  description: string;
};

export function MenuForm() {
  const { register, handleSubmit, watch, setValue } = useForm<MenuFormValues>({
    defaultValues: {
      name: "",
      email: "manager@cafeflow.id",
      price: 32000,
      description: "Cloud latte signature dengan foam lembut dan aroma floral.",
    },
  });

  const price = watch("price");
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(price || 0));

  return (
    <form onSubmit={handleSubmit((values) => console.log(values))} className="grid gap-4 lg:grid-cols-2">
      <label className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <span>Nama menu</span>
        <input {...register("name")} className="w-full rounded-2xl border border-white/30 bg-white/40 px-4 py-3 outline-none dark:border-white/10 dark:bg-slate-900/35" placeholder="Mis. Cloud Latte" />
      </label>
      <label className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <span>Email PIC</span>
        <input {...register("email")} type="email" className="w-full rounded-2xl border border-white/30 bg-white/40 px-4 py-3 outline-none dark:border-white/10 dark:bg-slate-900/35" />
      </label>
      <label className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <span>Harga</span>
        <input {...register("price", { valueAsNumber: true })} type="number" className="w-full rounded-2xl border border-white/30 bg-white/40 px-4 py-3 outline-none dark:border-white/10 dark:bg-slate-900/35" />
        <p className="text-xs text-slate-500 dark:text-slate-400">Format rupiah: {formattedPrice}</p>
      </label>
      <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
        <span>Jadwal menu spesial</span>
        <Flatpickr
          options={{
            locale: Indonesian,
            mode: "range",
            dateFormat: "d M Y",
          }}
          className="w-full rounded-2xl border border-white/30 bg-white/40 px-4 py-3 outline-none dark:border-white/10 dark:bg-slate-900/35"
        />
      </div>
      <label className="space-y-2 text-sm text-slate-600 dark:text-slate-300 lg:col-span-2">
        <span>Deskripsi singkat</span>
        <textarea {...register("description")} rows={4} className="w-full rounded-2xl border border-white/30 bg-white/40 px-4 py-3 outline-none dark:border-white/10 dark:bg-slate-900/35" />
      </label>
      <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300 lg:col-span-2">
        <span>Deskripsi rich text</span>
        <div className="overflow-hidden rounded-2xl border border-white/30 bg-white/40 dark:border-white/10 dark:bg-slate-900/35">
          <QuillEditor theme="snow" value={watch("description")} onChange={(value) => setValue("description", value)} />
        </div>
      </div>
      <div className="space-y-3 lg:col-span-2">
        <RadioGroup name="category" defaultValue="coffee" options={[{ label: "Coffee", value: "coffee" }, { label: "Non Coffee", value: "non-coffee" }, { label: "Bakery", value: "bakery" }]} />
        <CheckboxField label="Aktifkan sebagai menu spesial" defaultChecked />
      </div>
      <div className="rounded-2xl border border-dashed border-white/40 bg-white/20 p-4 lg:col-span-2 dark:border-white/10 dark:bg-slate-900/25">
        <ReCAPTCHA sitekey="your-public-site-key" />
      </div>
      <div className="lg:col-span-2">
        <Button type="submit">Simpan Draft</Button>
      </div>
    </form>
  );
}

