"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import Compressor from "compressorjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

export function ImageUpload() {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="flex w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-white/40 bg-white/20 px-4 py-6 text-slate-600 transition hover:bg-white/35 dark:text-slate-300"
      >
        <FontAwesomeIcon icon={faImage} className="h-4 w-4" />
        Upload gambar menu
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (!file) return;
          new Compressor(file, {
            quality: 0.7,
            success(result) {
              setPreview(URL.createObjectURL(result));
            },
          });
        }}
      />
      {preview ? <Image src={preview} alt="Preview" width={800} height={360} unoptimized className="h-44 w-full rounded-2xl object-cover" /> : null}
    </div>
  );
}

