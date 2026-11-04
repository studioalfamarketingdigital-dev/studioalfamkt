import { ArrowRight, MessageCircle, Compass, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => (
  <section className="relative overflow-hidden border-y border-white/10 bg-[#0d0d0d] py-20 sm:py-24">
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,hsl(0_82%_52%/.18),transparent_60%)]" />
    <div className="container relative z-10 mx-auto px-4 sm:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <span className="section-kicker">Próximo passo</span>
        <h2 className="mt-5 text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl">Vamos falar sobre o que pode <span className="text-gradient">evoluir na sua empresa?</span></h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">Conte um pouco sobre seu negócio. Nossa equipe entende o cenário e conversa com você sobre caminhos possíveis — sem fórmula pronta.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="https://wa.me/5561992380077?text=Olá! Quero conversar sobre oportunidades de marketing para minha empresa." target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg" className="w-full sm:w-auto">Iniciar uma conversa <ArrowRight className="ml-2 h-5 w-5" /></Button></a>
          <a href="#servicos" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-primary/60 hover:text-primary"><Compass className="h-4 w-4" /> Explorar soluções</a>
        </div>
        <div className="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs font-semibold text-white/45"><span className="inline-flex items-center gap-2"><MessageCircle className="h-4 w-4 text-primary" /> Atendimento direto</span><span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> Proposta transparente</span></div>
      </div>
    </div>
  </section>
);

export default CTA;
