import Link from "next/link";
import {
  FiClock,
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiMessageCircle,
} from "react-icons/fi";
import Container from "@/components/elements/container/Container";
import { categories, siteConfig } from "@/data/catalog";

export default function StoreFooter() {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-stone-950 text-stone-300">
      <Container classes="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10 text-lg font-bold text-amber-300">
              س
            </span>
            <div>
              <p className="text-lg font-bold text-white">{siteConfig.name}</p>
              <p className="text-[11px] text-stone-400">{siteConfig.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-7 text-stone-400">
            گالری طلای سون زر، مجموعه‌ای از زیورآلات ۱۸ عیار با طراحی روز،
            ضمانت اصالت و ارسال بیمه‌شده. انتخاب شما، همراه لحظه‌های خاص.
          </p>
          <div className="mt-5 flex gap-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition hover:border-amber-400 hover:text-amber-300"
              aria-label="تماس تلفنی"
            >
              <FiPhone />
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition hover:border-amber-400 hover:text-amber-300"
              aria-label="واتساپ"
            >
              <FiMessageCircle />
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-stone-700 text-stone-300 transition hover:border-amber-400 hover:text-amber-300"
              aria-label="اینستاگرام"
            >
              <FiInstagram />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">دسته‌بندی محصولات</p>
          <ul className="space-y-2.5 text-sm">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/products?category=${category.id}`}
                  className="text-stone-400 transition hover:text-amber-300"
                >
                  {category.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/products?sale=1"
                className="text-rose-300 transition hover:text-rose-200"
              >
                پیشنهاد ویژه و تخفیف‌دار
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">راهنمای خرید</p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/guide" className="text-stone-400 hover:text-amber-300">
                نحوه ثبت سفارش
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-stone-400 hover:text-amber-300">
                سوالات متداول
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-stone-400 hover:text-amber-300">
                مجله طلا و زیورآلات
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-stone-400 hover:text-amber-300">
                درباره سون زر
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-stone-400 hover:text-amber-300">
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">ارتباط با گالری</p>
          <ul className="space-y-3 text-sm text-stone-400">
            <li>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 transition hover:text-amber-300"
              >
                <FiPhone className="shrink-0 text-amber-400" aria-hidden />
                <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </a>
            </li>
            <li className="flex items-start gap-2 leading-7">
              <FiMapPin className="mt-1 shrink-0 text-amber-400" aria-hidden />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-2">
              <FiClock className="shrink-0 text-amber-400" aria-hidden />
              {siteConfig.hours}
            </li>
          </ul>
          <div className="mt-5 grid gap-2 rounded-2xl border border-stone-800 p-3 text-[11px] text-stone-400">
            <span className="flex items-center gap-2">
              <FiShield className="text-amber-400" aria-hidden />
              ضمانت اصالت و گواهی طلا
            </span>
            <span className="flex items-center gap-2">
              <FiTruck className="text-amber-400" aria-hidden />
              ارسال بیمه‌شده به سراسر کشور
            </span>
            <span className="flex items-center gap-2">
              <FiRefreshCw className="text-amber-400" aria-hidden />
              بازگشت تا ۷ روز
            </span>
          </div>
        </div>
      </Container>

      <div className="border-t border-stone-800">
        <Container classes="flex flex-col items-center justify-between gap-2 py-4 text-center text-[11px] text-stone-500 sm:flex-row sm:text-right">
          <p>© {new Date().getFullYear()} {siteConfig.fullName} — تمامی حقوق محفوظ است.</p>
          <p>
            پرداخت آنلاین:{" "}
            <span className="text-amber-400">درگاه بانکی به‌زودی متصل می‌شود</span>
          </p>
        </Container>
      </div>
    </footer>
  );
}
