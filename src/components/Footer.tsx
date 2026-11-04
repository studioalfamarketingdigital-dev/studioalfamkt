import { Instagram, Phone, ArrowUpRight } from "lucide-react";
import logoAlfa from "@/assets/logo-alfa.png";

const Footer = () => (
  <footer className="bg-card border-t border-border py-14">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        <div className="lg:col-span-2">
          <img src={logoAlfa} alt="S.Alfa MKT" className="h-14 w-auto mb-5" />
          <p className="text-muted-foreground mb-5 max-w-sm">Estratégia, publicidade e tecnologia conectadas para aproximar marcas, pessoas e oportunidades de negócio.</p>
          <div className="flex gap-3">
            <a href="https://wa.me/5561992380077" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"><Phone className="w-5 h-5 text-primary" /></a>
            <a href="https://instagram.com/studioalfamkt" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"><Instagram className="w-5 h-5 text-primary" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Navegação</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a className="hover:text-primary" href="#servicos">Soluções</a></li><li><a className="hover:text-primary" href="#resultados">Resultados</a></li><li><a className="hover:text-primary" href="#videos">Vídeos</a></li><li><a className="hover:text-primary" href="#sobre">Quem somos</a></li><li><a className="hover:text-primary" href="#contato">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Soluções</h4>
          <ul className="space-y-3 text-sm text-muted-foreground"><li>Estratégia e assessoria</li><li>Tráfego e mídia</li><li>Publicidade online e offline</li><li>Produção audiovisual</li><li>Sites e presença digital</li><li>CRM e automação</li></ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Ecossistema S.Alfa</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="https://midiamap.studioalfamkt.online" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary inline-flex items-center gap-1">MídiaMap <ArrowUpRight className="w-3 h-3" /></a><p className="text-xs text-muted-foreground">Plataforma de mídia e inventário OOH</p></li>
            <li><a href="https://sites.studioalfamkt.online" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary inline-flex items-center gap-1">Studio Alfa Sites <ArrowUpRight className="w-3 h-3" /></a><p className="text-xs text-muted-foreground">Websites e presença digital por assinatura</p></li>
            <li><a href="https://domina.studioalfamkt.online" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary inline-flex items-center gap-1">Dominar <ArrowUpRight className="w-3 h-3" /></a><p className="text-xs text-muted-foreground">Plataforma do ecossistema S.Alfa</p></li>
            <li><span className="text-foreground font-semibold">Via</span><p className="text-xs text-muted-foreground">Iniciativa de conectividade e eSIM</p></li>
            <li><span className="text-foreground font-semibold">Elev</span><p className="text-xs text-muted-foreground">Frente de educação e formação digital</p></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border pt-7 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Studio Alfa MKT. Todos os direitos reservados.</p>
        <p>Marcas, produtos e iniciativas do ecossistema Studio Alfa.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
