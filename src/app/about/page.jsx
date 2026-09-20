import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import Title from "@/components/elements/title/Title";

export const metadata = { title: "درباره ما" };

export default function AboutPage() {
  return (
    <StoreShell>
      <Container classes="py-14 max-w-3xl">
        <Title type="h1" classes="text-3xl font-bold mb-6">
          درباره سون زر
        </Title>
        <p className="leading-relaxed text-stone-600">
          سون زر با تمرکز بر طراحی زیورآلات طلای ۱۸ عیار، مجموعه‌ای از گردنبند، دستبند، گوشواره و انگشتر را
          برای استفاده روزمره و هدیه ارائه می‌دهد. هر قطعه با بسته‌بندی کادویی، گواهی اصالت و امکان مشاوره قبل از
          خرید در اختیار شماست.
        </p>
      </Container>
    </StoreShell>
  );
}
