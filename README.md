# گالری زرین — ویترین فروشگاه زیورآلات

پروژهٔ **مستقل** Next.js (بدون وابستگی به `frontend`). ساختار مشابه فرانت اصلی: `src/app`, `src/components`, `src/data`, `public`.

## اجرا

```bash
cd D:\projects\7zar\storeTemp
npm install
npm run dev
```

مرورگر: [http://localhost:3002](http://localhost:3002)

## استقرار (Coolify / Docker)

در ریشهٔ ریپو فایل **`Dockerfile`** وجود دارد. Coolify باید **Build Pack = Dockerfile** و مسیر Dockerfile = `/Dockerfile` باشد.

پس از push، دوباره Deploy کنید.

## صفحات

| مسیر | توضیح |
|------|--------|
| `/` | ویترین و دسته‌بندی محصولات |
| `/products/[slug]` | جزئیات محصول |
| `/order` | فرم ثبت سفارش |
| `/about`, `/contact`, `/faq`, `/guide` | محتوای فروشگاه |
