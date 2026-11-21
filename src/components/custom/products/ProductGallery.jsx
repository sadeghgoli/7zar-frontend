"use client";

import { useState } from "react";
import Image from "next/image";
import { FiMaximize2 } from "react-icons/fi";

export default function ProductGallery({ images, name }) {
  const [active, setActive] = useState(0);
  const gallery = images?.length ? images : ["/img/products/real/necklace-chain.jpg"];

  return (
    <div>
      <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-stone-200 bg-stone-100">
        <Image
          src={gallery[active]}
          alt={name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] text-stone-600 shadow backdrop-blur">
          <FiMaximize2 aria-hidden />
          تصویر محصول
        </span>
      </div>

      {gallery.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {gallery.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(index)}
              className={`relative aspect-square overflow-hidden rounded-xl border-2 transition ${
                active === index
                  ? "border-[#b47d27]"
                  : "border-transparent hover:border-stone-300"
              }`}
              aria-label={`تصویر ${index + 1}`}
            >
              <Image
                src={src}
                alt={`${name} - تصویر ${index + 1}`}
                fill
                sizes="120px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
