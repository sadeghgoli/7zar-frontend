import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiAward,
  FiCheckCircle,
  FiClock,
  FiHeart,
  FiMapPin,
  FiPhone,
  FiShield,
  FiTruck,
  FiUsers,
} from "react-icons/fi";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import Title from "@/components/elements/title/Title";
import { siteConfig } from "@/data/catalog";

export const metadata = {
  title: "درباره ما",
  description:
    "داستان گالری طلای سون زر؛ زیورآلات ۱۸ عیار با ضمانت اصالت، طراحی روز و پشتیبانی واقعی.",
};

const values = [
  {
    icon: FiShield,
    title: "اصالت بدون تردید",
    text: "تمام قطعات طلای ۱۸ عیار با گواهی اصالت و فاکتور رسمی ارسال می‌شوند.",
  },
  {
    icon: FiHeart,
    title: "طراحی برای زندگی",
    text: "طرح‌ها را طوری انتخاب می‌کنیم که هم برای روزمره و هم برای مناسبت‌ها مناسب باشند.",
  },
  {
    icon: FiUsers,
    title: "مشاوره واقعی",
    text: "پشت هر سفارش یک انسان پاسخ می‌دهد؛ برای سایز، وزن و ست کردن راهنمایی می‌گیرید.",
  },
  {
    icon: FiTruck,
    title: "ارسال مطمئن",
    text: "بسته‌بندی ایمن، ارسال بیمه‌شده و پیگیری تا تحویل در سراسر کشور.",
  },
];

const steps = [
  { title: "انتخاب طرح", text: "از میان محصولات یا با مشاوره تلفنی، قطعه مناسب را انتخاب کنید." },
  { title: "ثبت سفارش", text: "محصول را به سبد خرید اضافه کنید و آدرس و اطلاعات تحویل را وارد کنید." },
  { title: "تأیید کارشناس", text: "برای تأیید سایز، وزن و هزینه نهایی با شما تماس می‌گیریم." },
  { title: "ارسال و تحویل", text: "پس از تأیید، سفارش بیمه‌شده ارسال و کد رهگیری اعلام می‌شود." },
];

