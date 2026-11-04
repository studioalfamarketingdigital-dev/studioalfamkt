import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa contratar a Studio Alfa?",
    answer: "O investimento depende do objetivo, do escopo e dos canais envolvidos. Após entender seu cenário, apresentamos uma proposta com entregas, responsabilidades e valores definidos.",
  },
  {
    question: "Em quanto tempo aparecem os resultados?",
    answer: "Depende do mercado, da oferta, da verba, da estrutura comercial e do histórico da empresa. Em vez de prometer um prazo igual para todos, definimos indicadores e acompanhamos a evolução desde o início.",
  },
  {
    question: "A Studio Alfa atende quais segmentos?",
    answer: "Avaliamos cada oportunidade para entender se temos estrutura, experiência e capacidade de atender bem aquele mercado. O primeiro contato serve justamente para entender o seu negócio.",
  },
  {
    question: "Preciso ter uma equipe de marketing interna?",
    answer: "Não necessariamente. Podemos atuar como equipe externa integrada à sua operação, alinhando estratégia, criação, mídia, produção e análise com as pessoas responsáveis pelo atendimento e pelas vendas.",
  },
  {
    question: "Como funciona o site por assinatura?",
    answer: "O projeto é estruturado conforme a necessidade da empresa e contratado em um modelo recorrente. Escopo, mensalidade, suporte, hospedagem e condições são apresentados com clareza antes da contratação.",
  },
  {
    question: "O que acontece no diagnóstico inicial?",
    answer: "Conversamos sobre seu negócio, público, oferta, concorrência e processo comercial. A partir disso, apontamos oportunidades e indicamos quais frentes de marketing fazem sentido para o momento da empresa.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-24 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6">Perguntas <span className="text-gradient">frequentes</span></h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors">
              <AccordionTrigger className="text-left font-bold hover:text-primary transition-colors py-6">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
