import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTeam from "@/assets/hero-team.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-background pt-32 pb-16 md:pt-40 md:pb-24"
    >
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 animate-fade-up">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Certificada pela Globo
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-foreground animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Agência de<br />
              Marketing <span className="text-primary">Digital</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Estratégia, tráfego pago e resultados reais para o seu negócio. Multiplique o faturamento da sua empresa em até 90 dias.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="https://wa.me/5561992380077?text=Olá! Gostaria de solicitar um orçamento."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Solicitar orçamento
                  <ArrowRight className="ml-2" />
                </Button>
              </a>
              <a href="#servicos">
                <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                  <Play className="mr-2" />
                  Ver Serviços
                </Button>
              </a>
            </div>

            {/* Stats Preview */}
            <div className="flex flex-wrap gap-8 pt-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <div>
                <p className="text-2xl md:text-3xl font-black text-primary">+R$1M</p>
                <p className="text-sm text-muted-foreground">em vendas geradas</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-foreground">7+</p>
                <p className="text-sm text-muted-foreground">anos de mercado</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-foreground">20+</p>
                <p className="text-sm text-muted-foreground">parceiros colaboradores</p>
              </div>
            </div>
          </div>

          {/* Right: Team photo */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src={heroTeam}
                alt="Equipe Studio Alfa Marketing planejando estratégias"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            {/* Floating result card */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl shadow-xl px-5 py-4 hidden sm:block">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-foreground">Resultado real</span>
              </div>
              <p className="text-xl font-black text-primary">+340% ROI</p>
              <p className="text-xs text-muted-foreground">em campanhas de tráfego pago</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
