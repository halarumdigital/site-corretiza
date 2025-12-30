import { useEffect, useRef, useState } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ leads: 0, conversion: 0, approval: 0, clients: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { leads: 3, conversion: 60, approval: 90, clients: 500 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        leads: Math.floor(targets.leads * progress),
        conversion: Math.floor(targets.conversion * progress),
        approval: Math.floor(targets.approval * progress),
        clients: Math.floor(targets.clients * progress),
      });

      if (step >= steps) {
        setCounts(targets);
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 bg-[#faf5ff]">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
          <span className="text-[#7c3aed] text-sm font-semibold uppercase tracking-wider whitespace-nowrap">Resultados Comprovados</span>
        </div>

        <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-[#6d28d9] mb-16 leading-tight max-w-5xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
          Corretiza: sua operação imobiliária no{' '}
          <span className="relative inline-block">
            modo automático
            <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 w-12 h-12 flex items-center justify-center">
              <i className="ri-robot-2-fill text-[#a855f7] text-4xl"></i>
            </div>
          </span>
        </h2>

        <p className={`text-lg text-gray-600 mb-16 max-w-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          A IA que atende, responde, converte e encanta — tudo isso, 24/7.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className={`text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <i className="ri-flashlight-fill text-[#6d28d9] text-5xl"></i>
            </div>
            <div className="text-5xl font-bold text-[#6d28d9] mb-2">+{counts.leads}M</div>
            <p className="text-gray-600 text-base">Atendimentos realizados</p>
          </div>

          <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <i className="ri-rocket-2-fill text-[#6d28d9] text-5xl"></i>
            </div>
            <div className="text-5xl font-bold text-[#6d28d9] mb-2">{counts.conversion}%</div>
            <p className="text-gray-600 text-base">Aumento na taxa de conversão</p>
          </div>

          <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <i className="ri-heart-fill text-[#6d28d9] text-5xl"></i>
            </div>
            <div className="text-5xl font-bold text-[#6d28d9] mb-2">{counts.approval}%</div>
            <p className="text-gray-600 text-base">Aprovação dos usuários finais</p>
          </div>

          <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <i className="ri-global-line text-[#6d28d9] text-5xl"></i>
            </div>
            <div className="text-5xl font-bold text-[#6d28d9] mb-2">+{counts.clients}</div>
            <p className="text-gray-600 text-base">Imobiliárias transformadas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
