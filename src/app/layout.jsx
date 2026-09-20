import "@/styles/stye.scss";
import { Toaster } from "react-hot-toast";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3002"),
  title: {
    default: "سون زر | فروشگاه زیورآلات طلا",
    template: "%s | سون زر",
  },
  description:
    "خرید آنلاین گردنبند، دستبند، گوشواره و انگشتر طلای ۱۸ عیار با ضمانت اصالت و ارسال امن.",
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "سون زر",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Toaster position="top-center" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
