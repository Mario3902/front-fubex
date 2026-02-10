import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, GraduationCap, MapPin, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/HeroCarousel';

const HistoriasSucessoPage = () => {
  const heroImages = [
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80',
    'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80',
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ana Silva',
      course: 'Bacharel em Curadoria e História das Artes',
      university: 'UBA - Universidade de Buenos Aires',
      country: 'Argentina',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'A bolsa mudou minha vida! Hoje estudo na UBA e estou construindo meu futuro. Nunca imaginei que teria a oportunidade de estudar em uma universidade tão renomada. O apoio da equipe Emanuel Xirimbimbi foi fundamental para minha jornada académica.',
      achievement: 'Melhor aluna do semestre',
    },
    {
      name: 'Carlos Mendes',
      course: 'Engenharia Informática',
      university: 'Universidade Agostinho Neto',
      country: 'Angola',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'Graças ao Fundo Emanuel Xirimbimbi, pude realizar meu sonho de estudar engenharia. A mentoria e o apoio académico foram essenciais para o meu sucesso. Hoje estou preparado para contribuir para o desenvolvimento de Angola.',
      achievement: 'Bolsista destaque',
    },
    {
      name: 'Maria Fernanda',
      course: 'Medicina',
      university: 'Universidade de São Paulo',
      country: 'Brasil',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'Ser bolsista do Fundo Emanuel Xirimbimbi é mais que ter uma bolsa de estudos, é fazer parte de uma família que acredita no seu potencial. O suporte vai além do financeiro, é um acompanhamento verdadeiro.',
      achievement: 'Primeira da turma',
    },
    {
      name: 'João Paulo',
      course: 'Arquitetura e Urbanismo',
      university: 'Universidade de Lisboa',
      country: 'Portugal',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'A oportunidade de estudar em Portugal abriu portas que eu nunca imaginei. O Fundo Emanuel Xirimbimbi não apenas financiou meus estudos, mas me deu ferramentas para crescer como profissional e como pessoa.',
      achievement: 'Projeto premiado',
    },
    {
      name: 'Luciana Costa',
      course: 'Direito',
      university: 'Universidade Católica de Angola',
      country: 'Angola',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      quote: 'A bolsa Emanuel Xirimbimbi me deu a chance de estudar na melhor universidade de Angola. Hoje sou advogada e posso ajudar minha família e minha comunidade.',
      achievement: 'Melhor trabalho de conclusão',
    },
    {
      name: 'Pedro Henrique',
      course: 'Economia',
      university: 'Universidade de Barcelona',
      country: 'Espanha',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      quote: 'Estudar na Espanha foi um sonho que se tornou realidade graças ao Fundo. A experiência internacional mudou minha perspectiva de mundo e abriu muitas portas profissionais.',
      achievement: 'Estágio no Banco Mundial',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#1a365d] to-[#0f2744] overflow-hidden">
        <HeroCarousel images={heroImages} />
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
              Testemunhos
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Histórias de <span className="text-[#c9a227]">Sucesso</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Conheça os jovens angolanos que transformaram suas vidas através
              da educação com o apoio da Bolsa Emanuel Xirimbimbi.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="section-padding">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-[400px_1fr]">
                {/* Image */}
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      {current.country}
                    </div>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <GraduationCap className="w-4 h-4" />
                      {current.year}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#c9a227] fill-[#c9a227]" />
                    ))}
                  </div>

                  <Quote className="w-10 h-10 text-[#c9a227] mb-4" />

                  <blockquote className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                    "{current.quote}"
                  </blockquote>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{current.name}</h3>
                    <p className="text-[#1a365d] dark:text-[#c9a227] font-medium">{current.course}</p>
                    <p className="text-gray-500 dark:text-gray-400">{current.university}</p>
                    <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#1a365d]/10 dark:bg-[#c9a227]/10 rounded-full">
                      <Award className="w-4 h-4 text-[#1a365d] dark:text-[#c9a227]" />
                      <span className="text-sm text-[#1a365d] dark:text-[#c9a227] font-medium">{current.achievement}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-gray-300 hover:border-[#1a365d] hover:text-[#1a365d]"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                      ? 'bg-[#1a365d] w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-gray-300 hover:border-[#1a365d] hover:text-[#1a365d]"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Scholars Grid */}
      <section className="py-24 bg-gray-50 dark:bg-gray-950">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Todos os Nossos <span className="text-[#c9a227]">Bolsistas</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Cada história representa uma vida transformada através da educação.
                Conheça todos os jovens que fazem parte da família Emanuel Xirimbimbi.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((scholar, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={scholar.image}
                      alt={scholar.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-[#c9a227] text-gray-900 text-xs font-semibold rounded-full">
                        {scholar.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{scholar.name}</h3>
                    <p className="text-[#1a365d] dark:text-[#c9a227] text-sm font-medium">{scholar.course}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{scholar.university}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#c9a227]" />
                      <span className="text-xs text-gray-600 dark:text-gray-300">{scholar.achievement}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gray-900">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Bolsistas' },
                { value: '15+', label: 'Universidades' },
                { value: '6', label: 'Países' },
                { value: '95%', label: 'Empregabilidade' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-[#c9a227] mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoriasSucessoPage;
