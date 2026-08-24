import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Image } from '@/components/ui/image';

const logo = 'https://polo-pecan-73837341.figma.site/_assets/v11/0ae29d6d9628bede667f90d57bebe81b8f1ec2bf.svg';

export default function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#1a3d1a]/10 bg-[#EFFDF0]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 text-sm font-medium text-[#1a3d1a]/70 transition hover:text-[#1a3d1a]"><ArrowLeft size={16} /> Home</Link>
        <Link to="/" aria-label="CozyPaws home"><Image src={logo} alt="CozyPaws" className="h-[33px] w-[130px] md:h-[44px] md:w-[172px]" /></Link>
        <div className="w-16 md:w-24" />
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-6 pt-2 md:px-8">
        <h1 className="font-serif-display text-3xl leading-tight text-[#1a3d1a] md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-sm text-[#1a3d1a]/70 md:text-base">{subtitle}</p>}
      </div>
    </header>
  );
}