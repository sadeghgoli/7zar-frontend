"use client";

import { usePathname, useRouter } from "next/navigation";
import { FiChevronDown } from "react-icons/fi";

const options = [
  { value: "featured", label: "مرتب‌سازی: پیشنهاد سون زر" },
  { value: "newest", label: "جدیدترین" },
  { value: "price-asc", label: "ارزان‌ترین" },
  { value: "price-desc", label: "گران‌ترین" },
  { value: "rating", label: "بیشترین امتیاز" },
];

export default function ProductSort({ value = "featured" }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (event) => {
    const params = new URLSearchParams(window.location.search);
    params.set("sort", event.target.value);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative">
      <select
        value={value}
        onChange={handleChange}
        className="appearance-none rounded-xl border border-stone-200 bg-white py-2.5 pr-4 pl-9 text-xs text-stone-700 outline-none transition focus:border-[#b47d27]"
        aria-label="مرتب‌سازی محصولات"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FiChevronDown
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
        aria-hidden
      />
    </div>
  );
}
