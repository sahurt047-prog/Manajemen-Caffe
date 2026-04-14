"use client";

import Image from "next/image";
import Zoom from "react-medium-image-zoom";

export function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Zoom>
      <Image src={src} alt={alt} width={1200} height={720} className="h-52 w-full rounded-2xl object-cover" />
    </Zoom>
  );
}

