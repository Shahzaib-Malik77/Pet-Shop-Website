import React, { createContext, useContext, useEffect, useState } from 'react';
import { products, Product } from '@/lib/petData';

export interface CartItem { id: string; name: string; price: number; img: string; qty: number; }

interface ShopCtx {
  cart: CartItem[];
  wishlist: string[];
  cartCount: number;
  wishlistCount: number;
  cartTotal: number;
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  toggleFavorite: (id: string) => void;
  isFavorited: (id: string) => boolean;
  getProduct: (id: string) => Product | undefined;
}

const Ctx = createContext<ShopCtx | null>(null);
export const useShop = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error('useShop must be used within ShopStoreProvider');
  return c;
};

function load<T>(key: string, fallback: T): T {
  try { const v = localStorage.getItem(key); return v ? JSON.parse(v) as T : fallback; } catch { return fallback; }
}

export function ShopStoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => load('cp_cart', [
    { id: 'premium-pet-food', name: 'Premium Pet Food', price: 24.5, img: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?w=600', qty: 1 }
  ]));
  const [wishlist, setWishlist] = useState<string[]>(() => load('cp_wishlist', ['cozy-cat-house', 'plush-dog-bed', 'travel-carrier', 'feather-teaser']));

  useEffect(() => { localStorage.setItem('cp_cart', JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem('cp_wishlist', JSON.stringify(wishlist)); }, [wishlist]);

  const getProduct = (id: string) => products.find((p) => p.id === id);
  const addToCart = (id: string, qty = 1) => setCart((c) => {
    const p = getProduct(id); if (!p) return c;
    const ex = c.find((i) => i.id === id);
    if (ex) return c.map((i) => i.id === id ? { ...i, qty: i.qty + qty } : i);
    return [...c, { id, name: p.name, price: p.price, img: p.img, qty }];
  });
  const removeFromCart = (id: string) => setCart((c) => c.filter((i) => i.id !== id));
  const setQty = (id: string, qty: number) => setCart((c) => qty <= 0 ? c.filter((i) => i.id !== id) : c.map((i) => i.id === id ? { ...i, qty } : i));
  const clearCart = () => setCart([]);
  const toggleFavorite = (id: string) => setWishlist((w) => w.includes(id) ? w.filter((x) => x !== id) : [...w, id]);
  const isFavorited = (id: string) => wishlist.includes(id);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const wishlistCount = wishlist.length;
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <Ctx.Provider value={{ cart, wishlist, cartCount, wishlistCount, cartTotal, addToCart, removeFromCart, setQty, clearCart, toggleFavorite, isFavorited, getProduct }}>
      {children}
    </Ctx.Provider>
  );
}