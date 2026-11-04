import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Videos from "@/components/Videos";
import Results from "@/components/Results";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-[#080808] text-white">
    <Header />
    <main className="bg-[#080808]">
      <Hero />
      <Process />
      <Services />
      <Videos />
      <Results />
      <About />
      <FAQ />
      <CTA />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
