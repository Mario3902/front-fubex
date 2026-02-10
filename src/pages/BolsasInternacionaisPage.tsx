import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/HeroCarousel';

const BolsasInternacionaisPage = () => {
  const benefits = [
    {
      icon: Globe,
      title: 'Instituições Renomadas',
      description: 'Acesso às melhores universidades internacionais.',
    },
    {
      icon: CheckCircle,
      title: 'Comparticipação até 85%',
      description: 'Cobertura significativa dos custos educacionais.',
    },
    {
      icon: FileText,
      title: 'Suporte para Visto',
      description: 'Orientação completa no processo de visto.',
    },
    {
      icon: Users,
      title: 'Rede Global',
      description: 'Conexão com ex-bolsistas de todo o mundo.',
    },
  ];

  const destinations = [
    {
      country: 'Espanha',
      flag: '🇪🇸',
      description: 'Instituições europeias de prestígio com programas em diversas áreas.',
      highlights: ['Universidades de excelência', 'Cultura rica', 'Experiência europeia'],
    },
    {
      country: 'Brasil',
      flag: '🇧🇷',
      description: 'Universidades brasileiras reconhecidas mundialmente.',
      highlights: ['Tradição académica', 'Proximidade cultural', 'Oportunidades de estágio'],
    },
    {
      country: 'Portugal',
      flag: '🇵🇹',
      description: 'Instituições portuguesas com excelência académica.',
      highlights: ['Língua portuguesa', 'Fácil integração', 'Tradição secular'],
    },
  ];

  const fees = [
    { type: 'Profissional Internacional', price: '10.000 Kz' },
    { type: 'Internacional', price: '15.000 Kz' },
    { type: 'Brasil (São Paulo)', price: '20.000 Kz' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#1a365d] to-[#0f2744] overflow-hidden">
        <HeroCarousel images={[
          'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80',
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80',
          'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&q=80'
        ]} />
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
              Bolsas Internacionais
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bolsas de Estudo <span className="text-[#c9a227]">Internacionais</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Oportunidades em países como Espanha, Brasil e Portugal, com
              suporte académico completo.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Benefícios das <span className="text-[#c9a227]">Bolsas Internacionais</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tudo o que você precisa para estudar no exterior com sucesso.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#1a365d]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1a365d] transition-colors">
                    <benefit.icon className="w-7 h-7 text-[#1a365d] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Destinos <span className="text-[#c9a227]">Disponíveis</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Escolha o país que melhor se adequa aos seus objetivos académicos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {destinations.map((dest, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="h-48 bg-gradient-to-br from-[#1a365d] to-[#2c5282] flex items-center justify-center">
                    <span className="text-8xl">{dest.flag}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {dest.country}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {dest.description}
                    </p>
                    <ul className="space-y-2">
                      {dest.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <CheckCircle className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Taxas de <span className="text-[#c9a227]">Inscrição</span>
              </h2>
              <p className="text-lg text-gray-600">
                Investimento para começar sua jornada internacional.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 gap-4 p-6 bg-[#1a365d] text-white font-semibold">
                <div>Tipo de Bolsa</div>
                <div className="text-right">Taxa de Inscrição</div>
              </div>
              {fees.map((fee, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 gap-4 p-6 ${index !== fees.length - 1 ? 'border-b border-gray-200' : ''
                    }`}
                >
                  <div className="text-gray-700 dark:text-gray-300">{fee.type}</div>
                  <div className="text-right font-semibold text-[#1a365d] dark:text-[#c9a227]">
                    {fee.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-amber-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <span className="text-amber-600 text-lg">ℹ️</span>
              </div>
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">
                  Informação Importante
                </h4>
                <p className="text-amber-800 text-sm mb-4">
                  Custos com passagem aérea e acomodação são responsabilidade do
                  estudante para bolsas internacionais. No entanto, oferecemos:
                </p>
                <ul className="space-y-2">
                  {[
                    'Orientação completa para obtenção de visto',
                    'Indicação de opções de acomodação',
                    'Suporte na preparação para a viagem',
                    'Acompanhamento durante o período de estudos',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-amber-800">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Processo <span className="text-[#c9a227]">Seletivo</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Entenda como funciona o processo de seleção para bolsas internacionais.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {[
                { step: '1', title: 'Inscrição', desc: 'Preencha o formulário' },
                { step: '2', title: 'Análise', desc: 'Avaliação documental' },
                { step: '3', title: 'Entrevista', desc: 'Conversa com a equipe' },
                { step: '4', title: 'Visto', desc: 'Suporte para documentação' },
                { step: '5', title: 'Partida', desc: 'Preparação para viagem' },
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-14 h-14 rounded-full bg-[#1a365d] text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
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
              Candidate-se à Bolsa Internacional
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Dê o primeiro passo para estudar no exterior. As inscrições estão abertas!
            </p>
            <Link to="/inscricao">
              <Button
                size="lg"
                className="bg-[#c9a227] hover:bg-[#a88420] text-gray-900 font-bold px-8"
              >
                Inscreva-se Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BolsasInternacionaisPage;
