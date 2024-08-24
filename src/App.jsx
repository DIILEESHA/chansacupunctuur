import "./App.css";
import Cookie from "./components/cookie/Cookie.jsx";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/nav/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Treatment from "./pages/treatments/Treatment.jsx";
import About from "./pages/bout/About.jsx";
import Voeding from "./components/voeding/Voeding.jsx";
import Team from "./components/team/Team.jsx";
import Acupunctuur from "./components/acupunctuur/Acupunctuur";
import Cupping from "./components/acupunctuur/Cupping.jsx";
import Rate from "./components/rates/Rate.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <div style={{ overflow: "" }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treatments" element={<Treatment />} />
          <Route path="/afvallen" element={<About />} />
          <Route path="/voeding" element={<Voeding />} />
          <Route path="/meet-team" element={<Team />} />
          <Route path="/acupunctuur" element={<Acupunctuur />} />
          <Route path="/cupping" element={<Cupping />} />
          <Route path="/tarieven" element={<Rate />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Cookie />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
