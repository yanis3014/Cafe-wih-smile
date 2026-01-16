import Hero from '@/components/sections/Hero';
import MenuGrid from '@/components/sections/MenuGrid';
import RunClub from '@/components/sections/RunClub';
import MerchDrops from '@/components/sections/MerchDrops';
import Location from '@/components/sections/Location';

export default function Home() {
  return (
    <main>
      <Hero />
      <MenuGrid />
      <RunClub />
      <MerchDrops />
      <Location />
    </main>
  );
}
