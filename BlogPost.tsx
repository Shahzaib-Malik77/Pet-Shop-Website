import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Lightbulb, Tag } from 'lucide-react';
import PageHeader from '@/components/cozypaws/PageHeader';
import Footer from '@/components/cozypaws/Footer';
import { Image } from '@/components/ui/image';
import { toast } from 'sonner';
import { posts } from '@/lib/petData';

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#EFFDF0] text-[#1a3d1a]">
        <PageHeader title="Article" />
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <h2 className="font-serif-display text-3xl">Article not found</h2>
          <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-[#E86A10]">Back to blog <ArrowRight size={16} /></Link>
        </div>
      </main>
    );
  }

  const related = posts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#EFFDF0] text-[#1a3d1a]">
      <PageHeader title="Blog" subtitle="Tips, stories, and guides for happier, healthier pets." />
      <article className="mx-auto max-w-3xl px-4 py-8 md:px-8">
        <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-[#1a3d1a]/60 transition hover:text-[#1a3d1a]"><ArrowLeft size={15} /> All articles</Link>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-[#1a3d1a]/50">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E86A10]/10 px-3 py-1 font-bold uppercase text-[#E86A10]"><Tag size={12} /> {post.category}</span>
          <span className="inline-flex items-center gap-1"><Clock size={13} /> {post.read}</span>
          <span>{post.date}</span>
        </div>

        <h1 className="mt-4 font-serif-display text-3xl leading-tight md:text-4xl">{post.title}</h1>
        <p className="mt-3 text-lg text-[#1a3d1a]/70">{post.excerpt}</p>

        <div className="mt-6 flex items-center gap-3 border-y border-[#1a3d1a]/10 py-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-[#1a3d1a] text-xs font-bold text-white">{post.author[0]}</div>
          <div><div className="text-sm font-semibold">{post.author}</div><div className="text-xs text-[#1a3d1a]/50">CozyPaws Editorial</div></div>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl"><Image src={post.img} alt={post.title} className="aspect-[16/9] w-full object-cover" /></div>

        <p className="mt-7 text-base leading-relaxed text-[#1a3d1a]/80">{post.intro}</p>

        <div className="mt-8 space-y-8">
          {post.sections.map((s, i) => (
            <section key={i}>
              <h2 className="font-serif-display text-xl md:text-2xl">{i + 1}. {s.heading}</h2>
              <p className="mt-2 text-base leading-relaxed text-[#1a3d1a]/80">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-[#E86A10]/30 bg-[#E86A10]/5 p-6">
          <div className="flex items-center gap-2 text-[#E86A10]"><Lightbulb size={18} /><h3 className="text-sm font-bold uppercase tracking-wide">Key takeaway</h3></div>
          <p className="mt-2 font-serif-display text-lg leading-snug">{post.takeaway}</p>
        </div>

        <div className="mt-10 border-t border-[#1a3d1a]/10 pt-8">
          <h3 className="font-serif-display text-2xl">Keep reading</h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {related.map((r) => (
              <Link key={r.id} to={`/blog/${r.id}`} className="group flex gap-3 rounded-2xl border border-[#1a3d1a]/10 bg-white p-3 transition hover:shadow-md">
                <div className="h-20 w-28 shrink-0 overflow-hidden rounded-xl"><Image src={r.img} alt={r.title} className="h-full w-full object-cover" /></div>
                <div className="flex flex-col"><span className="text-[10px] font-bold uppercase tracking-wide text-[#E86A10]">{r.category}</span><span className="mt-1 text-sm font-semibold leading-snug group-hover:text-[#E86A10]">{r.title}</span><span className="mt-auto text-xs text-[#1a3d1a]/50">{r.read}</span></div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-[#1a3d1a] px-6 py-8 text-center text-white">
          <h3 className="font-serif-display text-2xl">Get pet tips like this, twice a month</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-white/70">Join our newsletter for vet-approved guides and member-only offers.</p>
          <button onClick={() => toast.success('Subscribed!')} className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E86A10] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d45e0d]">Subscribe now <ArrowRight size={15} /></button>
        </div>
      </article>
      <Footer />
    </main>
  );
}