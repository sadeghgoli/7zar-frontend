import "@/styles/stye.scss";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/components/cart/CartProvider";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3002"),
  title: {
    default: "سون زر | فروشگاه زیورآلات طلای ۱۸ عیار",
    template: "%s | سون زر",
  },
  description:
    "خرید آنلاین گردنبند، دستبند، گوشواره، انگشتر و ست طلای ۱۸ عیار با ضمانت اصالت، بسته‌بندی کادویی و ارسال بیمه‌شده به سراسر کشور.",
  keywords: [
    "طلای ۱۸ عیار",
    "گردنبند طلا",
    "دستبند طلا",
    "گوشواره طلا",
    "انگشتر طلا",
    "ست عروس",
    "فروشگاه طلا",
    "سون زر",
  ],
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "سون زر",
    title: "سون زر | فروشگاه زیورآلات طلای ۱۸ عیار",
    description:
      "زیورآلات طلای ۱۸ عیار با ضمانت اصالت و ارسال بیمه‌شده به سراسر کشور.",
    images: ["/img/site/hero-neck.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#b47d27",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <CartProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                fontFamily: "Dana, system-ui, sans-serif",
                fontSize: "13px",
                borderRadius: "12px",
              },
            }}
          />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
