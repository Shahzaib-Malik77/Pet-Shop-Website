import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ChevronDown, MessageSquare } from 'lucide-react';
import PageHeader from '@/components/cozypaws/PageHeader';
import Footer from '@/components/cozypaws/Footer';
import { toast } from 'sonner';
import { faqs } from '@/lib/petData';

const contactCards = [
  { icon: Phone, title: 'Call us', lines: ['+92 300 1234567', 'Mon–Sat, 9am–8pm'] },
  { icon: Mail, title: 'Email us', lines: ['hello@cozypaws.com', 'We reply within 24h'] },
  { icon: MapPin, title: 'Visit us', lines: ['Plot 12, Pet Lane', 'Karachi, Pakistan'] },
  { icon: Clock, title: 'Delivery hours', lines: ['Daily, 8am–10pm', 'Same-day in metros'] }
];

export default function Contact() {
  const [open, setOpen] = useState<number | null>(0);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! Our team will get back to you shortly.');
    (e.target as HTMLFormElement).reset();
  };
  return (
    <main className="min-h-screen bg-[#EFFDF0] text-[#1a3d1a]">
      <PageHeader title="Contact Us" subtitle="Questions about an order, a product, or your pet? We’re here to help." />
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-[#1a3d1a]/10 bg-white p-5">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#E86A10]/10 text-[#E86A10]"><c.icon size={18} /></div>
              <h3 className="mt-3 text-sm font-semibold">{c.title}</h3>
              {c.lines.map((l) => <p key={l} className="text-sm text-[#1a3d1a]/60">{l}</p>)}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#1a3d1a]/10 bg-white p-6 md:p-8">
            <div className="flex items-center gap-2 text-[#E86A10]"><MessageSquare size={18} /><h2 className="text-lg font-semibold text-[#1a3d1a]">Send us a message</h2></div>
            <form onSubmit={submit} className="mt-5 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name"><input required className="cp-input" placeholder="Your name" /></Field>
                <Field label="Email"><input required type="email" className="cp-input" placeholder="you@email.com" /></Field>
              </div>
              <Field label="Subject"><input className="cp-input" placeholder="How can we help?" /></Field>
              <Field label="Message"><textarea required rows={5} className="cp-input resize-none" placeholder="Tell us a bit more..." /></Field>
              <button className="inline-flex items-center gap-2 rounded-full bg-[#E86A10] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#d45e0d]">Send message <Send size={15} /></button>
            </form>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Frequently asked questions</h2>
            <p className="mt-1 text-sm text-[#1a3d1a]/60">Quick answers to the things pet parents ask us most.</p>
            <div className="mt-5 space-y-3">
              {faqs.map((f, i) => (
                <div key={f.q} className="overflow-hidden rounded-2xl border border-[#1a3d1a]/10 bg-white">
                  <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left">
                    <span className="text-sm font-medium">{f.q}</span>
                    <ChevronDown size={18} className={`shrink-0 text-[#1a3d1a]/50 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden"><p className="px-5 pb-4 text-sm text-[#1a3d1a]/60">{f.a}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="block"><span className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-[#1a3d1a]/50">{label}</span>{children}</label>;
}