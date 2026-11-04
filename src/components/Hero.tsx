import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTeam from "@/assets/hero-team.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary">Marketing, publicidade e tecnologia em uma só operação</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-foreground">
              Sua empresa não precisa de mais posts. Precisa de <span className="text-gradient">mais negócios.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Unimos estratégia, publicidade online e offline, tráfego, conteúdo, audiovisual e tecnologia para atrair oportunidades e transformar atenção em vendas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="https://wa.me/5561992380077?text=Olá! Quero um diagnóstico estratégico para minha empresa." target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Quero um diagnóstico <ArrowRight className="ml-2" />
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  <Play className="mr-2" /> Ver projetos
                </Button>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5">
              {["Estratégia antes da execução", "Online e offline conectados", "Marketing orientado a resultado"].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 pt-5 border-t border-border">
              <div><p className="text-2xl md:text-3xl font-black text-primary">+R$10M</p><p className="text-sm text-muted-foreground">em vendas geradas*</p></div>
              <div><p className="text-2xl md:text-3xl font-black text-foreground">7+</p><p className="text-sm text-muted-foreground">anos de atuação</p></div>
              <div><p className="text-2xl md:text-3xl font-black text-foreground">360°</p><p className="text-sm text-muted-foreground">visão de comunicação</p></div>
            </div>
            <p className="text-xs text-muted-foreground">*Volume acumulado informado pela agência. Os resultados variam conforme o projeto e o investimento.</p>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img src={heroTeam} alt="Equipe e estrutura criativa da Studio Alfa MKT" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-card border border-border rounded-2xl shadow-xl px-5 py-4">
              <p className="text-xs font-semibold text-muted-foreground mb-1">Uma operação integrada</p>
              <p className="text-lg font-black text-primary">Estratégia + criação + performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
