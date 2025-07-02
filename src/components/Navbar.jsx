import { useState } from "react";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import logo from "./images/logo/logo.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b-2 border-black bg-white h-12 m-0 relative z-10">
      <div className="max-w-screen-xl flex items-center justify-center h-full mx-auto">
        <img src={logo} alt="Logo" className="h-25" />
        <div className="flex absolute left-[60px] hidden sm:block">
          <a href="" className="uppercase font-bold text-lg px-3">
            Home
          </a>
          <a href="" className="uppercase font-bold text-lg px-3">
            About us
          </a>
          <a href="" className="uppercase font-bold text-lg px-3">
            Fragrances
          </a>
          <a href="" className="uppercase font-bold text-lg px-3">
            Contact us
          </a>
        </div>

        {/* Icons - Right side on desktop */}
        <div className="hidden sm:flex space-x-4 absolute right-[60px] text-black text-xl">
          <button title="Search">
            <FiSearch />
          </button>
          <button title="Cart">
            <FiShoppingCart />
          </button>
          <button title="Profile">
            <FiUser />
          </button>
        </div>

        {/* Mobile hamburger menu button */}
        <button
          className="sm:hidden absolute right-4"
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
      </div>

      {/* Mobile nav items */}
      {isOpen && (
        <div className="sm:hidden bg-gray-100 space-y-2 py-3 text-center">
          <a href="#" className="uppercase font-bold text-lg block">
            Home
          </a>
          <a href="#" className="uppercase font-bold text-lg block">
            About us
          </a>
          <a href="#" className="uppercase font-bold text-lg block">
            Fragrances
          </a>
          <a href="#" className="uppercase font-bold text-lg block">
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
