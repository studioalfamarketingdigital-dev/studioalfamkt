import { Building2, MapPin, Network, Globe2 } from "lucide-react";

const presence = [
  { icon: Building2, title: "Origem e base em Luziânia — GO", text: "Nossa trajetória e estrutura de operação têm origem em Luziânia, Goiás." },
  { icon: MapPin, title: "Atendimento em Brasília — DF", text: "Atendemos empresas e projetos na região de Brasília, conectando planejamento, comunicação, publicidade e soluções digitais." },
  { icon: Globe2, title: "Projetos em diferentes regiões", text: "A operação também atende demandas de outras cidades e estados, com formato presencial ou remoto conforme o projeto." },
  { icon: Network, title: "Rede de especialistas e parceiros", text: "Mobilizamos profissionais e parceiros conforme as competências e necessidades de cada entrega, com coordenação estratégica da S.Alfa." },
];

const Presence = () => (
  <section id="presenca" className="relative overflow-hidden bg-[#101010] py-20 sm:py-24">
    <div className="container relative z-10 mx-auto px-4 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <span className="section-kicker">Onde estamos e como atendemos</span>
        <h2 className="section-title mt-4 text-white">Presença regional. <span className="text-gradient">Visão ampla.</span></h2>
        <p className="mt-6 text-base leading-relaxed text-white/60">Com origem em Luziânia e atendimento também em Brasília, estruturamos projetos de comunicação e marketing para empresas de diferentes portes e segmentos. O formato de atendimento é definido conforme a necessidade de cada operação.</p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {presence.map((item) => (
          <article key={item.title} className="rounded-2xl border border-white/10 bg-[#080808] p-6 sm:p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary"><item.icon size={24} /></div>
            <h3 className="text-lg font-extrabold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{item.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-2xl border border-primary/25 bg-primary/[.06] p-6 sm:p-8">
        <p className="text-xs font-extrabold uppercase tracking-[.18em] text-primary">Desde 2019</p>
        <p className="mt-3 max-w-4xl text-lg font-semibold leading-relaxed text-white sm:text-xl">Uma trajetória construída com comunicação, publicidade, marketing e desenvolvimento de soluções para aproximar empresas, marcas e pessoas.</p>
      </div>
    </div>
  </section>
);

export default Presence;
