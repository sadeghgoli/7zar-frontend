import Link from "next/link";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiClock,
  FiCreditCard,
  FiMapPin,
  FiPhone,
  FiRefreshCw,
  FiShield,
  FiShoppingBag,
  FiTruck,
} from "react-icons/fi";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import Title from "@/components/elements/title/Title";
import { siteConfig } from "@/data/catalog";

export const metadata = {
  title: "راهنمای خرید",
  description:
    "راهنمای کامل ثبت سفارش، انتخاب سایز، ارسال، پرداخت و بازگشت کالا در فروشگاه سون زر.",
};

const steps = [
  {
    icon: FiShoppingBag,
    title: "انتخاب محصول",
    text: "از دسته‌بندی‌ها یا جستجو، طرح مورد علاقه را پیدا کنید و مشخصات، وزن و عیار آن را ببینید.",
  },
  {
    icon: FiCheckCircle,
    title: "انتخاب سایز و افزودن به سبد",
    text: "سایز یا طول مناسب را انتخاب کنید و محصول را به سبد خرید اضافه کنید.",
  },
  {
    icon: FiCreditCard,
    title: "تکمیل اطلاعات و ثبت سفارش",
    text: "آدرس، شماره تماس و روش ارسال را وارد کنید. پرداخت آنلاین فعلاً فعال نیست و هماهنگی تلفنی انجام می‌شود.",
  },
  {
    icon: FiTruck,
    title: "تأیید و ارسال",
    text: "کارشناس برای تأیید نهایی تماس می‌گیرد؛ سپس سفارش بیمه‌شده ارسال و کد رهگیری اعلام می‌شود.",
  },
];

const sizeRows = [
  { size: "۵۰", diameter: "۱۵.۹ میلی‌متر", finger: "انگشت باریک" },
  { size: "۵۲", diameter: "۱۶.۵ میلی‌متر", finger: "انگشت متوسط" },
  { size: "۵۴", diameter: "۱۷.۲ میلی‌متر", finger: "انگشت متوسط به بالا" },
  { size: "۵۶", diameter: "۱۷.۸ میلی‌متر", finger: "انگشت پهن" },
  { size: "۵۸", diameter: "۱۸.۵ میلی‌متر", finger: "انگشت خیلی پهن" },
];

