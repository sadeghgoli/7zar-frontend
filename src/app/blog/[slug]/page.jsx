import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiArrowLeft,
  FiClock,
  FiMapPin,
  FiPhone,
  FiShield,
} from "react-icons/fi";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import {
  articles,
  formatToman,
  getArticleBySlug,
  getProductBySlug,
  siteConfig,
} from "@/data/catalog";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "مقاله یافت نشد" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { images: [article.image] },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = articles.filter((item) => item.slug !== article.slug).slice(0, 3);
  const product = getProductBySlug("gardanband-zanjir-classic");

  return (
    <StoreShell>
      <div className="border-b border-stone-200 bg-stone-100">
        <Container classes="py-8">
          <nav className="flex flex-wrap items-center gap-1.5 text-[11px] text-stone-500">
            <Link href="/" className="hover:text-stone-800">
              خانه
            </Link>
            <FiArrowLeft aria-hidden />
            <Link href="/blog" className="hover:text-stone-800">
              مجله طلا
            </Link>
            <FiArrowLeft aria-hidden />
            <span className="text-stone-800">{article.category}</span>
          </nav>
        </Container>
      </div>

      <Container classes="py-10">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px]">
          <article className="overflow-hidden rounded-3xl border border-stone-200 bg-white">
            <div className="relative aspect-[16/9]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
            </div>
            <div className="p-5 md:p-8">
              <div className="flex flex-wrap items-center gap-2 text-[10px] text-stone-500">
                <span className="rounded-full bg-[#b47d27]/10 px-2.5 py-1 font-semibold text-[#a06c1e]">
                  {article.category}
                </span>
                <span>{article.date}</span>
                <span className="flex items-center gap-1">
                  <FiClock aria-hidden />
                  {article.readTime} مطالعه
                </span>
              </div>

              <h1 className="mt-3 text-xl font-bold leading-9 text-stone-900 md:text-2xl md:leading-[1.7]">
                {article.title}
              </h1>
              <p className="mt-3 border-r-2 border-[#b47d27] pr-3 text-sm leading-8 text-stone-600">
                {article.excerpt}
              </p>

              <div className="mt-6 space-y-4 text-sm leading-8 text-stone-700">
                {article.content.map((paragraph, index) => (
                  <p key={`${article.slug}-p-${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-stone-200 pt-5 text-[10px] text-stone-500">
                <span>موضوعات:</span>
                <span className="rounded-full bg-stone-100 px-2.5 py-1">
                  {article.category}
                </span>
                <span className="rounded-full bg-stone-100 px-2.5 py-1">
                  زیورآلات طلا
                </span>
                <span className="rounded-full bg-stone-100 px-2.5 py-1">
                  طلای ۱۸ عیار
                </span>
              </div>
            </div>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-32">
            {product && (
              <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
                <div className="border-b border-stone-100 bg-stone-50 px-4 py-3 text-xs font-bold text-stone-800">
                  پیشنهاد سون زر
                </div>
                <Link href={`/products/${product.slug}`} className="block p-4">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="280px"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-3 line-clamp-2 text-xs font-bold text-stone-800">
                    {product.name}
                  </p>
                  <p className="mt-1 text-sm font-bold text-stone-900">
                    {formatToman(product.priceToman)}
                    <span className="mr-1 text-[10px] font-medium text-stone-500">
                      تومان
                    </span>
                  </p>
                  <span className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-[#b47d27] py-2 text-[11px] font-bold text-white">
                    مشاهده محصول
                    <FiArrowLeft aria-hidden />
                  </span>
                </Link>
              </div>
            )}

            <div className="rounded-2xl bg-stone-900 p-5 text-white">
              <p className="flex items-center gap-2 text-sm font-bold">
                <FiShield className="text-amber-400" aria-hidden />
                مشاوره خرید
              </p>
              <p className="mt-2 text-[11px] leading-6 text-stone-300">
                برای انتخاب سایز و طرح مناسب، با کارشناسان ما صحبت کنید.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#b47d27] py-2.5 text-xs font-bold text-white"
              >
                <FiPhone aria-hidden />
                <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </a>
              <p className="mt-3 flex items-start gap-1.5 text-[10px] leading-5 text-stone-400">
                <FiMapPin className="mt-0.5 shrink-0 text-amber-400" aria-hidden />
                {siteConfig.address}
              </p>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-4">
              <p className="text-xs font-bold text-stone-800">مقالات مرتبط</p>
              <ul className="mt-3 space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="group flex gap-2"
                    >
                      <span className="relative h-14 w-16 shrink-0 overflow-hidden rounded-lg bg-stone-100">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </span>
                      <span className="line-clamp-2 text-[11px] leading-6 text-stone-600 group-hover:text-[#b47d27]">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </StoreShell>
  );
}
