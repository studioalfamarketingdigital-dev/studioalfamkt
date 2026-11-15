import { Link } from "react-router-dom";
import { ArrowRight, Clock3, BookOpen, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { articles } from "@/data/blog";

const Blog = () => (
  <div className="min-h-screen bg-[#080808] text-white">
    <SEO title="Blog S.Alfa MKT | Marketing, publicidade, SEO e negócios" description="Conteúdos práticos sobre marketing, publicidade, SEO, tráfego pago, sites e estratégia para empresas que querem crescer." path="/blog" />
    <Header />
    <main className="min-h-screen bg-[#080808] pt-32 pb-20">
      <section className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <span className="section-kicker">Conhecimento que movimenta negócios</span>
          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Ideias, estratégia e <span className="text-gradient">crescimento.</span></h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">Artigos da S.Alfa MKT sobre marketing, comunicação, presença digital e decisões que ajudam empresas a avançar.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article key={article.slug} className="group flex flex-col rounded-2xl border border-white/10 bg-[#121212] p-6 transition hover:border-primary/50 hover:-translate-y-1">
              <div className="flex items-center justify-between gap-3 text-xs text-white/55"><span className="rounded-full bg-primary/10 px-3 py-1 font-bold text-primary">{article.category}</span><span className="flex items-center gap-1"><Clock3 size={13}/>{article.readTime} de leitura</span></div>
              <div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/35"><BookOpen size={14}/> Artigo {String(index + 1).padStart(2,"0")}</div>
              <h2 className="mt-4 text-xl font-extrabold leading-snug">{article.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">{article.description}</p>
              <Link to={`/blog/${article.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-white">Ler artigo <ArrowRight size={16}/></Link>
            </article>
          ))}
        </div>
        <div className="mt-14 rounded-2xl border border-primary/25 bg-[#151515] p-7 sm:p-9">
          <div className="flex items-start gap-4"><Search className="mt-1 text-primary" size={24}/><div><h2 className="text-xl font-extrabold">Quer aplicar essas ideias na sua empresa?</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">Converse com a S.Alfa MKT para entender quais frentes de comunicação, marketing e presença digital fazem sentido para o seu momento.</p><a className="mt-5 inline-flex font-bold text-primary hover:text-white" href="https://wa.me/5561992380077?text=Olá! Quero conversar sobre marketing para minha empresa.">Falar com um especialista <ArrowRight className="ml-2" size={16}/></a></div></div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Blog;
