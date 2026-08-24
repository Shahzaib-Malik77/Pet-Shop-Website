import { Link } from 'react-router-dom';
import { ArrowRight, Plus, Star } from 'lucide-react';
import { Image } from '@/components/ui/image';
import ProductCard from './ProductCard';
import VideoCard from './VideoCard';

const avatar = 'https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128';
const photos = ['https://polo-pecan-73837341.figma.site/_assets/v11/8d44b25186ef45a5789c74668fb781cea4e1ff49.png','https://polo-pecan-73837341.figma.site/_assets/v11/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024','https://polo-pecan-73837341.figma.site/_assets/v11/81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png'];

export default function MobileHero() {
  return <div className="flex h-full w-full flex-col overflow-hidden px-4 md:hidden">
    <div className="animate-fade-up delay-200 shrink-0 text-center"><h1 className="font-serif-display text-4xl leading-tight text-[#1a3d1a]">Everything<br />Your Pets Love</h1><p className="mx-auto mt-2 max-w-xs text-sm font-medium text-[#1a3d1a]">Thoughtful essentials for happier, cozier pets.</p><Link to="/shop" className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#E86A10] px-5 py-2.5 text-xs font-semibold text-white hover:bg-[#d45e0d]">Explore Products <ArrowRight size={14} /></Link></div>
    <div className="mt-3 flex h-[25vh] shrink-0 items-start justify-center gap-3"><ProductCard compact className="animate-slide-in-left delay-600 w-[42%]" /><VideoCard compact className="animate-slide-in-right delay-700 h-full" /></div>
    <div className="animate-scale-in delay-1000 my-2 flex shrink-0 items-center justify-center gap-5"><div className="flex items-center gap-2"><strong className="text-xl">98K+</strong><div className="flex -space-x-2"><Image src={avatar} alt="Happy customer" className="h-7 w-7 rounded-full border-2 border-[#EFFDF0]" /><span className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#EFFDF0] bg-[#1a3d1a] text-white"><Plus size={12} /></span></div></div><span className="h-7 w-px bg-[#1a3d1a]/20" /><div className="flex items-center gap-2"><strong className="text-xl">4.6</strong><Star size={20} className="fill-[#E86A10] text-[#E86A10]" /></div></div>
    <div className="flex min-h-0 flex-1 items-end -mx-4">{photos.map((src, i) => <div key={src} className={`relative ${i === 1 ? 'flex-[1.265] delay-600' : `flex-1 ${i === 0 ? 'delay-800' : 'delay-900'}`} animate-photo-reveal flex h-full items-end`}><Image src={src} alt="CozyPaws pet lifestyle" className="max-h-full w-full object-contain object-bottom" /><div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" /></div>)}</div>
  </div>;
}