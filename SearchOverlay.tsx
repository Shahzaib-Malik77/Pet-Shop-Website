import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { products } from '@/lib/petData';

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const results = q.trim() ? products.filter((p) => `${p.name} ${p.category} ${p.short}`.toLowerCase().includes(q.toLowerCase())) : [];
  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute inset-x-0 top-0 bg-[#EFFDF0] shadow-xl transition-transform duration-300 ${open ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="mx-auto max-w-3xl px-4 py-6">
          <div className="flex items-center gap-2 rounded-full border border-[#1a3d1a]/20 bg-white px-4">
            <Search size={18} className="text-[#1a3d1a]/40" />
            <input autoFocus={open} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search beds, food, toys..." className="w-full bg-transparent py-3 text-sm text-[#1a3d1a] outline-none placeholder:text-[#1a3d1a]/40" />
            <button onClick={onClose} aria-label="Close search"><X size={18} className="text-[#1a3d1a]/50 hover:text-[#1a3d1a]" /></button>
          </div>
          {q.trim() && (
            <div className="mt-4 max-h-[55vh] overflow-y-auto">
              {results.length === 0 ? (
                <p className="py-8 text-center text-sm text-[#1a3d1a]/50">No products match “{q}”.</p>
              ) : results.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} onClick={onClose} className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white">
                  <Image src={p.img} alt={p.name} className="h-12 w-12 rounded-lg object-cover" />
                  <div className="flex-1"><div className="text-sm font-semibold">{p.name}</div><div className="text-xs text-[#1a3d1a]/50">{p.category}</div></div>
                  <strong className="text-sm">${p.price.toFixed(2)}</strong>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}