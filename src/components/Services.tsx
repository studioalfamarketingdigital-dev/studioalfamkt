import { BarChart3, Megaphone, Video, Monitor, Users, Target, Radio, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Target, number: "01", title: "Atrair clientes", description: "Planejamento de campanhas e gestão de tráfego para alcançar públicos com potencial real de compra.", items: "Meta Ads · Google Ads · Estratégia de mídia" },
  { icon: Megaphone, number: "02", title: "Fortalecer sua marca", description: "Posicionamento, campanhas e publicidade para construir presença e reconhecimento nos pontos de contato certos.", items: "Campanhas · Branding · Comunicação integrada" },
  { icon: Video, number: "03", title: "Criar conteúdo que conecta", description: "Produção audiovisual e conteúdo estratégico para apresentar seu negócio com clareza e personalidade.", items: "Vídeos · Fotografia · Conteúdo" },
  { icon: Monitor, number: "04", title: "Construir presença digital", description: "Sites profissionais e experiências digitais pensadas para apresentar, informar e gerar contatos.", items: "Sites · Landing pages · Presença digital" },
  { icon: Users, number: "05", title: "Organizar o comercial", description: "Estruturação de processos e ferramentas para acompanhar oportunidades e melhorar o atendimento.", items: "CRM · Organização de leads · Automação" },
  { icon: Radio, number: "06", title: "Aparecer no mundo real", description: "Planejamento e conexão com canais de publicidade tradicionais e inventário de mídia exterior.", items: "TV · Rádio · Outdoor · Mídia OOH" },
  { icon: BarChart3, number: "07", title: "Evoluir com inteligência", description: "Leitura de indicadores, acompanhamento de campanhas e recomendações para orientar decisões.", items: "Relatórios · Análises · Otimização" },
];

const Services = () => (
  <section id="servicos" className="relative overflow-hidden bg-[#080808] py-20 sm:py-24 lg:py-28">
    <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[130px]" />
    <div className="container relative z-10 mx-auto px-4 sm:px-6">
      <div className="mb-12 flex flex-col justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
        <div className="max-w-3xl"><span className="section-kicker">O que fazemos</span><h2 className="section-title mt-4 text-white">Seu negócio não precisa de ações soltas. Precisa de <span className="text-gradient">direção.</span></h2></div>
        <p className="max-w-md text-sm leading-relaxed text-white/65 sm:text-base">Um hub completo, com frentes especializadas que trabalham de forma integrada. Coordenamos as soluções conforme o desafio, o mercado e os objetivos de cada marca.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.number} className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#141414] p-6 text-white shadow-[0_12px_35px_rgba(0,0,0,.3)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-[#191919] sm:p-7">
            <div className="mb-7 flex items-center justify-between"><span className="text-xs font-black tracking-[.2em] text-primary">{service.number}</span><service.icon className="h-6 w-6 text-white/75 transition-colors group-hover:text-primary" /><ArrowUpRight className="absolute right-6 top-[4.35rem] h-4 w-4 text-white/25 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></div>
            <h3 className="mb-3 pr-5 text-xl font-extrabold text-white">{service.title}</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/65">{service.description}</p>
            <p className="mt-auto border-t border-white/10 pt-4 text-[10px] font-bold uppercase leading-relaxed tracking-[.1em] text-white/45">{service.items}</p>
          </article>
        ))}
      </div>
      <div className="mt-9 flex flex-col items-start justify-between gap-5 rounded-2xl border border-primary/25 bg-[#151515] p-6 sm:flex-row sm:items-center sm:p-8">
        <div><p className="text-lg font-extrabold text-white">Não sabe por onde começar?</p><p className="mt-1 text-sm text-white/60">A gente entende seu cenário antes de recomendar qualquer solução.</p></div>
        <a href="https://wa.me/5561992380077?text=Olá! Quero entender qual solução faz sentido para minha empresa." target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-2 text-sm font-extrabold text-primary hover:text-white">Converse com a S.Alfa <ArrowUpRight className="h-4 w-4" /></a>
      </div>
    </div>
  </section>
);

export default Services;
