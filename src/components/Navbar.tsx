import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    {
      name: 'Oportunidades',
      path: '/oportunidades',
      dropdown: [
        { name: 'Bolsas Nacionais', path: '/bolsas-nacionais' },
        { name: 'Bolsas Internacionais', path: '/bolsas-internacionais' },
      ],
    },
    { name: 'Comunidade', path: '/community' },
    { name: 'Inscrição', path: '/inscricao' },
    { name: 'Histórias', path: '/historias-sucesso' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'glass-nav shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="section-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 relative">
              <img
                src="/logo.png"
                alt="Logo Fundo de Bolsas"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className={`font-bold text-xs md:text-sm leading-tight transition-colors ${isScrolled ? 'text-[#1a365d] dark:text-white' : 'text-white'
                }`}>
                Fundo de Bolsas
              </p>
              <p className={`text-[10px] md:text-xs font-medium transition-colors ${isScrolled ? 'text-[#c9a227] dark:text-[#c9a227]' : 'text-[#c9a227]'
                }`}>
                Emanuel Xirimbimbi
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.name}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive(link.path) || link.dropdown.some(d => isActive(d.path))
                        ? isScrolled
                          ? 'text-[#1a365d] dark:text-[#c9a227] bg-[#1a365d]/10 dark:bg-[#c9a227]/10'
                          : 'text-[#c9a227] bg-white/10'
                        : isScrolled
                          ? 'text-gray-700 dark:text-gray-300 hover:text-[#1a365d] dark:hover:text-[#c9a227] hover:bg-gray-100 dark:hover:bg-white/5'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                        }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-52 bg-white dark:bg-gray-800">
                    {link.dropdown.map((item) => (
                      <DropdownMenuItem key={item.path} asChild>
                        <Link
                          to={item.path}
                          className="cursor-pointer dark:text-white dark:hover:bg-white/10"
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${isActive(link.path)
                    ? isScrolled
                      ? 'text-[#1a365d] dark:text-[#c9a227] bg-[#1a365d]/10 dark:bg-[#c9a227]/10'
                      : 'text-[#c9a227] bg-white/10'
                    : isScrolled
                      ? 'text-gray-700 dark:text-gray-300 hover:text-[#1a365d] dark:hover:text-[#c9a227] hover:bg-gray-100 dark:hover:bg-white/5'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* Right Side */}
          <div className="hidden xl:flex items-center gap-2 md:gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-all ${isScrolled
                ? 'bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20'
                : 'bg-white/10 text-white hover:bg-white/20'
                }`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4 md:w-5 md:h-5" />
              ) : (
                <Sun className="w-4 h-4 md:w-5 md:h-5" />
              )}
            </button>

            {/* CTA Button */}
            <Link to="/inscricao">
              <Button
                className="bg-gradient-to-r from-[#1a365d] to-[#0f2744] hover:from-[#0f2744] hover:to-[#1a365d] text-white font-semibold px-4 md:px-6 text-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                Candidate-se
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isScrolled
                ? 'bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-white'
                : 'bg-white/10 text-white'
                }`}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${isScrolled
                ? 'text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                : 'text-white hover:bg-white/10'
                }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${isMobileMenuOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="section-padding py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive(link.path)
                  ? 'text-[#1a365d] dark:text-[#c9a227] bg-[#1a365d]/10 dark:bg-[#c9a227]/10'
                  : 'text-gray-700 dark:text-gray-300 hover:text-[#1a365d] dark:hover:text-[#c9a227] hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
              >
                {link.name}
              </Link>
              {link.dropdown && (
                <div className="ml-4 mt-1 space-y-1">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-2 rounded-xl text-sm transition-all ${isActive(item.path)
                        ? 'text-[#1a365d] dark:text-[#c9a227] bg-[#1a365d]/10 dark:bg-[#c9a227]/10'
                        : 'text-gray-600 dark:text-gray-400 hover:text-[#1a365d] dark:hover:text-[#c9a227] hover:bg-gray-50 dark:hover:bg-white/5'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 px-4">
            <Link to="/inscricao" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-[#1a365d] to-[#0f2744] text-white font-semibold">
                Candidate-se Agora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
