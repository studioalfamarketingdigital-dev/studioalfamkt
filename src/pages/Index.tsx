import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Videos from "@/components/Videos";
import Results from "@/components/Results";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import Presence from "@/components/Presence";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { articles } from "@/data/blog";

const LatestArticles = () => (
  <section id="blog" className="bg-[#080808] py-20 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <span className="section-kicker">Blog S.Alfa MKT</span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Conteúdo que transforma <span className="text-gradient">ideias em movimento.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/60">
            Estratégia, marketing, publicidade, tecnologia e negócios para ajudar sua empresa a tomar decisões melhores.
          </p>
        </div>
        <Link to="/blog" className="inline-flex shrink-0 items-center gap-2 font-bold text-primary hover:text-white">
          Ver todos os artigos <ArrowRight size={17} />
        </Link>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((article, index) => (
          <article key={article.slug} className="flex flex-col rounded-2xl border border-white/10 bg-[#121212] p-6 transition hover:-translate-y-1 hover:border-primary/50">
            <div className="flex items-center justify-between gap-3 text-xs text-white/50">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-bold text-primary">{article.category}</span>
              <span className="inline-flex items-center gap-1"><Clock3 size={13} />{article.readTime}</span>
            </div>
            <span className="mt-7 text-xs font-bold uppercase tracking-widest text-white/35">Leitura recomendada {String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 text-xl font-extrabold leading-snug text-white">{article.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{article.description}</p>
            <Link to={`/blog/${article.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-white">
              Ler artigo <ArrowRight size={16} />
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);

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
      <Presence />
      <Ecosystem />
      <LatestArticles />
      <FAQ />
      <CTA />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
