import { CheckCircle } from "lucide-react";
import logoAlfa from "@/assets/logo-alfa.png";

const benefits = [
  "Certificação Globo em compra de mídia",
  "Equipe com mais de 20 especialistas",
  "Metodologia própria de vendas",
  "Atendimento personalizado",
  "Resultados mensuráveis e transparentes",
  "Suporte dedicado ao seu negócio",
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
              Há 7 anos fazendo{" "}
              <span className="text-gradient">negócios venderem mais</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              A S.Alfa MKT é uma agência de marketing e publicidade 360° full-service. 
              Não somos só uma agência — somos parceiros estratégicos focados em 
              resultados reais para o seu negócio.
            </p>
            <p className="text-muted-foreground mb-8">
              Nossa metodologia une estratégia, criatividade e tecnologia para 
              estruturar seu marketing e transformar visitantes em clientes fiéis.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Logo Showcase */}
          <div className="flex items-center justify-center">
            <div className="relative">
              {/* Glow Background */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] scale-150" />
              
              {/* Logo Container */}
              <div className="relative bg-card rounded-2xl p-12 border border-border card-glow">
                <img 
                  src={logoAlfa} 
                  alt="S.Alfa MKT Logo" 
                  className="w-64 h-auto animate-float"
                />
                <div className="text-center mt-6">
                  <p className="text-2xl font-black text-foreground">S.Alfa MKT</p>
                  <p className="text-primary font-semibold">Marketing & Vendas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
