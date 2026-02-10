import { FileQuestion, GraduationCap, CheckCircle, Banknote, Plane, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import HeroCarousel from '@/components/HeroCarousel';

const FAQPage = () => {
  const heroImages = [
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&q=80',
  ];
  const faqCategories = [
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
          a: 'Os valores variam conforme o tipo de bolsa: Curso Grátis Financiado pela Huawei (Grátis), Profissional Nacional (5.000 Kz), Nacional (7.500 Kz), Profissional Internacional (10.000 Kz), Internacional (15.000 Kz), Brasil São Paulo (20.000 Kz), Profissional Nacional 100% Paga (50.000 Kz), Nacional 100% Paga (100.000 Kz).',
        },
        {
          q: 'Quanto tempo demora o processo seletivo?',
          a: 'O processo seletivo geralmente leva entre 30 a 60 dias, incluindo análise de documentos, exame de admissão da universidade (quando aplicável) e entrevista.',
        },
        {
          q: 'Posso me candidatar a mais de um curso?',
          a: 'Sim, você pode indicar mais de uma opção de curso no formulário de inscrição. No entanto, a bolsa será concedida para apenas um curso, de acordo com a disponibilidade de vagas e seu desempenho no processo seletivo.',
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
        {
          q: 'Posso mudar de bolsa nacional para internacional?',
          a: 'Sim, após completar um período mínimo de estudos e mediante aprovação, é possível solicitar transferência. Cada caso é analisado individualmente pela equipe do fundo.',
        },
      ],
    },
    {
      category: 'Após a Seleção',
      icon: CheckCircle,
      questions: [
        {
          q: 'Quais são as obrigações dos bolsistas?',
          a: 'Os bolsistas devem: (1) Manter bom aproveitamento académico (média mínima exigida), (2) Participar das atividades do programa de mentoria, (3) Representar positivamente o Fundo Emanuel Xirimbimbi, (4) Cumprir o cronograma académico estabelecido.',
        },
        {
          q: 'A bolsa pode ser cancelada?',
          a: 'Sim, a bolsa pode ser cancelada em caso de: (1) Desempenho académico insuficiente, (2) Conduta inapropriada, (3) Abandono do curso, (4) Não cumprimento das obrigações estabelecidas no contrato.',
        },
        {
          q: 'Existe apoio para estágios?',
          a: 'Sim, todos os bolseiros têm acesso direto a oportunidades de emprego e estágio após a conclusão dos estudos, através da nossa rede de parceiros.',
        },
      ],
    },
    {
      category: 'Financeiro',
      icon: Banknote,
      questions: [
        {
          q: 'A taxa de inscrição garante a aprovação?',
          a: 'Não. A taxa de inscrição não garante a aprovação da bolsa. O processo é seletivo e mediante vagas disponíveis, sujeito a exame de admissão da universidade.',
        },
        {
          q: 'Quais são as formas de pagamento?',
          a: 'Aceitamos pagamentos via: Express, PayPal, Transferência Bancária. Após enviar a candidatura, você receberá as instruções detalhadas para pagamento.',
        },
        {
          q: 'Existe subsídio financeiro adicional?',
          a: 'Sim, oferecemos apoio financeiro adicional para bolseiros excepcionais que se destacam academicamente. Este benefício é concedido mediante análise de mérito.',
        },
      ],
    },
    {
      category: 'Bolsas Internacionais',
      icon: Plane,
      questions: [
        {
          q: 'Quem paga a passagem e acomodação?',
          a: 'Custos com passagem aérea e acomodação são responsabilidade do estudante. No entanto, oferecemos orientação completa para obtenção de visto, indicação de opções de acomodação e suporte na preparação para a viagem.',
        },
        {
          q: 'Preciso falar o idioma do país?',
          a: 'Requisitos de idioma variam conforme a universidade e o país. Para Portugal e Brasil, o português é a língua oficial. Para Espanha, pode ser necessário comprovar conhecimento de espanhol ou inglês, dependendo do curso.',
        },
        {
          q: 'O fundo ajuda com o processo de visto?',
          a: 'Sim, oferecemos suporte completo para o processo de visto, incluindo orientação sobre documentação necessária, agendamento e preparação para entrevista consular.',
        },
      ],
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
              FAQ
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Perguntas <span className="text-[#c9a227]">Frequentes</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre o Fundo de
              Bolsas de Estudo Emanuel Xirimbimbi.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {faqCategories.map((category, cIndex) => (
                <div
                  key={cIndex}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="p-6 bg-white dark:bg-white/5 border-b border-gray-100 dark:border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#1a365d]/10 dark:bg-[#c9a227]/10 flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-[#1a365d] dark:text-[#c9a227]" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        {category.category}
                      </h2>
                    </div>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, qIndex) => (
                      <AccordionItem
                        key={qIndex}
                        value={`${cIndex}-${qIndex}`}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-white dark:hover:bg-white/5 transition-colors">
                          <span className="text-gray-700 dark:text-gray-200 font-medium pr-4">
                            {item.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
            <div className="mt-16 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#1a365d]/10 mb-6">
                <HelpCircle className="w-8 h-8 text-[#1a365d]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                Se não encontrou a resposta que procurava, nossa equipe está
                pronta para ajudar. Entre em contato conosco.
              </p>
              <Link to="/contato">
                <Button className="bg-[#1a365d] hover:bg-[#2c5282] text-white">
                  Fale Conosco
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
