"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FiSend } from "react-icons/fi";

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    const form = event.currentTarget;
    window.setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("پیام شما ثبت شد؛ در اولین فرصت پاسخ می‌دهیم.");
    }, 700);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-stone-200 bg-white p-5 md:p-6"
    >
      <h2 className="text-base font-bold text-stone-900">ارسال پیام</h2>
      <p className="mt-1 text-xs leading-6 text-stone-500">
        سوال یا درخواست خود را بنویسید؛ کارشناسان ما در ساعات کاری پاسخ می‌دهند.
      </p>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-medium text-stone-700">
            نام و نام خانوادگی <span className="text-rose-500">*</span>
          </label>
          <input
            required
            name="name"
            placeholder="نام شما"
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#b47d27] focus:bg-white"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-stone-700">
            شماره تماس <span className="text-rose-500">*</span>
          </label>
          <input
            required
            name="phone"
            type="tel"
            dir="ltr"
            inputMode="tel"
            placeholder="09123456789"
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#b47d27] focus:bg-white"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs font-medium text-stone-700">
            موضوع
          </label>
          <select
            name="subject"
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#b47d27] focus:bg-white"
          >
            <option>مشاوره خرید</option>
            <option>پیگیری سفارش</option>
            <option>سایز و تعویض</option>
            <option>همکاری و عمده‌فروشی</option>
            <option>سایر موارد</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1 block text-xs font-medium text-stone-700">
            متن پیام <span className="text-rose-500">*</span>
          </label>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="پیام خود را بنویسید…"
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-3 py-2.5 text-sm outline-none transition focus:border-[#b47d27] focus:bg-white"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#b47d27] py-3 text-sm font-bold text-white transition hover:bg-[#a06c1e] disabled:opacity-60 sm:w-auto sm:px-8"
      >
        <FiSend aria-hidden />
        {sending ? "در حال ارسال…" : "ارسال پیام"}
      </button>
    </form>
  );
}
