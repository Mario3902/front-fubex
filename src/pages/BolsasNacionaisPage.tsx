import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, GraduationCap, Building2, Banknote, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/HeroCarousel';

const BolsasNacionaisPage = () => {
  const benefits = [
    {
      icon: Banknote,
      title: 'Cobertura Total',
      description: '100% das propinas cobertas após aprovação no processo seletivo.',
    },
    {
      icon: Building2,
      title: 'Universidades de Excelência',
      description: 'Acesso às melhores universidades de Angola.',
    },
    {
      icon: Users,
      title: 'Mentoria Especializada',
      description: 'Acompanhamento personalizado durante todo o curso.',
    },
    {
      icon: GraduationCap,
      title: 'Apoio Académico',
      description: 'Suporte contínuo para garantir excelência académica.',
    },
  ];

  const universities = [
    'Universidade Agostinho Neto (UAN)',
    'Universidade Metodista de Angola',
    'Universidade Católica de Angola',
    'Universidade Lusíada de Angola',
    'Universidade Gregório Semedo',
    'Outras instituições de excelência',
  ];

  const fees = [
    { type: 'Curso Grátis Financiado pela Huawei', price: 'Grátis' },
    { type: 'Profissional Nacional', price: '5.000 Kz' },
    { type: 'Nacional', price: '7.500 Kz' },
    { type: 'Profissional Nacional 100% Paga', price: '50.000 Kz' },
    { type: 'Nacional 100% Paga', price: '100.000 Kz' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#1a365d] to-[#0f2744] overflow-hidden">
        <HeroCarousel images={[
          'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=1920&q=80',
          'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80',
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80'
        ]} />
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
              Bolsas Nacionais
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bolsas de Estudo <span className="text-[#c9a227]">Nacionais</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Acesso a universidades de ponta em Angola com cobertura total de
              propinas após aprovação.
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
                Benefícios das <span className="text-[#c9a227]">Bolsas Nacionais</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tudo o que você precisa para ter sucesso académico em Angola.
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

      {/* Universities */}
      <section className="py-24 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Universidades <span className="text-[#c9a227]">Parceiras</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Temos parcerias com as principais universidades de Angola,
                  garantindo acesso a cursos de qualidade reconhecida internacionalmente.
                </p>

                <ul className="space-y-4">
                  {universities.map((uni, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                      <span className="text-gray-700">{uni}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
                  alt="Universidade em Angola"
                  className="w-full h-[400px] object-cover"
                />
              </div>
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
                Investimento acessível para começar sua jornada educacional.
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
                  <div className={`text-right font-semibold ${fee.price === 'Grátis' ? 'text-green-600' : 'text-[#1a365d] dark:text-[#c9a227]'
                    }`}>
                    {fee.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <p className="text-amber-800 text-sm text-center">
                <strong>Nota:</strong> A taxa de inscrição não garante a aprovação da bolsa.
                O processo é seletivo e mediante vagas disponíveis.
              </p>
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
                Entenda como funciona o processo de seleção para bolsas nacionais.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Inscrição', desc: 'Preencha o formulário e pague a taxa' },
                { step: '2', title: 'Análise', desc: 'Avaliação criteriosa da documentação' },
                { step: '3', title: 'Exame', desc: 'Prova de admissão da universidade' },
                { step: '4', title: 'Resultado', desc: 'Notificação por telefone' },
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 rounded-full bg-[#1a365d] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
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
              Candidate-se à Bolsa Nacional
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Dê o primeiro passo para transformar seu futuro. As inscrições estão abertas!
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

export default BolsasNacionaisPage;
