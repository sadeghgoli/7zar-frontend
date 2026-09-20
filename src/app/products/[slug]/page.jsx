import Link from "next/link";
import { notFound } from "next/navigation";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import { formatToman, getProductBySlug, products } from "@/data/catalog";
import ProductImagePlaceholder from "@/components/custom/products/ProductImagePlaceholder";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "محصول یافت نشد" };
  return {
    title: product.name,
    description: product.desc,
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const orderHref = `/order?product=${encodeURIComponent(product.slug)}`;

  return (
    <StoreShell>
      <Container classes="py-10 md:py-14">
        <nav className="mb-6 text-sm text-stone-500">
          <Link href="/" className="hover:text-stone-800">
            خانه
          </Link>
          <span className="mx-2">/</span>
          <span className="text-stone-800">{product.name}</span>
        </nav>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-3xl">
            <ProductImagePlaceholder className="h-full w-full rounded-3xl" />
          </div>
          <div>
            {product.badges?.map((b) => (
              <span key={b} className="mb-3 inline-block rounded-full bg-stone-900 px-3 py-1 text-xs text-amber-100">
                {b}
              </span>
            ))}
            <h1 className="text-2xl font-bold text-stone-900 md:text-3xl">{product.name}</h1>
            <p className="mt-4 leading-relaxed text-stone-600">{product.desc}</p>
            <ul className="mt-6 space-y-2 text-sm text-stone-600">
              <li>عیار: {product.karat}</li>
              <li>وزن تقریبی: {product.weightGram} گرم</li>
              <li>بسته‌بندی کادویی و گواهی اصالت</li>
            </ul>
            <p className="mt-8 text-3xl font-bold text-stone-900">{formatToman(product.priceToman)} تومان</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={orderHref} className="rounded-xl bg-stone-900 px-8 py-3 text-sm font-bold text-white hover:bg-amber-900">
                ثبت سفارش این طرح
              </Link>
              <Link href="/#collections" className="rounded-xl border border-stone-300 px-8 py-3 text-sm font-semibold hover:bg-stone-50">
                ادامه خرید
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </StoreShell>
  );
}
