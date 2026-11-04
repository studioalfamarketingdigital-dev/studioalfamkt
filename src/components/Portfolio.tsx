import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

const projects = [
  { name: "Suco Supremo", category: "Conteúdo e presença digital", result: "De aproximadamente 700 para 2.000 seguidores e 141 mil acessos orgânicos em 60 dias.", image: "/portfolio/suco-supremo.jpg", alt: "Criativos e conteúdos desenvolvidos para Suco Supremo" },
  { name: "JR Dedetizadora", category: "Presença digital e geração de oportunidades", result: "Projeto com mais de 100 visitas registradas e cerca de 20 clientes conquistados, segundo histórico informado.", image: "/portfolio/jr-dedetizadora.jpg", alt: "Site, campanhas e materiais da JR Dedetizadora" },
];

const Portfolio = () => (
  <section id="portfolio" className="bg-[#080808] py-20 sm:py-24 lg:py-28">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="mb-12 max-w-3xl">
        <span className="section-kicker">Portfólio e projetos</span>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">Trabalho que pode ser <span className="text-gradient">visto e acompanhado</span></h2>
        <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">Alguns exemplos de projetos e indicadores acompanhados pela agência. Cada resultado depende do contexto, período, investimento e execução de cada cliente.</p>
      </div>
      <div className="grid gap-7 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="group overflow-hidden rounded-2xl border border-white bg-white text-[#111] shadow-[0_16px_45px_rgba(0,0,0,.25)]">
            <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary/30">
              <img src={project.image} alt={project.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" onLoad={(event) => { const fallback = event.currentTarget.parentElement?.querySelector("[data-image-fallback]") as HTMLElement | null; if (fallback) fallback.style.display = "none"; }} onError={(event) => { event.currentTarget.style.display = "none"; }} />
              <div data-image-fallback className="relative z-0 px-6 text-center"><ImageIcon className="mx-auto mb-3 h-10 w-10 text-white/60" /><p className="text-xl font-bold text-white">{project.name}</p><p className="mt-1 text-xs text-white/60">Imagem do projeto</p></div>
              <span className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">{project.category}</span>
            </div>
            <div className="p-7">
              <div className="flex items-start justify-between gap-4"><div><h3 className="mb-3 text-2xl font-black text-[#111]">{project.name}</h3><p className="leading-relaxed text-[#555]">{project.result}</p></div><ArrowUpRight className="h-5 w-5 shrink-0 text-primary" /></div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 text-xs text-white/45">Os indicadores apresentados são históricos internos e devem ser associados aos respectivos relatórios e autorizações dos clientes antes de campanhas de divulgação.</p>
    </div>
  </section>
);

export default Portfolio;
