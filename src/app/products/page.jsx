import Link from "next/link";
import {
  FiChevronLeft,
  FiFilter,
  FiPhone,
  FiSearch,
  FiTag,
  FiX,
} from "react-icons/fi";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import ProductCard from "@/components/custom/products/ProductCard";
import ProductSort from "@/components/custom/products/ProductSort";
import {
  categories,
  formatNumber,
  getCategoryById,
  products,
  siteConfig,
} from "@/data/catalog";

export const metadata = {
  title: "فروشگاه زیورآلات طلا",
  description:
    "خرید گردنبند، دستبند، گوشواره، انگشتر و ست طلای ۱۸ عیار با ضمانت اصالت و ارسال بیمه‌شده.",
};

const priceRanges = [
  { value: "under-25", label: "زیر ۲۵ میلیون تومان" },
  { value: "25-40", label: "۲۵ تا ۴۰ میلیون تومان" },
  { value: "over-40", label: "بالای ۴۰ میلیون تومان" },
];

const normalize = (value = "") =>
  value
    .toString()
    .toLowerCase()
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/‌/g, " ")
    .trim();

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const q = params?.q?.toString() || "";
  const categoryId = params?.category?.toString() || "";
  const sale = params?.sale?.toString() || "";
  const price = params?.price?.toString() || "";
  const sort = params?.sort?.toString() || "featured";

  const category = getCategoryById(categoryId);

  const current = { q, category: categoryId, sale, price, sort };

  const buildHref = (overrides = {}) => {
    const next = { ...current, ...overrides };
    const search = new URLSearchParams();
    Object.entries(next).forEach(([key, value]) => {
      if (value && !(key === "sort" && value === "featured")) {
        search.set(key, value);
      }
    });
    const query = search.toString();
    return query ? `/products?${query}` : "/products";
  };

  const normalizedQuery = normalize(q);

  let filtered = products.filter((product) => {
    if (categoryId && product.category !== categoryId) return false;
    if (sale && !product.oldPriceToman) return false;
    if (price === "under-25" && product.priceToman >= 25_000_000) return false;
    if (
      price === "25-40" &&
      (product.priceToman < 25_000_000 || product.priceToman >= 40_000_000)
    )
      return false;
    if (price === "over-40" && product.priceToman < 40_000_000) return false;

    if (normalizedQuery) {
      const categoryLabel = getCategoryById(product.category)?.label || "";
      const haystack = normalize(
        [
          product.name,
          product.desc,
          product.description,
          categoryLabel,
          ...product.specs.map((spec) => `${spec.label} ${spec.value}`),
        ].join(" ")
      );
      if (!haystack.includes(normalizedQuery)) return false;
    }
    return true;
  });

  filtered = [...filtered].sort((a, b) => {
    if (sort === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
    if (sort === "price-asc") return a.priceToman - b.priceToman;
    if (sort === "price-desc") return b.priceToman - a.priceToman;
    if (sort === "rating") return b.rating - a.rating;
    return Number(b.featured) - Number(a.featured) || b.rating - a.rating;
  });

  const title = normalizedQuery
    ? `نتایج جستجو برای «${q}»`
    : sale
      ? "پیشنهاد ویژه و تخفیف‌دار"
      : category
        ? category.label
        : "همه محصولات";

  const subtitle = normalizedQuery
    ? `${formatNumber(filtered.length)} محصول مطابق با جستجوی شما`
    : sale
      ? "طرح‌های منتخب با تخفیف محدود؛ تا پایان موجودی"
      : category
        ? category.desc
        : "مجموعه کامل زیورآلات طلای ۱۸ عیار سون زر";

  const activeFilters = [];
  if (normalizedQuery)
    activeFilters.push({
      label: `جستجو: ${q}`,
      href: buildHref({ q: "" }),
    });
  if (category)
    activeFilters.push({
      label: category.label,
      href: buildHref({ category: "" }),
    });
  if (sale)
    activeFilters.push({
      label: "تخفیف‌دار",
      href: buildHref({ sale: "" }),
    });
  if (price) {
    const range = priceRanges.find((item) => item.value === price);
    activeFilters.push({
      label: range?.label || price,
      href: buildHref({ price: "" }),
    });
  }

  return (
    <StoreShell>
      <div className="border-b border-stone-200 bg-stone-100">
        <Container classes="py-10">
          <nav className="mb-4 flex items-center gap-1.5 text-[11px] text-stone-500">
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
                <span className="text-stone-800">{category.label}</span>
              </>
            )}
          </nav>
          <h1 className="text-2xl font-bold text-stone-900 md:text-3xl">{title}</h1>
          <p className="mt-2 text-sm text-stone-600">{subtitle}</p>
        </Container>
      </div>

      <Container classes="grid gap-8 py-10 lg:grid-cols-[250px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-32 space-y-5">
            <div className="rounded-2xl border border-stone-200 bg-white p-4">
              <p className="mb-3 flex items-center gap-2 text-sm font-bold text-stone-800">
                <FiFilter className="text-[#b47d27]" aria-hidden />
                دسته‌بندی
              </p>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link
                    href={buildHref({ category: "" })}
                    className={`flex items-center justify-between rounded-lg px-3 py-2 transition ${
                      !categoryId
                        ? "bg-[#b47d27]/10 font-bold text-[#8a5e18]"
                        : "text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    همه محصولات
                    <span className="text-[10px] text-stone-400">
                      {formatNumber(products.length)}
                    </span>
                  </Link>
                </li>
                {categories.map((item) => {
                  const count = products.filter(
                    (product) => product.category === item.id
                  ).length;
                  return (
                    <li key={item.id}>
                      <Link
                        href={buildHref({ category: item.id })}
                        className={`flex items-center justify-between rounded-lg px-3 py-2 transition ${
                          categoryId === item.id
                            ? "bg-[#b47d27]/10 font-bold text-[#8a5e18]"
                            : "text-stone-600 hover:bg-stone-50"
                        }`}
                      >
                        {item.label}
                        <span className="text-[10px] text-stone-400">
                          {formatNumber(count)}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-4">
              <p className="mb-3 flex items-center gap-2 text-sm font-bold text-stone-800">
                <FiTag className="text-[#b47d27]" aria-hidden />
                محدوده قیمت
              </p>
              <ul className="space-y-1 text-sm">
                {priceRanges.map((range) => (
                  <li key={range.value}>
                    <Link
                      href={buildHref({ price: range.value })}
                      className={`block rounded-lg px-3 py-2 transition ${
                        price === range.value
                          ? "bg-[#b47d27]/10 font-bold text-[#8a5e18]"
                          : "text-stone-600 hover:bg-stone-50"
                      }`}
                    >
                      {range.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-stone-900 p-4 text-white">
              <p className="text-sm font-bold">در انتخاب تردید دارید؟</p>
              <p className="mt-2 text-[11px] leading-6 text-stone-300">
                کارشناسان سون زر برای انتخاب سایز و ست کردن قطعات راهنمای شما
                هستند.
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#b47d27] py-2 text-xs font-bold text-white"
              >
                <FiPhone aria-hidden />
                تماس با گالری
              </a>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2 lg:hidden">
              <Link
                href={buildHref({ category: "" })}
                className={`rounded-full border px-3 py-1.5 text-[11px] ${
                  !categoryId
                    ? "border-[#b47d27] bg-[#b47d27] text-white"
                    : "border-stone-200 bg-white text-stone-600"
                }`}
              >
                همه
              </Link>
              {categories.map((item) => (
                <Link
                  key={item.id}
                  href={buildHref({ category: item.id })}
                  className={`rounded-full border px-3 py-1.5 text-[11px] ${
                    categoryId === item.id
                      ? "border-[#b47d27] bg-[#b47d27] text-white"
                      : "border-stone-200 bg-white text-stone-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-stone-500">
                {formatNumber(filtered.length)} محصول
              </span>
              <ProductSort value={sort} />
            </div>
          </div>

          {activeFilters.length > 0 && (
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="text-[11px] text-stone-500">فیلترهای فعال:</span>
              {activeFilters.map((filter) => (
                <Link
                  key={filter.label}
                  href={filter.href}
                  className="flex items-center gap-1 rounded-full bg-stone-200 px-3 py-1 text-[11px] text-stone-700 hover:bg-stone-300"
                >
                  {filter.label}
                  <FiX aria-hidden />
                </Link>
              ))}
              <Link
                href="/products"
                className="text-[11px] font-semibold text-[#a06c1e] hover:underline"
              >
                پاک کردن همه
              </Link>
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center">
              <FiSearch className="mx-auto text-3xl text-stone-300" aria-hidden />
              <p className="mt-3 font-bold text-stone-800">
                محصولی با این مشخصات پیدا نشد
              </p>
              <p className="mt-2 text-xs text-stone-500">
                عبارت جستجو یا فیلترها را تغییر دهید.
              </p>
              <Link
                href="/products"
                className="mt-5 inline-block rounded-xl bg-[#b47d27] px-5 py-2.5 text-xs font-bold text-white hover:bg-[#a06c1e]"
              >
                مشاهده همه محصولات
              </Link>
            </div>
          )}
        </div>
      </Container>
    </StoreShell>
  );
}
