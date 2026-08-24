import BottomGallery from './BottomGallery';
import HeroTitle from './HeroTitle';
import ProductCard from './ProductCard';
import VideoCard from './VideoCard';

export default function TabletHero() {
  return <div className="relative hidden h-full overflow-hidden md:block lg:hidden">
    <div className="px-6 pt-8"><HeroTitle tablet /></div>
    <ProductCard className="animate-slide-in-left delay-600 absolute left-4 top-[80px] z-20 w-40" />
    <VideoCard className="animate-slide-in-right delay-700 absolute right-4 top-[80px] z-20 w-[120px]" />
    <BottomGallery tablet />
  </div>;
}