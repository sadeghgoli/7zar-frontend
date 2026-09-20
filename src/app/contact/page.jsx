import StoreShell from "@/components/layouts/StoreShell";
import Container from "@/components/elements/container/Container";
import Title from "@/components/elements/title/Title";
import Link from "next/link";

export const metadata = { title: "تماس با ما" };

export default function ContactPage() {
  return (
    <StoreShell>
      <Container classes="py-14 max-w-xl">
        <Title type="h1" classes="text-3xl font-bold mb-6">
          تماس با سون زر
        </Title>
        <p className="mb-6 text-stone-600">برای مشاوره انتخاب طرح یا پیگیری سفارش با ما در ارتباط باشید.</p>
        <ul className="space-y-3 text-stone-700">
          <li>ساعات پاسخگویی: شنبه تا پنج‌شنبه، ۹ تا ۱۸</li>
          <li>
            <Link href="/order" className="font-semibold text-amber-900 underline">
              ثبت سفارش آنلاین
            </Link>
          </li>
        </ul>
      </Container>
    </StoreShell>
  );
}
