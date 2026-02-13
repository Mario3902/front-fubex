import { Link } from 'react-router-dom';
import { CheckCircle, Target, Heart, Lightbulb, TrendingUp, Users, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { value: '500+', label: 'Bolsistas Formados', icon: Users },
    { value: '15+', label: 'Universidades Parceiras', icon: BookOpen },
    { value: '6', label: 'Países', icon: TrendingUp },
    { value: '100%', label: 'Compromisso', icon: Award },
  ];

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Democratizar o acesso à educação superior de excelência para jovens angolanos talentosos.',
    },
    {
      icon: Heart,
      title: 'Filantropia',
      description: 'Investir no futuro de Angola através da educação como ferramenta de transformação social.',
    },
    {
      icon: Lightbulb,
      title: 'Excelência',
      description: 'Compromisso com a qualidade académica e o desenvolvimento integral dos bolseiros.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1a365d]/5 to-transparent" />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#1a365d]/10 dark:bg-[#1a365d]/20 text-[#1a365d] dark:text-[#c9a227] text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Sobre Nós
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-6">
              Fundo de Bolsas de Estudo{' '}
              <span className="text-gradient">Emanuel Xirimbimbi</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">

            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
            {/* Left - Bolsista Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/bolsista.png"
                  alt="Bolsista de Sucesso"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-4 md:-bottom-6 -right-2 md:-right-6 glass-card rounded-xl md:rounded-2xl p-4 md:p-6 max-w-[180px] md:max-w-xs float">
                <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-3">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-[#1a365d] to-[#c9a227] flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white">100%</p>
                    <p className="text-[10px] md:text-sm text-gray-500 dark:text-gray-400">Propinas Cobertas</p>
                  </div>
                </div>
                <p className="text-[10px] md:text-sm text-gray-600 dark:text-gray-400">
                  Após aprovação no processo seletivo
                </p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-4 md:space-y-6 order-1 lg:order-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                Nossa Missão é Transformar Vidas Através da Educação
              </h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                O Fundo de Bolsas de Estudo Emanuel Xirimbimbi é uma iniciativa
                filantrópica que visa apoiar jovens angolanos talentosos em sua
                jornada educacional, oferecendo oportunidades de ensino superior
                de qualidade.
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">

              </p>

              {/* Benefits List */}
              <ul className="space-y-2 md:space-y-3">
                {[
                  'Cobertura total ou comparticipação até 85%',
                  'Acesso a universidades nacionais e internacionais',
                  'Programa de mentoria exclusivo',
                  'Apoio académico personalizado',

                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 md:gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#1a365d]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-[#1a365d] dark:text-[#c9a227]" />
                    </div>
                    <span className="text-xs md:text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to="/sobre">
                <Button
                  variant="outline"
                  className="mt-2 md:mt-4 border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white dark:border-[#c9a227] dark:text-[#c9a227] dark:hover:bg-[#c9a227] dark:hover:text-[#0f2744] text-xs md:text-sm"
                >
                  Conheça Nossa História
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-12 md:mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center p-4 md:p-8 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-[#1a365d]/5 dark:hover:bg-[#c9a227]/10 transition-all hover:-translate-y-1 md:hover:-translate-y-2"
              >
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-[#1a365d]/10 flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:bg-[#1a365d] dark:group-hover:bg-[#c9a227] transition-colors">
                  <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-[#1a365d] dark:text-[#c9a227] group-hover:text-white dark:group-hover:text-[#0f2744] transition-colors" />
                </div>
                <p className="text-2xl md:text-4xl font-bold text-[#1a365d] dark:text-[#c9a227] mb-1 md:mb-2">
                  {stat.value}
                </p>
                <p className="text-[10px] md:text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-5 md:p-8 rounded-xl md:rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl transition-all hover:-translate-y-1 md:hover:-translate-y-2 border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gradient-to-br from-[#1a365d] to-[#c9a227] flex items-center justify-center mb-4 md:mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                  <value.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
                  {value.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
