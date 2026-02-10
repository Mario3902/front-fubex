import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, GraduationCap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/HeroCarousel';

const OportunidadesPage = () => {
  const opportunities = [
    {
      type: 'Bolsas Nacionais',
      icon: GraduationCap,
      description: 'Acesso a universidades de ponta em Angola com cobertura total de propinas após aprovação.',
      benefits: [
        'Cobertura total de propinas ou comparticipação até 85%',
        'Universidades angolanas de excelência',
        'Apoio académico personalizado',
        'Programa de mentoria exclusivo',
      ],
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
      link: '/bolsas-nacionais',
      color: 'from-[#1a365d] to-[#2c5282]',
    },
    {
      type: 'Bolsas Internacionais',
      icon: Globe,
      description: 'Oportunidades em países como Espanha, Brasil e Portugal, com suporte académico completo.',
      benefits: [
        'Instituições internacionais renomadas',
        'Comparticipação de até 85% nos custos',
        'Suporte para processo de visto',
        'Rede global de ex-bolsistas',
      ],
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80',
      link: '/bolsas-internacionais',
      color: 'from-[#c9a227] to-[#d4b43a]',
    },
  ];

  const destinations = [
    {
      country: 'Angola',
      flag: '🇦🇴',
      description: 'Universidades nacionais de excelência',
    },
    {
      country: 'Espanha',
      flag: '🇪🇸',
      description: 'Instituições europeias de prestígio',
    },
    {
      country: 'Brasil',
      flag: '🇧🇷',
      description: 'Tradição académica reconhecida',
    },
    {
      country: 'Portugal',
      flag: '🇵🇹',
      description: 'Excelência e proximidade cultural',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#1a365d] to-[#0f2744] overflow-hidden">
        <HeroCarousel images={[
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80',
          'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&q=80',
          'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80'
        ]} />
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
              Oportunidades
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Oportunidades de{' '}
              <span className="text-[#c9a227]">Bolsas de Estudo</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Explore as diversas oportunidades educacionais disponíveis, desde
              universidades nacionais de excelência até instituições internacionais renomadas.
            </p>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Tipos de <span className="text-[#c9a227]">Bolsas</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Escolha o tipo de bolsa que melhor se adequa aos seus objetivos
                educacionais e profissionais.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {opportunities.map((opp, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={opp.image}
                      alt={opp.type}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${opp.color} flex items-center justify-center mb-4`}>
                        <opp.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{opp.type}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{opp.description}</p>

                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      Benefícios Inclusos:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {opp.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to={opp.link}>
                      <Button className="w-full bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white">
                        Saiba Mais
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Destinos <span className="text-[#c9a227]">Disponíveis</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Oferecemos oportunidades em universidades de excelência tanto em
                Angola quanto no exterior.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {destinations.map((dest, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-center"
                >
                  <div className="text-5xl mb-4">{dest.flag}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {dest.country}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{dest.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 dark:text-amber-400 text-lg">ℹ️</span>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 dark:text-amber-400 mb-1">
                  Informação Importante
                </h4>
                <p className="text-amber-800 dark:text-amber-200 text-sm">
                  Custos com passagem aérea e acomodação são responsabilidade do
                  estudante para bolsas internacionais, mas oferecemos orientação
                  e suporte completo durante todo o processo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Comece sua Jornada Hoje
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Não perca a oportunidade de transformar seu futuro através da educação.
            </p>
            <Link to="/inscricao">
              <Button
                size="lg"
                className="bg-[#c9a227] hover:bg-[#a88420] text-gray-900 font-bold px-8"
              >
                Candidate-se Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OportunidadesPage;
