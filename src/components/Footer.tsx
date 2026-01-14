import { Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const links = [
    { id: 'privacy', label: 'Política de Privacidade' },
    { id: 'terms', label: 'Termos de Uso' },
    { id: 'lgpd', label: 'LGPD' },
  ];

  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-text-primary font-semibold">Skin Journal</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-text-light hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          <p className="text-text-light text-sm">
            © 2026 Skin Journal - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
