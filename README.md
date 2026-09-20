# گالری زرین — ویترین فروشگاه زیورآلات

پروژهٔ **مستقل** Next.js (بدون وابستگی به `frontend`). ساختار مشابه فرانت اصلی: `src/app`, `src/components`, `src/data`, `public`.

## اجرا

```bash
cd D:\projects\7zar\storeTemp
npm install
npm run dev
```

مرورگر: [http://localhost:3002](http://localhost:3002)

## استقرار در ریپازیتوری

این پوشه را می‌توانید در کنار `frontend` commit کنید (monorepo) یا ریپوی جدا بسازید. هیچ `file:` یا import از `frontend` وجود ندارد.

## صفحات

| مسیر | توضیح |
|------|--------|
| `/` | ویترین و دسته‌بندی محصولات |
| `/products/[slug]` | جزئیات محصول |
| `/order` | فرم ثبت سفارش |
| `/about`, `/contact`, `/faq`, `/guide` | محتوای فروشگاه |
