import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60 z-10" />
      
      {/* Red Glow Effect */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Certificada pela Globo
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Seu negócio{" "}
            <span className="text-gradient">vendendo mais</span>{" "}
            em até 90 dias
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Agência full-service 360° com compra de mídia nível global. 
            Estratégia de vendas, marketing digital, produção audiovisual 
            e muito mais para transformar seu negócio.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://wa.me/5561992380077?text=Olá! Gostaria de agendar uma sessão estratégica."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                Sessão Estratégica Grátis
                <ArrowRight className="ml-2" />
              </Button>
            </a>
            <a href="#servicos">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                <Play className="mr-2" />
                Ver Serviços
              </Button>
            </a>
          </div>

          {/* Stats Preview */}
          <div className="flex flex-wrap gap-8 mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <p className="text-3xl md:text-4xl font-black text-primary">+R$1M</p>
              <p className="text-sm text-muted-foreground">em vendas geradas</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-foreground">7+</p>
              <p className="text-sm text-muted-foreground">anos de mercado</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-black text-foreground">20+</p>
              <p className="text-sm text-muted-foreground">parceiros colaboradores</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
