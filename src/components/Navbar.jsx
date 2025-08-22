import { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "./images/logo/logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-2 border-black bg-white h-12 m-0 relative flex items-center ">
      <div className="px-[60px] flex w-full justify-between items-center">
        <div className=" hidden xl:block">
          <Link to="/" className="uppercase font-bold text-lg px-3">
            Home
          </Link>
          <Link to="/About" className="uppercase font-bold text-lg px-3">
            About us
          </Link>
          <Link to="/Fragrances" className="uppercase font-bold text-lg px-3">
            Fragrances
          </Link>
          <Link to="/Contact" className="uppercase font-bold text-lg px-3">
            Contact us
          </Link>
        </div>

        {/* Icons - Right side on desktop */}
        <div className="hidden xl:flex space-x-4 text-black text-xl">
          <button title="Search">
            <FiSearch />
          </button>
          <Link to ="/Cart" title="My Cart">
            <FiShoppingCart />
          </Link>
          <Link to="/SignIn" title="Profile">
            <FiUser />
          </Link>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src={logo} alt="Logo" className="h-25" />
      </div>

      {/* Mobile hamburger menu button */}
      <button
        className="xl:hidden absolute right-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile nav items */}
      {isOpen && (
        <div className="xl:hidden bg-gray-100 space-y-2 py-3 text-center">
          <Link to="/" className="uppercase font-bold text-lg block">
            Home
          </Link>
          <Link to="/About" className="uppercase font-bold text-lg block">
            About us
          </Link>
          <Link to="/Fragrances" className="uppercase font-bold text-lg block">
            Fragrances
          </Link>
          <Link to="/Contact" className="uppercase font-bold text-lg block">
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
