import { useEffect, useRef, useState } from 'react';

export default function ImplementationSection() {
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

  const phases = [
    {
      number: 1,
      icon: '🗂️',
      title: 'Coleta de Informações',
      description: 'Entendemos sua operação, canais, funil de vendas e principais objetivos para personalizar a IA com precisão.',
      align: 'left'
    },
    {
      number: 2,
      icon: '🧠',
      title: 'Personalização da IA',
      description: 'Configuramos a Corretiza com linguagem, fluxos e comportamentos sob medida para seu público e tipo de imóvel.',
      align: 'right'
    },
    {
      number: 3,
      icon: '🛠️',
      title: 'Feedbacks e Otimizações',
      description: 'Rodamos testes, ajustamos os fluxos e otimizamos a experiência com base em dados reais e feedbacks da sua equipe.',
      align: 'left'
    },
    {
      number: 4,
      icon: '▶️',
      title: 'Ativação Oficial',
      description: 'Sua IA vai ao ar! Comece a atender, qualificar e converter automaticamente em todos os seus canais.',
      align: 'right'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="implementation" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl md:text-5xl font-bold text-[#6d28d9] text-center mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Ativamos a IA da Corretiza no seu negócio em <span className="text-[#a855f7]">até 4 semanas</span>
        </h2>

        <p className={`text-lg text-gray-600 text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Uma implementação rápida, simples e sem fricção — com suporte total para sua equipe em cada etapa. Menos esforço para você. Mais resultado para seu time.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#a855f7] via-[#7c3aed] to-[#6d28d9] transform -translate-x-1/2 hidden md:block"></div>

          {phases.map((phase, index) => (
            <div
              key={index}
              className={`relative mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${phase.align === 'left' ? '-translate-x-8' : 'translate-x-8'}`}`}
              style={{ transitionDelay: `${(index + 3) * 200}ms` }}
            >
              <div className={`flex flex-col md:flex-row items-center gap-8 ${phase.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 ${phase.align === 'left' ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="text-5xl mb-4">{phase.icon}</div>
                    <h3 className="text-2xl font-bold text-[#6d28d9] mb-3">{phase.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                  </div>
                </div>

                <div className="w-20 h-20 bg-[#6d28d9] rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg z-10 flex-shrink-0">
                  {phase.number}
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            </div>
          ))}
        </div>

        <div className={`bg-[#faf5ff] border-2 border-dashed border-[#a855f7] rounded-2xl p-8 text-center mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="text-2xl mr-2">💡</span>
            <strong>Bônus:</strong> Você ainda conta com nosso time de suporte para acompanhar a evolução dos resultados e sugerir melhorias contínuas.
          </p>
        </div>

        <div className="text-center">
          <a href="https://lp.corretiza.ai/" className="inline-block px-10 py-4 bg-[#6d28d9] text-white text-lg font-semibold rounded-full hover:bg-[#7c3aed] transition-all hover:scale-105 shadow-lg whitespace-nowrap">
            Solicitar Demonstração Gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
