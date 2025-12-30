import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src={scrolled 
                ? "https://static.readdy.ai/image/a3ae49909e606cf3d82e43d07347d6a7/8c34ee4cf87dfea8c434c0cb96ffc07d.png"
                : "https://static.readdy.ai/image/a3ae49909e606cf3d82e43d07347d6a7/41b06c457b66328392e599bc9883b0d6.png"
              }
              alt="Corretiza Logo" 
              className="h-14 w-auto transition-all duration-500"
            />
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <a href="https://lp.corretiza.ai/" className={`text-base font-medium transition-colors hover:text-[#7c3aed] whitespace-nowrap ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              Recursos
            </a>
            <a href="https://lp.corretiza.ai/" className={`text-base font-medium transition-colors hover:text-[#7c3aed] whitespace-nowrap ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              Integrações
            </a>
            <a href="https://lp.corretiza.ai/" className={`text-base font-medium transition-colors hover:text-[#7c3aed] whitespace-nowrap ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              Como Funciona
            </a>
            <a href="https://lp.corretiza.ai/" className="px-8 py-3 bg-[#6d28d9] text-white text-base font-medium rounded-full hover:bg-[#7c3aed] transition-all whitespace-nowrap">
              Agendar Demonstração
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-3xl`}></i>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <a href="https://lp.corretiza.ai/" className="block w-full text-left py-2 text-base font-medium text-gray-700 hover:text-[#7c3aed] whitespace-nowrap">
              Recursos
            </a>
            <a href="https://lp.corretiza.ai/" className="block w-full text-left py-2 text-base font-medium text-gray-700 hover:text-[#7c3aed] whitespace-nowrap">
              Integrações
            </a>
            <a href="https://lp.corretiza.ai/" className="block w-full text-left py-2 text-base font-medium text-gray-700 hover:text-[#7c3aed] whitespace-nowrap">
              Como Funciona
            </a>
            <a href="https://lp.corretiza.ai/" className="block w-full text-center py-3 bg-[#6d28d9] text-white text-base font-medium rounded-full hover:bg-[#7c3aed] transition-all whitespace-nowrap">
              Agendar Demonstração
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
