import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'O que é' },
    { id: 'privacy', label: 'Privacidade' },
    { id: 'terms', label: 'Termos' },
  ];

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-surface/95 backdrop-blur-sm shadow-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavigation('home')}
            className="flex items-center gap-2 text-xl font-semibold text-primary hover:opacity-80 transition-opacity"
          >
            <Sparkles className="w-6 h-6" />
            <span>Skin Journal</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium hover:shadow-lg transition-shadow">
              Acessar o app
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-primary"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-t border-border">
          <nav className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-text-secondary hover:bg-background'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-medium">
              Acessar o app
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
