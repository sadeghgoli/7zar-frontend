export default function ProductImagePlaceholder({ className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-stone-100 text-stone-400 ${className}`}
      aria-hidden
    >
      <svg className="h-12 w-12 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className="text-sm font-medium">تصویر موجود نیست</span>
    </div>
  );
}
