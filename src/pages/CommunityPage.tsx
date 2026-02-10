import { Users, MessageCircle, Calendar, BookOpen, Award, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/HeroCarousel';

const CommunityPage = () => {
  const heroImages = [
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80',
  ];
  const features = [
    {
      icon: MessageCircle,
      title: 'Fórum de Discussão',
      description: 'Participe de discussões académicas e troque experiências com outros bolseiros.',
    },
    {
      icon: Calendar,
      title: 'Eventos e Webinars',
      description: 'Acesse eventos exclusivos, palestras e webinars com especialistas.',
    },
    {
      icon: BookOpen,
      title: 'Biblioteca de Recursos',
      description: 'Material de estudo, guias e recursos exclusivos para bolseiros.',
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Conecte-se com ex-bolsistas e construa sua rede profissional.',
    },
    {
      icon: Award,
      title: 'Reconhecimento',
      description: 'Destaque-se e seja reconhecido por suas conquistas académicas.',
    },
    {
      icon: Globe,
      title: 'Comunidade Global',
      description: 'Faça parte de uma rede de bolseiros espalhados pelo mundo.',
    },
  ];

  const events = [
    {
      title: 'Workshop de Preparação Académica',
      date: '15 de Fevereiro, 2026',
      time: '14:00 - 16:00',
      type: 'Online',
    },
    {
      title: 'Encontro de Bolsistas 2026',
      date: '20 de Março, 2026',
      time: '09:00 - 17:00',
      type: 'Presencial - Luanda',
    },
    {
      title: 'Mentoria com Ex-Bolsistas',
      date: 'Toda terça-feira',
      time: '18:00 - 19:00',
      type: 'Online',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#1a365d] to-[#0f2744] overflow-hidden">
        <HeroCarousel images={heroImages} />
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
              Comunidade
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comunidade <span className="text-[#c9a227]">Emanuel Xirimbimbi</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Faça parte de uma rede de jovens talentosos que estão transformando
              seus futuros através da educação.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Benefícios da <span className="text-[#c9a227]">Comunidade</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Como membro da nossa comunidade, você tem acesso a recursos
                exclusivos e oportunidades únicas.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#1a365d]/10 flex items-center justify-center mb-4 group-hover:bg-[#1a365d] transition-colors">
                    <feature.icon className="w-7 h-7 text-[#1a365d] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Próximos <span className="text-[#c9a227]">Eventos</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Participe dos nossos eventos exclusivos para bolseiros.
                  Uma oportunidade de aprender, networkar e crescer.
                </p>

                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div
                      key={index}
                      className="p-5 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {event.title}
                          </h4>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {event.date}
                            </span>
                            <span>•</span>
                            <span>{event.time}</span>
                            <span>•</span>
                            <span className="text-[#1a365d]">{event.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="mt-6 border-[#1a365d] text-[#1a365d] hover:bg-[#1a365d] hover:text-white"
                >
                  Ver Todos os Eventos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80"
                  alt="Evento da comunidade"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-900">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                O que dizem nossos <span className="text-[#c9a227]">membros</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: 'A comunidade me deu suporte em momentos difíceis. Sempre encontrei ajuda quando precisei.',
                  author: 'Maria S.',
                  role: 'Bolsista 2023',
                },
                {
                  quote: 'Fiz conexões que vão durar a vida toda. A rede de ex-bolsistas é incrível!',
                  author: 'João P.',
                  role: 'Bolsista 2024',
                },
                {
                  quote: 'Os eventos e webinars me ajudaram muito no desenvolvimento académico e profissional.',
                  author: 'Ana L.',
                  role: 'Bolsista 2023',
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="text-4xl text-[#c9a227] mb-4">"</div>
                  <p className="text-white/80 mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-white/50 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Junte-se à Nossa Comunidade
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Torne-se um bolsista e faça parte de uma rede de jovens angolanos
              que estão transformando seus futuros.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/inscricao">
                <Button
                  size="lg"
                  className="bg-[#1a365d] hover:bg-[#2c5282] text-white font-bold px-8"
                >
                  Candidate-se Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/historias-sucesso">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300"
                >
                  Conheça os Bolsistas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
