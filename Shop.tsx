import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import PageHeader from '@/components/cozypaws/PageHeader';
import StarRating from '@/components/cozypaws/StarRating';
import Footer from '@/components/cozypaws/Footer';
import { Image } from '@/components/ui/image';
import { toast } from 'sonner';
import { products } from '@/lib/petData';
import { useShop } from '@/lib/shopStore';

const categories = ['All', 'Beds & Houses', 'Food', 'Travel', 'Grooming', 'Toys', 'Feeding'];

export default function Shop() {
  const { addToCart } = useShop();
  return (
    <main className="min-h-screen bg-[#EFFDF0] text-[#1a3d1a]">
      <PageHeader title="Shop" subtitle="Everything your pets love — beds, food, toys, grooming and more. Free delivery on orders over $50." />
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <button key={c} onClick={() => toast.message(`Filtering: ${c}`)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${i === 0 ? 'bg-[#1a3d1a] text-white' : 'border border-[#1a3d1a]/15 bg-white text-[#1a3d1a]/70 hover:border-[#1a3d1a]/40'}`}>{c}</button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group flex flex-col overflow-hidden rounded-2xl border border-[#1a3d1a]/10 bg-white transition-shadow hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden bg-[#EFFDF0]">
                <Image src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-[#E86A10] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">{p.tag}</span>
                <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(p.id); toast.success(`${p.name} added to cart`); }} aria-label={`Add ${p.name} to cart`} className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-[#1a3d1a] text-white transition-colors hover:bg-[#2a5a2a]"><ShoppingBag size={16} /></button>
              </div>
              <div className="flex flex-1 flex-col p-3">
                <span className="text-[10px] font-medium uppercase tracking-wide text-[#1a3d1a]/40">{p.category}</span>
                <h3 className="mt-0.5 text-sm font-semibold leading-snug">{p.name}</h3>
                <div className="mt-1"><StarRating rating={p.rating} size={13} /></div>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <strong className="text-[#1a3d1a]">${p.price.toFixed(2)}</strong>
                  <span className="text-xs text-[#1a3d1a]/40">{p.reviewCount} reviews</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}