import Link from "next/link";
import Container from "@/components/elements/container/Container";

export default function StoreFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100">
      <Container classes="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-stone-900">سون زر</p>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            فروشگاه آنلاین زیورآلات طلا با تمرکز بر طراحی، اصالت و ارسال امن به سراسر کشور.
          </p>
        </div>
        <div>
          <p className="mb-3 font-semibold text-stone-800">راهنمای خرید</p>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>
              <Link href="/guide" className="hover:text-stone-900">
                نحوه ثبت سفارش
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-stone-900">
                سوالات متداول
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 font-semibold text-stone-800">ارتباط با ما</p>
          <ul className="space-y-2 text-sm text-stone-600">
            <li>
              <Link href="/contact" className="hover:text-stone-900">
                تماس و پشتیبانی
              </Link>
            </li>
            <li>شنبه تا پنج‌شنبه · ۹ تا ۱۸</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-stone-200 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} سون زر — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
