import { Heart, Truck, Shield, Leaf, PawPrint, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '@/components/cozypaws/PageHeader';
import StarRating from '@/components/cozypaws/StarRating';
import Footer from '@/components/cozypaws/Footer';
import { Image } from '@/components/ui/image';
import { testimonials } from '@/lib/petData';

const stats = [
  { value: '98K+', label: 'Happy pets served' },
  { value: '4.6★', label: 'Average rating' },
  { value: '120+', label: 'Curated products' },
  { value: '14', label: 'Cities delivered' }
];

const values = [
  { icon: Heart, title: 'Pets first, always', body: 'Every product is chosen as if it were for our own companions — safe, durable, and genuinely good for them.' },
  { icon: Leaf, title: 'Clean ingredients', body: 'We favor real, named proteins and avoid artificial additives, fillers, and harsh chemicals.' },
  { icon: Truck, title: 'Fast, careful delivery', body: 'Food stays fresh and fragile items arrive intact, with same-day options in major cities.' },
  { icon: Shield, title: 'Vet-approved', body: 'Our food and care lines are formulated and reviewed with veterinary professionals.' }
];

const team = [
  { name: 'Dr. Ayesha Khan', role: 'Chief Veterinarian', color: '#1a3d1a' },
  { name: 'Bilal Raza', role: 'Founder & CEO', color: '#E86A10' },
  { name: 'Marium Tariq', role: 'Pet Care Lead', color: '#2a7a3a' },
  { name: 'Hamza Wahid', role: 'Operations', color: '#6b4226' }
];

const heroImg = 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?w=900';
const storyImg = 'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?w=800';

export default function About() {
  return (
    <main className="min-h-screen bg-[#EFFDF0] text-[#1a3d1a]">
      <PageHeader title="About CozyPaws" subtitle="Built by pet lovers, for pet lovers — since day one." />
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#E86A10]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#E86A10]"><PawPrint size={13} /> Our story</span>
            <h2 className="mt-4 font-serif-display text-3xl leading-tight md:text-4xl">Everything your pet needs, chosen by people who actually live with pets.</h2>
            <p className="mt-4 text-[#1a3d1a]/70">CozyPaws started in a small apartment with one rescue cat and a long list of products that didn’t deliver. We now curate food, beds, toys, and care essentials that pass our own real-world test — and we share what we learn on our blog.</p>
            <p className="mt-3 text-[#1a3d1a]/70">We’re not the biggest pet store. We’re the one we wished existed: honest reviews, clean ingredients, and people who pick up the phone when you need help.</p>
            <Link to="/shop" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1a3d1a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2a5a2a]">Browse our collection <ArrowRight size={16} /></Link>
          </div>
          <div className="order-1 md:order-2"><div className="overflow-hidden rounded-3xl"><Image src={heroImg} alt="Happy dog" className="aspect-[4/3] w-full object-cover" /></div></div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-[#1a3d1a]/10 bg-white p-5 text-center">
              <div className="font-serif-display text-3xl text-[#1a3d1a] md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs font-medium uppercase tracking-wide text-[#1a3d1a]/50">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <h3 className="text-center font-serif-display text-3xl md:text-4xl">What we stand for</h3>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[#1a3d1a]/10 bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#E86A10]/10 text-[#E86A10]"><v.icon size={20} /></div>
                <h4 className="mt-4 text-base font-semibold">{v.title}</h4>
                <p className="mt-1.5 text-sm text-[#1a3d1a]/60">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid items-center gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl"><Image src={storyImg} alt="Pets at CozyPaws" className="aspect-[4/3] w-full object-cover" /></div>
          <div>
            <h3 className="font-serif-display text-3xl md:text-4xl">Meet the team</h3>
            <p className="mt-3 text-[#1a3d1a]/70">Vets, founders, and lifelong pet parents — we argue about the right bed for a Persian cat so you don’t have to.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {team.map((m) => (
                <div key={m.name} className="flex items-center gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-sm font-bold text-white" style={{ backgroundColor: m.color }}>{m.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}</div>
                  <div><div className="text-sm font-semibold">{m.name}</div><div className="text-xs text-[#1a3d1a]/50">{m.role}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-center font-serif-display text-3xl md:text-4xl">Loved by pet parents</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl border border-[#1a3d1a]/10 bg-white p-6">
                <StarRating rating={t.rating} />
                <blockquote className="mt-3 flex-1 text-sm text-[#1a3d1a]/80">“{t.text}”</blockquote>
                <figcaption className="mt-4 border-t border-[#1a3d1a]/10 pt-3"><div className="text-sm font-semibold">{t.name}</div><div className="text-xs text-[#1a3d1a]/50">{t.pet}</div></figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-14 overflow-hidden rounded-3xl bg-[#1a3d1a] px-6 py-12 text-center text-white md:px-12">
          <h3 className="font-serif-display text-3xl md:text-4xl">Give your pet the care they deserve</h3>
          <p className="mx-auto mt-3 max-w-md text-white/70">Join 98,000+ pet parents who shop smarter with CozyPaws.</p>
          <Link to="/shop" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E86A10] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d45e0d]">Start shopping <ArrowRight size={16} /></Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}