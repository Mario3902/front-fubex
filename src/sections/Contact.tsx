import { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle, Clock, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Luanda, Angola',
      link: null,
    },
    {
      icon: Mail,
      title: 'E-mail Geral',
      content: 'geral@onewaafrica.org',
      link: 'mailto:geral@onewaafrica.org',
    },
    {
      icon: Phone,
      title: 'Telefone / WhatsApp',
      content: '+244 923 440 172',
      link: 'tel:+244923440172',
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      content: 'Segunda a Sexta: 8h às 17h',
      link: null,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-[#c9a227]/5 to-transparent" />

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#1a365d]/10 dark:bg-[#c9a227]/20 text-[#1a365d] dark:text-[#c9a227] text-xs md:text-sm font-semibold mb-3 md:mb-4">
              Contato
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 md:mb-6">
              Entre em <span className="text-gradient">Contato</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Tem dúvidas sobre as bolsas de estudo? Nossa equipe está pronta 
              para ajudar você a esclarecer qualquer questão.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Informações de Contato
                </h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  Estamos comprometidos em oferecer oportunidades educacionais 
                  de qualidade para jovens angolanos. Entre em contato conosco 
                  através dos canais abaixo.
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 md:gap-4 p-3 md:p-5 rounded-lg md:rounded-xl bg-gray-50 dark:bg-gray-900 hover:bg-[#1a365d]/5 dark:hover:bg-[#c9a227]/5 transition-colors"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#1a365d]/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 md:w-6 md:h-6 text-[#1a365d] dark:text-[#c9a227]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-0.5 md:mb-1 text-sm md:text-base">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-[#1a365d] dark:hover:text-[#c9a227] transition-colors text-xs md:text-sm"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Siga-nos nas Redes Sociais
                </h3>
                <div className="flex gap-2 md:gap-3">
                  {[Instagram, Linkedin, Facebook].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-[#1a365d]/10 flex items-center justify-center hover:bg-[#1a365d] dark:hover:bg-[#c9a227] transition-colors group"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#1a365d] dark:text-[#c9a227] group-hover:text-white dark:group-hover:text-[#0f2744] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="p-4 md:p-6 rounded-lg md:rounded-xl bg-gray-50 dark:bg-gray-900">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-3 md:mb-4">
                  Métodos de Pagamento
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {['Express', 'PayPal', 'Transferência Bancária'].map((method) => (
                    <span key={method} className="px-2 md:px-4 py-1.5 md:py-2 bg-white dark:bg-gray-800 rounded-lg text-xs md:text-sm text-gray-600 dark:text-gray-400 shadow-sm">
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl md:rounded-2xl p-5 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">
                Envie sua Mensagem
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                Preencha o formulário abaixo e entraremos em contato em breve.
              </p>

              {isSubmitted ? (
                <div className="text-center py-8 md:py-12">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-1 md:mb-2">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    Agradecemos seu contato. Responderemos em breque.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="name" className="text-gray-700 dark:text-gray-300 text-sm">
                      Nome Completo <span className="text-[#c9a227]">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Seu nome completo"
                      className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300 text-sm">
                      E-mail <span className="text-[#c9a227]">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="subject" className="text-gray-700 dark:text-gray-300 text-sm">
                      Assunto
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Sobre o que deseja falar?"
                      className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-sm"
                    />
                  </div>

                  <div className="space-y-1.5 md:space-y-2">
                    <Label htmlFor="message" className="text-gray-700 dark:text-gray-300 text-sm">
                      Mensagem <span className="text-[#c9a227]">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Escreva sua mensagem..."
                      rows={4}
                      className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 resize-none text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#1a365d] to-[#0f2744] hover:from-[#0f2744] hover:to-[#1a365d] text-white font-semibold text-sm md:text-base"
                  >
                    Enviar Mensagem
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Commitment */}
          <div className="mt-10 md:mt-16 text-center p-6 md:p-8 rounded-xl md:rounded-2xl bg-[#1a365d]/5 dark:bg-[#c9a227]/5">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-3">
              Nosso Compromisso
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
              Estamos comprometidos em oferecer oportunidades educacionais de 
              qualidade para jovens angolanos. Nossa equipe está sempre disponível 
              para esclarecer dúvidas e apoiar você em sua jornada educacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
