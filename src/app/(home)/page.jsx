import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiClock,
  FiMapPin,
  FiPhone,
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiHeadphones,
} from "react-icons/fi";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import Title from "@/components/elements/title/Title";
import ProductCard from "@/components/custom/products/ProductCard";
import IndexHeroSection from "@/components/layouts/hero-sections/index/IndexHeroSection";
import {
  articles,
  categories,
  formatNumber,
  getFeaturedProducts,
  getNewProducts,
  getProductsByCategory,
  siteConfig,
  testimonials,
} from "@/data/catalog";

const services = [
  {
    icon: FiShield,
    title: "ضمانت اصالت",
    text: "گواهی طلای ۱۸ عیار همراه هر سفارش",
  },
  {
    icon: FiTruck,
    title: "ارسال بیمه‌شده",
    text: "تحویل امن به سراسر کشور",
  },
  {
    icon: FiRefreshCw,
    title: "۷ روز ضمانت بازگشت",
    text: "خرید بدون نگرانی از سایز و طرح",
  },
  {
    icon: FiHeadphones,
    title: "مشاوره تخصصی",
    text: "راهنمایی انتخاب سایز و ست کردن",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts(8);
  const newProducts = getNewProducts(4);
  const topReviews = testimonials.slice(0, 3);
  const blogPosts = articles.slice(0, 3);

  return (
    <StoreShell>
      <IndexHeroSection />

      <section className="border-b border-stone-200 bg-white py-10">
        <Container classes="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="flex items-start gap-3 rounded-2xl border border-stone-100 bg-stone-50/60 p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b47d27]/10 text-[#b47d27]">
                  <Icon aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-bold text-stone-800">{service.title}</p>
                  <p className="mt-1 text-[11px] leading-5 text-stone-500">
                    {service.text}
                  </p>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <section id="collections" className="py-14">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[#b47d27]">
                خرید بر اساس دسته‌بندی
              </span>
              <Title classes="mt-1 text-2xl font-bold text-stone-900 md:text-3xl">
                از کجا شروع کنیم؟
              </Title>
              <p className="mt-2 text-sm text-stone-500">
                مجموعه‌ای کامل از زیورآلات طلا برای هر سلیقه و هر مناسبت
              </p>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-2 text-sm font-semibold text-[#a06c1e] hover:text-[#7c5314]"
            >
              همه محصولات
              <FiArrowLeft aria-hidden />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => {
              const count = getProductsByCategory(category.id).length;
              return (
                <Link
                  key={category.id}
                  href={`/products?category=${category.id}`}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-stone-200"
                >
                  <Image
                    src={category.image}
                    alt={category.label}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <p className="text-base font-bold">{category.label}</p>
                    <p className="mt-1 line-clamp-2 text-[10px] leading-5 text-stone-300">
                      {category.desc}
                    </p>
                    <p className="mt-2 text-[10px] text-amber-300">
                      {formatNumber(count)} طرح
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-white py-14">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[#b47d27]">
                محبوب‌ترین‌ها
              </span>
              <Title classes="mt-1 text-2xl font-bold text-stone-900 md:text-3xl">
                منتخب ویترین سون زر
              </Title>
              <p className="mt-2 text-sm text-stone-500">
                پرفروش‌ترین طرح‌های این فصل، انتخاب مشتریان ما
              </p>
            </div>
            <Link
              href="/products"
              className="flex items-center gap-2 rounded-xl border border-stone-200 px-4 py-2 text-xs font-semibold text-stone-700 transition hover:border-[#b47d27] hover:text-[#b47d27]"
            >
              مشاهده همه
              <FiArrowLeft aria-hidden />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="grid overflow-hidden rounded-3xl bg-stone-900 text-white lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-[380px]">
              <Image
                src="/img/products/real/set-bridal.jpg"
                alt="نیم‌ست عروس سون زر"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <span className="absolute right-4 top-4 rounded-full bg-rose-600 px-3 py-1 text-[11px] font-bold">
                تا ٪۹ تخفیف
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              <span className="text-xs font-semibold text-amber-300">
                پیشنهاد ویژه عروس
              </span>
              <h2 className="mt-3 text-2xl font-bold leading-9 md:text-3xl md:leading-[1.5]">
                برای روزی که فقط یک بار تکرار می‌شود
              </h2>
              <p className="mt-4 text-sm leading-8 text-stone-300">
                نیم‌ست عروس شامل گردنبند و گوشواره با طرح هماهنگ، در جعبه کادویی
                لوکس و همراه گواهی اصالت. مشاوره انتخاب سایز و ست کردن با لباس
                عروس رایگان است.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/products/set-bridal"
                  className="flex items-center gap-2 rounded-xl bg-[#b47d27] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#a06c1e]"
                >
                  مشاهده نیم‌ست
                  <FiArrowLeft aria-hidden />
                </Link>
                <Link
                  href="/products?category=set"
                  className="rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
                >
                  همه ست‌ها
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-[11px] text-stone-400">
                <span className="flex items-center gap-1.5">
                  <FiShield className="text-amber-400" aria-hidden />
                  گواهی اصالت
                </span>
                <span className="flex items-center gap-1.5">
                  <FiTruck className="text-amber-400" aria-hidden />
                  ارسال بیمه‌شده
                </span>
                <span className="flex items-center gap-1.5">
                  <FiClock className="text-amber-400" aria-hidden />
                  آماده ارسال
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-white py-14">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[#b47d27]">
                به‌تازگی اضافه شده
              </span>
              <Title classes="mt-1 text-2xl font-bold text-stone-900 md:text-3xl">
                تازه‌های سون زر
              </Title>
            </div>
            <Link
              href="/products?sort=newest"
              className="flex items-center gap-2 text-sm font-semibold text-[#a06c1e] hover:text-[#7c5314]"
            >
              جدیدترین‌ها
              <FiArrowLeft aria-hidden />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container classes="grid items-center gap-8 lg:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/img/site/about-store.jpg"
                alt="ویترین گالری سون زر"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden w-40 overflow-hidden rounded-2xl border-4 border-stone-50 shadow-xl sm:block">
              <div className="relative aspect-square">
                <Image
                  src="/img/site/about-display.jpg"
                  alt="زیورآلات طلا در ویترین"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-[#b47d27]">درباره سون زر</span>
            <Title classes="mt-2 text-2xl font-bold leading-9 text-stone-900 md:text-3xl md:leading-[1.5]">
              طلا را با اطمینان انتخاب کنید
            </Title>
            <p className="mt-4 text-sm leading-8 text-stone-600">
              سون زر از یک گالری کوچک در سبزوار شروع شد؛ با این باور که خرید
              زیورآلات باید ساده، شفاف و قابل اعتماد باشد. امروز طرح‌های ما را
              مشتریانی از سراسر کشور انتخاب می‌کنند.
            </p>
            <p className="mt-3 text-sm leading-8 text-stone-600">
              هر قطعه پیش از ارسال بررسی می‌شود، وزن و عیار آن در مشخصات محصول
              ثبت است و همراه گواهی اصالت و جعبه کادویی ارسال می‌شود.
            </p>

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

            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#a06c1e] hover:text-[#7c5314]"
            >
              داستان سون زر را بخوانید
              <FiArrowLeft aria-hidden />
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-stone-200 bg-white py-14">
        <Container>
          <div className="mb-8 text-center">
            <span className="text-xs font-semibold text-[#b47d27]">
              تجربه خرید مشتریان
            </span>
            <Title classes="mt-1 text-2xl font-bold text-stone-900 md:text-3xl">
              آن‌ها از سون زر می‌گویند
            </Title>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {topReviews.map((review) => (
              <figure
                key={review.id}
                className="relative rounded-2xl border border-stone-200 bg-stone-50/60 p-5"
              >
                <FaQuoteRight className="absolute left-5 top-5 text-lg text-stone-200" aria-hidden />
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar
                      key={index}
                      className={index < review.rating ? "text-amber-400" : "text-stone-200"}
                      aria-hidden
                    />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-7 text-stone-600">
                  {review.text}
                </blockquote>
                <figcaption className="mt-4 flex items-center justify-between border-t border-stone-200 pt-3 text-xs">
                  <span className="font-bold text-stone-800">{review.name}</span>
                  <span className="text-stone-400">
                    {review.city} · {review.date}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14">
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[#b47d27]">مجله طلا</span>
              <Title classes="mt-1 text-2xl font-bold text-stone-900 md:text-3xl">
                بخوانید و آگاهانه بخرید
              </Title>
            </div>
            <Link
              href="/blog"
              className="flex items-center gap-2 text-sm font-semibold text-[#a06c1e] hover:text-[#7c5314]"
            >
              همه مقالات
              <FiArrowLeft aria-hidden />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {blogPosts.map((article) => (
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
                    <span>{article.readTime} مطالعه</span>
                  </div>
                  <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-7 text-stone-800 group-hover:text-[#b47d27]">
                    {article.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-6 text-stone-500">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-stone-950 py-14 text-white">
        <Container classes="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="text-xs font-semibold text-amber-300">
              مشاوره خرید رایگان
            </span>
            <Title classes="mt-2 text-2xl font-bold leading-9 md:text-3xl md:leading-[1.5]">
              مطمئن نیستید کدام طرح مناسب شماست؟
            </Title>
            <p className="mt-4 max-w-xl text-sm leading-8 text-stone-300">
              کارشناسان سون زر در انتخاب سایز، ست کردن قطعات و انتخاب هدیه کنار
              شما هستند. کافی است تماس بگیرید یا پیام بدهید.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 rounded-xl bg-[#b47d27] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#a06c1e]"
              >
                <FiPhone aria-hidden />
                <span dir="ltr">{siteConfig.phoneDisplay}</span>
              </a>
              <Link
                href="/contact"
                className="rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-300 hover:text-amber-200"
              >
                تماس با ما
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm">
            <div className="flex items-start gap-3 border-b border-white/10 pb-4">
              <FiMapPin className="mt-1 shrink-0 text-amber-400" aria-hidden />
              <div>
                <p className="font-semibold text-white">آدرس گالری</p>
                <p className="mt-1 text-xs leading-6 text-stone-300">
                  {siteConfig.address}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-b border-white/10 py-4">
              <FiClock className="mt-1 shrink-0 text-amber-400" aria-hidden />
              <div>
                <p className="font-semibold text-white">ساعات کاری</p>
                <p className="mt-1 text-xs leading-6 text-stone-300">
                  {siteConfig.hours} · {siteConfig.closedDay}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 pt-4">
              <FiShield className="mt-1 shrink-0 text-amber-400" aria-hidden />
              <div>
                <p className="font-semibold text-white">خرید با اطمینان</p>
                <p className="mt-1 text-xs leading-6 text-stone-300">
                  ضمانت اصالت، فاکتور رسمی و امکان بازگشت تا ۷ روز
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </StoreShell>
  );
}
