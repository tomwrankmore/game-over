import BottomBanner from './components/BottomBanner';
// import Contact from "./pages/Contact";
// import NavBar from './components/NavBar';
import Navigation from './components/Navigation';
import Call from './pages/Call';
import Downloads from './pages/Downloads';
import Home from './pages/Home';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  HashRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from 'react-router-dom';

function LocaleWrapper() {
  const { lng } = useParams(); // "en" | "es"
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/call" element={<Call />} />
        <Route path="/downloads" element={<Downloads />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <div>
        <div className="bg-boycott-light text-boycott-black relative">
          <Routes>
            {/* Default redirect to English */}
            <Route path="/" element={<Navigate to="/en" replace />} />
            {/* Locale-aware routes */}
            <Route path="/:lng/*" element={<LocaleWrapper />} />
          </Routes>
        </div>
        <BottomBanner />
      </div>
    </HashRouter>
  );
}

export default App;
