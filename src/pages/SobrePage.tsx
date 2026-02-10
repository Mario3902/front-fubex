import { CheckCircle, Target, Heart, Users, Award, BookOpen, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/HeroCarousel';

const SobrePage = () => {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Democratizar o acesso à educação superior de excelência para jovens angolanos talentosos, eliminando barreiras financeiras e proporcionando oportunidades de transformação social.',
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência em bolsas de estudo em Angola, formando líderes que contribuam para o desenvolvimento sustentável do país e inspirem novas gerações.',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Excelência, compromisso, transparência, inclusão e filantropia. Acreditamos que a educação é o caminho para um futuro melhor.',
    },
  ];

  const differentials = [
    {
      icon: BookOpen,
      title: 'Cobertura Total de Propinas',
      description: '100% das propinas cobertas após aprovação, eliminando barreiras financeiras para sua educação.',
    },
    {
      icon: Users,
      title: 'Programa de Mentoria Exclusivo',
      description: 'Acompanhamento personalizado com mentores experientes para garantir seu sucesso académico.',
    },
    {
      icon: Award,
      title: 'Oportunidades Nacionais e Internacionais',
      description: 'Acesso a universidades de excelência em Angola e no exterior (Espanha, Brasil, Portugal).',
    },
    {
      icon: TrendingUp,
      title: 'Apoio Académico Personalizado',
      description: 'Suporte contínuo durante todo o curso para garantir excelência académica e desenvolvimento pessoal.',
    },
    {
      icon: Users,
      title: 'Rede de Ex-Bolsistas',
      description: 'Conexão com uma comunidade global de ex-bolsistas para networking e oportunidades futuras.',
    },
    {
      icon: Heart,
      title: 'Desenvolvimento Integral',
      description: 'Foco não apenas no sucesso académico, mas também no desenvolvimento de liderança e cidadania.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#1a365d] to-[#0f2744] overflow-hidden">
        <HeroCarousel images={[
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
          'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80',
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80'
        ]} />
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
              Sobre Nós
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Fundo de Bolsas de Estudo{' '}
              <span className="text-[#c9a227]">Emanuel Xirimbimbi</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Uma iniciativa filantrópica que visa apoiar jovens angolanos
              talentosos em sua jornada educacional.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Nossa <span className="text-[#c9a227]">Missão</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  O Fundo de Bolsas de Estudo Emanuel Xirimbimbi é uma iniciativa
                  filantrópica que visa apoiar jovens angolanos talentosos em sua
                  jornada educacional, oferecendo oportunidades de ensino superior
                  de qualidade.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  A bolsa cobre <span className="font-semibold text-[#1a365d]">100% das propinas após aprovação</span>,
                  com uma taxa de inscrição acessível, democratizando o acesso à
                  educação superior de excelência.
                </p>

                <div className="space-y-4">
                  {[
                    'Cobertura total ou comparticipação até 85%',
                    'Acesso a universidades nacionais e internacionais',
                    'Programa de mentoria exclusivo',
                    'Apoio académico personalizado',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1a365d] dark:text-[#c9a227] flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                    alt="Estudantes"
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#c9a227] rounded-2xl p-6 shadow-xl">
                  <p className="text-4xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-800">Bolsistas Formados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Nossos <span className="text-[#c9a227]">Pilares</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Os princípios que guiam nosso trabalho e compromisso com a educação.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a365d] to-[#c9a227] flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Por que se <span className="text-[#c9a227]">Candidatar?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Oferecemos muito mais que uma bolsa de estudos - proporcionamos
                uma transformação completa em sua jornada educacional.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentials.map((diff, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-800 hover:shadow-xl transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-700"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#1a365d]/10 dark:bg-[#c9a227]/10 flex items-center justify-center mb-4 group-hover:bg-[#1a365d] transition-colors">
                    <diff.icon className="w-6 h-6 text-[#1a365d] dark:text-[#c9a227] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {diff.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Pronto para Começar sua Jornada?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Junte-se a centenas de jovens angolanos que já estão construindo
              um futuro melhor através da educação.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/inscricao">
                <Button
                  size="lg"
                  className="bg-[#c9a227] hover:bg-[#a88420] text-gray-900 font-bold px-8"
                >
                  Candidate-se Agora
                </Button>
              </Link>
              <Link to="/oportunidades">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8"
                >
                  Ver Oportunidades
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Eye icon component
const Eye = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export default SobrePage;
