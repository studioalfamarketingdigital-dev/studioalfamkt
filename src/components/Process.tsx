import { MessageSquare, Target, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Diagnóstico Gratuito",
    description: "Analisamos seu negócio, mercado e concorrência para identificar oportunidades de crescimento.",
  },
  {
    number: "02",
    icon: Target,
    title: "Estratégia Personalizada",
    description: "Criamos um plano de ação sob medida com metas claras e KPIs mensuráveis.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execução Full-Service",
    description: "Nossa equipe executa todas as ações: mídia, criação, produção e gestão.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Otimização Contínua",
    description: "Monitoramos resultados em tempo real e otimizamos para maximizar seu ROI.",
  },
];

const Process = () => {
  return (
    <section id="processo" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
            Do diagnóstico ao <span className="text-gradient">resultado</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo validado que já gerou mais de R$1 milhão em vendas para nossos clientes.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
              )}
              
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 relative z-10">
                {/* Number Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-black text-lg">
                  {step.number}
                </div>
                
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
