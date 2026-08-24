import { ExternalLink } from 'lucide-react';
import PageHeader from '@/components/cozypaws/PageHeader';
import Footer from '@/components/cozypaws/Footer';
import { Image } from '@/components/ui/image';
import { toast } from 'sonner';

const brands = [
  { name: 'PawNaturals', tag: 'Organic Food', desc: 'Wholesome, grain-free recipes crafted with real meat and superfoods.', img: 'https://images.unsplash.com/photo-1535241749838-299277b6305f?w=600' },
  { name: 'CozyDen', tag: 'Beds & Houses', desc: 'Handcrafted pet beds and houses designed for ultimate comfort.', img: 'https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=600' },
  { name: 'FrolicPlay', tag: 'Toys', desc: 'Engaging, durable toys that keep tails wagging for hours.', img: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?w=600' },
  { name: 'PureGroom', tag: 'Grooming', desc: 'Gentle, pH-balanced grooming products for a shiny, healthy coat.', img: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600' },
  { name: 'TrekPet', tag: 'Travel', desc: 'Safe, stylish carriers and travel gear for on-the-go pets.', img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600' },
  { name: 'BowlWise', tag: 'Feeding', desc: 'Eco-friendly bowls and feeders designed for happy mealtimes.', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600' }
];

export default function Brands() {
  return (
    <main className="min-h-screen bg-[#EFFDF0] text-[#1a3d1a]">
      <PageHeader title="Our Brands" subtitle="We partner with trusted pet brands so your companions get only the best." />
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <article key={b.name} className="group overflow-hidden rounded-2xl border border-[#1a3d1a]/10 bg-white transition-shadow hover:shadow-lg">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EFFDF0]">
                <Image src={b.img} alt={b.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#1a3d1a]">{b.tag}</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-display text-xl">{b.name}</h3>
                  <button onClick={() => toast.message(`Opening ${b.name}`)} className="grid h-8 w-8 place-items-center rounded-full text-[#1a3d1a]/50 transition hover:bg-[#1a3d1a] hover:text-white"><ExternalLink size={15} /></button>
                </div>
                <p className="mt-2 text-sm text-[#1a3d1a]/60">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}