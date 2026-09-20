"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { categories } from "@/data/catalog";

export default function StoreNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/img/dummy/logo.png" alt="سون زر" width={48} height={48} className="h-12 w-12 object-contain" />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold tracking-tight text-stone-900 md:text-xl">سون زر</span>
            <span className="text-[10px] text-stone-500 md:text-xs">زیورآلات طلای ۱۸ عیار</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href={isHome ? "#collections" : "/#collections"} className="text-sm text-stone-600 hover:text-[#b47d27]">
            مجموعه‌ها
          </Link>
          {categories.slice(0, 3).map((c) => (
            <Link
              key={c.id}
              href={isHome ? `#cat-${c.id}` : `/#cat-${c.id}`}
              className="text-sm text-stone-600 hover:text-[#b47d27]"
            >
              {c.label}
            </Link>
          ))}
          <Link href="/about" className={`text-sm ${pathname === "/about" ? "font-semibold text-[#b47d27]" : "text-stone-600 hover:text-[#b47d27]"}`}>
            درباره ما
          </Link>
          <Link href="/contact" className={`text-sm ${pathname === "/contact" ? "font-semibold text-[#b47d27]" : "text-stone-600 hover:text-[#b47d27]"}`}>
            تماس
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/order"
            className="rounded-lg bg-[#b47d27] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a06c1e]"
          >
            ثبت سفارش
          </Link>
          <button
            type="button"
            className="rounded-lg border border-stone-200 p-2 md:hidden"
            aria-label="منو"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-stone-100 bg-white px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            <Link href="/#collections" onClick={() => setOpen(false)} className="py-2 text-stone-700">
              مجموعه‌ها
            </Link>
            {categories.map((c) => (
              <Link key={c.id} href={`/#cat-${c.id}`} onClick={() => setOpen(false)} className="py-2 text-stone-700">
                {c.label}
              </Link>
            ))}
            <Link href="/about" onClick={() => setOpen(false)} className="py-2 text-stone-700">
              درباره ما
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="py-2 text-stone-700">
              تماس
            </Link>
            <Link href="/order" onClick={() => setOpen(false)} className="py-2 font-medium text-[#b47d27]">
              ثبت سفارش
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
