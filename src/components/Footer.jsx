import {
  FaArrowRight,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTiktok,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "./images/logo/logo1.png";

function Footer() {
  return (
    <footer className="border-t-2 border-black h-70 flex justify-around  w-full">
      <div className=" h-full px-[60px] border-r-2  w-full space-y-5 flex-col justify-center items-center flex">
        <img src={logo} alt="Logo" className="h-8" />
        <div className="text-xl font-medium  text-center">
          The place where every scent becomes
          <br />a signature of elegance.
        </div>

        <div className="sm:flex space-x-4 text-black text-2xl  w-full justify-center">
          <button title="Facebook">
            <FaFacebookSquare />
          </button>
          <button title="Instagram">
            <FaInstagramSquare />
          </button>
          <button title="TikTok">
            <FaTiktok />
          </button>
        </div>
      </div>
      <div className="w-full border-r-2 ">
        <div className="bg-black text-white h-10 justify-center items-center flex">
          <div className="flex w-full justify-center items-center space-x-4">
            <Link to="/" className="uppercase font-bold text-sm">
              Home
            </Link>
            <Link to="/About" className="uppercase font-bold text-sm">
              About us
            </Link>
            <Link to="/Fragrances" className="uppercase font-bold text-sm">
              Fragrances
            </Link>
            <Link to="/Contact" className="uppercase font-bold text-sm">
              Contact us
            </Link>
          </div>
        </div>
        <div className="h-full w-full space-y-2 flex-col justify-center items-center flex px-5">
          <div className="text-2xl uppercase font-bold justify-center items-center">
            Contact Us
          </div>
          <div className="text-xl font-medium justify-center items-center flex">
            Have questions or need assistance? We're here to help.
          </div>
          <div className="space-y-1 text-xl font-medium">
            <div>Email: support@veloura.com</div>
            <div>Phone: +1 (212) 555-0182</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-7 px-5">
        <div className="text-xl font-medium text-justify">
          Be the first to discover new arrivals, exclusive offers, and scent
          inspirations. Join our community and stay connected to the world of
          timeless fragrances.
        </div>
        
        <div className="flex items-center w-full space-x-4">
          {/* Input + Floating Label */}
          <div className="relative w-full">
            <label
              htmlFor="floating_standard"
              className=" text-md text-black duration-300 transform -translate-y-5 scale-75 top-0 left-0 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              E - mail address
            </label>
            <input
              type="text"
              id="floating_standard"
              className="block px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-black peer w-full"
              placeholder=" "
            />
            
          </div>

          {/* Subscribe Button */}
          <button
            type="button"
            className="text-xl font-medium uppercase text-white rounded-lg px-5 py-2.5 dark:bg-black flex items-center space-x-2"
          >
            <span>Subscribe</span>
            <FaArrowRight className="text-red-600" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
