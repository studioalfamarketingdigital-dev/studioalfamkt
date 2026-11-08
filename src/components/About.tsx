import { CheckCircle } from "lucide-react";
import logoAlfa from "@/assets/logo-alfa.png";

const principles = [
  "Planejamento alinhado aos objetivos do negócio",
  "Comunicação integrada no digital e no offline",
  "Criação com estratégia e intenção",
  "Acompanhamento claro das ações realizadas",
  "Soluções adequadas à realidade de cada empresa",
  "Relacionamento próximo e transparente",
];

const About = () => (
  <section id="sobre" className="relative overflow-hidden bg-[#080808] py-20 sm:py-24 lg:py-28">
    <div className="pointer-events-none absolute -right-32 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-primary/10 blur-[130px]" />
    <div className="container relative z-10 mx-auto px-4 sm:px-6">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
        <div>
          <span className="section-kicker">Quem somos</span>
          <h2 className="section-title mt-4">Não somos apenas fornecedores. Somos parte da <span className="text-gradient">sua estratégia.</span></h2>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">A S.Alfa MKT é um hub de comunicação, marketing e publicidade 360°. Integramos diferentes especialidades, parceiros, canais e tecnologias em uma estrutura coordenada para atender empresas e marcas no Brasil e no exterior. Há mais de 7 anos, conectamos estratégia, criatividade e execução.</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Mais do que entregar serviços isolados, conectamos as frentes necessárias para cada projeto: estratégia, marca, campanhas, mídia, conteúdo, audiovisual, soluções digitais e tecnologia. Nosso trabalho começa entendendo o negócio, o público e a jornada de compra — e só então desenhamos a operação.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {principles.map((item) => <div key={item} className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="text-sm leading-relaxed text-foreground/85">{item}</span></div>)}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2rem] bg-primary/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010] p-8 shadow-2xl sm:p-12">
            <img src={logoAlfa} alt="S.Alfa MKT" className="mx-auto h-auto w-full max-w-[260px] object-contain" />
            <div className="mt-9 border-t border-white/10 pt-7 text-center"><p className="text-2xl font-black text-white">S.Alfa MKT</p><p className="mt-2 text-xs font-bold uppercase tracking-[.2em] text-primary">Comunicação que movimenta negócios</p></div>
            <div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/[.04] p-4"><p className="text-2xl font-black text-white">7<span className="text-primary">+</span></p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/45">Anos de atuação</p></div><div className="rounded-xl bg-white/[.04] p-4"><p className="text-2xl font-black text-white">360<span className="text-primary">°</span></p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/45">Visão integrada</p></div><div className="col-span-2 rounded-xl border border-primary/25 bg-primary/[.08] p-4"><p className="text-2xl font-black text-white">+R$ 10 milhões</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/55">Em faturamento gerado para nossos clientes</p></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
