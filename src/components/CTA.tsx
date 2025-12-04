import { ArrowRight, Clock, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/50 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Vagas Limitadas Este Mês
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Pronto para <span className="text-gradient">multiplicar suas vendas?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Agende agora sua sessão estratégica gratuita e descubra como podemos 
            transformar seu negócio em uma máquina de vendas.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-foreground">
              <Gift className="w-5 h-5 text-primary" />
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Clock className="w-5 h-5 text-primary" />
              <span>30-60 minutos</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <ArrowRight className="w-5 h-5 text-primary" />
              <span>Plano de ação personalizado</span>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://wa.me/5561992380077?text=Olá! Gostaria de agendar minha sessão estratégica gratuita."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="xl" className="text-xl px-16">
              Quero Minha Sessão Gratuita
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </a>

          <p className="text-sm text-muted-foreground mt-6">
            Sem compromisso. Sem pegadinhas. Apenas valor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
