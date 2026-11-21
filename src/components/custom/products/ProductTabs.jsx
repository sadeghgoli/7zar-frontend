"use client";

import { useState } from "react";
import { FiCheckCircle, FiTruck, FiRefreshCw, FiShield } from "react-icons/fi";
import { siteConfig } from "@/data/catalog";

const tabs = ["توضیحات", "مشخصات", "ارسال و بازگشت"];

export default function ProductTabs({ product }) {
  const [active, setActive] = useState("توضیحات");

  return (
    <div className="rounded-2xl border border-stone-200 bg-white">
      <div className="flex overflow-x-auto border-b border-stone-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`whitespace-nowrap px-5 py-3.5 text-sm transition ${
              active === tab
                ? "border-b-2 border-[#b47d27] font-bold text-[#8a5e18]"
                : "text-stone-500 hover:text-stone-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-5 text-sm leading-8 text-stone-600">
        {active === "توضیحات" && (
          <div>
            <p>{product.description}</p>
            <ul className="mt-4 grid gap-2 text-xs sm:grid-cols-2">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <FiCheckCircle className="shrink-0 text-[#b47d27]" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {active === "مشخصات" && (
          <div className="overflow-hidden rounded-xl border border-stone-200">
            <table className="w-full text-xs">
              <tbody>
                {product.specs.map((spec, index) => (
                  <tr
                    key={spec.label}
                    className={index % 2 === 0 ? "bg-stone-50" : "bg-white"}
                  >
                    <th className="w-1/3 border-l border-stone-200 px-4 py-2.5 text-right font-semibold text-stone-700">
                      {spec.label}
                    </th>
                    <td className="px-4 py-2.5 text-stone-600">{spec.value}</td>
                  </tr>
                ))}
                <tr className="bg-stone-50">
                  <th className="border-l border-stone-200 px-4 py-2.5 text-right font-semibold text-stone-700">
                    کد محصول
                  </th>
                  <td className="px-4 py-2.5 text-stone-600">{product.id}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {active === "ارسال و بازگشت" && (
          <div className="space-y-4">
            <p className="flex items-start gap-2">
              <FiTruck className="mt-1.5 shrink-0 text-[#b47d27]" aria-hidden />
              ارسال با پست پیشتاز بیمه‌شده انجام می‌شود. سفارش‌های بالای{" "}
              {new Intl.NumberFormat("fa-IR").format(
                siteConfig.freeShippingThreshold
              )}{" "}
              تومان ارسال رایگان دارند. تحویل در سبزوار با پیک هم امکان‌پذیر است.
            </p>
            <p className="flex items-start gap-2">
              <FiRefreshCw className="mt-1.5 shrink-0 text-[#b47d27]" aria-hidden />
              تا ۷ روز پس از دریافت، در صورت سالم بودن پلمب و جعبه، امکان بازگشت
              یا تعویض سایز وجود دارد.
            </p>
            <p className="flex items-start gap-2">
              <FiShield className="mt-1.5 shrink-0 text-[#b47d27]" aria-hidden />
              هر سفارش همراه فاکتور و گواهی اصالت ارسال می‌شود. برای هماهنگی
              می‌توانید با شماره{" "}
              <span dir="ltr" className="font-semibold">
                {siteConfig.phoneDisplay}
              </span>{" "}
              تماس بگیرید.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
