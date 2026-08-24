import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useShop } from '@/lib/shopStore';
import { toast } from 'sonner';

export default function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { cart, setQty, removeFromCart, cartTotal, clearCart, cartCount } = useShop();
  const checkout = () => { if (!cart.length) return; clearCart(); toast.success('Order placed! A confirmation has been sent to your email.'); onClose(); };
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <aside className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#EFFDF0] shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-[#1a3d1a]/10 px-5 py-4">
          <h3 className="font-serif-display text-xl text-[#1a3d1a]">Your Cart ({cartCount})</h3>
          <button onClick={onClose} aria-label="Close cart"><X size={20} className="text-[#1a3d1a]/60 hover:text-[#1a3d1a]" /></button>
        </div>
        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <ShoppingBag size={40} className="text-[#1a3d1a]/25" />
            <p className="text-sm text-[#1a3d1a]/60">Your cart is empty.</p>
            <Link to="/shop" onClick={onClose} className="rounded-full bg-[#E86A10] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#d45e0d]">Start shopping</Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-2">
              {cart.map((i) => (
                <div key={i.id} className="flex gap-3 border-b border-[#1a3d1a]/10 py-3">
                  <Image src={i.img} alt={i.name} className="h-16 w-16 rounded-xl object-cover" />
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2"><span className="text-sm font-semibold text-[#1a3d1a]">{i.name}</span><button onClick={() => removeFromCart(i.id)} aria-label="Remove"><Trash2 size={15} className="text-[#1a3d1a]/40 hover:text-[#E86A10]" /></button></div>
                    <span className="text-xs text-[#1a3d1a]/50">${i.price.toFixed(2)}</span>
                    <div className="mt-auto flex items-center gap-2 pt-2">
                      <button onClick={() => setQty(i.id, i.qty - 1)} className="grid h-7 w-7 place-items-center rounded-full border border-[#1a3d1a]/20 text-[#1a3d1a] hover:bg-white"><Minus size={13} /></button>
                      <span className="w-6 text-center text-sm font-semibold">{i.qty}</span>
                      <button onClick={() => setQty(i.id, i.qty + 1)} className="grid h-7 w-7 place-items-center rounded-full border border-[#1a3d1a]/20 text-[#1a3d1a] hover:bg-white"><Plus size={13} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-[#1a3d1a]/10 px-5 py-4">
              <div className="flex justify-between text-sm"><span className="text-[#1a3d1a]/60">Subtotal</span><strong className="text-[#1a3d1a]">${cartTotal.toFixed(2)}</strong></div>
              <button onClick={checkout} className="mt-3 w-full rounded-full bg-[#E86A10] py-3 text-sm font-semibold text-white transition hover:bg-[#d45e0d]">Checkout</button>
              <Link to="/delivery" onClick={onClose} className="mt-2 block text-center text-xs text-[#1a3d1a]/50 transition hover:text-[#1a3d1a]">View delivery & payment options</Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}