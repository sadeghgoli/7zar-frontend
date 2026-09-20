"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import toast from "react-hot-toast";
import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import Title from "@/components/elements/title/Title";
import { getProductBySlug } from "@/data/catalog";

function OrderForm() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("product");
  const product = productSlug ? getProductBySlug(productSlug) : null;
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("درخواست شما ثبت شد. کارشناسان سون زر به زودی تماس می‌گیرند.");
    }, 800);
  };

  return (
    <Container classes="max-w-xl py-12">
      <Title type="h1" classes="text-2xl font-bold mb-2">
        ثبت سفارش
      </Title>
      <p className="mb-8 text-stone-600">فرم زیر را پر کنید تا برای هماهنگی سایز و ارسال با شما تماس بگیریم.</p>

      {product && (
        <div className="mb-6 rounded-xl border border-amber-200 bg-amber-50/80 p-4">
          <p className="text-sm text-amber-900">محصول انتخاب‌شده</p>
          <p className="font-bold">{product.name}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <div>
          <label className="mb-1 block text-sm font-medium">نام و نام خانوادگی</label>
          <input required className="w-full rounded-lg border border-stone-200 px-3 py-2" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">شماره تماس</label>
          <input required type="tel" className="w-full rounded-lg border border-stone-200 px-3 py-2" dir="ltr" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">توضیحات (سایز، آدرس، …)</label>
          <textarea rows={4} className="w-full rounded-lg border border-stone-200 px-3 py-2" />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl bg-stone-900 py-3 text-sm font-bold text-white hover:bg-amber-900 disabled:opacity-60"
        >
          {submitting ? "در حال ارسال…" : "ارسال درخواست"}
        </button>
      </form>
    </Container>
  );
}

export default function OrderPage() {
  return (
    <StoreShell>
      <Suspense fallback={<Container classes="py-12">در حال بارگذاری…</Container>}>
        <OrderForm />
      </Suspense>
    </StoreShell>
  );
}
