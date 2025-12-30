import { useState, useEffect, useRef } from 'react';

export default function FeaturesSection() {
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

  const features = [
    {
      icon: 'ri-message-3-fill',
      title: 'Atendimento Inteligente 24/7',
      color: '#a855f7',
      items: [
        'Atendimento inteligente 24/7, direto no WhatsApp',
        'Respostas instantâneas e conversas humanizadas',
        'Recomendações personalizadas de imóveis',
        'Integração com seus canais de anúncio',
        'Reengajamento automático de contatos inativos',
        'Remarketing em massa com interação imediata'
      ]
    },
    {
      icon: 'ri-user-star-fill',
      title: 'Leads Qualificados',
      color: '#6d28d9',
      items: [
        'Leads qualificados, no CRM que você já usa',
        'Filtragem por score de temperatura (quente, morno, frio)',
        'Envio automático de leads qualificados para o seu CRM',
        'Resumo com preferências e histórico de conversas',
        'Análise comportamental dos leads',
        'Priorização inteligente de oportunidades'
      ]
    },
    {
      icon: 'ri-bar-chart-box-fill',
      title: 'Decisões Estratégicas',
      color: '#c084fc',
      items: [
        'Relatórios completos de atendimento e conversão',
        'Análise de performance por canal e campanha',
        'Insights dos imóveis mais buscados',
        'Métricas de engajamento em tempo real',
        'Previsão de tendências de mercado',
        'Segurança e escalabilidade garantidas'
      ]
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-[#6d28d9] mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Escale seu atendimento e descomplique sua operação imobiliária
          </h2>

          <p className={`text-lg text-gray-700 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Libere sua equipe para focar no que realmente importa: fechar negócios. A IA da Corretiza cuida do atendimento, da qualificação de leads e do reengajamento de contatos — tudo de forma automática, natural e integrada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: feature.color }}
              >
                <i className={`${feature.icon} text-white text-3xl`}></i>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>

              <ul className="space-y-4">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                      <i className="ri-check-line text-lg" style={{ color: feature.color }}></i>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
