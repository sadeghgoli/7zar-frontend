"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-3 p-4 text-right"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-bold text-stone-800">{item.q}</span>
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs ${
                  isOpen
                    ? "bg-[#b47d27] text-white"
                    : "bg-stone-100 text-stone-500"
                }`}
              >
                {isOpen ? <FiMinus aria-hidden /> : <FiPlus aria-hidden />}
              </span>
            </button>
            {isOpen && (
              <div className="border-t border-stone-100 px-4 py-3 text-xs leading-7 text-stone-600">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
