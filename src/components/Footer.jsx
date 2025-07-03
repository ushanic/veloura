import logo from "./images/logo/logo1.png";
import { FaFacebookSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t-2 border-black bg-white h-65">
      <div className="max-w-screen-xl h-full px-[60px] ">
        <div className="pt-12">
          <img src={logo} alt="Logo" className="h-8 pl-7" />
          <div className="text-xl font-medium pt-5">
            The place where every scent becomes
            <br />a signature of elegance.
          </div>
        </div>

        <div className="hidden sm:flex space-x-4 left-[60px] text-black text-2xl pt-5 pl-7">
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
    </footer>
  );
}

export default Footer;
