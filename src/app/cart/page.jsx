"use client";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import {
  FiArrowLeft,
  FiChevronLeft,
  FiChevronRight,
  FiShield,
  FiShoppingBag,
  FiTrash2,
  FiTruck,
} from "react-icons/fi";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import { useCart } from "@/components/cart/CartProvider";
import { formatNumber, formatToman, getShippingCost, siteConfig } from "@/data/catalog";

export default function CartPage() {
  const { items, isReady, subtotal, totalItems, updateQuantity, removeItem } = useCart();
  const shipping = getShippingCost(subtotal, "post");
  const total = subtotal + shipping;
  const remaining = siteConfig.freeShippingThreshold - subtotal;
  const freeShipping = remaining <= 0;

  const handleRemove = (item) => {
    removeItem(item.id, item.size, item.color);
    toast.success("محصول از سبد خرید حذف شد");
  };

  return (
    <StoreShell>
      <div className="border-b border-stone-200 bg-stone-100">
        <Container classes="py-8">
          <nav className="mb-3 flex items-center gap-1.5 text-[11px] text-stone-500">
            <Link href="/" className="hover:text-stone-800">
              خانه
            </Link>
            <FiChevronLeft aria-hidden />
            <span className="text-stone-800">سبد خرید</span>
          </nav>
          <h1 className="text-2xl font-bold text-stone-900">سبد خرید</h1>
          <p className="mt-1 text-sm text-stone-600">
            {isReady && totalItems > 0
              ? `${formatNumber(totalItems)} کالا در سبد شما قرار دارد`
              : "سبد خرید شما آماده انتخاب زیورآلات است"}
          </p>
        </Container>
      </div>

      <Container classes="py-10">
        {!isReady ? (
          <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center text-sm text-stone-500">
            در حال بارگذاری سبد خرید…
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-10 text-center md:p-16">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#b47d27]/10 text-2xl text-[#b47d27]">
              <FiShoppingBag aria-hidden />
            </span>
            <h2 className="mt-4 text-lg font-bold text-stone-900">
              سبد خرید شما خالی است
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-stone-500">
              از میان گردنبند، دستبند، گوشواره، انگشتر و ست‌های طلای ۱۸ عیار
              انتخاب کنید و به سبد اضافه کنید.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#b47d27] px-6 py-3 text-sm font-bold text-white hover:bg-[#a06c1e]"
            >
              مشاهده محصولات
              <FiArrowLeft aria-hidden />
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
            <div className="space-y-4">
              <div className="hidden rounded-xl bg-stone-100 px-4 py-2 text-[11px] text-stone-500 sm:grid sm:grid-cols-[1fr_120px_100px]">
                <span>محصول</span>
                <span className="text-center">تعداد</span>
                <span className="text-left">قیمت</span>
              </div>

              {items.map((item) => (
                <article
                  key={`${item.id}-${item.size}-${item.color}`}
                  className="grid gap-4 rounded-2xl border border-stone-200 bg-white p-4 sm:grid-cols-[1fr_120px_100px] sm:items-center"
                >
                  <div className="flex gap-3">
                    <Link
                      href={`/products/${item.slug}`}
                      className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-stone-100"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </Link>
                    <div className="min-w-0">
                      <Link
                        href={`/products/${item.slug}`}
                        className="line-clamp-2 text-sm font-bold text-stone-800 hover:text-[#b47d27]"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-[11px] text-stone-500">
                        سایز: {item.size} · رنگ: {item.color}
                      </p>
                      <p className="mt-1 text-[11px] text-stone-400">
                        عیار {item.karat} · {item.weight} گرم
                      </p>
                      <button
                        type="button"
                        onClick={() => handleRemove(item)}
                        className="mt-2 flex items-center gap-1 text-[11px] text-rose-500 hover:text-rose-700"
                      >
                        <FiTrash2 aria-hidden />
                        حذف
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex items-center rounded-lg border border-stone-200">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.color, item.quantity + 1)
                        }
                        className="px-2.5 py-1.5 text-stone-600 hover:text-stone-900"
                        aria-label="افزایش تعداد"
                      >
                        <FiChevronRight />
                      </button>
                      <span className="w-7 text-center text-xs font-bold">
                        {formatNumber(item.quantity)}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.color, item.quantity - 1)
                        }
                        className="px-2.5 py-1.5 text-stone-600 hover:text-stone-900"
                        aria-label="کاهش تعداد"
                      >
                        <FiChevronLeft />
                      </button>
                    </div>
                  </div>

                  <div className="text-left">
                    <p className="text-sm font-bold text-stone-900">
                      {formatToman(item.price * item.quantity)}
                      <span className="mr-1 text-[10px] font-medium text-stone-500">
                        تومان
                      </span>
                    </p>
                    <p className="mt-1 text-[10px] text-stone-400">
                      واحد: {formatToman(item.price)}
                    </p>
                  </div>
                </article>
              ))}

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#a06c1e] hover:underline"
              >
                <FiArrowLeft aria-hidden />
                ادامه خرید
              </Link>
            </div>

            <aside className="lg:sticky lg:top-32 lg:self-start">
              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <h2 className="text-base font-bold text-stone-900">خلاصه سفارش</h2>

                <div className="mt-4 space-y-3 text-xs">
                  <div className="flex items-center justify-between text-stone-600">
                    <span>جمع کالاها ({formatNumber(totalItems)})</span>
                    <span className="font-semibold text-stone-800">
                      {formatToman(subtotal)} تومان
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-stone-600">
                    <span>هزینه ارسال</span>
                    <span className="font-semibold text-emerald-700">
                      {shipping === 0 ? "رایگان" : `${formatToman(shipping)} تومان`}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-stone-600">
                    <span>بسته‌بندی کادویی</span>
                    <span className="font-semibold text-emerald-700">رایگان</span>
                  </div>
                </div>

                <div className="mt-4 border-t border-stone-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-stone-900">مبلغ قابل پرداخت</span>
                    <span className="text-lg font-bold text-stone-900">
                      {formatToman(total)}
                      <span className="mr-1 text-[10px] font-medium text-stone-500">
                        تومان
                      </span>
                    </span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#b47d27] py-3.5 text-sm font-bold text-white transition hover:bg-[#a06c1e]"
                >
                  ادامه فرآیند خرید
                  <FiArrowLeft aria-hidden />
                </Link>

                <div className="mt-4 rounded-xl bg-stone-50 p-3 text-[10px] leading-6 text-stone-500">
                  {freeShipping ? (
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <FiTruck aria-hidden />
                      ارسال رایگان برای این سفارش فعال شد.
                    </span>
                  ) : (
                    <>
                      <span className="flex items-center gap-1.5">
                        <FiTruck className="text-[#b47d27]" aria-hidden />
                        تا ارسال رایگان {formatToman(remaining)} تومان باقی مانده
                        است.
                      </span>
                      <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-stone-200">
                        <span
                          className="block h-full rounded-full bg-[#b47d27]"
                          style={{
                            width: `${Math.min(
                              100,
                              Math.round((subtotal / siteConfig.freeShippingThreshold) * 100)
                            )}%`,
                          }}
                        />
                      </span>
                    </>
                  )}
                </div>

                <div className="mt-4 space-y-2 border-t border-stone-200 pt-4 text-[10px] text-stone-500">
                  <p className="flex items-center gap-1.5">
                    <FiShield className="text-[#b47d27]" aria-hidden />
                    ضمانت اصالت و فاکتور رسمی
                  </p>
                  <p className="flex items-center gap-1.5">
                    <FiTruck className="text-[#b47d27]" aria-hidden />
                    ارسال بیمه‌شده به سراسر کشور
                  </p>
                </div>
              </div>
            </aside>
          </div>
        )}
      </Container>
    </StoreShell>
  );
}
