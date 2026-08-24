import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus, Star } from 'lucide-react';
import { Image } from '@/components/ui/image';

const photos = [
  'https://polo-pecan-73837341.figma.site/_assets/v11/8d44b25186ef45a5789c74668fb781cea4e1ff49.png',
  'https://polo-pecan-73837341.figma.site/_assets/v11/96745c4e72ad5c5208e53a885df797fd82cd854a.png?h=1024',
  'https://polo-pecan-73837341.figma.site/_assets/v11/81bd2e7a66b58f3d8f3ad78fd1ebf01af8dfdee1.png'
];
const avatar = 'https://polo-pecan-73837341.figma.site/_assets/v11/e62173d41f91350a59628e8a9a55ae078a886fb9.png?w=128';

export default function BottomGallery({ tablet = false }: { tablet?: boolean }) {
  const heights = tablet ? ['max-h-[60vh]', 'max-h-[75vh]', 'max-h-[60vh]'] : ['max-h-[min(70vh,55vw)]', 'max-h-[min(85vh,70vw)]', 'max-h-[min(70vh,55vw)]'];
  return <div id="products" className="absolute inset-x-0 bottom-0 z-10 flex items-end">
    {photos.map((src, i) => <div key={src} className={`relative overflow-hidden ${i === 1 ? 'flex-[1.265] animate-photo-reveal delay-600' : `flex-1 animate-photo-reveal ${i === 0 ? 'delay-800' : 'delay-900'}`}`}>
      <Image src={src} alt={['Happy dog with CozyPaws products', 'Dog enjoying CozyPaws essentials', 'Relaxed cat with CozyPaws products'][i]} className={`block h-auto w-full ${heights[i]}`} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      {i === 0 && <div className="animate-scale-in delay-1000 absolute bottom-[clamp(20px,4vh,50px)] left-[8%] flex items-center gap-3 text-white"><strong className="text-[clamp(24px,3vw,48px)]">98K+</strong><div className="flex -space-x-2"><Image src={avatar} alt="Happy customer" className="h-9 w-9 rounded-full border-2 border-white" /><span className="grid h-9 w-9 place-items-center rounded-full border-2 border-white bg-[#1a3d1a]"><Plus size={16} /></span></div></div>}

      {i === 2 && <div className="animate-scale-in delay-1200 absolute bottom-[clamp(20px,4vh,50px)] right-[12%] flex items-center gap-2 text-white"><strong className="text-[clamp(26px,3vw,48px)]">4.6</strong><Star className="fill-[#E86A10] text-[#E86A10]" size={28} /></div>}
    </div>)}
  </div>;
}