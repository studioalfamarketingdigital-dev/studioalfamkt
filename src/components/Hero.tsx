import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTeam from "@/assets/hero-team.jpg";

const Hero = () => (
  <section id="inicio" className="relative isolate overflow-hidden bg-background pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
    <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />
    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
        <div className="min-w-0 space-y-5 sm:space-y-6">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-2 sm:px-4">
            <span className="h-2 w-2 shrink-0 rounded-full bg-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold leading-snug text-primary">Marketing, publicidade e tecnologia em uma só operação</span>
          </div>

          <h1 className="max-w-3xl text-[2.35rem] font-black leading-[1.06] tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem] xl:text-6xl">
            Sua empresa não precisa de mais posts. Precisa de <span className="text-gradient">mais negócios.</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
            Unimos estratégia, publicidade online e offline, tráfego, conteúdo, audiovisual e tecnologia para atrair oportunidades e transformar atenção em vendas.
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap">
            <a href="https://wa.me/5561992380077?text=Olá! Quero um diagnóstico estratégico para minha empresa." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                Quero um diagnóstico <ArrowRight className="ml-2" />
              </Button>
            </a>
            <a href="#portfolio" className="w-full sm:w-auto">
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto">
                <Play className="mr-2" /> Ver projetos
              </Button>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-3">
            {["Estratégia antes da execução", "Online e offline conectados", "Marketing orientado a resultado"].map((item) => (
              <div key={item} className="flex min-w-0 items-start gap-2 text-sm leading-snug text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3 border-t border-border pt-5 sm:gap-6">
            <div className="min-w-0"><p className="text-xl font-black text-primary sm:text-2xl md:text-3xl">+R$10M</p><p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-sm">em vendas geradas*</p></div>
            <div className="min-w-0"><p className="text-xl font-black text-foreground sm:text-2xl md:text-3xl">7+</p><p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-sm">anos de atuação</p></div>
            <div className="min-w-0"><p className="text-xl font-black text-foreground sm:text-2xl md:text-3xl">360°</p><p className="mt-1 text-[11px] leading-snug text-muted-foreground sm:text-sm">visão de comunicação</p></div>
          </div>
          <p className="text-[11px] leading-relaxed text-muted-foreground">*Volume acumulado informado pela agência. Os resultados variam conforme o projeto e o investimento.</p>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-2xl lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:rounded-3xl">
            <img src={heroTeam} alt="Equipe e estrutura criativa da Studio Alfa MKT" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="relative z-10 mx-3 -mt-5 rounded-xl border border-border bg-card px-4 py-3 shadow-xl sm:absolute sm:-bottom-5 sm:-left-5 sm:mx-0 sm:mt-0 sm:max-w-[calc(100%-1rem)] sm:px-5 sm:py-4">
            <p className="mb-1 text-xs font-semibold text-muted-foreground">Uma operação integrada</p>
            <p className="text-sm font-black leading-snug text-primary sm:text-lg">Estratégia + criação + performance</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
