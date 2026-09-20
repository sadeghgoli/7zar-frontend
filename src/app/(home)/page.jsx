import Link from "next/link";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import Title from "@/components/elements/title/Title";
import ProductCard from "@/components/custom/products/ProductCard";
import IndexHeroSection from "@/components/layouts/hero-sections/index/IndexHeroSection";
import { categories, getFeaturedProducts, getProductsByCategory } from "@/data/catalog";

export default function HomePage() {
  const featured = getFeaturedProducts(8);

  return (
    <StoreShell>
      <IndexHeroSection />

      <section className="border-b border-stone-200 bg-white py-8">
        <Container classes="flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <Link
              key={c.id}
              href={`#cat-${c.id}`}
              className="rounded-full border border-stone-200 px-5 py-2 text-sm font-medium text-stone-700 transition hover:border-[#b47d27] hover:text-[#b47d27]"
            >
              {c.label}
            </Link>
          ))}
        </Container>
      </section>

      <section id="collections" className="py-14">
        <Container>
          <div className="mb-10 text-center">
            <Title classes="text-2xl font-bold text-stone-900 md:text-3xl">منتخب ویترین سون زر</Title>
            <p className="mt-2 text-stone-600">پرفروش‌ترین طرح‌های این فصل</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {categories.map((cat) => {
        const items = getProductsByCategory(cat.id);
        if (items.length === 0) return null;
        return (
          <section key={cat.id} id={`cat-${cat.id}`} className="border-t border-stone-200 bg-white py-14">
            <Container>
              <div className="mb-8">
                <Title classes="text-2xl font-bold text-stone-900">{cat.label}</Title>
                <p className="mt-1 text-sm text-stone-500">{items.length} طرح در این دسته</p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-gradient-to-r from-[#b47d27] to-[#d4a04f] py-14 text-white">
        <Container classes="text-center">
          <Title classes="text-2xl font-bold md:text-3xl">سون زر — زیورآلاتی که ماندگارند</Title>
          <p className="mx-auto mt-3 max-w-xl text-white/90">ضمانت اصالت، بسته‌بندی کادویی و ارسال امن</p>
        </Container>
      </section>
    </StoreShell>
  );
}
