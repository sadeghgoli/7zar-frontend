import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import Title from "@/components/elements/title/Title";

export const metadata = { title: "راهنمای خرید" };

const steps = [
  "طرح مورد علاقه را از ویترین انتخاب کنید.",
  "روی «سفارش» بزنید و فرم تماس را تکمیل کنید.",
  "کارشناس برای سایز، قیمت نهایی و آدرس با شما هماهنگ می‌کند.",
  "پس از تأیید، بسته‌بندی و ارسال بیمه‌شده انجام می‌شود.",
];

export default function GuidePage() {
  return (
    <StoreShell>
      <Container classes="py-14 max-w-xl">
        <Title type="h1" classes="text-3xl font-bold mb-8">
          راهنمای خرید
        </Title>
        <ol className="list-decimal space-y-4 pr-5 text-stone-700">
          {steps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </Container>
    </StoreShell>
  );
}
