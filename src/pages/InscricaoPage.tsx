import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, AlertCircle, Send, FileText, Banknote, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import HeroCarousel from '@/components/HeroCarousel';
import FileUpload from '@/components/FileUpload';

const InscricaoPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  const [paymentProof, setPaymentProof] = useState<File | null>(null);
  const [idDocument, setIdDocument] = useState<File | null>(null);
  const [certificate, setCertificate] = useState<File | null>(null);

  const fees = [
    { type: 'curso-huawei', label: 'Curso Grátis Financiado pela Huawei', price: 'Grátis' },
    { type: 'profissional-nacional', label: 'Profissional Nacional', price: '5.000 Kz' },
    { type: 'nacional', label: 'Nacional', price: '7.500 Kz' },
    { type: 'profissional-internacional', label: 'Profissional Internacional', price: '10.000 Kz' },
    { type: 'internacional', label: 'Internacional', price: '15.000 Kz' },
    { type: 'brasil-sp', label: 'Brasil (São Paulo)', price: '20.000 Kz' },
    { type: 'profissional-nacional-100', label: 'Profissional Nacional 100% Paga', price: '50.000 Kz' },
    { type: 'nacional-100', label: 'Nacional 100% Paga', price: '100.000 Kz' },
  ];

  const provinces = [
    'Bengo', 'Benguela', 'Bié', 'Cabinda', 'Cuando Cubango', 'Cuanza Norte',
    'Cuanza Sul', 'Cunene', 'Huambo', 'Huíla', 'Luanda', 'Lunda Norte',
    'Lunda Sul', 'Malanje', 'Moxico', 'Namibe', 'Uíge', 'Zaire'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 bg-gradient-to-br from-[#1a365d] to-[#0f2744] overflow-hidden">
        <HeroCarousel images={[
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80',
          'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&q=80',
          'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&q=80'
        ]} />
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-4">
              Inscrição
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Candidatura à <span className="text-[#c9a227]">Bolsa</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Preencha o formulário abaixo para se candidatar a uma bolsa de estudo.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-12 bg-amber-50 border-b border-amber-200">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-semibold text-amber-900 mb-2">Requisitos</h3>
                <ul className="space-y-1 text-sm text-amber-800">
                  <li>• Apresentar documentação válida (Bilhete de Identidade ou Passaporte)</li>
                  <li>• Comprovante de conclusão do ensino médio ou equivalente</li>
                  <li>• Pagar a taxa de inscrição correspondente</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            {isSubmitted ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Candidatura Enviada com Sucesso!
                </h2>
                <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                  Agradecemos seu interesse. Nossa equipe analisará sua candidatura
                  e entrará em contato em breve.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/">
                    <Button variant="outline" className="border-[#1a365d] text-[#1a365d]">
                      Voltar à Página Inicial
                    </Button>
                  </Link>
                  <Link to="/oportunidades">
                    <Button className="bg-[#1a365d] hover:bg-[#2c5282] text-white">
                      Ver Outras Oportunidades
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Progress */}
                <div className="bg-gray-50 px-8 py-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-600">
                      Etapa {step} de 2
                    </span>
                    <span className="text-sm text-gray-500">
                      {step === 1 ? 'Informações Pessoais' : 'Tipo de Bolsa'}
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#1a365d] transition-all duration-300"
                      style={{ width: step === 1 ? '50%' : '100%' }}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-8">
                  {step === 1 ? (
                    <div className="space-y-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-6">
                        Informações Pessoais
                      </h2>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            Nome Completo <span className="text-[#c9a227]">*</span>
                          </Label>
                          <Input
                            id="name"
                            required
                            placeholder="Digite seu nome completo"
                            className="border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="age">
                            Idade <span className="text-[#c9a227]">*</span>
                          </Label>
                          <Input
                            id="age"
                            type="number"
                            required
                            placeholder="Sua idade"
                            className="border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            Telefone <span className="text-[#c9a227]">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            placeholder="+244 XXX XXX XXX"
                            className="border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">
                            E-mail <span className="text-[#c9a227]">*</span>
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            placeholder="seu@email.com"
                            className="border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]"
                          />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="province">
                            Província que vive <span className="text-[#c9a227]">*</span>
                          </Label>
                          <Select required>
                            <SelectTrigger className="border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]">
                              <SelectValue placeholder="Selecione sua província" />
                            </SelectTrigger>
                            <SelectContent>
                              {provinces.map((province) => (
                                <SelectItem key={province} value={province.toLowerCase()}>
                                  {province}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="address">
                            Endereço Completo <span className="text-[#c9a227]">*</span>
                          </Label>
                          <Textarea
                            id="address"
                            required
                            placeholder="Rua, bairro, cidade..."
                            className="border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d] resize-none"
                            rows={3}
                          />
                        </div>
                      </div>

                      <div className="flex justify-end pt-6">
                        <Button
                          type="button"
                          onClick={() => setStep(2)}
                          className="bg-[#1a365d] hover:bg-[#2c5282] text-white"
                        >
                          Próximo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-6">
                        Tipo de Bolsa
                      </h2>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="scholarship-type">
                            Selecione o tipo de bolsa <span className="text-[#c9a227]">*</span>
                          </Label>
                          <Select required>
                            <SelectTrigger className="border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]">
                              <SelectValue placeholder="Escolha o tipo de bolsa" />
                            </SelectTrigger>
                            <SelectContent>
                              {fees.map((fee) => (
                                <SelectItem key={fee.type} value={fee.type}>
                                  {fee.label} - {fee.price}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="course">
                            Curso de Interesse <span className="text-[#c9a227]">*</span>
                          </Label>
                          <Input
                            id="course"
                            required
                            placeholder="Digite o curso que deseja estudar"
                            className="border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="university">
                            Universidade Preferida
                          </Label>
                          <Input
                            id="university"
                            placeholder="Se tiver preferência, informe a universidade"
                            className="border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="motivation">
                            Carta de Motivação <span className="text-[#c9a227]">*</span>
                          </Label>
                          <Textarea
                            id="motivation"
                            required
                            placeholder="Conte-nos por que você merece esta bolsa..."
                            className="border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d] resize-none"
                            rows={6}
                          />
                        </div>

                        <div className="space-y-6">
                          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                              <Banknote className="w-5 h-5 text-[#1a365d] dark:text-[#c9a227]" />
                              Método de Pagamento
                            </h4>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                              Realize o pagamento da taxa de inscrição por transferência bancária:
                            </p>
                            <div className="bg-white dark:bg-gray-800 p-3 rounded-lg space-y-1 text-sm">
                              <p className="text-gray-900 dark:text-white"><strong>Banco:</strong> BAI</p>
                              <p className="text-gray-900 dark:text-white"><strong>IBAN:</strong> AO06 0040 0000 1234 5678 9012 3</p>
                              <p className="text-gray-900 dark:text-white"><strong>Titular:</strong> Fundo de Bolsas Emanuel Xirimbimbi</p>
                            </div>
                          </div>

                          <FileUpload
                            label="Comprovativo de Pagamento"
                            required
                            onChange={setPaymentProof}
                          />

                          <FileUpload
                            label="Bilhete de Identidade ou Passaporte"
                            required
                            onChange={setIdDocument}
                          />

                          <FileUpload
                            label="Certificado de Habilitações"
                            required
                            onChange={setCertificate}
                          />
                        </div>

                        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                          <p className="text-sm text-amber-800">
                            <strong>Nota:</strong> A taxa de inscrição não garante
                            a aprovação da bolsa. O processo é seletivo e mediante
                            vagas disponíveis, sujeito a exame de admissão da universidade.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-between pt-6">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setStep(1)}
                          className="border-gray-300"
                        >
                          Voltar
                        </Button>
                        <Button
                          type="submit"
                          className="bg-[#1a365d] hover:bg-[#2c5282] text-white"
                        >
                          Enviar Candidatura
                          <Send className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Processo Seletivo
            </h2>
            <div className="grid sm:grid-cols-4 gap-6">
              {[
                { icon: FileText, title: 'Inscrição', desc: 'Preencha o formulário' },
                { icon: Banknote, title: 'Taxa', desc: 'Pague a inscrição' },
                { icon: GraduationCap, title: 'Exame', desc: 'Prova da universidade' },
                { icon: CheckCircle, title: 'Resultado', desc: 'Notificação' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-14 h-14 rounded-full bg-[#1a365d]/10 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="w-6 h-6 text-[#1a365d]" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InscricaoPage;
