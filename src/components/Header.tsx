import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoAlfa from "@/assets/logo-alfa.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#resultados", label: "Resultados" },
    { href: "#videos", label: "Vídeos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen
        ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
        : "bg-background/75 backdrop-blur-md"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 h-[76px] flex items-center justify-between gap-4">
        <a href="#inicio" onClick={closeMenu} className="flex items-center shrink-0" aria-label="Studio Alfa MKT - início">
          <img src={logoAlfa} alt="S.Alfa MKT" className="h-11 sm:h-12 w-auto max-w-[190px] object-contain" />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="whitespace-nowrap text-[13px] xl:text-sm font-semibold text-foreground/75 hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="https://wa.me/5561992380077" target="_blank" rel="noopener noreferrer" className="hidden lg:block shrink-0">
          <Button variant="hero" size="default">Fale Conosco</Button>
        </a>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-foreground hover:bg-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden border-t border-border bg-background/98 backdrop-blur-xl max-h-[calc(100dvh-76px)] overflow-y-auto">
          <nav aria-label="Navegação móvel" className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm font-semibold text-foreground/85 hover:bg-secondary hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
            <a href="https://wa.me/5561992380077" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="pt-3">
              <Button variant="hero" className="w-full">Fale Conosco</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