export default function AboutPage() {
  return (
    <StoreShell>
      <div className="border-b border-stone-200 bg-stone-100">
        <Container classes="py-10">
          <nav className="mb-4 flex items-center gap-1.5 text-[11px] text-stone-500">
            <Link href="/" className="hover:text-stone-800">
              خانه
            </Link>
            <FiArrowLeft aria-hidden />
            <span className="text-stone-800">درباره ما</span>
          </nav>
          <h1 className="text-2xl font-bold text-stone-900 md:text-3xl">
            درباره گالری سون زر
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-600">
            از یک ویترین کوچک در سبزوار تا همراهی با مشتریانی از سراسر ایران؛
            داستان ما با اعتماد شما نوشته می‌شود.
          </p>
        </Container>
      </div>

      <Container classes="py-12">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/img/site/about-store.jpg"
                alt="ویترین گالری طلای سون زر"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden w-44 overflow-hidden rounded-2xl border-4 border-stone-50 shadow-xl sm:block">
              <div className="relative aspect-square">
                <Image
                  src="/img/site/about-display.jpg"
                  alt="زیورآلات طلا در ویترین سون زر"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-[#b47d27]">داستان ما</span>
            <Title classes="mt-2 text-2xl font-bold leading-9 text-stone-900 md:text-3xl md:leading-[1.5]">
              طلا، انتخاب سلیقه است؛ اعتماد، انتخاب ما
            </Title>
            <div className="mt-4 space-y-3 text-sm leading-8 text-stone-600">
              <p>
                سون زر با این ایده شکل گرفت که خرید زیورآلات طلا باید ساده و
                شفاف باشد. به همین دلیل از ابتدا وزن، عیار و مشخصات هر قطعه را
                کامل نوشتیم و مشاوره صادقانه را جای فروش سریع گذاشتیم.
              </p>
              <p>
                امروز طرح‌های ما شامل گردنبند، دستبند، گوشواره، انگشتر و
                ست‌های هماهنگ است. هر قطعه پیش از ارسال از نظر قفل، پرداخت و
                سالم بودن جعبه بررسی می‌شود.
              </p>
              <p>
                ما باور داریم زیورآلات فقط یک کالا نیستند؛ بخشی از خاطره‌ها
                هستند. برای همین بسته‌بندی کادویی، گواهی اصالت و امکان بازگشت
                تا ۷ روز را برای همه سفارش‌ها در نظر گرفته‌ایم.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-stone-200 bg-white p-4 text-center">
              <div>
                <p className="text-xl font-bold text-[#b47d27]">۱۲+</p>
                <p className="mt-1 text-[10px] text-stone-500">سال تجربه</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#b47d27]">۲٬۴۰۰+</p>
                <p className="mt-1 text-[10px] text-stone-500">سفارش موفق</p>
              </div>
              <div>
                <p className="text-xl font-bold text-[#b47d27]">۱۰۰٪</p>
                <p className="mt-1 text-[10px] text-stone-500">طلای ۱۸ عیار</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6 text-center">
            <span className="text-xs font-semibold text-[#b47d27]">ارزش‌های ما</span>
            <Title classes="mt-1 text-2xl font-bold text-stone-900 md:text-3xl">
              چرا سون زر؟
            </Title>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-stone-200 bg-white p-5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b47d27]/10 text-lg text-[#b47d27]">
                    <Icon aria-hidden />
                  </span>
                  <p className="mt-3 text-sm font-bold text-stone-900">{value.title}</p>
                  <p className="mt-2 text-xs leading-7 text-stone-500">{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid items-center gap-8 rounded-3xl bg-stone-900 p-6 text-white md:p-10 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold text-amber-300">مسیر خرید</span>
            <h2 className="mt-2 text-2xl font-bold leading-9 md:leading-[1.5]">
              از انتخاب تا تحویل، در چهار قدم
            </h2>
            <p className="mt-3 text-sm leading-8 text-stone-300">
              فرآیند خرید ما شفاف است. اگر در هر مرحله سوالی داشتید، کافی است
              تماس بگیرید.
            </p>
            <a
              href={`tel:${siteConfig.phone}`}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#b47d27] px-5 py-3 text-sm font-bold text-white hover:bg-[#a06c1e]"
            >
              <FiPhone aria-hidden />
              <span dir="ltr">{siteConfig.phoneDisplay}</span>
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b47d27] text-[11px] font-bold">
                  {new Intl.NumberFormat("fa-IR").format(index + 1)}
                </span>
                <p className="mt-2 text-sm font-bold">{step.title}</p>
                <p className="mt-1 text-[11px] leading-6 text-stone-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4">
            <FiAward className="mt-1 shrink-0 text-[#b47d27]" aria-hidden />
            <div>
              <p className="text-sm font-bold text-stone-900">گواهی اصالت</p>
              <p className="mt-1 text-[11px] leading-6 text-stone-500">
                همراه هر سفارش، گواهی و فاکتور رسمی ارائه می‌شود.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4">
            <FiCheckCircle className="mt-1 shrink-0 text-[#b47d27]" aria-hidden />
            <div>
              <p className="text-sm font-bold text-stone-900">بررسی پیش از ارسال</p>
              <p className="mt-1 text-[11px] leading-6 text-stone-500">
                قفل، پرداخت و سالم بودن جعبه کنترل می‌شود.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-stone-200 bg-white p-4">
            <FiClock className="mt-1 shrink-0 text-[#b47d27]" aria-hidden />
            <div>
              <p className="text-sm font-bold text-stone-900">پشتیبانی پس از خرید</p>
              <p className="mt-1 text-[11px] leading-6 text-stone-500">
                برای تعویض سایز و نگهداری، در کنار شما هستیم.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-stone-100 p-6 text-center sm:flex-row sm:text-right">
          <div className="flex items-start gap-3">
            <FiMapPin className="mt-1 shrink-0 text-[#b47d27]" aria-hidden />
            <div>
              <p className="text-sm font-bold text-stone-900">گالری سون زر</p>
              <p className="mt-1 text-xs leading-6 text-stone-600">
                {siteConfig.address}
              </p>
              <p className="text-xs text-stone-600">
                {siteConfig.hours} · {siteConfig.closedDay}
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-[#b47d27] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#a06c1e]"
          >
            تماس و مسیریابی
          </Link>
        </div>
      </Container>
    </StoreShell>
  );
}
