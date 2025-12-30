export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#7c3aed] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img
              src="https://static.readdy.ai/image/a3ae49909e606cf3d82e43d07347d6a7/41b06c457b66328392e599bc9883b0d6.png"
              alt="Corretiza Logo"
              className="h-16 w-auto"
            />
          </div>

          <p className="text-3xl font-serif font-bold leading-tight">
            Inteligência artificial<br />que vende por você
          </p>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/80">
              © 2025 Corretiza. Todos os direitos reservados.
            </p>

            <div className="flex items-center space-x-4">
              <a href="https://lp.corretiza.ai/" className="w-10 h-10 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a href="https://www.instagram.com/corretiza.ia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/30 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
                <i className="ri-instagram-fill text-xl"></i>
              </a>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <a href="https://lp.corretiza.ai/" className="text-white/80 hover:text-white transition-colors whitespace-nowrap">Privacidade</a>
              <span className="text-white/40">|</span>
              <a href="https://halarum.dev" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors whitespace-nowrap">
                Powered by Halarum
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
