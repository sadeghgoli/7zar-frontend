import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import Title from "@/components/elements/title/Title";

export const metadata = { title: "سوالات متداول" };

const faqs = [
  { q: "عیار زیورآلات چقدر است؟", a: "تمامی طرح‌های ویترین با طلای ۱۸ عیار عرضه می‌شوند مگر آنکه در توضیحات محصول ذکر دیگری آمده باشد." },
  { q: "چگونه سفارش ثبت کنم؟", a: "از صفحه محصول یا بخش «ثبت سفارش» فرم را پر کنید. پس از تماس کارشناس، جزئیات سایز و ارسال نهایی می‌شود." },
  { q: "ارسال چگونه است؟", a: "ارسال بیمه‌شده به سراسر کشور انجام می‌شود. زمان تحویل بسته به شهر مقصد متفاوت است." },
];

export default function FaqPage() {
  return (
    <StoreShell>
      <Container classes="py-14 max-w-2xl">
        <Title type="h1" classes="text-3xl font-bold mb-8">
          سوالات متداول
        </Title>
        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-xl border border-stone-200 bg-white p-5">
              <p className="font-bold text-stone-900">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </StoreShell>
  );
}
