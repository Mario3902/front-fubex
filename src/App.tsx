import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/contexts/ThemeContext';
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
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Mentor />
    <Benefits />
    <Destinations />
    <Testimonials />
    <FAQ />
    <Contact />
  </>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sobre" element={<SobrePage />} />
              <Route path="/oportunidades" element={<OportunidadesPage />} />
              <Route path="/bolsas-nacionais" element={<BolsasNacionaisPage />} />
              <Route path="/bolsas-internacionais" element={<BolsasInternacionaisPage />} />
              <Route path="/inscricao" element={<InscricaoPage />} />
              <Route path="/historias-sucesso" element={<HistoriasSucessoPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contato" element={<ContatoPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
