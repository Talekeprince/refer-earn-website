import Image from "next/image";
import Header from "@/components/Header";
import StatsComponent from "@/components/StatsComponent";
import Plans from "@/components/Plans";
import Contact from "@/components/Contact";
import FlexComponent from "@/components/FlexComponent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <StatsComponent />
      <Plans />
      <FlexComponent />
      <Contact />
      <Footer />
    </div>
  );
}
