import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingBag, ArrowLeft, ArrowRight, Check, Truck, Shield, RefreshCw, Heart } from 'lucide-react';
import PageHeader from '@/components/cozypaws/PageHeader';
import StarRating from '@/components/cozypaws/StarRating';
import Footer from '@/components/cozypaws/Footer';
import { Image } from '@/components/ui/image';
import { toast } from 'sonner';
import { products } from '@/lib/petData';
import { useShop } from '@/lib/shopStore';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [active, setActive] = useState(0);
  const { addToCart, toggleFavorite, isFavorited } = useShop();

  if (!product) {
    return (
      <main className="min-h-screen bg-[#EFFDF0] text-[#1a3d1a]">
        <PageHeader title="Product" />
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <h2 className="font-serif-display text-3xl">Product not found</h2>
          <Link to="/shop" className="mt-4 inline-flex items-center gap-2 text-[#E86A10]">Back to shop <ArrowRight size={16} /></Link>
        </div>
      </main>
    );
  }

  const gallery = [product.img, ...product.gallery];
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);
  const fallback = related.length ? related : products.filter((p) => p.id !== product.id).slice(0, 3);
  const discount = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;

  return (
    <main className="min-h-screen bg-[#EFFDF0] text-[#1a3d1a]">
      <PageHeader title={product.name} subtitle={product.category} />
      <section className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <Link to="/shop" className="inline-flex items-center gap-1.5 text-sm text-[#1a3d1a]/60 transition hover:text-[#1a3d1a]"><ArrowLeft size={15} /> Back to shop</Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div>
            <div className="overflow-hidden rounded-3xl bg-white">
              <Image src={gallery[active]} alt={product.name} className="aspect-square w-full object-cover" />
            </div>
            <div className="mt-3 flex gap-3">
              {gallery.map((g, i) => (
                <button key={i} onClick={() => setActive(i)} className={`overflow-hidden rounded-xl border-2 transition ${active === i ? 'border-[#E86A10]' : 'border-transparent'}`}>
                  <Image src={g} alt="" className="h-16 w-16 object-cover md:h-20 md:w-20" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#E86A10] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">{product.tag}</span>
              {discount > 0 && <span className="rounded-full bg-[#1a3d1a] px-3 py-1 text-xs font-bold text-white">{discount}% OFF</span>}
            </div>
            <h1 className="mt-4 font-serif-display text-3xl leading-tight md:text-4xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3"><StarRating rating={product.rating} showValue /><span className="text-sm text-[#1a3d1a]/50">{product.reviewCount} reviews</span></div>
            <div className="mt-4 flex items-end gap-3">
              <span className="font-serif-display text-3xl">${product.price.toFixed(2)}</span>
              {product.oldPrice && <span className="text-lg text-[#1a3d1a]/40 line-through">${product.oldPrice.toFixed(2)}</span>}
            </div>
            <p className="mt-4 text-[#1a3d1a]/70">{product.description}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-[#1a3d1a]/80"><Check size={16} className="shrink-0 text-[#E86A10]" /> {f}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => { addToCart(product.id); toast.success(`${product.name} added to cart`); }} className="inline-flex items-center gap-2 rounded-full bg-[#E86A10] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d45e0d]"><ShoppingBag size={16} /> Add to cart</button>
              <button onClick={() => { toggleFavorite(product.id); toast.success(isFavorited(product.id) ? 'Removed from favorites' : 'Saved to favorites'); }} className="inline-flex items-center gap-2 rounded-full border border-[#1a3d1a]/20 px-6 py-3 text-sm font-semibold text-[#1a3d1a] transition hover:bg-white"><Heart size={16} className={isFavorited(product.id) ? 'fill-[#E86A10] text-[#E86A10]' : ''} /> {isFavorited(product.id) ? 'Saved' : 'Save'}</button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[Truck, RefreshCw, Shield].map((Icon, i) => (
                <div key={i} className="rounded-2xl border border-[#1a3d1a]/10 bg-white p-3">
                  <Icon size={18} className="mx-auto text-[#1a3d1a]" />
                  <p className="mt-1.5 text-[11px] font-medium text-[#1a3d1a]/60">{['Free delivery over $50', '14-day returns', 'Secure checkout'][i]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h2 className="font-serif-display text-2xl md:text-3xl">Customer reviews</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {product.reviews.map((r) => (
              <figure key={r.name} className="rounded-2xl border border-[#1a3d1a]/10 bg-white p-5">
                <StarRating rating={r.rating} />
                <p className="mt-3 text-sm text-[#1a3d1a]/80">“{r.text}”</p>
                <figcaption className="mt-4 flex items-center gap-2 border-t border-[#1a3d1a]/10 pt-3">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-[#1a3d1a] text-xs font-bold text-white">{r.name[0]}</div>
                  <div><div className="text-sm font-semibold">{r.name}</div><div className="text-xs text-[#1a3d1a]/50">{r.date}</div></div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <div className="flex items-center justify-between">
            <h2 className="font-serif-display text-2xl md:text-3xl">You may also like</h2>
            <Link to="/shop" className="text-sm font-semibold text-[#E86A10]">View all</Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fallback.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group overflow-hidden rounded-2xl border border-[#1a3d1a]/10 bg-white transition-shadow hover:shadow-lg">
                <div className="aspect-square overflow-hidden"><Image src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" /></div>
                <div className="p-4"><div className="text-sm font-semibold">{p.name}</div><div className="mt-1 flex items-center justify-between"><span className="text-sm text-[#1a3d1a]/50">{p.category}</span><strong>${p.price.toFixed(2)}</strong></div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}