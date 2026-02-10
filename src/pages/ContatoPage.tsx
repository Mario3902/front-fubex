import { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle, Clock, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import HeroCarousel from '@/components/HeroCarousel';

const ContatoPage = () => {
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
      icon: Mail,
      title: 'E-mail de Suporte',
      content: 'suporte@bolsaemanuelxirimbimbi.org',
      link: 'mailto:suporte@bolsaemanuelxirimbimbi.org',
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
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#1a365d] to-[#0f2744] overflow-hidden">
        <HeroCarousel images={[
          'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80',
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80',
          'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80'
        ]} />
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
              Contato
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Entre em <span className="text-[#c9a227]">Contato</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Tem dúvidas sobre as bolsas de estudo? Nossa equipe está pronta
              para ajudar você a esclarecer qualquer questão.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="section-padding">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h2>
                <p className="text-gray-600 leading-relaxed mb-10">
                  Estamos comprometidos em oferecer oportunidades educacionais
                  de qualidade para jovens angolanos. Entre em contato conosco
                  através dos canais abaixo.
                </p>

                <div className="space-y-6 mb-10">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#1a365d]/5 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-[#1a365d]/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-[#1a365d]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-[#1a365d] transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Siga-nos nas Redes Sociais
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#1a365d]/10 flex items-center justify-center hover:bg-[#1a365d] transition-colors group"
                    >
                      <Instagram className="w-5 h-5 text-[#1a365d] group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#1a365d]/10 flex items-center justify-center hover:bg-[#1a365d] transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-[#1a365d] group-hover:text-white transition-colors" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-[#1a365d]/10 flex items-center justify-center hover:bg-[#1a365d] transition-colors group"
                    >
                      <Facebook className="w-5 h-5 text-[#1a365d] group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-10 p-6 rounded-xl bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Métodos de Pagamento
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-white rounded-lg text-sm text-gray-600 shadow-sm">
                      Express
                    </span>
                    <span className="px-4 py-2 bg-white rounded-lg text-sm text-gray-600 shadow-sm">
                      PayPal
                    </span>
                    <span className="px-4 py-2 bg-white rounded-lg text-sm text-gray-600 shadow-sm">
                      Transferência Bancária
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Envie sua Mensagem
                </h3>
                <p className="text-gray-600 mb-8">
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Mensagem Enviada!
                    </h4>
                    <p className="text-gray-600">
                      Agradecemos seu contato. Responderemos em breve.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-700">
                        Nome Completo <span className="text-[#c9a227]">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Seu nome completo"
                        className="bg-white border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-700">
                        E-mail <span className="text-[#c9a227]">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="seu@email.com"
                        className="bg-white border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700">
                        Assunto
                      </Label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        placeholder="Sobre o que deseja falar?"
                        className="bg-white border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-700">
                        Mensagem <span className="text-[#c9a227]">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Escreva sua mensagem..."
                        rows={5}
                        className="bg-white border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#1a365d] to-[#2c5282] hover:from-[#2c5282] hover:to-[#1a365d] text-white font-semibold"
                    >
                      Enviar Mensagem
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-24 bg-gray-900">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Nosso Compromisso
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Estamos comprometidos em oferecer oportunidades educacionais de
              qualidade para jovens angolanos. Nossa equipe está sempre disponível
              para esclarecer dúvidas e apoiar você em sua jornada educacional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContatoPage;
