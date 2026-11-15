import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { articles, findArticle } from "@/data/blog";

const Article = () => {
  const { slug = "" } = useParams();
  const article = findArticle(slug);

  if (!article) {
    return <div className="min-h-screen bg-[#080808] text-white"><Header/><main className="container mx-auto px-4 pt-40 pb-24"><h1 className="text-4xl font-black">Artigo não encontrado</h1><Link className="mt-6 inline-flex text-primary" to="/blog">Voltar ao blog</Link></main><Footer/></div>;
  }

  const related = articles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 2);

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <SEO title={`${article.title} | Blog S.Alfa MKT`} description={article.description} path={`/blog/${article.slug}`} type="article" />
      <Header />
      <main className="bg-[#080808] pt-32 pb-20">
        <article className="container mx-auto max-w-4xl px-4 sm:px-6">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white"><ArrowLeft size={16}/> Todos os artigos</Link>
          <header className="mt-9 border-b border-white/10 pb-9">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{article.category}</span>
            <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-5xl">{article.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-white/65">{article.description}</p>
            <div className="mt-6 flex items-center gap-2 text-xs text-white/45"><Clock3 size={14}/>{article.readTime} de leitura <span>·</span> S.Alfa MKT</div>
          </header>
          <div className="prose prose-invert prose-lg mt-9 max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-primary prose-strong:text-white">
            <p className="text-xl leading-relaxed text-white/85">{article.intro}</p>
            {article.sections.map((section) => (
              <section key={section.heading} className="mt-10">
                <h2 className="text-2xl font-extrabold text-white">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 text-base leading-8 text-white/70">{paragraph}</p>)}
                {section.bullets && <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-white/70">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
              </section>
            ))}
          </div>
          <aside className="mt-14 rounded-2xl border border-primary/25 bg-[#151515] p-7 sm:p-9">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-primary">S.Alfa MKT</p>
            <h2 className="mt-3 text-2xl font-black">Sua empresa precisa de uma estratégia conectada?</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/65">Vamos entender seu cenário e identificar oportunidades em comunicação, marketing, publicidade e presença digital.</p>
            <a href="https://wa.me/5561992380077?text=Olá! Li um artigo no blog e quero conversar sobre minha empresa." className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-white">Converse com a S.Alfa <ArrowRight size={16}/></a>
          </aside>
          {related.length > 0 && <div className="mt-14"><h2 className="text-xl font-extrabold">Continue lendo</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{related.map((item) => <Link key={item.slug} to={`/blog/${item.slug}`} className="rounded-xl border border-white/10 bg-[#121212] p-5 hover:border-primary/50"><span className="text-xs font-bold text-primary">{item.category}</span><h3 className="mt-2 font-bold">{item.title}</h3><span className="mt-3 inline-flex items-center gap-2 text-xs text-white/50">Ler artigo <ArrowRight size={13}/></span></Link>)}</div></div>}
          <div className="mt-12 border-t border-white/10 pt-7"><p className="text-xs font-bold uppercase tracking-widest text-white/40">Temas relacionados</p><div className="mt-3 flex flex-wrap gap-2">{article.keywords.map((keyword) => <span key={keyword} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/55">{keyword}</span>)}</div></div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
