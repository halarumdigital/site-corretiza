export default function CTASection() {
  const handleClick = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://readdy.ai/api/search-image?query=Modern%20city%20skyline%20at%20sunset%20with%20beautiful%20purple%20violet%20and%20lavender%20gradient%20sky%2C%20urban%20landscape%20with%20tall%20buildings%20silhouettes%2C%20peaceful%20evening%20atmosphere%2C%20wide%20panoramic%20view%2C%20professional%20architectural%20photography%2C%20cinematic%20lighting%2C%20high%20quality%20cityscape%20background&width=1920&height=1080&seq=cta-background-purple-001&orientation=landscape"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/40 to-black/50"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 w-full text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Sua imobiliária atendendo 24/7
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-3xl mx-auto">
          Sem complicação, sem sobrecarga.<br />Só resultado.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#a855f7] rounded-full flex items-center justify-center">
              <i className="ri-check-line text-white text-2xl"></i>
            </div>
            <span className="text-white text-lg">Implementação em 4 semanas</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#a855f7] rounded-full flex items-center justify-center">
              <i className="ri-check-line text-white text-2xl"></i>
            </div>
            <span className="text-white text-lg">Suporte dedicado</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-[#a855f7] rounded-full flex items-center justify-center">
              <i className="ri-check-line text-white text-2xl"></i>
            </div>
            <span className="text-white text-lg">ROI garantido</span>
          </div>
        </div>

        <a
          href="https://lp.corretiza.ai/"
          className="inline-block px-12 py-5 bg-[#6d28d9] text-white text-lg font-semibold rounded-lg hover:bg-[#7c3aed] transition-all shadow-2xl hover:shadow-[#a855f7]/50 hover:scale-105 whitespace-nowrap"
        >
          Agendar Demonstração Gratuita
        </a>
      </div>
    </section>
  );
}
