import { Phone, Instagram, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="contato" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
    <div className="absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[120px]" />

    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">Contato</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-5">Vamos <span className="text-gradient">conversar?</span></h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Entre em contato conosco e agende uma conversa para entender o que faz sentido para o seu negócio.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
        <a href="https://wa.me/5561992380077" target="_blank" rel="noopener noreferrer" className="min-w-0 rounded-xl border border-border bg-card p-5 sm:p-6 card-glow transition-all hover:-translate-y-1 hover:border-primary/50 group">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 transition-colors group-hover:bg-green-500/20"><Phone className="h-6 w-6 text-green-500" /></div>
          <h3 className="mb-2 text-lg font-bold">WhatsApp</h3>
          <p className="text-sm text-muted-foreground">(61) 99238-0077</p>
        </a>

        <a href="https://instagram.com/studioalfamkt" target="_blank" rel="noopener noreferrer" className="min-w-0 rounded-xl border border-border bg-card p-5 sm:p-6 card-glow transition-all hover:-translate-y-1 hover:border-primary/50 group">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10 transition-colors group-hover:bg-pink-500/20"><Instagram className="h-6 w-6 text-pink-500" /></div>
          <h3 className="mb-2 text-lg font-bold">Instagram</h3>
          <p className="text-sm text-muted-foreground">@studioalfamkt</p>
        </a>

        <div className="min-w-0 rounded-xl border border-border bg-card p-5 sm:p-6 card-glow">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><Building className="h-6 w-6 text-primary" /></div>
          <h3 className="mb-2 text-lg font-bold">Atendimento</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">Edifício Sétimo Andar<br />Brasília - DF</p>
        </div>

        <div className="min-w-0 rounded-xl border border-border bg-card p-5 sm:p-6 card-glow">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><MapPin className="h-6 w-6 text-primary" /></div>
          <h3 className="mb-2 text-lg font-bold">Produção</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">Rua José Eugênio<br />Luziânia - GO</p>
        </div>
      </div>

      <div className="text-center">
        <a href="https://wa.me/5561992380077?text=Olá! Gostaria de agendar uma conversa estratégica." target="_blank" rel="noopener noreferrer">
          <Button variant="hero" size="lg" className="w-full sm:w-auto"><Phone className="mr-2" /> Agendar conversa estratégica</Button>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
