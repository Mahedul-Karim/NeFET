import CTA from "@/components/home/CTA";
import Featured from "@/components/home/Featured";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Features />
      <Stats />
      <CTA />
    </>
  );
}
