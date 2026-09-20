import Link from "next/link";
import { formatToman } from "@/data/catalog";
import ProductImagePlaceholder from "@/components/custom/products/ProductImagePlaceholder";

export default function ProductCard({ product }) {
  const orderHref = `/order?product=${encodeURIComponent(product.slug)}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition hover:shadow-md">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[4/5] overflow-hidden"
      >
        <ProductImagePlaceholder className="h-full w-full" />
        {product.badges?.length > 0 && (
          <span className="absolute right-3 top-3 rounded-full bg-stone-900 px-3 py-1 text-xs text-amber-100">
            {product.badges[0]}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 line-clamp-2 text-base font-bold text-stone-800">
          <Link href={`/products/${product.slug}`} className="hover:text-[#b47d27]">
            {product.name}
          </Link>
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-stone-500">{product.desc}</p>
        <div className="mt-auto flex items-end justify-between gap-2">
          <div>
            <p className="text-lg font-bold text-stone-900">{formatToman(product.priceToman)}</p>
            <p className="text-xs text-stone-400">تومان · عیار {product.karat}</p>
          </div>
          <Link
            href={orderHref}
            className="rounded-lg bg-[#b47d27] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#a06c1e]"
          >
            سفارش
          </Link>
        </div>
      </div>
    </article>
  );
}
