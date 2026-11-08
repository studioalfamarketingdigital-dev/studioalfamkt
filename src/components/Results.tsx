import { Target, Radio, Video, Clock, ArrowUpRight } from "lucide-react";

const pillars = [
  { icon: Target, value: "Estratégia", label: "Objetivos claros antes de escolher canais e formatos." },
  { icon: Radio, value: "360°", label: "Digital, mídia e publicidade conectados em uma só visão." },
  { icon: Video, value: "Criação", label: "Conteúdo e campanhas com identidade e intenção." },
  { icon: Clock, value: "7+ anos", label: "Experiência acumulada em comunicação e marketing." },
];

const Results = () => (
  <section id="resultados" className="relative overflow-hidden bg-[#080808] py-20 sm:py-24 lg:py-28">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(0_82%_52%/.09),transparent_65%)]" />
    <div className="container relative z-10 mx-auto px-4 sm:px-6">
      <div className="mx-auto mb-14 max-w-3xl text-center"><span className="section-kicker">Como pensamos</span><h2 className="section-title mt-4 text-white">Marketing não é um conjunto de posts. É uma <span className="text-gradient">operação de negócio.</span></h2><p className="mt-6 text-base leading-relaxed text-white/60">Cada ação precisa ter um papel na jornada do consumidor: despertar interesse, construir confiança, gerar oportunidades e fortalecer o relacionamento.</p></div>
      <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center gap-2 rounded-2xl border border-primary/35 bg-primary/[.08] px-6 py-6 text-center sm:flex-row sm:justify-center sm:gap-5 sm:px-9"><p className="text-4xl font-black tracking-tight text-white sm:text-5xl">+R$ 10 milhões</p><p className="max-w-sm text-xs font-bold uppercase leading-relaxed tracking-[.12em] text-white/70 sm:text-left sm:text-sm">em faturamento gerado para nossos clientes</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((item) => <div key={item.value} className="rounded-2xl border border-white/10 bg-[#141414] p-6 text-center text-white shadow-[0_12px_35px_rgba(0,0,0,.3)]"><div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10"><item.icon className="h-7 w-7 text-primary" /></div><h3 className="text-2xl font-black text-white">{item.value}</h3><p className="mt-3 text-sm leading-relaxed text-white/60">{item.label}</p></div>)}
      </div>
      <div className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-[#151515] p-7 sm:flex-row sm:items-center sm:p-9"><div><p className="text-xl font-extrabold text-white sm:text-2xl">Vamos encontrar o próximo passo da sua empresa?</p><p className="mt-2 text-sm text-white/55">Uma conversa objetiva para entender o cenário e identificar oportunidades.</p></div><a href="https://wa.me/5561992380077?text=Olá! Quero conversar sobre o marketing da minha empresa." target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-6 py-4 text-sm font-extrabold text-white transition hover:bg-red-600">Falar com a S.Alfa <ArrowUpRight className="h-4 w-4" /></a></div>
    </div>
  </section>
);

export default Results;
