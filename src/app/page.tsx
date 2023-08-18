import Hero from "@/components/Hero/Hero";
import Process from "@/components/Process/Process";
import Invest from "@/components/Invest/Invest";
import MarqueeComponent from "@/components/Marquee/Marquee";
import WhyUs from "@/components/WhyUs/WhyUs";
import Repairs from "@/components/Repairs/Repairs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <MarqueeComponent />
      <Invest />
      <WhyUs />
      <Repairs />
    </main>
  );
}
