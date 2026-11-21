"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { FiCheck, FiShoppingBag } from "react-icons/fi";
import { useCart } from "@/components/cart/CartProvider";

export default function AddToCartButton({
  product,
  size,
  color,
  quantity = 1,
  label = "افزودن به سبد خرید",
  compact = false,
  className = "",
}) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, { size, color, quantity });
    setAdded(true);
    toast.success(`«${product.name}» به سبد خرید اضافه شد`);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      className={className}
      aria-label={label}
    >
      {added ? <FiCheck aria-hidden /> : <FiShoppingBag aria-hidden />}
      {compact ? <span>افزودن</span> : <span>{added ? "اضافه شد" : label}</span>}
    </button>
  );
}
