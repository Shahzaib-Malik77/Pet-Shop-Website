import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { toast } from 'sonner';

const logo = 'https://polo-pecan-73837341.figma.site/_assets/v11/0ae29d6d9628bede667f90d57bebe81b8f1ec2bf.svg';

const shopLinks = [
  { label: 'Beds & Houses', to: '/shop' },
  { label: 'Food', to: '/shop' },
  { label: 'Toys', to: '/shop' },
  { label: 'Grooming', to: '/shop' },
  { label: 'Travel', to: '/shop' }
];
const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Brands', to: '/brands' },
  { label: 'Blog', to: '/blog' },
  { label: 'Delivery & Payment', to: '/delivery' },
  { label: 'Contact', to: '/contact' }
];

export default function Footer() {
  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Subscribed! Watch your inbox for pet tips and offers.');
    (e.target as HTMLFormElement).reset();
  };
  return (
    <footer className="border-t border-[#1a3d1a]/10 bg-[#1a3d1a] text-[#EFFDF0]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Image src={logo} alt="CozyPaws" className="h-10 w-36 rounded-lg bg-white/80 px-2 py-1" />
            <p className="mt-4 max-w-xs text-sm text-[#EFFDF0]/70">Premium pet care essentials, trusted reviews, and fast delivery — everything your companions love, in one place.</p>
            <div className="mt-5 flex gap-2">
              {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-[#E86A10]"><Icon size={16} /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-[#EFFDF0]/50">Shop</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {shopLinks.map((l) => <li key={l.label}><Link to={l.to} className="text-[#EFFDF0]/75 transition hover:text-[#E86A10]">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-[#EFFDF0]/50">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {companyLinks.map((l) => <li key={l.label}><Link to={l.to} className="text-[#EFFDF0]/75 transition hover:text-[#E86A10]">{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-[#EFFDF0]/50">Stay in the loop</h4>
            <p className="mt-4 text-sm text-[#EFFDF0]/70">Pet tips and member-only offers, twice a month.</p>
            <form onSubmit={subscribe} className="mt-3 flex gap-2">
              <input type="email" required placeholder="Your email" className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#E86A10] focus:outline-none" />
              <button aria-label="Subscribe" className="grid shrink-0 place-items-center rounded-full bg-[#E86A10] px-3.5 text-white transition hover:bg-[#d45e0d]"><ArrowRight size={16} /></button>
            </form>
            <ul className="mt-5 space-y-2 text-sm text-[#EFFDF0]/70">
              <li className="flex items-center gap-2"><Phone size={14} className="text-[#E86A10]" /> +92 300 1234567</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-[#E86A10]" /> hello@cozypaws.com</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-[#E86A10]" /> Karachi, Pakistan</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-[#EFFDF0]/50 sm:flex-row">
          <p>© {new Date().getFullYear()} CozyPaws. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-[#E86A10]">Privacy</a>
            <a href="#" className="transition hover:text-[#E86A10]">Terms</a>
            <a href="#" className="transition hover:text-[#E86A10]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}