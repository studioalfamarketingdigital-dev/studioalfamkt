import { TrendingUp, Radio, Award, Clock } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "+R$5 milhões", label: "Em vendas geradas para clientes, segundo levantamento da agência" },
  { icon: Radio, value: "360°", label: "Estratégia, publicidade, conteúdo, mídia e tecnologia" },
  { icon: Award, value: "Globo", label: "Certificação em compra de mídia" },
  { icon: Clock, value: "7+ anos", label: "De experiência em comunicação e marketing" },
];

const Results = () => (
  <section id="resultados" className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-primary font-semibold uppercase tracking-wider text-sm">Experiência que se transforma em ação</span>
        <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">Marketing conectado a <span className="text-gradient">resultado de negócio</span></h2>
        <p className="text-muted-foreground text-lg">Não olhamos apenas para alcance e curtidas. Planejamos cada ponto de contato para fortalecer marcas, gerar oportunidades e apoiar vendas.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center group">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:glow-red transition-all duration-300">
              <stat.icon className="w-10 h-10 text-primary" />
            </div>
            <p className="text-3xl md:text-4xl font-black text-foreground mb-2">{stat.value}</p>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground mt-8">O valor de vendas é um indicador acumulado informado pela agência, não uma garantia de faturamento futuro.</p>
      <div className="mt-20 bg-card rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Vamos encontrar oportunidades no seu negócio?</h3>
            <p className="text-muted-foreground">Converse com a equipe e receba um primeiro direcionamento estratégico.</p>
          </div>
          <a href="https://wa.me/5561992380077?text=Olá! Quero conversar sobre oportunidades de crescimento para minha empresa." target="_blank" rel="noopener noreferrer" className="shrink-0">
            <button className="bg-primary text-primary-foreground font-bold uppercase tracking-wider px-8 py-4 rounded-lg hover:scale-105 transition-transform">Falar com a Studio Alfa</button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Results;
