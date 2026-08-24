import BottomGallery from './BottomGallery';
import HeroTitle from './HeroTitle';
import ProductCard from './ProductCard';
import VideoCard from './VideoCard';

export default function TabletHero() {
  return <div className="relative hidden h-full w-full overflow-hidden md:block lg:hidden">
    <div className="px-6 pt-8"><HeroTitle tablet /></div>
    <div className="absolute left-4 top-[80px] z-20 w-40">
      <ProductCard className="animate-slide-in-left delay-600" />
    </div>
    <div className="absolute right-4 top-[80px] z-20 w-[120px]">
      <VideoCard className="animate-slide-in-right delay-700" />
    </div>
    <BottomGallery tablet />
  </div>;
}