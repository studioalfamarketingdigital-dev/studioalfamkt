import { ArrowUpRight, GraduationCap, MapPinned } from "lucide-react";

const platforms = [
  {
    name: "ELEV Ensino Digital",
    category: "EDUCAÇÃO DIGITAL",
    description: "Plataforma de aprendizado online com cursos livres, aulas, atividades, avaliações, acompanhamento de progresso e certificados digitais.",
    href: "https://elev.studioalfamkt.online/",
    icon: GraduationCap,
    label: "Conhecer a ELEV",
  },
  {
    name: "MídiaMap",
    category: "TECNOLOGIA DE MÍDIA",
    description: "Plataforma dedicada à descoberta, organização e planejamento de oportunidades de mídia exterior, OOH e DOOH.",
    href: "https://midiamap.studioalfamkt.online/",
    icon: MapPinned,
    label: "Conhecer o MídiaMap",
  },
];

const Ecosystem = () => (
  <section id="ecossistema" className="bg-[#080808] py-20 sm:py-24">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-3xl">
        <span className="section-kicker">Ecossistema S.Alfa</span>
        <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
          Estratégia que também se transforma em <span className="text-gradient">produtos digitais.</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/60 sm:text-lg">
          Além dos projetos desenvolvidos para clientes, criamos e estruturamos plataformas próprias em diferentes áreas. Cada produto tem sua identidade e proposta, conectado à visão de tecnologia, comunicação e negócios da S.Alfa MKT.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {platforms.map((platform) => {
          const Icon = platform.icon;
          return (
            <article key={platform.name} className="group rounded-2xl border border-white/10 bg-[#121212] p-7 transition hover:-translate-y-1 hover:border-primary/50 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={25} />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-bold tracking-[.14em] text-white/50">{platform.category}</span>
              </div>
              <h3 className="mt-7 text-2xl font-black text-white">{platform.name}</h3>
              <p className="mt-3 min-h-20 text-sm leading-relaxed text-white/60">{platform.description}</p>
              <a href={platform.href} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-primary transition group-hover:text-white">
                {platform.label} <ArrowUpRight size={16} />
              </a>
            </article>
          );
        })}
      </div>
      <p className="mt-6 text-xs text-white/35">Plataformas desenvolvidas no ecossistema S.Alfa MKT. Cada produto possui operação, escopo e canais próprios.</p>
    </div>
  </section>
);

export default Ecosystem;
