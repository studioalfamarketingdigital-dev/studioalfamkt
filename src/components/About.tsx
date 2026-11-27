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
          <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">A S.Alfa MKT é uma empresa de comunicação, marketing, publicidade e tecnologia, no mercado desde 2019. Com origem em Luziânia, Goiás, e atendimento também em Brasília, Distrito Federal, desenvolvemos projetos para empresas que precisam organizar sua presença de marca, fortalecer sua comunicação, ampliar oportunidades comerciais e conectar canais digitais e tradicionais. Nossa atuação combina visão estratégica, planejamento, criação, mídia, produção audiovisual, desenvolvimento digital e tecnologia.</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">Trabalhamos com uma visão integrada: entendemos o modelo de negócio, o mercado, o público, a jornada de compra e os objetivos comerciais antes de definir canais e formatos. A partir desse diagnóstico, estruturamos o plano, coordenamos as especialidades necessárias, acompanhamos a execução e avaliamos os indicadores. As entregas podem ser realizadas por equipe interna e por uma rede de especialistas e parceiros, conforme o escopo de cada projeto. Isso permite reunir competências diferentes sob uma direção estratégica, sem prometer estruturas que não correspondam à realidade de cada contrato.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {principles.map((item) => <div key={item} className="flex items-start gap-3"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><span className="text-sm leading-relaxed text-foreground/85">{item}</span></div>)}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2rem] bg-primary/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#101010] p-8 shadow-2xl sm:p-12">
            <img src={logoAlfa} alt="S.Alfa MKT" className="mx-auto h-auto w-full max-w-[260px] object-contain" />
            <div className="mt-9 border-t border-white/10 pt-7 text-center"><p className="text-2xl font-black text-white">S.Alfa MKT</p><p className="mt-2 text-xs font-bold uppercase tracking-[.2em] text-primary">Comunicação que movimenta negócios</p></div>
            <div className="mt-8 grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/[.04] p-4"><p className="text-2xl font-black text-white">2019</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/45">No mercado desde</p></div><div className="rounded-xl bg-white/[.04] p-4"><p className="text-2xl font-black text-white">360<span className="text-primary">°</span></p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/45">Visão integrada</p></div><div className="col-span-2 rounded-xl border border-primary/25 bg-primary/[.08] p-4"><p className="text-xl font-black text-white">Múltiplas especialidades</p><p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-white/55">Integradas em uma mesma direção estratégica</p></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
