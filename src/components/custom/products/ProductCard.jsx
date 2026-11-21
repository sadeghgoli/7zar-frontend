import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import AddToCartButton from "@/components/custom/products/AddToCartButton";
import {
  formatNumber,
  formatToman,
  getCategoryById,
  getDiscountPercent,
} from "@/data/catalog";

export default function ProductCard({ product }) {
  const discount = getDiscountPercent(product);
  const category = getCategoryById(product.category);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <Link
          href={`/products/${product.slug}`}
          className="relative block aspect-[4/5] overflow-hidden bg-stone-100"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        </Link>

        <div className="absolute right-3 top-3 flex flex-col gap-1.5">
          {product.badges?.slice(0, 2).map((badge) => (
            <span
              key={badge}
              className="rounded-full bg-stone-900/90 px-3 py-1 text-[11px] font-medium text-amber-50 backdrop-blur"
            >
              {badge}
            </span>
          ))}
        </div>

        {discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-rose-600 px-2.5 py-1 text-[11px] font-bold text-white">
            ٪{formatNumber(discount)}
          </span>
        )}

        <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100">
          <AddToCartButton
            product={product}
            compact
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/95 px-3 py-2.5 text-xs font-bold text-stone-800 shadow-lg backdrop-blur transition hover:bg-[#b47d27] hover:text-white"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center justify-between gap-2">
          <span className="text-[11px] text-[#a06c1e]">{category?.label}</span>
          <span className="flex items-center gap-1 text-[11px] text-stone-500">
            <FaStar className="text-amber-400" aria-hidden />
            {formatNumber(product.rating)}
            <span className="text-stone-400">({formatNumber(product.reviews)})</span>
          </span>
        </div>

        <h3 className="mb-1 line-clamp-2 text-base font-bold leading-7 text-stone-800">
          <Link href={`/products/${product.slug}`} className="hover:text-[#b47d27]">
            {product.name}
          </Link>
        </h3>
        <p className="mb-3 line-clamp-2 text-xs leading-6 text-stone-500">
          {product.desc}
        </p>

        <div className="mt-auto flex items-end justify-between gap-2 border-t border-stone-100 pt-3">
          <div>
            {product.oldPriceToman && (
              <p className="text-[11px] text-stone-400 line-through">
                {formatToman(product.oldPriceToman)}
              </p>
            )}
            <p className="text-lg font-bold text-stone-900">
              {formatToman(product.priceToman)}
              <span className="mr-1 text-[11px] font-medium text-stone-500">
                تومان
              </span>
            </p>
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="flex items-center gap-1 rounded-lg border border-stone-200 px-3 py-2 text-[11px] font-semibold text-stone-600 transition hover:border-[#b47d27] hover:text-[#b47d27]"
          >
            جزئیات
            <FiArrowLeft aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}
