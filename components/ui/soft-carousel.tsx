"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Morning ritual",
    description: "Highlight menu spesial harian di layar dashboard manager.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Operational focus",
    description: "Lihat performa shift, supply, dan order queue secara cepat.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Customer delight",
    description: "Pantau feedback pelanggan dan kualitas layanan tim floor.",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
  },
];

export function SoftCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-[28px]">
        <Image src={activeSlide.image} alt={activeSlide.title} width={1200} height={800} className="h-72 w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-white/10" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="font-serif text-3xl font-semibold">{activeSlide.title}</p>
          <p className="mt-2 max-w-md text-sm text-white/90">{activeSlide.description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {slides.map((slide, index) => (
          <Button key={slide.title} variant={index === activeIndex ? "soft" : "glass"} onClick={() => setActiveIndex(index)}>
            {slide.title}
          </Button>
        ))}
      </div>
    </div>
  );
}

