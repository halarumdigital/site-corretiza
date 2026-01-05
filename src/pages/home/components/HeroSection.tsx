import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#6d28d9] via-[#7c3aed] to-[#a855f7]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/20"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <i className="ri-robot-2-line text-[#c084fc] text-lg"></i>
          <span className="text-white text-sm font-medium whitespace-nowrap">Powered by AI</span>
        </div>

        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          A inteligência artificial que{' '}
          <span className="text-[#c084fc]">vende imóveis</span> por você
        </h1>

        <p className={`text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Converta leads em contratos fechados 24 horas por dia, 7 dias por semana — do primeiro clique até a gestão do inquilino.
        </p>

        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a href="https://lp.corretiza.ai/" className="px-8 py-4 bg-white text-[#6d28d9] text-base font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg whitespace-nowrap">
            Agendar Demonstração
          </a>
        </div>

        <div className={`relative max-w-5xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
            <img
              src="/uploads/dash1.png"
              alt="Dashboard Corretiza"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#6d28d9]/20 to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-3xl"></i>
      </div>
    </section>
  );
}
