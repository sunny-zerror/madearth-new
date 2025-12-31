import Hero from "@/components/home/Hero";
import OurClients from "@/components/home/OurClients";
import OurProcess from "@/components/home/OurProcess";
import ServiceSection from "@/components/home/ServiceSection";
import WorkSection from "@/components/home/WorkSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkSection />
      <ServiceSection />
      <OurProcess />
      <OurClients/>
    </>
  );
}
