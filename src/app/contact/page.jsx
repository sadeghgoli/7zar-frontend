import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiClock,
  FiExternalLink,
  FiMapPin,
  FiMessageCircle,
  FiPhone,
  FiShield,
  FiTruck,
} from "react-icons/fi";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import ContactForm from "@/components/custom/contact/ContactForm";
import { siteConfig } from "@/data/catalog";

export const metadata = {
  title: "تماس با ما",
  description:
    "راه‌های ارتباط با گالری سون زر؛ شماره تماس، آدرس، واتساپ و ساعات کاری.",
};

const infoCards = [
  {
    icon: FiPhone,
    title: "تماس تلفنی",
    lines: [siteConfig.phoneDisplay, siteConfig.hoursShort],
    href: `tel:${siteConfig.phone}`,
    action: "تماس بگیرید",
  },
  {
    icon: FiMessageCircle,
    title: "واتساپ",
    lines: ["ارسال پیام و عکس", "پاسخ در ساعات کاری"],
    href: `https://wa.me/${siteConfig.whatsapp}`,
    action: "شروع گفتگو",
    external: true,
  },
  {
    icon: FiMapPin,
    title: "آدرس گالری",
    lines: [siteConfig.address],
    href: siteConfig.mapUrl,
    action: "مسیریابی",
    external: true,
  },
  {
    icon: FiClock,
    title: "ساعات کاری",
    lines: [siteConfig.hours, siteConfig.closedDay],
  },
];

export default function ContactPage() {
  return (
    <StoreShell>
      <div className="border-b border-stone-200 bg-stone-100">
        <Container classes="py-10">
          <nav className="mb-4 flex items-center gap-1.5 text-[11px] text-stone-500">
            <Link href="/" className="hover:text-stone-800">
              خانه
            </Link>
            <FiArrowLeft aria-hidden />
            <span className="text-stone-800">تماس با ما</span>
          </nav>
          <h1 className="text-2xl font-bold text-stone-900 md:text-3xl">
            تماس با سون زر
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-600">
            برای مشاوره انتخاب طرح، هماهنگی سایز، پیگیری سفارش یا خرید حضوری با
            ما در ارتباط باشید. پاسخگویی در ساعات کاری، از طریق تماس و واتساپ
            انجام می‌شود.
          </p>
        </Container>
      </div>

      <Container classes="py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#b47d27]/10 text-lg text-[#b47d27]">
                  <Icon aria-hidden />
                </span>
                <p className="mt-3 text-sm font-bold text-stone-900">{card.title}</p>
                <div className="mt-2 flex-1 space-y-1 text-xs leading-6 text-stone-600">
                  {card.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                {card.href && (
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noreferrer" : undefined}
                    className="mt-4 flex items-center gap-1.5 text-[11px] font-semibold text-[#a06c1e] hover:underline"
                  >
                    {card.action}
                    {card.external ? <FiExternalLink aria-hidden /> : <FiArrowLeft aria-hidden />}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_400px]">
          <ContactForm />

          <div className="space-y-5">
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/img/site/about-store.jpg"
                  alt="ویترین گالری سون زر"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#b47d27] text-xl text-white shadow-lg ring-4 ring-white/40">
                  <FiMapPin aria-hidden />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <p className="text-sm font-bold">گالری سون زر</p>
                  <p className="mt-1 text-[11px] leading-6 text-stone-200">
                    {siteConfig.address}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <a
                  href={siteConfig.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-stone-200 py-2.5 text-xs font-semibold text-stone-700 transition hover:border-[#b47d27] hover:text-[#b47d27]"
                >
                  <FiExternalLink aria-hidden />
                  مشاهده مسیر روی نقشه
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <p className="text-sm font-bold text-stone-900">خرید حضوری</p>
              <p className="mt-2 text-xs leading-7 text-stone-600">
                برای مشاهده حضوری طرح‌ها و انتخاب سایز، قبل از مراجعه تماس بگیرید
                تا قطعات مورد نظر شما آماده باشد.
              </p>
              <ul className="mt-3 space-y-2 text-[11px] text-stone-600">
                <li className="flex items-center gap-2">
                  <FiShield className="text-[#b47d27]" aria-hidden />
                  بررسی و تحویل حضوری با فاکتور رسمی
                </li>
                <li className="flex items-center gap-2">
                  <FiTruck className="text-[#b47d27]" aria-hidden />
                  ارسال از سبزوار به سراسر کشور
                </li>
                <li className="flex items-center gap-2">
                  <FiPhone className="text-[#b47d27]" aria-hidden />
                  هماهنگی مراجعه: <span dir="ltr">{siteConfig.phoneDisplay}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 rounded-2xl bg-stone-900 p-6 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-base font-bold">قبل از تماس، شاید پاسخ سوال‌تان اینجا باشد</p>
            <p className="mt-2 text-xs leading-6 text-stone-300">
              سوالات متداول درباره ارسال، سایز، ضمانت و نحوه پرداخت را ببینید یا
              راهنمای خرید را مطالعه کنید.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/faq"
              className="rounded-xl bg-[#b47d27] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#a06c1e]"
            >
              سوالات متداول
            </Link>
            <Link
              href="/guide"
              className="rounded-xl border border-white/25 px-5 py-2.5 text-xs font-semibold text-white hover:border-amber-300 hover:text-amber-200"
            >
              راهنمای خرید
            </Link>
          </div>
        </div>
      </Container>
    </StoreShell>
  );
}
