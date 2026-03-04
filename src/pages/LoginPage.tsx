import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Lock, User, ArrowRight, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/contexts/AuthContext';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    nome: '',
    numero: '',
    rememberMe: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000));
    login(formData.nome, formData.numero);
    setIsLoading(false);

    // Redirect to where they came from or home
    const from = location.state?.from?.pathname || '/';
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="section-padding py-16">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1a365d] to-[#0f2744] flex items-center justify-center shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm leading-tight text-gray-900">
                  Fundo de Bolsas
                </p>
                <p className="text-xs font-medium text-[#c9a227]">
                  Emanuel Xirimbimbi
                </p>
              </div>
            </Link>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Acesso do Candidato
              </h1>
              <p className="text-gray-600 text-sm">
                Coloque ou crie as suas credenciais para acompanhar sua candidatura
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-gray-700">
                  Nome Completo
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    placeholder="Digite seu nome completo"
                    className="pl-10 border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="numero" className="text-gray-700">
                  Número de Candidato (ou Bilhete)
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="numero"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.numero}
                    onChange={(e) =>
                      setFormData({ ...formData, numero: e.target.value })
                    }
                    placeholder="Ex: 000000000LA012"
                    className="pl-10 pr-10 border-gray-200 focus:border-[#1a365d] focus:ring-[#1a365d]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) =>
                      setFormData({ ...formData, rememberMe: checked as boolean })
                    }
                  />
                  <Label
                    htmlFor="rememberMe"
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    Lembrar-me
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#1a365d] to-[#2c5282] hover:from-[#2c5282] hover:to-[#1a365d] text-white font-semibold"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Entrando...
                  </span>
                ) : (
                  <>
                    Entrar / Cadastrar
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Help */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Precisa de ajuda?{' '}
              <Link to="/contato" className="text-[#1a365d] hover:underline">
                Entre em contato
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
