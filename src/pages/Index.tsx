import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Results from "@/components/Results";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Process />
      <Services />
      <Portfolio />
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
