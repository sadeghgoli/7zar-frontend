import Link from "next/link";
import {
  FiArrowLeft,
  FiClock,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiShield,
} from "react-icons/fi";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import FaqAccordion from "@/components/custom/faq/FaqAccordion";
import { siteConfig } from "@/data/catalog";

export const metadata = {
  title: "سوالات متداول",
  description:
    "پاسخ سوالات پرتکرار درباره عیار طلا، ارسال، پرداخت، سایز، ضمانت اصالت و بازگشت کالا در سون زر.",
};

const faqs = [
  {
    q: "عیار زیورآلات سون زر چقدر است؟",
    a: "تمامی طرح‌های ویترین با طلای ۱۸ عیار (۷۵۰) عرضه می‌شوند، مگر آنکه در توضیحات محصول ذکر دیگری آمده باشد. وزن و عیار هر قطعه در بخش مشخصات همان محصول نوشته شده است.",
  },
  {
    q: "چگونه سفارش ثبت کنم؟",
    a: "محصول را انتخاب کنید، سایز یا طول مناسب را بزنید و «افزودن به سبد خرید» را انتخاب کنید. سپس از صفحه سبد خرید، اطلاعات تحویل و آدرس را وارد کنید و سفارش را ثبت کنید. کارشناس ما برای تأیید نهایی تماس می‌گیرد.",
  },
  {
    q: "آیا پرداخت آنلاین فعال است؟",
    a: "در حال حاضر درگاه پرداخت آنلاین فروشگاه متصل نشده است. پس از ثبت سفارش، کارشناس سون زر برای هماهنگی روش پرداخت (کارت به کارت یا حضوری) با شما تماس می‌گیرد. هیچ تراکنشی بدون تأیید شما انجام نمی‌شود.",
  },
  {
    q: "هزینه و زمان ارسال چقدر است؟",
    a: "ارسال با پست پیشتاز بیمه‌شده انجام می‌شود. برای سفارش‌های بالای ۲۰ میلیون تومان ارسال رایگان است؛ در غیر این صورت هزینه ارسال در صفحه تکمیل سفارش نمایش داده می‌شود. زمان تحویل معمولاً ۲ تا ۴ روز کاری است.",
  },
  {
    q: "امکان تحویل حضوری وجود دارد؟",
    a: "بله. می‌توانید پس از هماهنگی تلفنی، سفارش خود را در گالری سون زر به نشانی خراسان رضوی، سبزوار، بیهق، بیهق ۲۴ تحویل بگیرید.",
  },
  {
    q: "اگر سایز انگشتر یا دستبند مناسب نبود چه کنم؟",
    a: "تا ۷ روز پس از دریافت، در صورت سالم بودن قطعه و جعبه، امکان تعویض سایز وجود دارد. برای هماهنگی با شماره پشتیبانی تماس بگیرید. بهتر است پیش از خرید، جدول سایز در صفحه راهنمای خرید را ببینید.",
  },
  {
    q: "اصالت طلا چگونه تضمین می‌شود؟",
    a: "هر قطعه همراه گواهی اصالت و فاکتور رسمی ارسال می‌شود. عیار و وزن در مشخصات محصول ثبت شده است. در صورت تمایل، می‌توانید پیش از ارسال، تصویر گواهی را از پشتیبانی دریافت کنید.",
  },
  {
    q: "بسته‌بندی هدیه انجام می‌شود؟",
    a: "بله. همه سفارش‌ها با جعبه مخملی و بسته‌بندی کادویی رایگان ارسال می‌شوند. اگر پیام یا کارت هدیه می‌خواهید، در توضیحات سفارش بنویسید.",
  },
  {
    q: "آیا قطعات گارانتی یا خدمات تعمیر دارند؟",
    a: "قطعات از نظر اصالت و سالم بودن قفل پیش از ارسال بررسی می‌شوند. برای تعمیرات جزئی مانند تنظیم سایز یا تعویض قفل، پس از خرید با گالری تماس بگیرید تا هزینه و زمان اعلام شود.",
  },
  {
    q: "چطور از طلا نگهداری کنم؟",
    a: "زیورآلات را جدا از هم، دور از رطوبت و مواد شیمیایی نگه دارید. عطر و اسپری را قبل از انداختن استفاده کنید. برای تمیز کردن از پارچه نرم و صابون ملایم کمک بگیرید و سالی یک بار قفل‌ها را بررسی کنید.",
  },
];

export default function FaqPage() {
  return (
    <StoreShell>
      <div className="border-b border-stone-200 bg-stone-100">
        <Container classes="py-10">
          <nav className="mb-4 flex items-center gap-1.5 text-[11px] text-stone-500">
            <Link href="/" className="hover:text-stone-800">
              خانه
            </Link>
            <FiArrowLeft aria-hidden />
            <span className="text-stone-800">سوالات متداول</span>
          </nav>
          <h1 className="text-2xl font-bold text-stone-900 md:text-3xl">سوالات متداول</h1>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-600">
            پاسخ پرتکرارترین سوال‌های مشتریان درباره خرید، ارسال، پرداخت و نگهداری
            زیورآلات طلا.
          </p>
        </Container>
      </div>

      <Container classes="max-w-3xl py-10">
        <FaqAccordion items={faqs} />

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className="rounded-2xl border border-stone-200 bg-white p-4 text-center transition hover:border-[#b47d27]"
          >
            <FiPhone className="mx-auto text-lg text-[#b47d27]" aria-hidden />
            <p className="mt-2 text-xs font-bold text-stone-800">تماس تلفنی</p>
            <p className="mt-1 text-[11px] text-stone-500" dir="ltr">
              {siteConfig.phoneDisplay}
            </p>
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-stone-200 bg-white p-4 text-center transition hover:border-[#b47d27]"
          >
            <FiMessageCircle className="mx-auto text-lg text-[#b47d27]" aria-hidden />
            <p className="mt-2 text-xs font-bold text-stone-800">واتساپ</p>
            <p className="mt-1 text-[11px] text-stone-500">ارسال پیام و عکس</p>
          </a>
          <Link
            href="/contact"
            className="rounded-2xl border border-stone-200 bg-white p-4 text-center transition hover:border-[#b47d27]"
          >
            <FiMapPin className="mx-auto text-lg text-[#b47d27]" aria-hidden />
            <p className="mt-2 text-xs font-bold text-stone-800">آدرس و مسیر</p>
            <p className="mt-1 text-[11px] text-stone-500">سبزوار، بیهق ۲۴</p>
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-stone-900 p-6 text-center text-white sm:flex-row sm:text-right">
          <div className="flex items-start gap-3">
            <FiShield className="mt-1 shrink-0 text-amber-400" aria-hidden />
            <div>
              <p className="text-sm font-bold">پاسخ سوال خود را پیدا نکردید؟</p>
              <p className="mt-1 text-[11px] leading-6 text-stone-300">
                {siteConfig.hours} · {siteConfig.closedDay}
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-[#b47d27] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#a06c1e]"
          >
            ارسال پیام
          </Link>
        </div>

        <p className="mt-6 flex items-center justify-center gap-1.5 text-[10px] text-stone-400">
          <FiClock aria-hidden />
          پاسخگویی: {siteConfig.hours}
        </p>
      </Container>
    </StoreShell>
  );
}
