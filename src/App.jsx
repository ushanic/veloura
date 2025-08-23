import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import About from "./components/pages/About";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import Contact from "./components/pages/Contact";
import Fragrances from "./components/pages/Fragrances";
import Home from "./components/pages/Home";
import SelectProduct from "./components/pages/SelectProduct";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUp";

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
          <Route path="/SelectProduct" element={<SelectProduct />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
