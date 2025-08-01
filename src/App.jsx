import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Fragrances from "./components/pages/Fragrances";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="m-[12px] border-2 border-black min-h-screen">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Fragrances" element={<Fragrances />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
