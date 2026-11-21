"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  FiChevronDown,
  FiChevronUp,
  FiCreditCard,
  FiShield,
  FiShoppingBag,
  FiTruck,
  FiRefreshCw,
} from "react-icons/fi";
import { useCart } from "@/components/cart/CartProvider";
import { formatToman, getDiscountPercent } from "@/data/catalog";

export default function ProductPurchasePanel({ product }) {
  const router = useRouter();
  const { addItem } = useCart();
  const [size, setSize] = useState(product.sizes?.[0] || "تک سایز");
  const [color, setColor] = useState(product.colors?.[0] || "طلایی");
  const [quantity, setQuantity] = useState(1);

  const discount = useMemo(() => getDiscountPercent(product), [product]);

  const add = (goToCart = false) => {
    addItem(product, { size, color, quantity });
    toast.success(`«${product.name}» به سبد خرید اضافه شد`);
    if (goToCart) router.push("/cart");
  };

  const inStock = product.stock > 0;

  return (
    <div>
      <div className="flex flex-wrap items-end gap-3">
        <p className="text-3xl font-bold text-stone-900">
          {formatToman(product.priceToman)}
          <span className="mr-2 text-base font-medium text-stone-500">تومان</span>
        </p>
        {product.oldPriceToman && (
          <p className="text-base text-stone-400 line-through">
            {formatToman(product.oldPriceToman)}
          </p>
        )}
        {discount > 0 && (
          <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-600">
            ٪{formatToman(discount)} تخفیف
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-stone-500">
        قیمت بر اساس نرخ روز طلا؛ وزن تقریبی {product.weightGram} گرم
      </p>

      {product.colors?.length > 1 && (
        <div className="mt-6">
          <p className="mb-2 text-sm font-semibold text-stone-800">رنگ</p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setColor(item)}
                className={`rounded-lg border px-4 py-2 text-sm transition ${
                  color === item
                    ? "border-[#b47d27] bg-[#b47d27]/10 font-semibold text-[#8a5e18]"
                    : "border-stone-200 text-stone-600 hover:border-stone-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.sizes?.length > 1 && (
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-semibold text-stone-800">سایز / طول</p>
            <span className="text-xs text-stone-500">
              راهنمای سایز را در صفحه تماس بخواهید
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSize(item)}
                className={`rounded-lg border px-4 py-2 text-sm transition ${
                  size === item
                    ? "border-[#b47d27] bg-[#b47d27]/10 font-semibold text-[#8a5e18]"
                    : "border-stone-200 text-stone-600 hover:border-stone-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <div className="flex items-center rounded-xl border border-stone-200">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.min(10, q + 1))}
            className="px-3 py-2 text-stone-600 hover:text-stone-900"
            aria-label="افزایش تعداد"
          >
            <FiChevronUp />
          </button>
          <span className="w-8 text-center text-sm font-bold">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="px-3 py-2 text-stone-600 hover:text-stone-900"
            aria-label="کاهش تعداد"
          >
            <FiChevronDown />
          </button>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            inStock ? "bg-emerald-50 text-emerald-700" : "bg-stone-100 text-stone-500"
          }`}
        >
          {inStock ? `موجود در انبار (${product.stock} عدد)` : "ناموجود"}
        </span>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          disabled={!inStock}
          onClick={() => add(false)}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#b47d27] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#a06c1e] disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FiShoppingBag aria-hidden />
          افزودن به سبد خرید
        </button>
        <button
          type="button"
          disabled={!inStock}
          onClick={() => add(true)}
          className="flex items-center justify-center gap-2 rounded-xl border border-stone-900 px-6 py-3.5 text-sm font-bold text-stone-900 transition hover:bg-stone-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          <FiCreditCard aria-hidden />
          خرید و تکمیل سفارش
        </button>
      </div>

      <div className="mt-6 grid gap-3 rounded-2xl border border-stone-200 bg-stone-50/70 p-4 text-xs text-stone-600 sm:grid-cols-2">
        <span className="flex items-center gap-2">
          <FiShield className="shrink-0 text-[#b47d27]" aria-hidden />
          ضمانت اصالت و گواهی طلای ۱۸ عیار
        </span>
        <span className="flex items-center gap-2">
          <FiTruck className="shrink-0 text-[#b47d27]" aria-hidden />
          ارسال بیمه‌شده به سراسر کشور
        </span>
        <span className="flex items-center gap-2">
          <FiRefreshCw className="shrink-0 text-[#b47d27]" aria-hidden />
          بازگشت تا ۷ روز پس از دریافت
        </span>
        <span className="flex items-center gap-2">
          <FiCreditCard className="shrink-0 text-[#b47d27]" aria-hidden />
          پرداخت حضوری یا هماهنگی تلفنی
        </span>
      </div>
    </div>
  );
}
