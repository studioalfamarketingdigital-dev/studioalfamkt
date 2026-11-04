import { Phone, Instagram, MapPin, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => (
  <section id="contato" className="relative overflow-hidden bg-[#080808] py-16 sm:py-20 lg:py-24">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
    <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[120px] sm:h-96 sm:w-96" />
    <div className="container relative z-10 mx-auto px-4 sm:px-6">
      <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"><span className="section-kicker">Contato</span><h2 className="mt-4 mb-5 text-3xl font-black text-white sm:text-4xl md:text-5xl">Vamos <span className="text-gradient">conversar?</span></h2><p className="text-base leading-relaxed text-white/60 sm:text-lg">Entre em contato conosco e agende uma conversa para entender o que faz sentido para o seu negócio.</p></div>
      <div className="mb-10 grid grid-cols-1 gap-4 sm:mb-12 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4">
        <a href="https://wa.me/5561992380077" target="_blank" rel="noopener noreferrer" className="group min-w-0 rounded-xl border border-white/10 bg-[#141414] p-5 text-white shadow-[0_12px_35px_rgba(0,0,0,.3)] transition-all hover:-translate-y-1 hover:border-primary/60 sm:p-6"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 group-hover:bg-green-500/20"><Phone className="h-6 w-6 text-green-500" /></div><h3 className="mb-2 text-lg font-bold text-white">WhatsApp</h3><p className="text-sm text-white/60">(61) 99238-0077</p></a>
        <a href="https://instagram.com/studioalfamkt" target="_blank" rel="noopener noreferrer" className="group min-w-0 rounded-xl border border-white/10 bg-[#141414] p-5 text-white shadow-[0_12px_35px_rgba(0,0,0,.3)] transition-all hover:-translate-y-1 hover:border-primary/60 sm:p-6"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10 group-hover:bg-pink-500/20"><Instagram className="h-6 w-6 text-pink-500" /></div><h3 className="mb-2 text-lg font-bold text-white">Instagram</h3><p className="text-sm text-white/60">@studioalfamkt</p></a>
        <div className="min-w-0 rounded-xl border border-white/10 bg-[#141414] p-5 text-white shadow-[0_12px_35px_rgba(0,0,0,.3)] sm:p-6"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><Building className="h-6 w-6 text-primary" /></div><h3 className="mb-2 text-lg font-bold text-white">Alcance</h3><p className="text-sm leading-relaxed text-white/60">Projetos em todo o Brasil<br />e no mercado internacional</p></div>
        <div className="min-w-0 rounded-xl border border-white/10 bg-[#141414] p-5 text-white shadow-[0_12px_35px_rgba(0,0,0,.3)] sm:p-6"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10"><MapPin className="h-6 w-6 text-primary" /></div><h3 className="mb-2 text-lg font-bold text-white">Base operacional</h3><p className="text-sm leading-relaxed text-white/60">Estrutura no Brasil<br />e atendimento remoto global</p></div>
      </div>
      <div className="text-center"><a href="https://wa.me/5561992380077?text=Olá! Gostaria de agendar uma conversa estratégica." target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg" className="w-full sm:w-auto"><Phone className="mr-2" /> Agendar conversa estratégica</Button></a></div>
    </div>
  </section>
);

export default Contact;
