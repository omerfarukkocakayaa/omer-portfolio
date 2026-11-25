import { HashRouter, Route, Routes } from "react-router-dom";
import CursorTrail from "./components/CursorTrail";
import Navbar from "./components/Navbar";
import { t } from "./i18n";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="site">
        <CursorTrail />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <footer className="footer">
          <p>© 2026 Ömer Faruk Kocakaya. {t("All rights reserved.")}</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
