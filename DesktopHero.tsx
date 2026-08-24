import BottomGallery from './BottomGallery';
import HeroTitle from './HeroTitle';
import ProductCard from './ProductCard';
import VideoCard from './VideoCard';

export default function DesktopHero() {
  return <div className="relative hidden h-full overflow-hidden lg:block">
    <div className="px-12 pt-[1.25rem]"><HeroTitle /></div>
    <ProductCard className="animate-slide-in-left delay-600 absolute left-12 top-[50px] z-20 w-[clamp(160px,14vw,260px)]" />
    <VideoCard className="animate-slide-in-right delay-700 absolute right-12 top-[50px] z-20 w-[clamp(120px,10vw,177px)]" />
    <BottomGallery />
  </div>;
}