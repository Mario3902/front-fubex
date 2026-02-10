import { Link } from 'react-router-dom';
import { ArrowRight, Award, Globe, BookOpen, Users, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const features = [
    {
      icon: Award,
      title: 'Bolsas 100% Pagas',
      description: 'Cobertura total das propinas após aprovação',
    },
    {
      icon: Globe,
      title: 'Oportunidades Globais',
      description: 'Angola, Espanha, Brasil, Portugal e mais',
    },
    {
      icon: BookOpen,
      title: 'Excelência Académica',
      description: 'Universidades de ponta nacional e internacional',
    },
    {
      icon: Users,
      title: 'Mentoria Especializada',
      description: 'Acompanhamento personalizado contínuo',
    },
  ];

  const stats = [
    { value: '500+', label: 'Bolsistas' },
    { value: '15+', label: 'Universidades' },
    { value: '6', label: 'Países' },
    { value: '100%', label: 'Compromisso' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/bolsista.png"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4" 
            type="video/mp4" 
          />
        </video>
        <div className="absolute inset-0 video-overlay" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#1a365d]/30 rounded-full blur-[80px] md:blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#c9a227]/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse delay-1000" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full section-padding pt-24 md:pt-32 pb-12 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full glass-liquid">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs md:text-sm font-medium text-white/90">
                  Inscrições Abertas 2026
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Transforme seu{' '}
                  <span className="text-gradient-gold">Futuro</span> com Educação
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-white/80 italic border-l-4 border-[#c9a227] pl-3 md:pl-4">
                  "Educação é o combustível do sucesso"
                </p>
                <p className="text-sm md:text-base lg:text-lg text-white/70 max-w-xl">
                  Uma oportunidade única para jovens angolanos alcançarem seus 
                  sonhos académicos. Bolsas nacionais e internacionais com 
                  cobertura total ou comparticipação até 85%.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 md:gap-4">
                <Link to="/inscricao">
                  <Button
                    size="lg"
                    className="bg-[#c9a227] hover:bg-[#a88420] text-[#0f2744] font-bold px-4 md:px-8 text-sm md:text-base shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 group"
                  >
                    Candidate-se Agora
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/sobre">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-4 md:px-8 text-sm md:text-base glass-liquid"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Conheça Mais
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-4 md:gap-6 pt-2 md:pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-lg md:text-2xl font-bold text-[#c9a227]">{stat.value}</p>
                    <p className="text-[10px] md:text-xs text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Secondary CTA */}
              <div className="pt-2 md:pt-4">
                <Link
                  to="/login"
                  className="text-white/70 hover:text-[#c9a227] transition-colors text-xs md:text-sm underline underline-offset-4"
                >
                  Já é candidato? Acesse sua conta
                </Link>
              </div>
            </div>

            {/* Right Content - Bolsista Image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-80 xl:w-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#c9a227]/30 float">
                  <img 
                    src="/bolsista.png" 
                    alt="Bolsista de Sucesso" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 border-4 border-[#c9a227] rounded-2xl -z-10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#1a365d] rounded-full opacity-50 blur-xl" />
              </div>
            </div>
          </div>

          {/* Features Grid - Mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12 lg:hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-3 md:p-4 rounded-xl glass-liquid text-center"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-[#1a365d] to-[#c9a227] flex items-center justify-center mx-auto mb-2">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h3 className="text-xs md:text-sm font-semibold text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-[10px] md:text-xs text-white/70 hidden sm:block">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-white/30 flex justify-center pt-1 md:pt-2">
          <div className="w-1 md:w-1.5 h-2 md:h-3 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
