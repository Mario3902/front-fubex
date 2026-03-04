import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Home Sections
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Mentor from '@/sections/Mentor';
import Benefits from '@/sections/Benefits';
import Destinations from '@/sections/Destinations';
import Testimonials from '@/sections/Testimonials';
import FAQ from '@/sections/FAQ';
import Contact from '@/sections/Contact';

// Pages
import SobrePage from '@/pages/SobrePage';
import OportunidadesPage from '@/pages/OportunidadesPage';
import BolsasNacionaisPage from '@/pages/BolsasNacionaisPage';
import BolsasInternacionaisPage from '@/pages/BolsasInternacionaisPage';
import InscricaoPage from '@/pages/InscricaoPage';
import HistoriasSucessoPage from '@/pages/HistoriasSucessoPage';
import FAQPage from '@/pages/FAQPage';
import ContatoPage from '@/pages/ContatoPage';
import CommunityPage from '@/pages/CommunityPage';
import LoginPage from '@/pages/LoginPage';

// Home Page Component
const HomePage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <Hero />
      <About />
      <Mentor />
      {!isAuthenticated ? (
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="section-padding text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1a365d] dark:text-[#c9a227]">Seja um bolseiro</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Para visualizar o restante do conteúdo, como benefícios, destinos e outras informações vitais do fundo, faça login com o seu nome e número de candidato.
            </p>
            <Link to="/login" className="inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-gradient-to-r from-[#1a365d] to-[#2c5282] text-white hover:from-[#2c5282] hover:to-[#1a365d] h-11 px-8 py-2">
              Fazer Login / Cadastro
            </Link>
          </div>
        </section>
      ) : (
        <>
          <Benefits />
          <Destinations />
          <Testimonials />
          <FAQ />
          <Contact />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sobre" element={<ProtectedRoute><SobrePage /></ProtectedRoute>} />
                <Route path="/oportunidades" element={<ProtectedRoute><OportunidadesPage /></ProtectedRoute>} />
                <Route path="/bolsas-nacionais" element={<ProtectedRoute><BolsasNacionaisPage /></ProtectedRoute>} />
                <Route path="/bolsas-internacionais" element={<ProtectedRoute><BolsasInternacionaisPage /></ProtectedRoute>} />
                <Route path="/inscricao" element={<ProtectedRoute><InscricaoPage /></ProtectedRoute>} />
                <Route path="/historias-sucesso" element={<ProtectedRoute><HistoriasSucessoPage /></ProtectedRoute>} />
                <Route path="/faq" element={<ProtectedRoute><FAQPage /></ProtectedRoute>} />
                <Route path="/contato" element={<ProtectedRoute><ContatoPage /></ProtectedRoute>} />
                <Route path="/community" element={<ProtectedRoute><CommunityPage /></ProtectedRoute>} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
