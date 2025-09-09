import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
// import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import BottomBanner from "./components/BottomBanner";
import { LinktreeProfile } from "./pages/Linktree";
// import AnnouncementBar from "./components/AnnouncementBar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        {/* <AnnouncementBar /> */}
        <div className="bg-boycott-light text-boycott-black relative min-h-screen">
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
