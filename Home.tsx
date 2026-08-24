import Header from '@/components/cozypaws/Header';
import DesktopHero from '@/components/cozypaws/DesktopHero';
import TabletHero from '@/components/cozypaws/TabletHero';
import MobileHero from '@/components/cozypaws/MobileHero';

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-[#EFFDF0] text-[#1a3d1a]">
      <Header />
      <section className="relative flex h-[calc(100vh-65px)] flex-1 flex-col overflow-hidden md:h-[calc(100vh-84px)]">
        <DesktopHero />
        <TabletHero />
        <MobileHero />
      </section>
    </main>
  );
}