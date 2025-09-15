import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Call from './pages/Call';
import Downloads from './pages/Downloads';
import FloodFeds from './pages/FloodFeds';
import Home from './pages/Home';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Routes,
  Route,
  useParams,
  Navigate,
  BrowserRouter,
} from 'react-router-dom';

const supportedLocales = ['en', 'es', 'fr', 'it'];

function LocaleWrapper() {
  const { lng } = useParams(); // e.g. "en"
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lng && i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  if (!lng || !supportedLocales.includes(lng)) {
    return <Navigate to={`/${supportedLocales[0]}`} replace />;
  }

  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="call" element={<Call />} />
        <Route path="downloads" element={<Downloads />} />
        <Route path="floodfeds" element={<FloodFeds />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="text-boycott-black relative">
          <Routes>
            {/* Redirect base to default locale */}
            <Route
              path="/"
              element={<Navigate to={`/${supportedLocales[0]}`} replace />}
            />
            {/* Locale-aware routes */}
            <Route path="/:lng/*" element={<LocaleWrapper />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
