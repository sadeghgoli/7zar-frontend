import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FiChevronLeft,
  FiHeart,
  FiMapPin,
  FiPhone,
  FiShield,
  FiStar,
  FiTruck,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import ProductCard from "@/components/custom/products/ProductCard";
import ProductGallery from "@/components/custom/products/ProductGallery";
import ProductPurchasePanel from "@/components/custom/products/ProductPurchasePanel";
import ProductTabs from "@/components/custom/products/ProductTabs";
import {
  formatNumber,
  getCategoryById,
  getProductBySlug,
  getRelatedProducts,
  products,
  siteConfig,
  testimonials,
} from "@/data/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "محصول یافت نشد" };
  return {
    title: product.name,
    description: product.desc,
    openGraph: { images: [product.image] },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryById(product.category);
  const related = getRelatedProducts(product, 4);
  const reviews = testimonials.slice(0, 3);
  const ratingBars = [
    { star: 5, percent: 82 },
    { star: 4, percent: 13 },
    { star: 3, percent: 4 },
    { star: 2, percent: 1 },
    { star: 1, percent: 0 },
  ];

  return (
    <StoreShell>
      <div className="border-b border-stone-200 bg-stone-100">
        <Container classes="py-5">
          <nav className="flex flex-wrap items-center gap-1.5 text-[11px] text-stone-500">
            <Link href="/" className="hover:text-stone-800">
              خانه
            </Link>
            <FiChevronLeft aria-hidden />
            <Link href="/products" className="hover:text-stone-800">
              فروشگاه
            </Link>
            {category && (
              <>
                <FiChevronLeft aria-hidden />
                <Link
                  href={`/products?category=${category.id}`}
                  className="hover:text-stone-800"
                >
                  {category.label}
                </Link>
              </>
            )}
            <FiChevronLeft aria-hidden />
            <span className="text-stone-800">{product.name}</span>
          </nav>
        </Container>
      </div>

      <Container classes="py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <ProductGallery images={product.gallery} name={product.name} />

          <div>
            <div className="flex flex-wrap items-center gap-2">
              {product.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-stone-900 px-3 py-1 text-[10px] text-amber-100"
                >
                  {badge}
                </span>
              ))}
              {category && (
                <Link
                  href={`/products?category=${category.id}`}
                  className="rounded-full bg-[#b47d27]/10 px-3 py-1 text-[10px] font-semibold text-[#8a5e18]"
                >
                  {category.label}
                </Link>
              )}
            </div>

            <h1 className="mt-4 text-2xl font-bold leading-9 text-stone-900 md:text-3xl md:leading-[1.5]">
              {product.name}
            </h1>

            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-stone-500">
              <a href="#reviews" className="flex items-center gap-1">
                <span className="flex items-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < Math.round(product.rating)
                          ? "text-amber-400"
                          : "text-stone-200"
                      }
                      aria-hidden
                    />
                  ))}
                </span>
                <span className="font-semibold text-stone-700">
                  {formatNumber(product.rating)}
                </span>
                <span>({formatNumber(product.reviews)} نظر)</span>
              </a>
              <span className="h-3 w-px bg-stone-300" />
              <span>کد: {product.id}</span>
              <span className="h-3 w-px bg-stone-300" />
              <span className="flex items-center gap-1">
                <FiShield className="text-[#b47d27]" aria-hidden />
                گواهی اصالت
              </span>
            </div>

            <p className="mt-4 text-sm leading-8 text-stone-600">{product.desc}</p>

            <div className="mt-6 border-t border-stone-200 pt-6">
              <ProductPurchasePanel product={product} />
            </div>

            <div className="mt-6 grid gap-3 text-[11px] text-stone-600 sm:grid-cols-2">
              <div className="flex items-start gap-2 rounded-xl border border-stone-200 bg-white p-3">
                <FiTruck className="mt-0.5 shrink-0 text-[#b47d27]" aria-hidden />
                <span>
                  ارسال بیمه‌شده از سبزوار؛ تحویل ۲ تا ۴ روز کاری
                </span>
              </div>
              <div className="flex items-start gap-2 rounded-xl border border-stone-200 bg-white p-3">
                <FiMapPin className="mt-0.5 shrink-0 text-[#b47d27]" aria-hidden />
                <span>امکان تحویل حضوری در گالری سون زر</span>
              </div>
              <div className="flex items-start gap-2 rounded-xl border border-stone-200 bg-white p-3">
                <FiHeart className="mt-0.5 shrink-0 text-[#b47d27]" aria-hidden />
                <span>بسته‌بندی کادویی رایگان برای هدیه</span>
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-start gap-2 rounded-xl border border-[#b47d27]/30 bg-[#b47d27]/5 p-3 text-[#8a5e18]"
              >
                <FiPhone className="mt-0.5 shrink-0" aria-hidden />
                <span>
                  مشاوره خرید: <span dir="ltr">{siteConfig.phoneDisplay}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_300px]">
          <ProductTabs product={product} />

          <aside className="space-y-4">
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <p className="text-sm font-bold text-stone-800">خرید مطمئن از سون زر</p>
              <ul className="mt-3 space-y-3 text-[11px] leading-6 text-stone-600">
                <li className="flex items-start gap-2">
                  <FiShield className="mt-0.5 shrink-0 text-[#b47d27]" aria-hidden />
                  تمام قطعات با طلای ۱۸ عیار و گواهی اصالت ارسال می‌شوند.
                </li>
                <li className="flex items-start gap-2">
                  <FiTruck className="mt-0.5 shrink-0 text-[#b47d27]" aria-hidden />
                  ارسال بیمه‌شده و پیگیری کد رهگیری پس از ارسال.
                </li>
                <li className="flex items-start gap-2">
                  <FiStar className="mt-0.5 shrink-0 text-[#b47d27]" aria-hidden />
                  امکان تعویض سایز تا ۷ روز پس از دریافت.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-stone-900 p-5 text-white">
              <p className="text-sm font-bold">سوالی دارید؟</p>
              <p className="mt-2 text-[11px] leading-6 text-stone-300">
                برای انتخاب سایز، وزن یا ست کردن این قطعه با کارشناس ما صحبت
                کنید.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#b47d27] py-2.5 text-xs font-bold text-white"
              >
                <FiPhone aria-hidden />
                <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </a>
            </div>
          </aside>
        </div>

        <section id="reviews" className="mt-14">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="text-xs font-semibold text-[#b47d27]">نظرات خریداران</span>
              <h2 className="mt-1 text-xl font-bold text-stone-900 md:text-2xl">
                تجربه خرید این محصول
              </h2>
            </div>
            <p className="text-xs text-stone-500">
              میانگین امتیاز {formatNumber(product.rating)} از ۵ ·{" "}
              {formatNumber(product.reviews)} نظر ثبت‌شده
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
            <div className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="text-center">
                <p className="text-4xl font-bold text-stone-900">
                  {formatNumber(product.rating)}
                </p>
                <div className="mt-1 flex justify-center gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} aria-hidden />
                  ))}
                </div>
                <p className="mt-1 text-[11px] text-stone-500">
                  از {formatNumber(product.reviews)} خریدار
                </p>
              </div>
              <div className="mt-5 space-y-2">
                {ratingBars.map((row) => (
                  <div key={row.star} className="flex items-center gap-2 text-[10px]">
                    <span className="w-3 text-stone-500">{row.star}</span>
                    <FiStar className="text-amber-400" aria-hidden />
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-stone-100">
                      <div
                        className="h-full rounded-full bg-amber-400"
                        style={{ width: `${row.percent}%` }}
                      />
                    </div>
                    <span className="w-7 text-left text-stone-400">
                      ٪{formatNumber(row.percent)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {reviews.map((review) => (
                <article
                  key={review.id}
                  className="rounded-2xl border border-stone-200 bg-white p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b47d27]/10 text-xs font-bold text-[#8a5e18]">
                        {review.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-xs font-bold text-stone-800">
                          {review.name}
                        </p>
                        <p className="text-[10px] text-stone-400">
                          {review.city} · {review.date}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FaStar
                          key={index}
                          className={
                            index < review.rating
                              ? "text-amber-400"
                              : "text-stone-200"
                          }
                          aria-hidden
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-7 text-stone-600">{review.text}</p>
                  <span className="mt-3 inline-block rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] text-emerald-700">
                    خرید تأییدشده
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="mt-14">
            <div className="mb-6 flex items-end justify-between gap-3">
              <div>
                <span className="text-xs font-semibold text-[#b47d27]">
                  شاید بپسندید
                </span>
                <h2 className="mt-1 text-xl font-bold text-stone-900 md:text-2xl">
                  محصولات مشابه
                </h2>
              </div>
              <Link
                href={`/products?category=${product.category}`}
                className="text-xs font-semibold text-[#a06c1e] hover:underline"
              >
                مشاهده همه
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </StoreShell>
  );
}
