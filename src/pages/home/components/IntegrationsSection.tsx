import { useEffect, useRef, useState } from 'react';

export default function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const integrations = [
    { name: 'WhatsApp', icon: 'ri-whatsapp-fill', color: '#25D366' },
    { name: 'Facebook', icon: 'ri-facebook-fill', color: '#1877F2' },
    { name: 'Instagram', icon: 'ri-instagram-fill', color: '#E4405F' },
    { name: 'OLX', icon: 'ri-shopping-bag-fill', color: '#6E0AD6' },
    { name: 'VivaReal', icon: 'ri-home-4-fill', color: '#FF6B35' },
    { name: 'ZAP', icon: 'ri-building-fill', color: '#0066FF' },
    { name: 'Imovelweb', icon: 'ri-community-fill', color: '#00A859' },
    { name: 'Casa Mineira', icon: 'ri-home-smile-fill', color: '#D4AF37' },
    { name: 'Chaves na Mão', icon: 'ri-key-fill', color: '#FF8C00' },
    { name: 'Email', icon: 'ri-mail-fill', color: '#EA4335' },
    { name: 'Telegram', icon: 'ri-telegram-fill', color: '#0088CC' },
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', color: '#0A66C2' }
  ];

  return (
    <section id="integrations" ref={sectionRef} className="py-24 bg-gradient-to-br from-[#faf5ff] via-white to-[#faf5ff]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#6d28d9] text-center mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Integração total com os canais que você <span className="text-[#a855f7]">já utiliza</span>
        </h2>

        <p className={`text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Corretiza conecta sua operação a mais de 90 plataformas do mercado imobiliário. Desde os principais portais de imóveis até suas redes sociais, nossa IA centraliza o atendimento e automatiza as conversas, mantendo tudo sincronizado com seu CRM.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-110 group cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 3) * 50}ms` }}
            >
              <div className="flex flex-col items-center justify-center space-y-3">
                <div className="w-16 h-16 flex items-center justify-center">
                  <i 
                    className={`${integration.icon} text-5xl text-gray-400 group-hover:text-[${integration.color}] transition-colors duration-300`}
                    style={{ color: 'inherit' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = integration.color}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                  ></i>
                </div>
                <span className="text-sm font-medium text-gray-700 text-center whitespace-nowrap">{integration.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-[#6d28d9] rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl text-white font-medium">
            <i className="ri-bar-chart-box-fill text-[#c084fc] mr-2"></i>
            Tudo em um só lugar: seu funil de vendas, mais inteligente e automatizado.
          </p>
        </div>
      </div>
    </section>
  );
}
