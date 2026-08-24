import BottomGallery from './BottomGallery';
import HeroTitle from './HeroTitle';
import ProductCard from './ProductCard';
import VideoCard from './VideoCard';

export default function DesktopHero() {
  return <div className="relative hidden h-full w-full overflow-hidden lg:block">
    <div className="px-12 pt-[1.25rem]"><HeroTitle /></div>
    <div className="absolute left-12 top-[50px] z-20 w-[clamp(160px,14vw,260px)]">
      <ProductCard className="animate-slide-in-left delay-600" />
    </div>
    <div className="absolute right-12 top-[50px] z-20 w-[clamp(120px,10vw,177px)]">
      <VideoCard className="animate-slide-in-right delay-700" />
    </div>
    <BottomGallery />
  </div>;
}