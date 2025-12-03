import { Instagram, Phone } from "lucide-react";
import logoAlfa from "@/assets/logo-alfa.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img src={logoAlfa} alt="S.Alfa MKT Logo" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground mb-4 max-w-sm">
              Agência de Marketing e Publicidade 360° Full-Service. 
              Há 7 anos fazendo negócios venderem mais.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5561992380077"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Phone className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://instagram.com/s.alfamkt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Compra de Mídia</li>
              <li>Marketing Digital</li>
              <li>Produção Audiovisual</li>
              <li>Site por Assinatura</li>
              <li>CRM por Assinatura</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>(61) 99238-0077</li>
              <li>@s.alfamkt</li>
              <li>Brasília - DF</li>
              <li>Luziânia - GO</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} S.Alfa MKT. Todos os direitos reservados.</p>
          <p className="mt-2">Certificada pela Globo • Agência Full-Service 360°</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
