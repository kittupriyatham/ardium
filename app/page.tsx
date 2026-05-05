import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Retail from "@/components/Retail";
import Luxury from "@/components/Luxury";
import Dining from "@/components/Dining";
import Entertainment from "@/components/Entertainment";
import Events from "@/components/Events";
import Sponsorship from "@/components/Sponsorship";
import Leasing from "@/components/Leasing";
import CTA from "@/components/CTA";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Why />
      <Retail />
      <Luxury />
      <Dining />
      <Entertainment />
      <Events />
      <Sponsorship />
      <Leasing />
      <CTA />
    </main>
  );
}
