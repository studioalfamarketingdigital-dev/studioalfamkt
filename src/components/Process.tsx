import { MessageSquare, Target, Layers3, TrendingUp } from "lucide-react";

const steps = [
  { number: "01", icon: MessageSquare, title: "Entender o cenário", description: "Conhecemos a empresa, o público, os diferenciais, os desafios e os objetivos comerciais." },
  { number: "02", icon: Target, title: "Definir a direção", description: "Priorizamos oportunidades e desenhamos um plano compatível com a realidade do negócio." },
  { number: "03", icon: Layers3, title: "Colocar em prática", description: "Conectamos estratégia, criação, mídia, conteúdo e tecnologia conforme o escopo definido." },
  { number: "04", icon: TrendingUp, title: "Acompanhar e evoluir", description: "Analisamos indicadores, aprendizados e próximos passos para melhorar continuamente a operação." },
];

const Process = () => (
  <section id="processo" className="relative overflow-hidden bg-[#080808] py-20 sm:py-24">
    <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/[.07] blur-[140px]" />
    <div className="container relative z-10 mx-auto px-4 sm:px-6">
      <div className="mx-auto mb-14 max-w-3xl text-center"><span className="section-kicker">Nosso processo</span><h2 className="section-title mt-4 text-white">Estratégia primeiro. <span className="text-gradient">Execução com propósito.</span></h2><p className="mt-6 text-base leading-relaxed text-white/60">Um caminho transparente para transformar objetivos de negócio em ações de comunicação bem planejadas.</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => <article key={step.number} className="relative rounded-2xl border border-white/10 bg-[#141414] p-6 text-white shadow-[0_12px_35px_rgba(0,0,0,.3)] transition-all hover:-translate-y-1 hover:border-primary/60"><div className="mb-7 flex items-center justify-between"><span className="text-xs font-black tracking-[.2em] text-primary">{step.number}</span><step.icon className="h-6 w-6 text-primary" /></div><h3 className="mb-3 text-lg font-extrabold text-white">{step.title}</h3><p className="text-sm leading-relaxed text-white/65">{step.description}</p></article>)}
      </div>
    </div>
  </section>
);

export default Process;
