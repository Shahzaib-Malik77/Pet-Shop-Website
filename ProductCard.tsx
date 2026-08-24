import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

const product = 'https://polo-pecan-73837341.figma.site/_assets/v11/3e5158dad63d392ade022e81890edc9f54d750bc.png';

export default function ProductCard({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return <article className={className}>
    <div className="relative overflow-hidden rounded-2xl bg-white" style={{ aspectRatio: compact ? '1 / 1' : '260 / 257' }}>
      <Image src={product} alt="Cozy Cat House" className="h-full w-full object-cover" />
      <Link to="/shop" aria-label="View Cozy Cat House" className="absolute bottom-2 right-2 grid h-9 w-9 place-items-center rounded-full bg-[#1a3d1a] text-white transition-colors hover:bg-[#2a5a2a]"><ArrowUpRight size={18} /></Link>
    </div>
    <div className="mt-2 flex items-center justify-between gap-2 text-[clamp(11px,1vw,15px)]"><span className="text-gray-700">Cozy Cat House</span><strong className="text-[#1a3d1a]">$49.99</strong></div>
  </article>;
}