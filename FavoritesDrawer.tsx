import { Link } from 'react-router-dom';
import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useShop } from '@/lib/shopStore';
import { toast } from 'sonner';

export default function FavoritesDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { wishlist, getProduct, toggleFavorite, addToCart } = useShop();
  const items = wishlist.map(getProduct).filter(Boolean) as NonNullable<ReturnType<typeof getProduct>>[];
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#EFFDF0] shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-[#1a3d1a]/10 px-5 py-4">
          <h3 className="font-serif-display text-xl text-[#1a3d1a]">Favorites ({wishlist.length})</h3>
          <button onClick={onClose} aria-label="Close favorites"><X size={20} className="text-[#1a3d1a]/60 hover:text-[#1a3d1a]" /></button>
        </div>
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <Heart size={40} className="text-[#1a3d1a]/25" />
            <p className="text-sm text-[#1a3d1a]/60">No favorites yet.</p>
            <Link to="/shop" onClick={onClose} className="rounded-full bg-[#E86A10] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#d45e0d]">Browse products</Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-5 py-2">
            {items.map((p) => (
              <div key={p.id} className="flex gap-3 border-b border-[#1a3d1a]/10 py-3">
                <Image src={p.img} alt={p.name} className="h-16 w-16 rounded-xl object-cover" />
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-semibold text-[#1a3d1a]">{p.name}</span>
                  <span className="text-xs text-[#1a3d1a]/50">${p.price.toFixed(2)}</span>
                  <div className="mt-auto flex gap-2 pt-2">
                    <button onClick={() => { addToCart(p.id); toast.success(`${p.name} added to cart`); }} className="inline-flex items-center gap-1.5 rounded-full bg-[#1a3d1a] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#2a5a2a]"><ShoppingCart size={13} /> Add to cart</button>
                    <button onClick={() => toggleFavorite(p.id)} className="inline-flex items-center gap-1.5 rounded-full border border-[#1a3d1a]/20 px-3 py-1.5 text-xs text-[#1a3d1a]/60 transition hover:bg-white"><Trash2 size={13} /> Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </aside>
    </div>
  );
}