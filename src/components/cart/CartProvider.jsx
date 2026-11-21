"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "sonzar-cart-v1";

function normalizeItem(product, options = {}) {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    image: product.image,
    price: product.priceToman,
    oldPrice: product.oldPriceToman || null,
    weight: product.weightGram,
    karat: product.karat,
    category: product.category,
    size: options.size || product.sizes?.[0] || "تک سایز",
    color: options.color || product.colors?.[0] || "طلایی",
    quantity: Math.max(1, Number(options.quantity) || 1),
  };
}

const itemKey = (item) => `${item.id}__${item.size}__${item.color}`;

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage may be unavailable
    }
  }, [items, isReady]);

  const addItem = useCallback((product, options = {}) => {
    const next = normalizeItem(product, options);
    setItems((current) => {
      const key = itemKey(next);
      const existing = current.find((item) => itemKey(item) === key);
      if (existing) {
        return current.map((item) =>
          itemKey(item) === key
            ? { ...item, quantity: item.quantity + next.quantity }
            : item
        );
      }
      return [...current, next];
    });
  }, []);

  const removeItem = useCallback((id, size, color) => {
    setItems((current) =>
      current.filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
      )
    );
  }, []);

  const updateQuantity = useCallback((id, size, color, quantity) => {
    const value = Number(quantity);
    setItems((current) =>
      current
        .map((item) =>
          item.id === id && item.size === size && item.color === color
            ? { ...item, quantity: Math.max(0, value) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      isReady,
      totalItems,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [
      items,
      isReady,
      totalItems,
      subtotal,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
}
