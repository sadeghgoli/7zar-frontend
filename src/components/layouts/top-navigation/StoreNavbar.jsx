"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  FiClock,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiSearch,
  FiShoppingBag,
  FiTruck,
  FiX,
} from "react-icons/fi";
import { categories, siteConfig } from "@/data/catalog";
import { useCart } from "@/components/cart/CartProvider";

const mainLinks = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "فروشگاه" },
  ...categories.map((c) => ({
    href: `/products?category=${c.id}`,
    label: c.label,
  })),
  { href: "/products?sale=1", label: "پیشنهاد ویژه", hot: true },
  { href: "/blog", label: "مجله طلا" },
  { href: "/about", label: "درباره ما" },
  { href: "/faq", label: "سوالات متداول" },
  { href: "/contact", label: "تماس با ما" },
];

export default function StoreNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { totalItems, isReady } = useCart();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const submitSearch = (event) => {
    event.preventDefault();
    const value = query.trim();
    router.push(value ? `/products?q=${encodeURIComponent(value)}` : "/products");
    setOpen(false);
  };

  const isActive = (href) => {
    if (href.includes("?")) return false;
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <>
      <div className="bg-stone-900 text-stone-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-[11px] md:px-6">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-1.5 transition hover:text-amber-300"
            >
              <FiPhone aria-hidden />
              <span dir="ltr">{siteConfig.phoneDisplay}</span>
            </a>
            <span className="hidden items-center gap-1.5 sm:flex">
              <FiMapPin aria-hidden />
              {siteConfig.address}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden items-center gap-1.5 md:flex">
              <FiTruck aria-hidden />
              ارسال رایگان برای سفارش‌های بالای ۲۰ میلیون تومان
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock aria-hidden />
              {siteConfig.hours}
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-3">
            <Image
              src="/img/dummy/logo.png"
              alt="سون زر"
              width={52}
              height={52}
              className="h-11 w-11 object-contain md:h-12 md:w-12"
            />
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-stone-900 md:text-xl">
                سون زر
              </span>
              <span className="text-[10px] text-stone-500 md:text-[11px]">
                {siteConfig.tagline}
              </span>
            </span>
          </Link>

          <form
            onSubmit={submitSearch}
            className="hidden flex-1 items-center gap-2 md:flex"
            role="search"
          >
            <div className="relative w-full max-w-xl">
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="جستجو در بین گردنبند، دستبند، انگشتر و…"
                className="w-full rounded-xl border border-stone-200 bg-stone-50 py-2.5 pr-10 pl-4 text-sm text-stone-800 outline-none transition focus:border-[#b47d27] focus:bg-white"
              />
              <FiSearch
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-stone-400"
                aria-hidden
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-stone-700"
            >
              جستجو
            </button>
          </form>

          <div className="mr-auto flex items-center gap-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden items-center gap-2 rounded-xl border border-stone-200 px-3 py-2 text-xs font-semibold text-stone-700 transition hover:border-[#b47d27] hover:text-[#b47d27] lg:flex"
            >
              <FiPhone aria-hidden />
              مشاوره خرید
            </a>
            <Link
              href="/cart"
              className="relative flex items-center gap-2 rounded-xl bg-[#b47d27] px-3.5 py-2.5 text-xs font-bold text-white transition hover:bg-[#a06c1e] md:px-4"
            >
              <FiShoppingBag className="text-base" aria-hidden />
              <span className="hidden sm:inline">سبد خرید</span>
              {isReady && totalItems > 0 && (
                <span className="absolute -left-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-stone-900 px-1 text-[10px] font-bold text-amber-100 ring-2 ring-white">
                  {new Intl.NumberFormat("fa-IR").format(totalItems)}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="rounded-xl border border-stone-200 p-2.5 text-stone-700 md:hidden"
              aria-label="باز کردن منو"
            >
              <FiMenu />
            </button>
          </div>
        </div>

        <nav className="hidden border-t border-stone-100 md:block">
          <div className="mx-auto flex max-w-7xl items-center gap-5 overflow-x-auto px-6 py-2.5">
            {mainLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className={`relative whitespace-nowrap text-[13px] transition ${
                  isActive(link.href)
                    ? "font-bold text-[#b47d27]"
                    : "text-stone-600 hover:text-[#b47d27]"
                }`}
              >
                {link.label}
                {link.hot && (
                  <span className="absolute -left-2 -top-1 h-1.5 w-1.5 rounded-full bg-rose-500" />
                )}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-stone-950/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="بستن منو"
          />
          <div className="absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-100 p-4">
              <span className="text-base font-bold text-stone-900">منوی سون زر</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-stone-200 p-2 text-stone-600"
                aria-label="بستن"
              >
                <FiX />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <form onSubmit={submitSearch} className="relative mb-5">
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="جستجوی محصول…"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 py-2.5 pr-10 pl-4 text-sm outline-none focus:border-[#b47d27]"
                />
                <FiSearch
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400"
                  aria-hidden
                />
              </form>

              <div className="space-y-1">
                {mainLinks.map((link) => (
                  <Link
                    key={`m-${link.href}-${link.label}`}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-stone-700 transition hover:bg-stone-50 hover:text-[#b47d27]"
                  >
                    {link.label}
                    {link.hot && (
                      <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[10px] font-bold text-rose-600">
                        تخفیف
                      </span>
                    )}
                  </Link>
                ))}
                <Link
                  href="/guide"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-stone-700 hover:bg-stone-50"
                >
                  راهنمای خرید
                </Link>
              </div>

              <div className="mt-6 rounded-2xl bg-stone-50 p-4 text-xs leading-6 text-stone-600">
                <p className="mb-2 font-bold text-stone-800">تماس با گالری</p>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2"
                  dir="ltr"
                >
                  <FiPhone aria-hidden />
                  {siteConfig.phoneDisplay}
                </a>
                <p className="mt-2 flex items-start gap-2">
                  <FiMapPin className="mt-1 shrink-0" aria-hidden />
                  {siteConfig.address}
                </p>
                <p className="mt-2 flex items-center gap-2">
                  <FiClock aria-hidden />
                  {siteConfig.hours}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
