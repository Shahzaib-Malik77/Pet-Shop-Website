import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Image } from '@/components/ui/image';

const video = 'https://polo-pecan-73837341.figma.site/_assets/v11/76be6ec3a93a703b15e9cc01e764a4e3f9d7d2c0.png';

export default function VideoCard({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return <article className={`relative overflow-hidden rounded-2xl ${className}`} style={{ aspectRatio: compact ? '3 / 4' : '177 / 287' }}>
    <Image src={video} alt="CozyPaws product review" className="h-full w-full object-cover" />
    <div className="absolute inset-x-2 bottom-3 flex flex-col items-center text-center text-white">
      <Link to="/blog" aria-label="Watch product reviews" className="mb-2 grid h-9 w-9 place-items-center rounded-full bg-[#1a3d1a] transition-transform hover:scale-105"><Play size={16} fill="currentColor" /></Link>
      <p className="max-w-[145px] text-[clamp(9px,.8vw,12px)] font-medium leading-tight">Watch Product Reviews on TikTok and YouTube</p>
    </div>
  </article>;
}