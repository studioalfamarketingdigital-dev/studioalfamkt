import { Phone, Instagram, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Contato
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato conosco e agende sua sessão estratégica gratuita.
            Estamos prontos para ajudar seu negócio a crescer.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/5561992380077"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-glow group"
          >
            <div className="w-14 h-14 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
              <Phone className="w-7 h-7 text-green-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">WhatsApp</h3>
            <p className="text-muted-foreground text-sm">(61) 99238-0077</p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/s.alfamkt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-glow group"
          >
            <div className="w-14 h-14 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 group-hover:bg-pink-500/20 transition-colors">
              <Instagram className="w-7 h-7 text-pink-500" />
            </div>
            <h3 className="text-lg font-bold mb-2">Instagram</h3>
            <p className="text-muted-foreground text-sm">@s.alfamkt</p>
          </a>

          {/* Escritório Brasília */}
          <div className="bg-card rounded-xl p-6 border border-border card-glow">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Building className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Atendimento</h3>
            <p className="text-muted-foreground text-sm">
              Edifício Sétimo Andar<br />
              Brasília - DF
            </p>
          </div>

          {/* Escritório Produção */}
          <div className="bg-card rounded-xl p-6 border border-border card-glow">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">Produção</h3>
            <p className="text-muted-foreground text-sm">
              Rua José Eugênio<br />
              Luziânia - GO
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://wa.me/5561992380077?text=Olá! Gostaria de agendar uma sessão estratégica."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg">
              <Phone className="mr-2" />
              Agendar Sessão Estratégica
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
