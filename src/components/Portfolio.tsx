import { ArrowUpRight, Image as ImageIcon } from "lucide-react";

const projects = [
  {
    name: "Suco Supremo",
    category: "Conteúdo e presença digital",
    result: "De aproximadamente 700 para 2.000 seguidores e 141 mil acessos orgânicos em 60 dias.",
    image: "/portfolio/suco-supremo.jpg",
    alt: "Criativos e conteúdos desenvolvidos para Suco Supremo",
  },
  {
    name: "JR Dedetizadora",
    category: "Presença digital e geração de oportunidades",
    result: "Projeto com mais de 100 visitas registradas e cerca de 20 clientes conquistados, segundo histórico informado.",
    image: "/portfolio/jr-dedetizadora.jpg",
    alt: "Site, campanhas e materiais da JR Dedetizadora",
  },
];

const Portfolio = () => (
  <section id="portfolio" className="py-24 bg-secondary/20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mb-12">
        <span className="text-primary font-semibold uppercase tracking-wider text-sm">Portfólio e projetos</span>
        <h2 className="text-3xl md:text-5xl font-black mt-4 mb-5">Trabalho que pode ser <span className="text-gradient">visto e acompanhado</span></h2>
        <p className="text-muted-foreground text-lg">Alguns exemplos de projetos e indicadores acompanhados pela agência. Cada resultado depende do contexto, período, investimento e execução de cada cliente.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-7">
        {projects.map((project) => (
          <article key={project.name} className="group overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative aspect-[16/9] bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary/30 flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                onLoad={(event) => {
                  const fallback = event.currentTarget.parentElement?.querySelector("[data-image-fallback]") as HTMLElement | null;
                  if (fallback) fallback.style.display = "none";
                }}
                onError={(event) => { event.currentTarget.style.display = "none"; }}
              />
              <div data-image-fallback className="relative z-0 text-center px-6">
                <ImageIcon className="w-10 h-10 text-white/60 mx-auto mb-3" />
                <p className="text-white font-bold text-xl">{project.name}</p>
                <p className="text-white/60 text-xs mt-1">Adicione a imagem real do projeto em public/portfolio/</p>
              </div>
              <span className="absolute top-4 left-4 rounded-full bg-black/60 text-white text-xs px-3 py-1">{project.category}</span>
            </div>
            <div className="p-7">
              <div className="flex items-start justify-between gap-4">
                <div><h3 className="text-2xl font-black mb-3">{project.name}</h3><p className="text-muted-foreground leading-relaxed">{project.result}</p></div>
                <ArrowUpRight className="w-5 h-5 text-primary shrink-0" />
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-6">Os indicadores apresentados são históricos internos e devem ser associados aos respectivos relatórios e autorizações dos clientes antes de campanhas de divulgação.</p>
    </div>
  </section>
);

export default Portfolio;