export default function GuidePage() {
  return (
    <StoreShell>
      <div className="border-b border-stone-200 bg-stone-100">
        <Container classes="py-10">
          <nav className="mb-4 flex items-center gap-1.5 text-[11px] text-stone-500">
            <Link href="/" className="hover:text-stone-800">
              خانه
            </Link>
            <FiArrowLeft aria-hidden />
            <span className="text-stone-800">راهنمای خرید</span>
          </nav>
          <h1 className="text-2xl font-bold text-stone-900 md:text-3xl">راهنمای خرید</h1>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-600">
            همه چیز درباره ثبت سفارش، انتخاب سایز، ارسال، پرداخت و بازگشت کالا؛
            تا با خیال راحت خرید کنید.
          </p>
        </Container>
      </div>

      <Container classes="max-w-4xl py-10">
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className="rounded-2xl border border-stone-200 bg-white p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b47d27] text-xs font-bold text-white">
                    {new Intl.NumberFormat("fa-IR").format(index + 1)}
                  </span>
                  <Icon className="text-[#b47d27]" aria-hidden />
                  <p className="text-sm font-bold text-stone-900">{step.title}</p>
                </div>
                <p className="mt-3 text-xs leading-7 text-stone-600">{step.text}</p>
              </div>
            );
          })}
        </div>

        <section className="mt-10 rounded-2xl border border-stone-200 bg-white p-5 md:p-6">
          <h2 className="flex items-center gap-2 text-lg font-bold text-stone-900">
            <FiShield className="text-[#b47d27]" aria-hidden />
            انتخاب سایز انگشتر
          </h2>
          <p className="mt-2 text-xs leading-7 text-stone-600">
            دور انگشت را با نوار کاغذی اندازه بگیرید و با جدول زیر مقایسه کنید.
            اگر بین دو سایز بودید، سایز بزرگ‌تر را انتخاب کنید. اندازه‌گیری در
            پایان روز دقیق‌تر است.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[420px] text-xs">
              <thead>
                <tr className="bg-stone-100 text-stone-700">
                  <th className="px-4 py-2.5 text-right font-semibold">سایز</th>
                  <th className="px-4 py-2.5 text-right font-semibold">قطر داخلی</th>
                  <th className="px-4 py-2.5 text-right font-semibold">مناسب برای</th>
                </tr>
              </thead>
              <tbody>
                {sizeRows.map((row, index) => (
                  <tr
                    key={row.size}
                    className={index % 2 === 0 ? "bg-white" : "bg-stone-50"}
                  >
                    <td className="px-4 py-2.5 font-bold text-stone-800">{row.size}</td>
                    <td className="px-4 py-2.5 text-stone-600">{row.diameter}</td>
                    <td className="px-4 py-2.5 text-stone-600">{row.finger}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] text-stone-500">
            اگر مطمئن نیستید، با شماره{" "}
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-bold text-[#a06c1e]"
              dir="ltr"
            >
              {siteConfig.phoneDisplay}
            </a>{" "}
            تماس بگیرید.
          </p>
        </section>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-stone-200 bg-white p-5">
            <h2 className="flex items-center gap-2 text-sm font-bold text-stone-900">
              <FiTruck className="text-[#b47d27]" aria-hidden />
              ارسال سفارش
            </h2>
            <ul className="mt-3 space-y-2 text-xs leading-7 text-stone-600">
              <li>ارسال با پست پیشتاز بیمه‌شده به سراسر کشور.</li>
              <li>ارسال رایگان برای سفارش‌های بالای ۲۰ میلیون تومان.</li>
              <li>تحویل حضوری در سبزوار، بیهق ۲۴، پس از هماهنگی.</li>
              <li>زمان تحویل معمولاً ۲ تا ۴ روز کاری است.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-white p-5">
            <h2 className="flex items-center gap-2 text-sm font-bold text-stone-900">
              <FiCreditCard className="text-[#b47d27]" aria-hidden />
              پرداخت
            </h2>
            <ul className="mt-3 space-y-2 text-xs leading-7 text-stone-600">
              <li>درگاه پرداخت آنلاین هنوز متصل نشده است.</li>
              <li>پس از ثبت سفارش، کارشناس برای هماهنگی پرداخت تماس می‌گیرد.</li>
              <li>پرداخت حضوری در گالری نیز امکان‌پذیر است.</li>
              <li>فاکتور رسمی همراه سفارش ارسال می‌شود.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-white p-5">
            <h2 className="flex items-center gap-2 text-sm font-bold text-stone-900">
              <FiRefreshCw className="text-[#b47d27]" aria-hidden />
              بازگشت و تعویض
            </h2>
            <ul className="mt-3 space-y-2 text-xs leading-7 text-stone-600">
              <li>بازگشت یا تعویض تا ۷ روز پس از دریافت.</li>
              <li>قطعه باید سالم و پلمب آن باز نشده باشد.</li>
              <li>هزینه ارسال مرجوعی در صورت ایراد کالا با سون زر است.</li>
              <li>برای هماهنگی، فاکتور و عکس قطعه را ارسال کنید.</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-white p-5">
            <h2 className="flex items-center gap-2 text-sm font-bold text-stone-900">
              <FiClock className="text-[#b47d27]" aria-hidden />
              نگهداری از طلا
            </h2>
            <ul className="mt-3 space-y-2 text-xs leading-7 text-stone-600">
              <li>قطعات را جدا از هم و دور از رطوبت نگه دارید.</li>
              <li>عطر و اسپری را قبل از انداختن زیورآلات استفاده کنید.</li>
              <li>برای تمیز کردن از پارچه نرم و صابون ملایم استفاده کنید.</li>
              <li>سالی یک بار قفل و سلامت بند را بررسی کنید.</li>
            </ul>
          </section>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-stone-900 p-6 text-center text-white sm:flex-row sm:text-right">
          <div>
            <p className="text-base font-bold">هنوز سوالی دارید؟</p>
            <p className="mt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-stone-300 sm:justify-start">
              <span className="flex items-center gap-1.5">
                <FiPhone className="text-amber-400" aria-hidden />
                <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <FiMapPin className="text-amber-400" aria-hidden />
                {siteConfig.address}
              </span>
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-[#b47d27] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#a06c1e]"
          >
            تماس با ما
          </Link>
        </div>
      </Container>
    </StoreShell>
  );
}
