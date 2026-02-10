import { Award, BookOpen, Building2, Globe, Quote, Star, Linkedin, Instagram } from 'lucide-react';

const Mentor = () => {
  const credentials = [
    {
      icon: BookOpen,
      title: 'Doutorado',
      description: 'Design Urbano — Beijing Forestry University (China)',
    },
    {
      icon: Building2,
      title: 'Arquiteto',
      description: 'Membro da Ordem dos Arquitetos de Angola (AO-0601)',
    },
    {
      icon: Award,
      title: 'Hipnoterapeuta',
      description: 'Especialista em desenvolvimento pessoal',
    },
    {
      icon: Globe,
      title: 'Estrategista',
      description: 'Mentor e filantropo dedicado',
    },
  ];

  const achievements = [
    'PhD em Design Urbano',
    'Membro da Ordem dos Arquitetos',
    'Hipnoterapeuta Certificado',
    'Mentor de Jovens Talentos',
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0f2744] dark:bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-[#1a365d]/30 rounded-full blur-[80px] md:blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-[#c9a227]/10 rounded-full blur-[80px] md:blur-[150px]" />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-sm lg:max-w-none">
                <div className="aspect-[3/4] bg-gradient-to-br from-[#1a365d]/20 to-[#c9a227]/20">
                  <img
                    src="/emanuel.jpg"
                    alt="Emanuel Xirimbimbi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2744] via-transparent to-transparent" />
              </div>

              {/* Quote Card */}
              <div className="absolute -bottom-4 md:-bottom-8 right-2 md:-right-8 glass-liquid-dark rounded-xl md:rounded-2xl p-4 md:p-6 max-w-[200px] md:max-w-xs float">
                <Quote className="w-6 h-6 md:w-10 md:h-10 text-[#c9a227] mb-2 md:mb-4" />
                <p className="text-white/90 italic mb-2 md:mb-4 text-xs md:text-base leading-relaxed">
                  "Educação é o combustível do sucesso. Investir na educação dos 
                  jovens é investir no futuro de Angola."
                </p>
                <p className="font-semibold text-white text-xs md:text-sm">— Emanuel Xirimbimbi</p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-3 md:-top-4 -left-3 md:-left-4 w-16 md:w-24 h-16 md:h-24 border-2 md:border-4 border-[#c9a227] rounded-xl md:rounded-2xl -z-10" />
              <div className="absolute -bottom-3 md:-bottom-4 left-1/4 w-10 md:w-16 h-10 md:h-16 bg-[#1a365d] rounded-full opacity-30 blur-lg md:blur-xl" />

              {/* Achievement Badges - Hidden on mobile */}
              <div className="hidden md:block absolute top-4 right-4 space-y-2">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-2 md:px-3 py-1.5 md:py-2 glass-liquid-dark rounded-full"
                  >
                    <Star className="w-3 h-3 md:w-4 md:h-4 text-[#c9a227]" />
                    <span className="text-[10px] md:text-xs text-white">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-4 md:space-y-8 order-1 lg:order-2">
              <div>
                <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-xs md:text-sm font-semibold mb-3 md:mb-4">
                  Sobre o Mentor
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6">
                  Emanuel <span className="text-gradient-gold">Xirimbimbi</span>
                </h2>
                <p className="text-base md:text-xl text-gray-300 mb-3 md:mb-4">
                  PhD, Hipnoterapeuta, Arquiteto, Mentor, Urbanista, 
                  Filantropo e Estrategista
                </p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  Defensor da educação como ferramenta de transformação social, 
                  Emanuel Xirimbimbi dedicou sua vida a criar oportunidades para 
                  jovens angolanos através do Fundo de Bolsas de Estudo que leva 
                  seu nome.
                </p>
              </div>

              {/* Credentials Grid */}
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {credentials.map((cred, index) => (
                  <div
                    key={index}
                    className="group p-3 md:p-5 rounded-lg md:rounded-xl glass-liquid-dark hover:bg-white/10 transition-all hover:-translate-y-1"
                  >
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-[#c9a227]/20 flex items-center justify-center mb-2 md:mb-3 group-hover:bg-[#c9a227] transition-colors">
                      <cred.icon className="w-4 h-4 md:w-6 md:h-6 text-[#c9a227] group-hover:text-[#0f2744] transition-colors" />
                    </div>
                    <h4 className="font-semibold text-white text-xs md:text-base mb-0.5 md:mb-1">{cred.title}</h4>
                    <p className="text-[10px] md:text-sm text-gray-400">{cred.description}</p>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-3 md:gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl bg-[#c9a227] text-[#0f2744] font-medium hover:bg-[#a88420] transition-all hover:-translate-y-1 text-xs md:text-sm"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl glass-liquid-dark text-white font-medium hover:bg-white/20 transition-all hover:-translate-y-1 text-xs md:text-sm"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentor;
