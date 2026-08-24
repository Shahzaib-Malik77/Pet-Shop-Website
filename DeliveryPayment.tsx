import { CreditCard, Truck, Wallet, ShieldCheck, Clock, MapPin } from 'lucide-react';
import PageHeader from '@/components/cozypaws/PageHeader';
import Footer from '@/components/cozypaws/Footer';

const shipping = [
  { title: 'Standard Delivery', time: '3–5 business days', price: '$4.99', note: 'Free over $50' },
  { title: 'Express Delivery', time: '1–2 business days', price: '$9.99', note: 'Order before 2pm' },
  { title: 'Same-Day (Karachi)', time: 'Within 6 hours', price: '$14.99', note: 'Selected areas' }
];

const payments = [
  { name: 'Credit / Debit Cards', icon: CreditCard, desc: 'Visa, Mastercard, Amex — secure 256-bit encryption.' },
  { name: 'Cash on Delivery', icon: Wallet, desc: 'Pay in cash when your order arrives at your door.' },
  { name: 'Digital Wallets', icon: ShieldCheck, desc: 'JazzCash, Easypaisa, Apple Pay and Google Pay.' }
];

const faqs = [
  { q: 'Do you ship nationwide?', a: 'Yes — we deliver to all major cities across Pakistan. Remote areas may take 1–2 extra days.' },
  { q: 'What is your return policy?', a: 'Unused items can be returned within 14 days for a full refund. Food and grooming products are non-returnable once opened.' },
  { q: 'Is my payment secure?', a: 'All card payments are processed through PCI-compliant gateways. We never store your card details.' },
  { q: 'Can I track my order?', a: 'Absolutely. A tracking link is sent by SMS and email the moment your order ships.' }
];

export default function DeliveryPayment() {
  return (
    <main className="min-h-screen bg-[#EFFDF0] text-[#1a3d1a]">
      <PageHeader title="Delivery & Payment" subtitle="Fast, reliable shipping and flexible payment options across Pakistan." />
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <section className="mb-10">
          <h2 className="mb-4 flex items-center gap-2 font-serif-display text-2xl"><Truck size={20} className="text-[#E86A10]" /> Shipping Options</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {shipping.map((s) => (
              <div key={s.title} className="rounded-2xl border border-[#1a3d1a]/10 bg-white p-5">
                <div className="flex items-center gap-2 text-[#1a3d1a]/60"><Clock size={16} /><span className="text-xs font-medium">{s.time}</span></div>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <strong className="text-2xl text-[#E86A10]">{s.price}</strong>
                <p className="mt-1 text-sm text-[#1a3d1a]/50">{s.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 flex items-center gap-2 font-serif-display text-2xl"><Wallet size={20} className="text-[#E86A10]" /> Payment Methods</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {payments.map((p) => (
              <div key={p.name} className="rounded-2xl border border-[#1a3d1a]/10 bg-white p-5">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-full bg-[#1a3d1a] text-white"><p.icon size={18} /></div>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-[#1a3d1a]/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 rounded-2xl bg-[#1a3d1a] p-6 text-[#EFFDF0] md:p-8">
          <h2 className="flex items-center gap-2 font-serif-display text-2xl text-white"><MapPin size={20} className="text-[#E86A10]" /> Where We Deliver</h2>
          <p className="mt-2 max-w-2xl text-sm text-[#EFFDF0]/70">Nationwide coverage with hubs in Karachi, Lahore, and Islamabad. Same-day delivery available in selected areas of Karachi.</p>
        </section>

        <section>
          <h2 className="mb-4 font-serif-display text-2xl">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-[#1a3d1a]/10 bg-white p-4">
                <summary className="cursor-pointer list-none font-medium">{f.q}</summary>
                <p className="mt-2 text-sm text-[#1a3d1a]/60">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}