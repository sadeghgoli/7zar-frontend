import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiClock,
  FiBookOpen,
  FiPhone,
  FiShield,
} from "react-icons/fi";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import Title from "@/components/elements/title/Title";
import { articles, siteConfig } from "@/data/catalog";

export const metadata = {
  title: "مجله طلا",
  description:
    "مقالات آموزشی درباره خرید، سایزبندی، نگهداری و ست کردن زیورآلات طلای ۱۸ عیار.",
};

export default function BlogPage() {
  const [featured, ...rest] = articles;

  return (
    <StoreShell>
      <div className="border-b border-stone-200 bg-stone-100">
        <Container classes="py-10">
          <nav className="mb-4 flex items-center gap-1.5 text-[11px] text-stone-500">
            <Link href="/" className="hover:text-stone-800">
              خانه
            </Link>
            <FiArrowLeft aria-hidden />
            <span className="text-stone-800">مجله طلا</span>
          </nav>
          <h1 className="text-2xl font-bold text-stone-900 md:text-3xl">مجله طلا</h1>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-600">
            راهنماهای کاربردی برای انتخاب هوشمندانه، نگهداری درست و ست کردن
            زیورآلات طلا.
          </p>
        </Container>
      </div>

      <Container classes="py-10">
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid overflow-hidden rounded-3xl border border-stone-200 bg-white lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[320px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute right-4 top-4 rounded-full bg-stone-900/90 px-3 py-1 text-[10px] text-amber-100">
              مقاله ویژه
            </span>
          </div>
          <div className="flex flex-col justify-center p-6 md:p-9">
            <div className="flex flex-wrap items-center gap-2 text-[10px] text-stone-500">
              <span className="rounded-full bg-[#b47d27]/10 px-2.5 py-1 font-semibold text-[#a06c1e]">
                {featured.category}
              </span>
              <span>{featured.date}</span>
              <span className="flex items-center gap-1">
                <FiClock aria-hidden />
                {featured.readTime}
              </span>
            </div>
            <Title classes="mt-3 text-xl font-bold leading-9 text-stone-900 md:text-2xl md:leading-[1.6] group-hover:text-[#b47d27]">
              {featured.title}
            </Title>
            <p className="mt-3 text-sm leading-8 text-stone-600">{featured.excerpt}</p>
            <span className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#a06c1e]">
              مطالعه مقاله
              <FiArrowLeft aria-hidden />
            </span>
          </div>
        </Link>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-[10px] text-stone-500">
                  <span className="rounded-full bg-[#b47d27]/10 px-2 py-0.5 text-[#a06c1e]">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock aria-hidden />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="mt-2 line-clamp-2 text-sm font-bold leading-7 text-stone-800 group-hover:text-[#b47d27]">
                  {article.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-xs leading-6 text-stone-500">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-5 rounded-3xl bg-stone-900 p-6 text-white md:grid-cols-[1fr_auto] md:p-8">
          <div className="flex items-start gap-3">
            <FiBookOpen className="mt-1 shrink-0 text-amber-400" aria-hidden />
            <div>
              <p className="text-base font-bold">سوالی درباره خرید طلا دارید؟</p>
              <p className="mt-2 text-xs leading-7 text-stone-300">
                کارشناسان سون زر آماده راهنمایی درباره عیار، سایز، وزن و نگهداری
                زیورآلات هستند.
              </p>
              <p className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-stone-400">
                <span className="flex items-center gap-1.5">
                  <FiPhone className="text-amber-400" aria-hidden />
                  <span dir="ltr">{siteConfig.phoneDisplay}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <FiShield className="text-amber-400" aria-hidden />
                  مشاوره خرید رایگان
                </span>
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-[#b47d27] px-5 py-3 text-xs font-bold text-white hover:bg-[#a06c1e]"
          >
            تماس با کارشناس
          </Link>
        </div>
      </Container>
    </StoreShell>
  );
}
