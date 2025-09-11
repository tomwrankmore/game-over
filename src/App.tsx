import BottomBanner from './components/BottomBanner';
// import Contact from "./pages/Contact";
// import NavBar from './components/NavBar';
import Navigation from './components/Navigation';
import About from './pages/About';
import Home from './pages/Home';
import { LinktreeProfile } from './pages/Linktree';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import AnnouncementBar from "./components/AnnouncementBar";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div>
        {/* <AnnouncementBar /> */}
        <div className="bg-boycott-light text-boycott-black relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/linktree" element={<LinktreeProfile />} />
          </Routes>
        </div>
        <BottomBanner />
      </div>
    </BrowserRouter>
  );
}

export default App;
