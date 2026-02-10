import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram, Linkedin, Facebook, Twitter, Heart, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Oportunidades', path: '/oportunidades' },
    { name: 'Inscrição', path: '/inscricao' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contato', path: '/contato' },
  ];

  const scholarshipLinks = [
    { name: 'Bolsas Nacionais', path: '/bolsas-nacionais' },
    { name: 'Bolsas Internacionais', path: '/bolsas-internacionais' },
    { name: 'Histórias de Sucesso', path: '/historias-sucesso' },
    { name: 'Comunidade', path: '/community' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="relative bg-[#0f2744] dark:bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a365d]/10 to-[#c9a227]/5" />

      {/* Main Footer */}
      <div className="section-padding py-16 md:py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 group mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 relative">
                  <img 
                    src="/logo.png" 
                    alt="Logo Fundo de Bolsas" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold text-sm leading-tight text-white">
                    Fundo de Bolsas
                  </p>
                  <p className="text-xs font-medium text-[#c9a227]">
                    Emanuel Xirimbimbi
                  </p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 md:mb-6">
                Uma iniciativa filantrópica comprometida em oferecer oportunidades 
                educacionais de qualidade para jovens angolanos.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-2 md:gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#c9a227] transition-all hover:-translate-y-1 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-[#0f2744] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white flex items-center gap-2">
                Links Rápidos
                <div className="w-6 md:w-8 h-px bg-gradient-to-r from-[#c9a227] to-transparent" />
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-[#c9a227] transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scholarship Links */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white flex items-center gap-2">
                Oportunidades
                <div className="w-6 md:w-8 h-px bg-gradient-to-r from-[#c9a227] to-transparent" />
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {scholarshipLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-[#c9a227] transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 text-white flex items-center gap-2">
                Contato
                <div className="w-6 md:w-8 h-px bg-gradient-to-r from-[#c9a227] to-transparent" />
              </h3>
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#1a365d]/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#c9a227]" />
                  </div>
                  <span className="text-gray-400 text-sm">Luanda, Angola</span>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#1a365d]/50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-[#c9a227]" />
                  </div>
                  <a
                    href="mailto:geral@onewaafrica.org"
                    className="text-gray-400 hover:text-[#c9a227] transition-colors text-sm"
                  >
                    geral@onewaafrica.org
                  </a>
                </li>
                <li className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#1a365d]/50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-[#c9a227]" />
                  </div>
                  <a
                    href="tel:+244923440172"
                    className="text-gray-400 hover:text-[#c9a227] transition-colors text-sm"
                  >
                    +244 923 440 172
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 relative z-10">
        <div className="section-padding py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4">
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Fundo de Bolsas de Estudo Emanuel Xirimbimbi. 
              Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs md:text-sm flex items-center gap-1">
              Desenvolvido com <Heart className="w-3 h-3 md:w-4 md:h-4 text-[#c9a227] fill-[#c9a227]" /> por
              <a
                href="https://instagram.com/mario_fernandes07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9a227] hover:underline ml-1"
              >
                Mário Fernandes
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
