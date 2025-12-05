import { 
  BarChart3, 
  Megaphone, 
  Video, 
  Monitor, 
  Users,
  Target,
  TrendingUp
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Gestão de Tráfego Pago",
    description: "Atraímos clientes qualificados para sua empresa através de anúncios no Google, Meta, TikTok e YouTube com foco em resultados.",
  },
  {
    icon: Megaphone,
    title: "Publicidade Online e Offline",
    description: "TV, Rádio, Outdoor, Totens, Painéis de LED, Busdoor, mídia impressa e compra de mídia a nível mundial. Sua marca onde seu cliente está.",
  },
  {
    icon: TrendingUp,
    title: "Estratégia de Vendas",
    description: "Metodologia própria para estruturar seu marketing e aumentar o faturamento da sua empresa de forma previsível.",
  },
  {
    icon: Monitor,
    title: "Site por Assinatura",
    description: "Websites profissionais para sua empresa com design premium e suporte contínuo. Sem investimento inicial alto.",
  },
  {
    icon: Users,
    title: "CRM por Assinatura",
    description: "Sistema para gerenciar seus clientes e leads, aumentando suas vendas e organizando seu comercial.",
  },
  {
    icon: Video,
    title: "Produtora Audiovisual",
    description: "Produção de vídeos comerciais, institucionais e conteúdo para redes sociais que vendem sua marca.",
  },
  {
    icon: BarChart3,
    title: "Relatórios e Análises",
    description: "Acompanhe o retorno do seu investimento com dashboards e relatórios claros sobre suas campanhas.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
            Soluções <span className="text-gradient">360° Full-Service</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo que seu negócio precisa para crescer de forma estruturada e previsível, 
            com uma equipe de especialistas dedicados ao seu sucesso.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
