import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle, Plane, Building2, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Destinations = () => {
  const destinations = [
    {
      country: 'Angola',
      flag: '🇦🇴',
      image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80',
      description: 'Universidades nacionais de excelência com programas reconhecidos internacionalmente.',
      features: [
        'Cobertura total de propinas',
        'Universidades de ponta em Angola',
        'Apoio académico personalizado',
        'Programa de mentoria exclusivo',
      ],
      universities: ['UAN', 'UCAN', 'Lusíada', 'Metodista'],
      color: '#1a365d',
    },
    {
      country: 'Espanha',
      flag: '🇪🇸',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80',
      description: 'Instituições europeias de prestígio com programas em diversas áreas do conhecimento.',
      features: [
        'Comparticipação até 85%',
        'Universidades renomadas',
        'Suporte para processo de visto',
        'Rede global de ex-bolsistas',
      ],
      universities: ['Barcelona', 'Madrid', 'Valencia', 'Sevilha'],
      color: '#c9a227',
    },
    {
      country: 'Brasil',
      flag: '🇧🇷',
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80',
      description: 'Universidades brasileiras reconhecidas mundialmente com forte tradição académica.',
      features: [
        'Comparticipação até 85%',
        'Instituições de excelência',
        'Proximidade cultural',
        'Oportunidades de estágio',
      ],
      universities: ['USP', 'UNICAMP', 'UFRJ', 'UFMG'],
      color: '#1a365d',
    },
    {
      country: 'Portugal',
      flag: '🇵🇹',
      image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80',
      description: 'Instituições portuguesas com excelência académica e proximidade cultural.',
      features: [
        'Comparticipação até 85%',
        'Língua portuguesa',
        'Tradição académica secular',
        'Fácil integração',
      ],
      universities: ['Lisboa', 'Porto', 'Coimbra', 'Nova'],
      color: '#c9a227',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#c9a227]/5 to-transparent" />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#1a365d]/10 dark:bg-[#c9a227]/20 text-[#1a365d] dark:text-[#c9a227] text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Destinos
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-6">
              Oportunidades em{' '}
              <span className="text-gradient">Vários Países</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Oferecemos oportunidades em universidades de excelência tanto em 
              Angola quanto no exterior. Escolha o destino que melhor se adequa 
              aos seus objetivos.
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8 mb-10 md:mb-16">
            {destinations.map((dest, index) => (
              <div
                key={index}
                className="group relative rounded-xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 md:hover:-translate-y-2"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.country}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end">
                  <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                    <span className="text-2xl md:text-4xl">{dest.flag}</span>
                    <div>
                      <span className="text-white/60 text-[10px] md:text-sm font-medium uppercase tracking-wider">
                        Destino
                      </span>
                      <h3 className="text-lg md:text-2xl font-bold text-white">{dest.country}</h3>
                    </div>
                  </div>
                  <p className="text-white/70 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">
                    {dest.description}
                  </p>

                  {/* Universities */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {dest.universities.map((uni, uIndex) => (
                      <span
                        key={uIndex}
                        className="px-1.5 md:px-2 py-0.5 md:py-1 bg-white/10 rounded text-[10px] md:text-xs text-white/80"
                      >
                        {uni}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1 md:space-y-2 mb-4 md:mb-6 hidden sm:block">
                    {dest.features.slice(0, 3).map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-2 text-xs md:text-sm text-white/80"
                      >
                        <CheckCircle
                          className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0"
                          style={{ color: dest.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={dest.country === 'Angola' ? '/bolsas-nacionais' : '/bolsas-internacionais'}
                  >
                    <Button
                      variant="outline"
                      className="w-full border-white/30 text-white hover:bg-white hover:text-gray-900 text-xs md:text-sm"
                    >
                      Saiba Mais
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Country Flag Indicator */}
                <div
                  className="absolute top-3 md:top-6 right-3 md:right-6 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: dest.color }}
                >
                  <MapPin className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-3 gap-3 md:gap-6">
            <div className="p-3 md:p-6 rounded-lg md:rounded-2xl bg-gray-50 dark:bg-gray-900 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-[#1a365d]/10 flex items-center justify-center flex-shrink-0">
                <Plane className="w-5 h-5 md:w-7 md:h-7 text-[#1a365d] dark:text-[#c9a227]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-base">Viagem</h4>
                <p className="text-[10px] md:text-sm text-gray-600 dark:text-gray-400">Suporte completo</p>
              </div>
            </div>
            <div className="p-3 md:p-6 rounded-lg md:rounded-2xl bg-gray-50 dark:bg-gray-900 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-[#c9a227]/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 md:w-7 md:h-7 text-[#c9a227]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-base">Acomodação</h4>
                <p className="text-[10px] md:text-sm text-gray-600 dark:text-gray-400">Orientação incluída</p>
              </div>
            </div>
            <div className="p-3 md:p-6 rounded-lg md:rounded-2xl bg-gray-50 dark:bg-gray-900 flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-[#1a365d]/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-5 h-5 md:w-7 md:h-7 text-[#1a365d] dark:text-[#c9a227]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-xs md:text-base">Universidades</h4>
                <p className="text-[10px] md:text-sm text-gray-600 dark:text-gray-400">Parcerias exclusivas</p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="mt-6 md:mt-8 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg md:rounded-2xl p-4 md:p-6 flex items-start gap-3 md:gap-4">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-amber-100 dark:bg-amber-800 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-600 dark:text-amber-300 text-base md:text-xl">ℹ️</span>
            </div>
            <div>
              <h4 className="font-semibold text-amber-900 dark:text-amber-300 mb-1 text-sm md:text-base">
                Informação Importante
              </h4>
              <p className="text-amber-800 dark:text-amber-400 text-xs md:text-sm">
                Custos com passagem aérea e acomodação são responsabilidade do 
                estudante para bolsas internacionais, mas oferecemos orientação 
                e suporte completo durante todo o processo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
