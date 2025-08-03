import { FaArrowRight } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { GiPerfumeBottle } from "react-icons/gi";
import { RiUserStarLine } from "react-icons/ri";

import backgroundimg from "../images/backgroundimg.png";
import brand1 from "../images/brands/brand1.png";
import brand2 from "../images/brands/brand2.png";
import brand3 from "../images/brands/brand3.png";
import brand4 from "../images/brands/brand4.png";

function Home() {
  return (
    <div className="relative w-full flex px-[60px] flex-col">
      <img
        src={backgroundimg}
        alt=""
        className="mx-auto flex object-contain h-[800px] z-10"
      />

      {/* Main Heading Section */}
      <div className="flex-col pt-8 uppercase font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl absolute w-full h-full flex items-start">
        <span>Welcome to the</span>
        <span>world</span>
        <span>of scent</span>
        <div className="pt-10 sm:pt-16 md:pt-20">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
          >
            <span>Shop Now</span>
            <FaArrowRight className="text-red-600 text-base sm:text-lg md:text-xl" />
          </button>
        </div>
      </div>

      {/* Right Side Paragraph and Info Boxes */}
      <div className="flex flex-col absolute right-0 top-100 -translate-y-1/2 max-w-[500px] px-4 sm:px-8 md:pr-[60px] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify font-bold">
        <div>
          Reveal the essence of timeless scent, where every fragrance is a
          refined harmony of elegance and identity. Expertly composed and
          artfully bottled, each creation becomes a signature of distinction for
          those who appreciate beauty beyond the ordinary.
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <div className="flex items-center border border-black p-1 w-54 gap-3">
            <RiUserStarLine className="text-4xl" />
            <div className="text-center w-full">
              <div className="text-red-600 font-bold text-2xl">100+</div>
              <div className="font-extrabold text-sm sm:text-xl">
                Trusted Clients
              </div>
            </div>
          </div>

          <div className="flex items-center border border-black p-1 w-54 gap-3">
            <GiPerfumeBottle className="text-5xl" />
            <div className="text-center w-full">
              <div className="text-red-600 font-bold text-2xl">50+</div>
              <div className="font-extrabold text-sm sm:text-xl">
                Luxury Perfume
              </div>
            </div>
          </div>

          <div className="flex items-center border border-black p-1 w-54 gap-3">
            <FaHandshake className="text-4xl" />
            <div className="text-center w-full">
              <div className="text-red-600 font-bold text-2xl">10y+</div>
              <div className="font-extrabold text-sm sm:text-xl">
                Giving Best Service
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Logos Footer */}
      <div className="w-full h-14 bg-black m-0 p-4 flex flex-row gap-12 justify-center items-center">
        <img src={brand1} alt="brand1" className="h-auto max-h-10" />
        <img src={brand2} alt="brand2" className="h-auto max-h-10" />
        <img src={brand3} alt="brand3" className="h-auto max-h-10" />
        <img src={brand4} alt="brand4" className="h-auto max-h-10" />
      </div>

      {/* 2015 Section */}
      <div className="w-full relative mt-16 px-[60px] flex items-start justify-between">
        {/* Left side year */}
        <span className="text-9xl font-bold flex-shrink-0">2015</span>

        {/* Right-aligned content */}
        <div className="flex flex-col items-end max-w-[675px] w-full text-right">
          {/* Title + Button on same row */}
          <div className="flex justify-between items-center w-full">
            <span className="text-5xl font-bold uppercase">A Journey Through Scent</span>
           
          </div>

          <div className="mt-2 h-0.5 w-full bg-gray-300" />

          <div className="mt-4 text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold">
            VELOURA is a curated destination for timeless fragrances. We bring
            together an exclusive selection of perfumes known for their elegance,
            depth, and character. Each scent is carefully chosen to inspire confidence
            and individuality, helping you find the perfect fragrance to express your
            personal story with grace and distinction.
          </div>
           <button
              type="button"
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
            >
              <span>explore more</span>
              <FaArrowRight className="text-red-600 text-base sm:text-lg md:text-xl" />
            </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
