import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, TechSolutions",
    content: "Em 60 dias triplicamos nossas vendas online. A estratégia de mídia paga da S.AlfaMkt mudou completamente nosso jogo.",
    rating: 5,
  },
  {
    name: "Amanda Silva",
    role: "Diretora, Clínica Estética Premium",
    content: "Profissionais excepcionais. O CRM que implementaram automatizou todo nosso follow-up e aumentou nossa conversão em 47%.",
    rating: 5,
  },
  {
    name: "Roberto Oliveira",
    role: "Fundador, E-commerce Brasil",
    content: "A produção audiovisual deles é de outro nível. Nossos vídeos institucionais geraram mais engajamento do que qualquer campanha anterior.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Resultados reais de empresas que confiaram em nossa metodologia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/50 transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-bold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
