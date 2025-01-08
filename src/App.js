import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./assets/component/header";
import Footer from "./assets/component/footer.js";
import IndexPage from "./pages/index-page";
import Portfolio from "./pages/portfolio.js";
import Services from "./pages/services.js";
import Contact from "./pages/contact.js";
import Mentions from "./pages/mentions.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<IndexPage />}>
          Accueil
        </Route>
        <Route path="/portfolio" element={<Portfolio />}>
          Portfolio
        </Route>
        <Route path="/services" element={<Services />}>
          Services
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
        <Route path="/mentions" element={<Mentions />}>
          Mentions légales
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
