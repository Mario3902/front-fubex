import { Link } from 'react-router-dom';
import { FileQuestion, GraduationCap, CheckCircle, ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  const faqs = [
    {
      category: 'Processo de Inscrição',
      icon: FileQuestion,
      questions: [
        {
          q: 'Quais são os requisitos básicos para se candidatar?',
          a: 'Para se candidatar, você precisa ter: (1) Documentação válida (Bilhete de Identidade ou Passaporte), (2) Comprovante de conclusão do ensino médio ou equivalente, (3) Pagar a taxa de inscrição correspondente ao tipo de bolsa desejada.',
        },
        {
          q: 'Qual é o valor da taxa de inscrição?',
          a: 'Os valores variam conforme o tipo de bolsa: Curso Grátis Financiado pela Huawei (Grátis), Profissional Nacional (5.000 Kz), Nacional (7.500 Kz), Profissional Internacional (10.000 Kz), Internacional (15.000 Kz), Brasil São Paulo (20.000 Kz).',
        },
        {
          q: 'Quanto tempo demora o processo seletivo?',
          a: 'O processo seletivo geralmente leva entre 30 a 60 dias, incluindo análise de documentos, exame de admissão da universidade (quando aplicável) e entrevista.',
        },
      ],
    },
    {
      category: 'Tipos de Bolsas',
      icon: GraduationCap,
      questions: [
        {
          q: 'Qual é a diferença entre bolsas nacionais e internacionais?',
          a: 'Bolsas nacionais são para universidades em Angola com cobertura total de propinas após aprovação. Bolsas internacionais são para universidades no exterior (Espanha, Brasil, Portugal) com comparticipação de até 85% dos custos educacionais.',
        },
        {
          q: 'Que custos são cobertos pela bolsa?',
          a: 'Para bolsas nacionais: 100% das propinas. Para bolsas internacionais: até 85% dos custos educacionais. Custos com passagem aérea e acomodação são de responsabilidade do estudante, mas oferecemos orientação completa.',
        },
      ],
    },
    {
      category: 'Após a Seleção',
      icon: CheckCircle,
      questions: [
        {
          q: 'Quais são as obrigações dos bolsistas?',
          a: 'Os bolsistas devem: (1) Manter bom aproveitamento académico (média mínima exigida), (2) Participar das atividades do programa de mentoria, (3) Representar positivamente o Fundo Emanuel Xirimbimbi.',
        },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1a365d]/5 to-transparent" />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#1a365d]/10 dark:bg-[#c9a227]/20 text-[#1a365d] dark:text-[#c9a227] text-xs md:text-sm font-semibold mb-3 md:mb-4">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-6">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Encontre respostas para as dúvidas mais comuns sobre o Fundo de 
              Bolsas de Estudo Emanuel Xirimbimbi.
            </p>
          </div>

          {/* FAQ Content */}
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* FAQ Categories */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              {faqs.map((category, cIndex) => (
                <div
                  key={cIndex}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl md:rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden"
                >
                  <div className="p-4 md:p-6 border-b border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#1a365d]/10 flex items-center justify-center">
                        <category.icon className="w-4 h-4 md:w-5 md:h-5 text-[#1a365d] dark:text-[#c9a227]" />
                      </div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                        {category.category}
                      </h3>
                    </div>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, qIndex) => (
                      <AccordionItem
                        key={qIndex}
                        value={`${cIndex}-${qIndex}`}
                        className="border-b border-gray-100 dark:border-gray-800 last:border-0"
                      >
                        <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 text-left hover:no-underline hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-sm md:text-base">
                          <span className="text-gray-700 dark:text-gray-300 font-medium pr-4">
                            {item.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 md:px-6 pb-3 md:pb-4">
                          <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                            {item.a}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-gradient-to-br from-[#1a365d] to-[#0f2744] rounded-xl md:rounded-2xl p-5 md:p-8 text-white">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center mb-4 md:mb-6">
                  <FileQuestion className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4">
                  Ainda tem dúvidas?
                </h3>
                <p className="text-white/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  Se não encontrou a resposta que procurava, nossa equipe está 
                  pronta para ajudar. Entre em contato conosco.
                </p>
                <Link to="/contato">
                  <Button
                    className="w-full bg-white text-[#1a365d] hover:bg-gray-100 font-semibold text-sm md:text-base"
                  >
                    Fale Conosco
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Full FAQ CTA */}
          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-[#1a365d] dark:text-[#c9a227] hover:underline font-medium text-sm md:text-base"
            >
              Ver todas as perguntas frequentes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
