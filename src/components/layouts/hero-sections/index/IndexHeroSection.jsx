import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiPhone,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import Container from "@/components/elements/container/Container";
import { siteConfig } from "@/data/catalog";

const highlights = [
  "طلای ۱۸ عیار با گواهی اصالت",
  "ارسال بیمه‌شده به سراسر کشور",
  "بسته‌بندی کادویی رایگان",
];

export default function IndexHeroSection() {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      <div className="absolute inset-0">
        <Image
          src="/img/site/hero-model.jpg"
          alt="مدل زیورآلات طلای سون زر"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-stone-950 via-stone-950/80 to-stone-950/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/30" />
      </div>

      <Container classes="relative py-16 md:py-24 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-[11px] font-medium text-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
            کلکسیون پاییز ۱۴۰۵ · طرح‌های محدود
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-[1.35] md:text-5xl md:leading-[1.3]">
            درخششی که
            <span className="gold-text"> ماندگار </span>
            است
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-8 text-stone-300 md:text-base md:leading-9">
            گردنبند، دستبند، گوشواره و ست‌های طلای ۱۸ عیار؛ طراحی‌شده برای
            لحظه‌های روزمره و روزهای خاص. با ضمانت اصالت و مشاوره تخصصی انتخاب
            کنید.
          </p>

          <ul className="mt-6 space-y-2 text-xs text-stone-300 md:text-sm">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <FiCheckCircle className="text-amber-400" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="flex items-center gap-2 rounded-xl bg-[#b47d27] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#a06c1e]"
            >
              مشاهده محصولات
              <FiArrowLeft aria-hidden />
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              <FiPhone aria-hidden />
              مشاوره خرید
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
            <div>
              <p className="text-xl font-bold text-amber-300 md:text-2xl">۱۸</p>
              <p className="mt-1 text-[10px] text-stone-400 md:text-xs">عیار طلا</p>
            </div>
            <div>
              <p className="text-xl font-bold text-amber-300 md:text-2xl">۲٬۴۰۰+</p>
              <p className="mt-1 text-[10px] text-stone-400 md:text-xs">سفارش موفق</p>
            </div>
            <div>
              <p className="text-xl font-bold text-amber-300 md:text-2xl">۷ روز</p>
              <p className="mt-1 text-[10px] text-stone-400 md:text-xs">ضمانت بازگشت</p>
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-8 left-8 hidden w-44 overflow-hidden rounded-2xl border border-white/20 shadow-2xl lg:block">
        <div className="relative aspect-square">
          <Image
            src="/img/site/hero-neck.jpg"
            alt="گردنبند طلا روی مدل"
            fill
            sizes="180px"
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-2 bg-white/95 px-3 py-2 text-[10px] font-semibold text-stone-800">
          <FiShield className="text-[#b47d27]" aria-hidden />
          گواهی اصالت همراه سفارش
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-stone-900/80">
        <Container classes="grid grid-cols-2 gap-4 py-4 text-[11px] text-stone-300 md:grid-cols-4 md:text-xs">
          <span className="flex items-center justify-center gap-2">
            <FiShield className="text-amber-400" aria-hidden />
            ضمانت اصالت طلا
          </span>
          <span className="flex items-center justify-center gap-2">
            <FiTruck className="text-amber-400" aria-hidden />
            ارسال بیمه‌شده
          </span>
          <span className="flex items-center justify-center gap-2">
            <FiPhone className="text-amber-400" aria-hidden />
            پشتیبانی تلفنی
          </span>
          <span className="flex items-center justify-center gap-2">
            <FiCheckCircle className="text-amber-400" aria-hidden />
            بسته‌بندی کادویی
          </span>
        </Container>
      </div>
    </section>
  );
}
