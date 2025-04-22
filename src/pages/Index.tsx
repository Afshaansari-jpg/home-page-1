
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-[Inter]">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <WhyUs />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
