import { ArrowRight, Play, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroTeam from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section id="inicio" className="relative isolate overflow-hidden bg-background pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
    <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: "linear-gradient(90deg, transparent 49.8%, hsl(0 0% 100% / .035) 50%, transparent 50.2%), linear-gradient(hsl(0 0% 100% / .025) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
    <div className="pointer-events-none absolute -top-40 right-[-8rem] h-[34rem] w-[34rem] rounded-full bg-primary/15 blur-[110px]" />
    <div className="container relative z-10 mx-auto px-4 sm:px-6">
      <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
        <div className="min-w-0">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-[11px] font-extrabold uppercase tracking-[.16em] text-foreground/85 sm:text-xs">Comunicação, marketing e publicidade 360°</span>
          </div>
          <h1 className="max-w-3xl text-[2.65rem] font-black leading-[.99] tracking-[-.055em] text-foreground sm:text-6xl lg:text-[4.45rem] xl:text-[5rem]">
            Sua marca precisa de <span className="text-gradient">movimento.</span><br />
            Seu negócio, de <span className="text-primary">resultado.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Somos um hub completo de comunicação, marketing e publicidade: reunimos estratégia, criação, mídia, audiovisual e tecnologia para conectar sua marca às pessoas certas, no Brasil e em outros mercados.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="https://wa.me/5561992380077?text=Olá! Quero um diagnóstico estratégico para minha empresa." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">Vamos conversar <ArrowRight className="ml-2" /></Button>
            </a>
            <a href="#videos" className="w-full sm:w-auto">
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto"><Play className="mr-2" /> Conheça nossos vídeos</Button>
            </a>
          </div>
          <div className="mt-10 grid gap-3 border-t border-border pt-6 sm:grid-cols-3">
            {["Planejamento antes da execução", "Digital conectado ao mundo real", "Acompanhamento e otimização"].map((item) => (
              <div key={item} className="flex items-start gap-2 text-xs font-semibold leading-relaxed text-muted-foreground sm:text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div><p className="text-3xl font-black tracking-tight text-foreground">7<span className="text-primary">+</span></p><p className="mt-1 text-[10px] font-bold uppercase tracking-[.15em] text-muted-foreground">Anos de atuação</p></div>
            <div className="h-10 w-px bg-border" />
            <div><p className="text-3xl font-black tracking-tight text-foreground">360<span className="text-primary">°</span></p><p className="mt-1 text-[10px] font-bold uppercase tracking-[.15em] text-muted-foreground">Visão integrada</p></div>
            <div className="h-10 w-px bg-border" />
            <div><p className="text-2xl font-black tracking-tight text-foreground">BR <span className="text-primary">+</span> Mundo</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[.15em] text-muted-foreground">Atuação nacional e internacional</p></div>
          </div>
        </div>
        <div className="relative mx-auto w-full min-w-0 max-w-2xl lg:max-w-none">
          <div className="absolute -inset-5 rounded-[2rem] bg-primary/15 blur-3xl" />
          <div className="absolute -right-4 -top-4 z-20 h-24 w-24 rounded-full border border-primary/30" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl sm:rounded-[2rem]">
            <img src={heroTeam} alt="Estrutura criativa e produção da S.Alfa MKT" className="aspect-[4/4.25] w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/10" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-[10px] font-extrabold uppercase tracking-[.24em] text-white/75">Uma operação. Múltiplas frentes.</p>
              <p className="mt-2 max-w-sm text-2xl font-black leading-tight text-white sm:text-3xl">Ideia boa é ideia que chega ao mercado.</p>
            </div>
          </div>
          <div className="relative z-20 -mt-4 ml-auto mr-3 w-fit rounded-xl border border-white/10 bg-[#111] px-5 py-4 shadow-2xl sm:absolute sm:-bottom-6 sm:-left-8 sm:ml-0 sm:mr-0">
            <p className="text-[10px] font-bold uppercase tracking-[.18em] text-white/75">S.Alfa MKT</p>
            <p className="mt-1 text-sm font-extrabold text-white">Estratégia + criação + performance</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
