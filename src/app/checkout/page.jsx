"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  FiCheck,
  FiChevronLeft,
  FiCreditCard,
  FiInfo,
  FiLock,
  FiMapPin,
  FiPhone,
  FiShield,
  FiShoppingBag,
  FiTruck,
  FiUser,
} from "react-icons/fi";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import { useCart } from "@/components/cart/CartProvider";
import {
  formatNumber,
  formatToman,
  getShippingCost,
  siteConfig,
} from "@/data/catalog";

const provinces = [
  "آذربایجان شرقی",
  "آذربایجان غربی",
  "اردبیل",
  "اصفهان",
  "البرز",
  "ایلام",
  "بوشهر",
  "تهران",
  "چهارمحال و بختیاری",
  "خراسان جنوبی",
  "خراسان رضوی",
  "خراسان شمالی",
  "خوزستان",
  "زنجان",
  "سمنان",
  "سیستان و بلوچستان",
  "فارس",
  "قزوین",
  "قم",
  "کردستان",
  "کرمان",
  "کرمانشاه",
  "کهگیلویه و بویراحمد",
  "گلستان",
  "گیلان",
  "لرستان",
  "مازندران",
  "مرکزی",
  "هرمزگان",
  "همدان",
  "یزد",
];

const shippingOptions = [
  {
    id: "post",
    title: "پست پیشتاز بیمه‌شده",
    desc: "تحویل ۲ تا ۴ روز کاری به سراسر کشور",
    icon: FiTruck,
  },
  {
    id: "express",
    title: "پیک ویژه (سبزوار)",
    desc: "تحویل همان روز یا روز بعد در محدوده شهر",
    icon: FiMapPin,
  },
  {
    id: "pickup",
    title: "تحویل حضوری در گالری",
    desc: "سبزوار، بیهق ۲۴ — پس از هماهنگی تلفنی",
    icon: FiShoppingBag,
  },
];

const toEnglishDigits = (value = "") =>
  value.replace(/[۰-۹]/g, (digit) => "۰۱۲۳۴۵۶۷۸۹".indexOf(digit));

