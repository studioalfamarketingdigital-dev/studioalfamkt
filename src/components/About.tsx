import { CheckCircle } from "lucide-react";
import logoAlfa from "@/assets/logo-alfa.png";

const benefits = [
  "Certificação Globo em compra de mídia",
  "Equipe com mais de 27 especialistas",
  "Metodologia própria de vendas",
  "Atendimento personalizado",
  "Resultados mensuráveis e transparentes",
  "Suporte dedicado ao seu negócio",
];

const About = () => (
  <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-secondary/30 relative overflow-hidden">
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-primary/10 rounded-full blur-[120px]" />
    <div className="container mx-auto px-4 sm:px-6 relative z-10">
      <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="min-w-0">
          <span className="text-primary font-semibold uppercase tracking-wider text-xs sm:text-sm">Sobre Nós</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 mb-6 leading-tight">
            Há 7 anos fazendo <span className="text-gradient">negócios venderem mais</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-5 leading-relaxed">
            A S.Alfa MKT é uma agência de marketing e publicidade 360° full-service. Não somos só uma agência — somos parceiros estratégicos focados em resultados reais para o seu negócio.
          </p>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Nossa metodologia une estratégia, criatividade e tecnologia para estruturar seu marketing e transformar visitantes em clientes fiéis.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 min-w-0">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed text-foreground/90">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 items-center justify-center px-2 sm:px-6">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 scale-75 rounded-full bg-primary/20 blur-[80px]" />
            <div className="relative rounded-2xl border border-border bg-card p-7 shadow-xl sm:p-10">
              <img src={logoAlfa} alt="S.Alfa MKT" className="mx-auto h-auto w-full max-w-[250px] object-contain" />
              <div className="mt-5 text-center">
                <p className="text-xl sm:text-2xl font-black text-foreground">S.Alfa MKT</p>
                <p className="font-semibold text-primary">Marketing &amp; Vendas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
