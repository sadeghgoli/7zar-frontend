"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiAlertCircle,
  FiArrowRight,
  FiCheck,
  FiChevronLeft,
  FiClock,
  FiCreditCard,
  FiLock,
  FiMapPin,
  FiPhone,
  FiPrinter,
  FiShield,
  FiShoppingBag,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import { useCart } from "@/components/cart/CartProvider";
import { formatNumber, formatToman, siteConfig } from "@/data/catalog";

const shippingLabels = {
  post: "پست پیشتاز بیمه‌شده",
  express: "پیک ویژه (سبزوار)",
  pickup: "تحویل حضوری در گالری",
};

export default function PaymentPage() {
  const { clearCart } = useCart();
  const [order, setOrder] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem("sonzar-last-order");
      if (raw) {
        setOrder(JSON.parse(raw));
        clearCart();
      }
    } catch {
      setOrder(null);
    }
    setLoaded(true);
  }, [clearCart]);

  return (
    <StoreShell>
      <div className="border-b border-stone-200 bg-stone-100">
        <Container classes="py-8">
          <nav className="mb-3 flex items-center gap-1.5 text-[11px] text-stone-500">
            <Link href="/" className="hover:text-stone-800">
              خانه
            </Link>
            <FiChevronLeft aria-hidden />
            <Link href="/cart" className="hover:text-stone-800">
              سبد خرید
            </Link>
            <FiChevronLeft aria-hidden />
            <Link href="/checkout" className="hover:text-stone-800">
              تکمیل سفارش
            </Link>
            <FiChevronLeft aria-hidden />
            <span className="text-stone-800">پرداخت</span>
          </nav>
          <h1 className="text-2xl font-bold text-stone-900">پرداخت سفارش</h1>
          <p className="mt-1 text-sm text-stone-600">
            مرحله پایانی ثبت سفارش و اتصال به درگاه بانکی
          </p>
        </Container>
      </div>

      <Container classes="max-w-4xl py-10">
        <ol className="mb-8 grid grid-cols-3 gap-2 text-center text-[10px] md:text-xs">
          {[
            { label: "اطلاعات و آدرس", done: true },
            { label: "پرداخت", active: true },
            { label: "تأیید سفارش", done: false },
          ].map((step, index) => (
            <li key={step.label} className="flex flex-col items-center gap-2">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold ${
                  step.done
                    ? "border-emerald-500 bg-emerald-500 text-white"
                    : step.active
                      ? "border-[#b47d27] bg-[#b47d27] text-white"
                      : "border-stone-300 bg-white text-stone-400"
                }`}
              >
                {step.done ? <FiCheck aria-hidden /> : formatNumber(index + 1)}
              </span>
              <span className={step.active ? "font-bold text-stone-800" : "text-stone-500"}>
                {step.label}
              </span>
            </li>
          ))}
        </ol>

        {!loaded ? (
          <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center text-sm text-stone-500">
            در حال بارگذاری اطلاعات سفارش…
          </div>
        ) : !order ? (
          <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-10 text-center md:p-14">
            <FiShoppingBag className="mx-auto text-3xl text-stone-300" aria-hidden />
            <h2 className="mt-3 text-lg font-bold text-stone-900">
              سفارشی برای پرداخت پیدا نشد
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-stone-500">
              ابتدا محصولات خود را انتخاب کنید و اطلاعات تحویل را در مرحله تکمیل
              سفارش وارد کنید.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/products"
                className="rounded-xl bg-[#b47d27] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#a06c1e]"
              >
                مشاهده محصولات
              </Link>
              <Link
                href="/checkout"
                className="rounded-xl border border-stone-300 px-5 py-2.5 text-xs font-semibold text-stone-700 hover:bg-stone-50"
              >
                بازگشت به تکمیل سفارش
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="rounded-3xl border-2 border-dashed border-amber-300 bg-amber-50/60 p-6 text-center md:p-10">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-2xl text-amber-700">
                <FiLock aria-hidden />
              </span>
              <h2 className="mt-4 text-xl font-bold text-stone-900">
                درگاه پرداخت متصل نشده است
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-8 text-stone-600">
                در حال حاضر درگاه بانکی فروشگاه فعال نشده و امکان پرداخت آنلاین
                وجود ندارد. سفارش شما با موفقیت ثبت شد؛ کارشناس سون زر برای
                هماهنگی پرداخت و ارسال با شما تماس می‌گیرد.
              </p>
              <div className="mx-auto mt-5 grid max-w-md gap-2 rounded-2xl bg-white p-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">شماره سفارش</span>
                  <span className="font-bold text-stone-900" dir="ltr">
                    {order.number}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">وضعیت</span>
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold text-amber-800">
                    در انتظار هماهنگی پرداخت
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-500">مبلغ سفارش</span>
                  <span className="font-bold text-stone-900">
                    {formatToman(order.total)} تومان
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 rounded-xl bg-[#b47d27] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#a06c1e]"
                >
                  <FiPhone aria-hidden />
                  تماس با پشتیبانی
                </a>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-2.5 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                >
                  <FiPrinter aria-hidden />
                  چاپ پیش‌فاکتور
                </button>
                <Link
                  href="/products"
                  className="flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-5 py-2.5 text-xs font-semibold text-stone-700 hover:bg-stone-50"
                >
                  <FiArrowRight aria-hidden />
                  بازگشت به فروشگاه
                </Link>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <section className="rounded-2xl border border-stone-200 bg-white p-5">
                <h3 className="flex items-center gap-2 text-sm font-bold text-stone-900">
                  <FiUser className="text-[#b47d27]" aria-hidden />
                  اطلاعات خریدار
                </h3>
                <ul className="mt-3 space-y-2 text-xs leading-6 text-stone-600">
                  <li>
                    {order.customer.firstName} {order.customer.lastName}
                  </li>
                  <li className="flex items-center gap-2" dir="ltr">
                    <FiPhone className="text-[#b47d27]" aria-hidden />
                    {order.customer.phone}
                  </li>
                  <li className="flex items-start gap-2">
                    <FiMapPin className="mt-1 shrink-0 text-[#b47d27]" aria-hidden />
                    <span>
                      {order.customer.province}، {order.customer.city}،{" "}
                      {order.customer.address}
                      {order.customer.postalCode
                        ? ` — کد پستی ${order.customer.postalCode}`
                        : ""}
                    </span>
                  </li>
                </ul>
              </section>

              <section className="rounded-2xl border border-stone-200 bg-white p-5">
                <h3 className="flex items-center gap-2 text-sm font-bold text-stone-900">
                  <FiTruck className="text-[#b47d27]" aria-hidden />
                  ارسال و پرداخت
                </h3>
                <ul className="mt-3 space-y-2 text-xs leading-6 text-stone-600">
                  <li className="flex items-center gap-2">
                    <FiTruck className="text-[#b47d27]" aria-hidden />
                    {shippingLabels[order.shippingMethod] || "پست پیشتاز"}
                  </li>
                  <li className="flex items-center gap-2">
                    <FiClock className="text-[#b47d27]" aria-hidden />
                    {siteConfig.hours}
                  </li>
                  <li className="flex items-center gap-2">
                    <FiCreditCard className="text-[#b47d27]" aria-hidden />
                    پرداخت پس از هماهنگی تلفنی
                  </li>
                  <li className="flex items-start gap-2">
                    <FiMapPin className="mt-1 shrink-0 text-[#b47d27]" aria-hidden />
                    {siteConfig.address}
                  </li>
                </ul>
              </section>
            </div>

            <section className="rounded-2xl border border-stone-200 bg-white p-5">
              <h3 className="text-sm font-bold text-stone-900">اقلام سفارش</h3>
              <div className="mt-4 space-y-3">
                {order.items.map((item) => (
                  <div
                    key={`${item.id}-${item.size}-${item.color}`}
                    className="flex items-center gap-3 border-b border-stone-100 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-lg bg-stone-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="line-clamp-1 text-xs font-semibold text-stone-800">
                        {item.name}
                      </p>
                      <p className="mt-1 text-[10px] text-stone-500">
                        {item.size} · {item.color} · {formatNumber(item.quantity)} عدد
                      </p>
                    </div>
                    <p className="text-xs font-bold text-stone-800">
                      {formatToman(item.price * item.quantity)} تومان
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 space-y-2 border-t border-stone-200 pt-4 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>جمع کالاها</span>
                  <span>{formatToman(order.subtotal)} تومان</span>
                </div>
                <div className="flex justify-between">
                  <span>هزینه ارسال</span>
                  <span>
                    {order.shipping === 0 ? "رایگان" : `${formatToman(order.shipping)} تومان`}
                  </span>
                </div>
                <div className="flex justify-between border-t border-stone-200 pt-2 text-sm font-bold text-stone-900">
                  <span>مبلغ نهایی</span>
                  <span>{formatToman(order.total)} تومان</span>
                </div>
              </div>
            </section>

            <div className="flex items-start gap-2 rounded-2xl border border-stone-200 bg-stone-50 p-4 text-[11px] leading-6 text-stone-600">
              <FiAlertCircle className="mt-0.5 shrink-0 text-[#b47d27]" aria-hidden />
              <p>
                این صفحه صرفاً تا مرحله درگاه پیش می‌رود و هیچ تراکنش بانکی انجام
                نمی‌شود. برای پیگیری سفارش با شماره{" "}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="font-bold text-[#a06c1e]"
                  dir="ltr"
                >
                  {siteConfig.phoneDisplay}
                </a>{" "}
                تماس بگیرید.
              </p>
            </div>

            <p className="flex items-center justify-center gap-1.5 text-[10px] text-stone-400">
              <FiShield aria-hidden />
              اطلاعات شما فقط برای هماهنگی سفارش استفاده می‌شود.
            </p>
          </div>
        )}
      </Container>
    </StoreShell>
  );
}