export default function CheckoutPage() {
  const router = useRouter();
  const { items, isReady, subtotal, totalItems } = useCart();
  const [shippingMethod, setShippingMethod] = useState("post");
  const [submitting, setSubmitting] = useState(false);

  const shipping = useMemo(
    () => getShippingCost(subtotal, shippingMethod),
    [subtotal, shippingMethod]
  );
  const total = subtotal + shipping;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (submitting) return;

    const data = new FormData(event.currentTarget);
    const firstName = data.get("firstName")?.toString().trim() || "";
    const lastName = data.get("lastName")?.toString().trim() || "";
    const phone = toEnglishDigits(data.get("phone")?.toString().trim() || "");
    const province = data.get("province")?.toString() || "";
    const city = data.get("city")?.toString().trim() || "";
    const address = data.get("address")?.toString().trim() || "";
    const postalCode = toEnglishDigits(data.get("postalCode")?.toString().trim() || "");
    const note = data.get("note")?.toString().trim() || "";
    const terms = data.get("terms");

    if (!firstName || !lastName) {
      toast.error("نام و نام خانوادگی را کامل وارد کنید");
      return;
    }
    if (!/^09\d{9}$/.test(phone)) {
      toast.error("شماره موبایل معتبر وارد کنید (مثال: ۰۹۱۲۳۴۵۶۷۸۹)");
      return;
    }
    if (!city || !address) {
      toast.error("شهر و آدرس کامل را وارد کنید");
      return;
    }
    if (postalCode && !/^\d{10}$/.test(postalCode)) {
      toast.error("کد پستی باید ۱۰ رقم باشد");
      return;
    }
    if (!terms) {
      toast.error("برای ادامه، قوانین خرید را بپذیرید");
      return;
    }

    setSubmitting(true);

    const order = {
      number: `SZ-${Date.now().toString().slice(-8)}`,
      createdAt: new Date().toISOString(),
      items,
      totalItems,
      subtotal,
      shipping,
      total,
      shippingMethod,
      paymentMethod: "phone",
      status: "awaiting-payment",
      customer: {
        firstName,
        lastName,
        phone,
        province,
        city,
        address,
        postalCode,
        note,
      },
    };

    try {
      window.localStorage.setItem("sonzar-last-order", JSON.stringify(order));
      const history = JSON.parse(
        window.localStorage.getItem("sonzar-orders") || "[]"
      );
      window.localStorage.setItem(
        "sonzar-orders",
        JSON.stringify([order, ...(Array.isArray(history) ? history : [])].slice(0, 10))
      );
    } catch {
      // ignore storage errors
    }

    window.setTimeout(() => {
      router.push("/checkout/payment");
    }, 500);
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
            <Link href="/cart" className="hover:text-stone-800">
              سبد خرید
            </Link>
            <FiChevronLeft aria-hidden />
            <span className="text-stone-800">تکمیل سفارش</span>
          </nav>
          <h1 className="text-2xl font-bold text-stone-900">تکمیل سفارش</h1>
          <p className="mt-1 text-sm text-stone-600">
            اطلاعات تحویل را وارد کنید؛ پیش از ارسال، سفارش شما توسط کارشناس
            تأیید می‌شود.
          </p>
        </Container>
      </div>

      <Container classes="py-10">
        {!isReady ? (
          <div className="rounded-2xl border border-stone-200 bg-white p-10 text-center text-sm text-stone-500">
            در حال بارگذاری…
          </div>
        ) : items.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-stone-300 bg-white p-12 text-center">
            <FiShoppingBag className="mx-auto text-3xl text-stone-300" aria-hidden />
            <p className="mt-3 font-bold text-stone-800">سبد خرید خالی است</p>
            <p className="mt-2 text-xs text-stone-500">
              برای تکمیل سفارش ابتدا محصولی به سبد اضافه کنید.
            </p>
            <Link
              href="/products"
              className="mt-5 inline-block rounded-xl bg-[#b47d27] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#a06c1e]"
            >
              مشاهده محصولات
            </Link>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid items-start gap-6 lg:grid-cols-[1fr_360px]"
          >
            <div className="space-y-5">
              <section className="rounded-2xl border border-stone-200 bg-white p-5">
                <h2 className="flex items-center gap-2 text-base font-bold text-stone-900">
                  <FiUser className="text-[#b47d27]" aria-hidden />
                  اطلاعات خریدار
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-stone-700">
                      نام <span className="text-rose-500">*</span>
                    </label>
                    <input
                      name="firstName"
                      required
                      placeholder="مثلاً مریم"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#b47d27] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-stone-700">
                      نام خانوادگی <span className="text-rose-500">*</span>
                    </label>
                    <input
                      name="lastName"
                      required
                      placeholder="مثلاً احمدی"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#b47d27] focus:bg-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-medium text-stone-700">
                      شماره موبایل <span className="text-rose-500">*</span>
                    </label>
                    <input
                      name="phone"
                      required
                      type="tel"
                      dir="ltr"
                      inputMode="tel"
                      placeholder="09123456789"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#b47d27] focus:bg-white"
                    />
                    <p className="mt-1 text-[10px] text-stone-400">
                      برای هماهنگی سایز و ارسال با این شماره تماس می‌گیریم.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-stone-200 bg-white p-5">
                <h2 className="flex items-center gap-2 text-base font-bold text-stone-900">
                  <FiMapPin className="text-[#b47d27]" aria-hidden />
                  آدرس تحویل
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-stone-700">
                      استان <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="province"
                      defaultValue="خراسان رضوی"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#b47d27] focus:bg-white"
                    >
                      {provinces.map((province) => (
                        <option key={province} value={province}>
                          {province}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-stone-700">
                      شهر <span className="text-rose-500">*</span>
                    </label>
                    <input
                      name="city"
                      required
                      defaultValue="سبزوار"
                      placeholder="مثلاً سبزوار"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#b47d27] focus:bg-white"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-medium text-stone-700">
                      آدرس کامل <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      required
                      rows={3}
                      placeholder="خیابان، کوچه، پلاک، واحد و کد پستی را وارد کنید"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#b47d27] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-stone-700">
                      کد پستی
                    </label>
                    <input
                      name="postalCode"
                      dir="ltr"
                      inputMode="numeric"
                      placeholder="1234567890"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#b47d27] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-medium text-stone-700">
                      توضیحات سفارش
                    </label>
                    <input
                      name="note"
                      placeholder="مثلاً بسته‌بندی هدیه، ساعت تحویل…"
                      className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#b47d27] focus:bg-white"
                    />
                  </div>
                </div>
              </section>

              <section className="rounded-2xl border border-stone-200 bg-white p-5">
                <h2 className="flex items-center gap-2 text-base font-bold text-stone-900">
                  <FiTruck className="text-[#b47d27]" aria-hidden />
                  روش ارسال
                </h2>
                <div className="mt-4 space-y-2">
                  {shippingOptions.map((option) => {
                    const Icon = option.icon;
                    const selected = shippingMethod === option.id;
                    return (
                      <label
                        key={option.id}
                        className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition ${
                          selected
                            ? "border-[#b47d27] bg-[#b47d27]/5"
                            : "border-stone-200 hover:border-stone-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="shippingMethod"
                          value={option.id}
                          checked={selected}
                          onChange={() => setShippingMethod(option.id)}
                          className="mt-1 accent-[#b47d27]"
                        />
                        <Icon className="mt-0.5 text-[#b47d27]" aria-hidden />
                        <span className="flex-1">
                          <span className="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-stone-800">
                            {option.title}
                            <span className="text-[11px] font-medium text-stone-500">
                              {option.id === "post"
                                ? shipping === 0
                                  ? "رایگان"
                                  : `${formatToman(shipping)} تومان`
                                : option.id === "express"
                                  ? `${formatToman(siteConfig.expressShippingCost)} تومان`
                                  : "رایگان"}
                            </span>
                          </span>
                          <span className="mt-1 block text-[11px] text-stone-500">
                            {option.desc}
                          </span>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </section>

              <section className="rounded-2xl border border-stone-200 bg-white p-5">
                <h2 className="flex items-center gap-2 text-base font-bold text-stone-900">
                  <FiCreditCard className="text-[#b47d27]" aria-hidden />
                  روش پرداخت
                </h2>
                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-3 rounded-xl border border-stone-200 bg-stone-50 p-3 opacity-70">
                    <input type="radio" disabled className="mt-1" />
                    <FiLock className="mt-0.5 text-stone-400" aria-hidden />
                    <div className="flex-1">
                      <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-stone-600">
                        پرداخت آنلاین از طریق درگاه بانکی
                        <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
                          درگاه متصل نشده
                        </span>
                      </p>
                      <p className="mt-1 text-[11px] leading-6 text-stone-500">
                        درگاه پرداخت آنلاین هنوز به فروشگاه متصل نشده است و این
                        گزینه فعلاً غیرفعال است.
                      </p>
                    </div>
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-[#b47d27] bg-[#b47d27]/5 p-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="phone"
                      defaultChecked
                      className="mt-1 accent-[#b47d27]"
                    />
                    <FiPhone className="mt-0.5 text-[#b47d27]" aria-hidden />
                    <span>
                      <span className="block text-sm font-semibold text-stone-800">
                        هماهنگی و پرداخت پس از تماس کارشناس
                      </span>
                      <span className="mt-1 block text-[11px] leading-6 text-stone-500">
                        سفارش ثبت می‌شود و کارشناس سون زر برای تأیید نهایی، هزینه
                        ارسال و روش پرداخت (کارت به کارت یا حضوری) با شما تماس
                        می‌گیرد.
                      </span>
                    </span>
                  </label>
                </div>

                <div className="mt-4 flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-[11px] leading-6 text-amber-800">
                  <FiInfo className="mt-0.5 shrink-0" aria-hidden />
                  <span>
                    توجه: در حال حاضر درگاه پرداخت آنلاین متصل نیست؛ پس از ثبت
                    سفارش، پرداخت به صورت هماهنگ با پشتیبانی انجام می‌شود.
                  </span>
                </div>
              </section>

              <label className="flex items-start gap-2 text-[11px] leading-6 text-stone-600">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  className="mt-1 accent-[#b47d27]"
                />
                <span>
                  قوانین خرید و بازگشت کالای سون زر را خوانده‌ام و می‌پذیرم. صحت
                  اطلاعات آدرس و شماره تماس را تأیید می‌کنم.
                </span>
              </label>
            </div>

            <aside className="lg:sticky lg:top-32">
              <div className="rounded-2xl border border-stone-200 bg-white p-5">
                <h2 className="text-base font-bold text-stone-900">
                  خلاصه سفارش ({formatNumber(totalItems)} کالا)
                </h2>

                <div className="mt-4 max-h-64 space-y-3 overflow-y-auto pl-1">
                  {items.map((item) => (
                    <div
                      key={`${item.id}-${item.size}-${item.color}`}
                      className="flex gap-3"
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
                        <p className="line-clamp-2 text-[11px] font-semibold text-stone-800">
                          {item.name}
                        </p>
                        <p className="mt-1 text-[10px] text-stone-500">
                          {item.size} · {formatNumber(item.quantity)} عدد
                        </p>
                        <p className="mt-1 text-[11px] font-bold text-stone-800">
                          {formatToman(item.price * item.quantity)} تومان
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 space-y-2 border-t border-stone-200 pt-4 text-xs text-stone-600">
                  <div className="flex justify-between">
                    <span>جمع کالاها</span>
                    <span className="font-semibold">{formatToman(subtotal)} تومان</span>
                  </div>
                  <div className="flex justify-between">
                    <span>هزینه ارسال</span>
                    <span className="font-semibold">
                      {shipping === 0 ? "رایگان" : `${formatToman(shipping)} تومان`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>بسته‌بندی کادویی</span>
                    <span className="font-semibold text-emerald-700">رایگان</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-stone-200 pt-4">
                  <span className="text-sm font-bold text-stone-900">مبلغ نهایی</span>
                  <span className="text-lg font-bold text-stone-900">
                    {formatToman(total)}
                    <span className="mr-1 text-[10px] font-medium text-stone-500">
                      تومان
                    </span>
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#b47d27] py-3.5 text-sm font-bold text-white transition hover:bg-[#a06c1e] disabled:opacity-60"
                >
                  {submitting ? (
                    "در حال ثبت سفارش…"
                  ) : (
                    <>
                      <FiCheck aria-hidden />
                      ثبت نهایی سفارش
                    </>
                  )}
                </button>

                <p className="mt-3 flex items-start gap-1.5 text-[10px] leading-5 text-stone-500">
                  <FiShield className="mt-0.5 shrink-0 text-[#b47d27]" aria-hidden />
                  پرداخت آنلاین غیرفعال است؛ پس از ثبت، کارشناس برای هماهنگی
                  پرداخت با شما تماس می‌گیرد.
                </p>
              </div>
            </aside>
          </form>
        )}
      </Container>
    </StoreShell>
  );
}
