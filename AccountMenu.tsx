import { Link } from 'react-router-dom';
import { Heart, Package, LifeBuoy, LogIn, UserPlus } from 'lucide-react';
import { Image } from '@/components/ui/image';

const avatar = 'https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128';

export default function AccountMenu({ open, onClose, onOpenFavorites, onOpenCart }: { open: boolean; onClose: () => void; onOpenFavorites: () => void; onOpenCart: () => void }) {
  if (!open) return null;
  const links = [
    { icon: Heart, label: 'My Favorites', action: onOpenFavorites },
    { icon: Package, label: 'My Cart', action: onOpenCart },
    { icon: Package, label: 'Track Order', to: '/delivery' },
    { icon: LifeBuoy, label: 'Help & Support', to: '/contact' }
  ];
  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="absolute right-0 top-12 z-50 w-60 overflow-hidden rounded-2xl border border-[#1a3d1a]/10 bg-white shadow-xl">
        <div className="flex items-center gap-3 border-b border-[#1a3d1a]/10 p-4">
          <Image src={avatar} alt="Pet owner" className="h-10 w-10 rounded-full object-cover" />
          <div><div className="text-sm font-semibold text-[#1a3d1a]">Welcome back</div><div className="text-xs text-[#1a3d1a]/50">Pet parent</div></div>
        </div>
        <div className="p-2">
          {links.map((it) => it.to ? (
            <Link key={it.label} to={it.to} onClick={onClose} className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-[#1a3d1a]/80 transition hover:bg-[#EFFDF0]"><it.icon size={16} className="text-[#1a3d1a]/50" /> {it.label}</Link>
          ) : (
            <button key={it.label} onClick={() => it.action?.()} className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-[#1a3d1a]/80 transition hover:bg-[#EFFDF0]"><it.icon size={16} className="text-[#1a3d1a]/50" /> {it.label}</button>
          ))}
          <div className="my-1 border-t border-[#1a3d1a]/10" />
          <Link to="/login" onClick={onClose} className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-semibold text-[#E86A10] transition hover:bg-[#EFFDF0]"><LogIn size={16} /> Sign in</Link>
          <Link to="/register" onClick={onClose} className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-[#1a3d1a]/70 transition hover:bg-[#EFFDF0]"><UserPlus size={16} /> Create account</Link>
        </div>
      </div>
    </>
  );
}