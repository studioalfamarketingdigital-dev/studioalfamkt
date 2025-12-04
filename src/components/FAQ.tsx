import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa contratar a S.AlfaMkt?",
    answer: "Trabalhamos com projetos a partir de R$2.000/mês. O investimento varia de acordo com o escopo e objetivos do seu negócio. Na sessão estratégica gratuita, apresentamos uma proposta personalizada com valores exatos.",
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer: "Nossos clientes começam a ver resultados já nas primeiras semanas. Porém, resultados consistentes e escaláveis geralmente aparecem entre 60 e 90 dias, quando a estratégia está totalmente otimizada.",
  },
  {
    question: "Vocês atendem empresas de qualquer segmento?",
    answer: "Sim! Nossa metodologia é adaptável para diversos segmentos: varejo, serviços, e-commerce, clínicas, imobiliárias, infoprodutores e muito mais. Já atendemos mais de 50 empresas de diferentes nichos.",
  },
  {
    question: "Preciso ter uma equipe de marketing interna?",
    answer: "Não. Somos uma agência full-service 360°, ou seja, cuidamos de tudo: estratégia, criação, mídia, produção e análise. Você foca no seu negócio enquanto cuidamos do seu marketing.",
  },
  {
    question: "Como funciona o site e CRM por assinatura?",
    answer: "Criamos seu site profissional e configuramos o CRM sem custo inicial. Você paga uma mensalidade acessível que inclui hospedagem, manutenção, suporte e atualizações. Sem surpresas ou taxas ocultas.",
  },
  {
    question: "O que é a sessão estratégica gratuita?",
    answer: "É uma reunião de 30-60 minutos onde analisamos seu negócio, identificamos oportunidades e apresentamos um plano de ação personalizado. Sem compromisso e sem custo. É a melhor forma de nos conhecer.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">
              Perguntas <span className="text-gradient">frequentes</span>
            </h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-bold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
