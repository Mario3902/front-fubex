import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Briefcase, 
  Users, 
  Banknote, 
  Lightbulb, 
  Star,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Benefits = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: 'Bolsa de Estudo Gratuita',
      description: 'Cobertura total ou parcial de até 85% dos custos educacionais para bolsas nacionais e internacionais.',
      color: 'from-[#1a365d] to-[#2c5282]',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
    },
    {
      icon: Briefcase,
      title: 'Acesso Direto ao Emprego',
      description: 'Todos os bolseiros têm acesso direto a oportunidades de emprego após a conclusão dos estudos.',
      color: 'from-[#c9a227] to-[#d4b43a]',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    },
    {
      icon: Users,
      title: 'Rede de Apoio Académico',
      description: 'Suporte completo para mestrado e doutoramento com mentoria especializada.',
      color: 'from-[#1a365d] to-[#c9a227]',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
    },
    {
      icon: Banknote,
      title: 'Subsídio Financeiro',
      description: 'Apoio financeiro adicional para bolseiros excepcionais que se destacam.',
      color: 'from-[#c9a227] to-[#f0d878]',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    },
    {
      icon: Lightbulb,
      title: 'Apoio a Ideias de Excelência',
      description: 'Suporte total para projetos inovadores e ideias empreendedoras dos bolseiros.',
      color: 'from-[#2c5282] to-[#1a365d]',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80',
    },
    {
      icon: Star,
      title: 'Prioridade nos Benefícios',
      description: 'Acesso prioritário a todos os benefícios e oportunidades oferecidos pelo fundo.',
      color: 'from-[#c9a227] to-[#a88420]',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')] bg-cover bg-center opacity-5" />
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#1a365d]/10 dark:bg-[#c9a227]/20 text-[#1a365d] dark:text-[#c9a227] text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Benefícios
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-6">
              Benefícios da Bolsa de Estudo{' '}
              <span className="text-gradient">Emanuel Xirimbimbi</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Uma iniciativa filantrópica que oferece suporte completo para sua 
              jornada educacional e profissional.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12 md:mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group relative rounded-xl md:rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 md:hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-36 md:h-48 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${benefit.color} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-4 md:p-6">
                  <div className={`w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform -mt-8 md:-mt-12 relative z-10`}>
                    <benefit.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="/bolsista.png"
                alt="Estudantes"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/95 via-[#0f2744]/90 to-[#1a365d]/85" />
            </div>
            
            <div className="relative z-10 p-6 md:p-10 lg:p-16 text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
                Pronto para Transformar seu Futuro?
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
                Junte-se a centenas de jovens angolanos que já estão construindo 
                um futuro melhor através da educação.
              </p>
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                <Link to="/inscricao">
                  <Button
                    size="lg"
                    className="bg-[#c9a227] hover:bg-[#a88420] text-[#0f2744] font-bold px-6 md:px-8 text-sm md:text-base shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                  >
                    Inscreva-se Agora
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/oportunidades">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-6 md:px-8 text-sm md:text-base glass-liquid"
                  >
                    Ver Oportunidades
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
