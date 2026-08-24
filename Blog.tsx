import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/cozypaws/PageHeader';
import Footer from '@/components/cozypaws/Footer';
import { Image } from '@/components/ui/image';
import { posts } from '@/lib/petData';

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#EFFDF0] text-[#1a3d1a]">
      <PageHeader title="Blog" subtitle="Tips, stories, and guides for happier, healthier pets." />
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.id} to={`/blog/${p.id}`} className="group grid overflow-hidden rounded-2xl border border-[#1a3d1a]/10 bg-white sm:grid-cols-2">
              <div className="aspect-[16/10] overflow-hidden bg-[#EFFDF0] sm:aspect-auto">
                <Image src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="flex flex-col p-5">
                <div className="flex items-center gap-3 text-xs text-[#1a3d1a]/50">
                  <span className="rounded-full bg-[#E86A10]/10 px-2.5 py-1 font-bold uppercase text-[#E86A10]">{p.category}</span>
                  <span className="flex items-center gap-1"><Clock size={13} /> {p.read}</span>
                </div>
                <h3 className="mt-3 font-serif-display text-xl leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-[#1a3d1a]/60">{p.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-semibold text-[#1a3d1a] transition group-hover:text-[#E86A10]">Read article <ArrowRight size={15} /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}