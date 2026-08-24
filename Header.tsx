import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Star } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { useShop } from '@/lib/shopStore';
import SearchOverlay from './SearchOverlay';
import CartDrawer from './CartDrawer';
import FavoritesDrawer from './FavoritesDrawer';
import AccountMenu from './AccountMenu';

const logo = 'https://polo-pecan-73837341.figma.site/_assets/v11/0ae29d6d9628bede667f90d57bebe81b8f1ec2bf.svg';
const avatar = 'https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128';
const nav = ['Home', 'Shop', 'Delivery and payment', 'Brands', 'Blog', 'About', 'Contact'] as const;
const routes: Record<string, string> = { 'Home': '/', 'Shop': '/shop', 'Delivery and payment': '/delivery', 'Brands': '/brands', 'Blog': '/blog', 'About': '/about', 'Contact': '/contact' };

type Panel = 'search' | 'favorites' | 'cart' | 'account' | null;

function IconButton({ label, onClick, orange = false, badge, children }: { label: string; onClick: () => void; orange?: boolean; badge?: number; children: React.ReactNode }) {
  return (
    <button onClick={onClick} aria-label={label} className={`relative grid h-10 w-10 place-items-center rounded-full border transition-transform hover:scale-105 ${orange ? 'border-[#E86A10] bg-[#E86A10] text-white hover:bg-[#d45e0d]' : 'border-[#1a3d1a]/20 text-[#1a3d1a] hover:bg-white/70'}`}>
      {children}
      {badge != null && badge > 0 && <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-[#EFFDF0] bg-[#E86A10] text-[10px] font-bold text-white">{badge}</span>}
    </button>
  );
}

export default function Header() {
  const { cartCount, wishlistCount } = useShop();
  const [panel, setPanel] = useState<Panel>(null);
  const loc = useLocation();
  useEffect(() => setPanel(null), [loc.pathname]);
  const toggle = (p: Exclude<Panel, null>) => setPanel((cur) => (cur === p ? null : p));
  const close = () => setPanel(null);

  return (
    <>
      <header className="relative z-30 flex shrink-0 items-center justify-between px-4 py-4 md:px-6 lg:px-12">
        <Link to="/" aria-label="CozyPaws home" className="animate-fade-in delay-100"><Image src={logo} alt="CozyPaws" className="block h-[33px] w-[130px] bg-white/60 rounded-lg px-1 py-0.5 md:h-[52px] md:w-[205px] md:px-2 md:py-1" /></Link>
        <nav className="animate-fade-in delay-200 hidden items-center gap-5 text-sm font-medium md:flex lg:gap-8">{nav.map((item) => <Link key={item} to={routes[item]} className={`transition-colors hover:text-[#1a3d1a] ${item === 'Home' ? 'text-[#1a3d1a]' : 'text-[#1a3d1a]/60'}`}>{item}</Link>)}</nav>
        <div className="animate-fade-in delay-300 flex items-center gap-2 md:gap-3">
          <span className="hidden sm:block"><IconButton label="Search" onClick={() => toggle('search')}><Search size={18} /></IconButton></span>
          <IconButton label="Favorites" orange badge={wishlistCount} onClick={() => toggle('favorites')}><Star size={18} fill="currentColor" /></IconButton>
          <IconButton label="Cart" badge={cartCount} onClick={() => toggle('cart')}><ShoppingCart size={18} /></IconButton>
          <div className="relative">
            <button onClick={() => toggle('account')} aria-label="Account" className="rounded-full transition-transform hover:scale-105"><Image src={avatar} alt="Pet owner profile" className="h-10 w-10 rounded-full object-cover ring-2 ring-transparent transition hover:ring-[#E86A10]" /></button>
            <AccountMenu open={panel === 'account'} onClose={close} onOpenFavorites={() => setPanel('favorites')} onOpenCart={() => setPanel('cart')} />
          </div>
        </div>
      </header>
      <SearchOverlay open={panel === 'search'} onClose={close} />
      <FavoritesDrawer open={panel === 'favorites'} onClose={close} />
      <CartDrawer open={panel === 'cart'} onClose={close} />
    </>
  );
}