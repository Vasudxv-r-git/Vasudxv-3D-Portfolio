import { Hero } from "@/components/main/hero";
import { Pillars } from "@/components/main/pillars";
import { Stats } from "@/components/main/stats";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-0">
        <Hero />
        <Pillars />
        <Stats />
      </div>
    </main>
  );
}
