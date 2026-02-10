import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, MapPin, GraduationCap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ana Silva',
      course: 'Bacharel em Curadoria e História das Artes',
      university: 'UBA - Universidade de Buenos Aires',
      country: 'Argentina',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      quote: 'A bolsa mudou minha vida! Hoje estudo na UBA e estou construindo meu futuro. Nunca imaginei que teria a oportunidade de estudar em uma universidade tão renomada.',
      achievement: 'Melhor aluna do semestre',
    },
    {
      name: 'Carlos Mendes',
      course: 'Engenharia Informática',
      university: 'Universidade Agostinho Neto',
      country: 'Angola',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      quote: 'Graças ao Fundo Emanuel Xirimbimbi, pude realizar meu sonho de estudar engenharia. A mentoria e o apoio académico foram essenciais para o meu sucesso.',
      achievement: 'Bolsista destaque',
    },
    {
      name: 'Maria Fernanda',
      course: 'Medicina',
      university: 'Universidade de São Paulo',
      country: 'Brasil',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      quote: 'Ser bolsista do Fundo Emanuel Xirimbimbi é mais que ter uma bolsa de estudos, é fazer parte de uma família que acredita no seu potencial.',
      achievement: 'Primeira da turma',
    },
    {
      name: 'João Paulo',
      course: 'Arquitetura e Urbanismo',
      university: 'Universidade de Lisboa',
      country: 'Portugal',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      quote: 'A oportunidade de estudar em Portugal abriu portas que eu nunca imaginei. O Fundo não apenas financiou meus estudos, mas me deu ferramentas para crescer.',
      achievement: 'Projeto premiado',
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
    <section className="py-16 md:py-24 bg-[#0f2744] dark:bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-[#1a365d]/30 rounded-full blur-[80px] md:blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-48 md:w-96 h-48 md:h-96 bg-[#c9a227]/10 rounded-full blur-[80px] md:blur-[150px]" />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#c9a227]/20 text-[#c9a227] text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Testemunhos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6">
              Histórias de <span className="text-gradient-gold">Sucesso</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto px-4">
              Conheça os jovens angolanos que transformaram suas vidas através 
              da educação com o apoio da Bolsa Emanuel Xirimbimbi.
            </p>
          </div>

          {/* Main Testimonial */}
          <div className="max-w-5xl mx-auto mb-10 md:mb-16">
            <div className="relative glass-liquid-dark rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-12">
              {/* Quote Icon */}
              <div className="absolute -top-4 md:-top-6 left-4 md:left-8 w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#c9a227] to-[#f0d878] flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 md:w-7 md:h-7 text-[#0f2744]" />
              </div>

              <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[280px_1fr] gap-6 md:gap-8 items-center">
                {/* Profile Image */}
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-2xl md:rounded-3xl overflow-hidden border-2 md:border-4 border-[#c9a227]/30">
                      <img
                        src={current.image}
                        alt={current.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 md:py-1.5 bg-[#c9a227] rounded-full text-[#0f2744] text-xs md:text-sm font-medium shadow-lg">
                      {current.year}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex gap-1 mb-3 md:mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#c9a227] fill-[#c9a227]" />
                    ))}
                  </div>

                  <blockquote className="text-base md:text-lg lg:text-xl text-white/90 italic mb-4 md:mb-6 leading-relaxed">
                    "{current.quote}"
                  </blockquote>

                  <div className="border-t border-white/10 pt-3 md:pt-4">
                    <h4 className="text-lg md:text-2xl font-bold text-white">{current.name}</h4>
                    <p className="text-[#c9a227] font-medium text-sm md:text-base">{current.course}</p>
                    <div className="flex flex-wrap gap-2 md:gap-4 mt-2 text-xs md:text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <GraduationCap className="w-3 h-3 md:w-4 md:h-4" />
                        {current.university}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                        {current.country}
                      </span>
                    </div>
                    <div className="mt-2 md:mt-3 inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#c9a227]/10 rounded-full">
                      <Award className="w-3 h-3 md:w-4 md:h-4 text-[#c9a227]" />
                      <span className="text-xs md:text-sm text-[#c9a227]">{current.achievement}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 md:mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-white/20 text-white hover:bg-white/10 w-10 h-10 md:w-12 md:h-12"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-1.5 md:gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 md:h-3 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-[#c9a227] w-6 md:w-10'
                        : 'bg-white/30 hover:bg-white/50 w-2 md:w-3'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-white/20 text-white hover:bg-white/10 w-10 h-10 md:w-12 md:h-12"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>

          {/* Scholars Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {testimonials.map((scholar, index) => (
              <div
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`group cursor-pointer rounded-xl md:rounded-2xl overflow-hidden transition-all ${
                  index === currentIndex
                    ? 'ring-2 ring-[#c9a227] scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="relative h-28 md:h-48">
                  <img
                    src={scholar.image}
                    alt={scholar.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                    <p className="font-semibold text-white text-xs md:text-base">{scholar.name}</p>
                    <p className="text-[10px] md:text-xs text-white/70">{scholar.country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* All Scholars CTA */}
          <div className="text-center mt-8 md:mt-12">
            <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
              Cada história representa uma vida transformada através da educação.
            </p>
            <a
              href="/historias-sucesso"
              className="inline-flex items-center gap-2 text-[#c9a227] hover:underline font-medium text-sm md:text-base"
            >
              Conheça todos os nossos bolsistas
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
