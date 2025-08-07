import { FaArrowRight } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { GiPerfumeBottle } from "react-icons/gi";
import { RiUserStarLine } from "react-icons/ri";
import brand1 from "../images/about/brand1.png";
import brand2 from "../images/about/brand2.png";
import brand3 from "../images/about/brand3.png";
import brand4 from "../images/about/brand4.png";
import brand5 from "../images/about/brand5.png";
import img1 from "../images/about/img1.jpg";
import img2 from "../images/about/img2.jpg";
import img3 from "../images/about/img3.jpg";
import BurberryHero1 from "../images/perfumes/Burberry/men/BurberryHero1.jpg";
import ACQUADIGIÒ50mlEaudeParfum from "../images/perfumes/armani/men/ACQUADIGIÒ50mlEaudeParfum.jpg";
import PoisonGirl from "../images/perfumes/dior/women/PoisonGirl.jpg";

function About() {
  return (
    <div className="flex flex-col w-full pt-10 px-[60px]">
      {/* Flex layout: column on mobile, row on lg+ 60px*/}
      <div className="flex flex-col lg:flex-row gap-30 sm:px-8  justify-between">
        {/* Left Text Section */}
        <div className="flex flex-col flex-1 max-w-[700px]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
            The Essence of Our Journey
          </h2>
          <div className="mt-2 h-0.5 w-full bg-gray-300" />

          <p className="mt-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed font-bold">
            At VELOURA, we believe that fragrance is more than a scent—it's a
            statement, a story, a reflection of individuality. Since launching
            our online store in 2015, we've been dedicated to offering a refined
            curation of perfumes that exude timeless elegance and personal
            distinction.
          </p>
          <p className="mt-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed font-bold">
            With a deep appreciation for craftsmanship and luxury, we showcase
            only the most revered names in the world of perfumery: Dior, Chanel,
            Burberry, Calvin Klein, and Armani. Whether for men or women, every
            fragrance in our collection is chosen for its artistry, depth, and
            ability to leave a lasting impression.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 text-center gap-6">
            <div className="flex flex-col items-center">
              <RiUserStarLine className="text-4xl" />
              <div className="text-red-600 font-bold text-2xl">100+</div>
              <div className="font-extrabold text-sm sm:text-xl">
                Trusted Clients
              </div>
            </div>
            <div className="flex flex-col items-center">
              <GiPerfumeBottle className="text-4xl" />
              <div className="text-red-600 font-bold text-2xl">50+</div>
              <div className="font-extrabold text-sm sm:text-xl">
                Luxury Perfume
              </div>
            </div>
            <div className="flex flex-col items-center">
              <FaHandshake className="text-4xl" />
              <div className="text-red-600 font-bold text-2xl">10+y</div>
              <div className="font-extrabold text-sm sm:text-xl">
                Best Service
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className=" self-center lg:self-start border-2 p-2">
          <img
            src={img1}
            className="w-[400px] h-[500px] object-cover filter grayscale"
            alt="About"
          />
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between items-start mt-25 px-4 sm:px-8 md:px-16 lg:px-[60px] gap-10">
        {/* Left Column: Timeline */}
        <div className="flex flex-col max-w-full lg:max-w-[600px]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
            Our Story Through the Years
          </h2>
          <div className="mt-2 h-0.5 w-full bg-gray-300" />

          {/* Timeline Entry 1 */}
          <div className="mt-10 flex items-start justify-between">
            <div className="flex flex-col max-w-[420px]">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                Introduced premium perfume collections for all
              </span>
              <div className="mt-2 space-y-1">
                <div className="h-0.5 w-full sm:w-[350px] lg:w-[600px] bg-gray-300" />
              </div>
            </div>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold ml-4 self-start">
              2017
            </span>
          </div>

          {/* Timeline Entry 2 */}
          <div className="mt-5 flex items-start justify-between">
            <div className="flex flex-col max-w-[420px]">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                Enhanced curation with timeless signature scents
              </span>
              <div className="mt-2 space-y-1">
                <div className="h-0.5 w-full sm:w-[350px] lg:w-[600px] bg-gray-300" />
              </div>
            </div>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold ml-4 self-start">
              2020
            </span>
          </div>

          {/* Timeline Entry 3 */}
          <div className="mt-5 flex items-start justify-between">
            <div className="flex flex-col max-w-[420px]">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                Redesigned experience for modern fragrance lovers
              </span>
              <div className="mt-2 space-y-1">
                <div className="h-0.5 w-full sm:w-[350px] lg:w-[600px] bg-gray-300" />
              </div>
            </div>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold ml-4 self-start">
              2024
            </span>
          </div>
        </div>

        {/* Right Image Section */}
        <div className=" self-center lg:self-start border-2 p-2">
          <img
            src={img2}
            className="w-[450px] h-[250px] object-cover filter grayscale"
            alt="About"
          />
        </div>
      </div>

      <div className="flex flex-col mt-25">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
          our brands
        </h2>
        <div className="mt-2 h-0.5 w-1/4 bg-gray-300" />

        {/* Grid with column gaps + black borders */}
        <div className="mt-6 grid grid-cols-5 gap-6">
          {/* Wrapper with black border between columns */}
          <div className="flex justify-center items-center border-2 border-black">
            <img
              src={brand1}
              alt="brand1"
              className="w-auto h-auto object-contain"
            />
          </div>
          <div className="flex justify-center items-center border-2 border-black">
            <img
              src={brand2}
              alt="brand2"
              className="w-auto h-auto object-contain"
            />
          </div>
          <div className="flex justify-center items-center border-2 border-black">
            <img
              src={brand3}
              alt="brand3"
              className="w-auto h-auto object-contain"
            />
          </div>
          <div className="flex justify-center items-center border-2 border-black">
            <img
              src={brand4}
              alt="brand4"
              className="w-auto h-auto object-contain"
            />
          </div>
          <div className="flex justify-center items-center border-2 border-black">
            <img
              src={brand5}
              alt="brand5"
              className="w-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-40 sm:px-8 mt-25 items-start">
        {/* IMAGE SECTION - LEFT SIDE */}
        <div className="flex-1">
          <div className="border-2 p-2">
            <img
              src={img3}
              className="w-full h-[300px] object-cover filter grayscale"
              alt="About"
            />
          </div>
        </div>

        {/* TEXT SECTION - RIGHT SIDE */}
        <div className="flex flex-col flex-1">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
            What We Offer
          </h2>
          <div className="mt-2 h-0.5 w-full bg-gray-300" />

          <p className="mt-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed font-bold">
            We take pride in delivering:
          </p>
          <span className="mt-1 text-justify text-sm sm:text-base md:text-lg leading-relaxed font-bold">
            ‣ Genuine designer fragrances for both men and women
          </span>
          <span className="mt-1 text-justify text-sm sm:text-base md:text-lg leading-relaxed font-bold">
            ‣ A curated experience that blends sophistication with simplicity
          </span>
          <span className="mt-1 text-justify text-sm sm:text-base md:text-lg leading-relaxed font-bold">
            ‣ Carefully selected scents for every mood, moment, and memory
          </span>
          <span className="mt-1 text-justify text-sm sm:text-base md:text-lg leading-relaxed font-bold">
            ‣ A seamless online journey with fast, reliable service
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-between items-start mt-25 px-6 gap-10">
        {/* Text Section */}
        <div className="flex flex-col max-w-full lg:max-w-[500px]">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase w-full">
            Explore the Art of Our Collections
          </span>
          <div className="mt-2 h-0.5 w-full bg-gray-300" />
          <div className="mt-4 text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold">
            Immerse yourself in our refined perfume collection, thoughtfully
            assembled to celebrate elegance, depth, and identity. Each scent
            reflects a standard of excellence, crafted for those who seek
            timeless expression through fragrance.
          </div>
          <div className="pt-5 sm:pt-16 md:pt-10">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
            >
              <span>Shop Now</span>
              <FaArrowRight className="text-red-600 text-base sm:text-lg md:text-xl" />
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap gap-6 justify-center lg:justify-between max-w-full lg:max-w-[650px]">
          {/* Card 1 */}
          <div className="flex flex-col w-[200px]">
            <div className="grid grid-rows-[auto_70px] border-2 border-black divide-y-2 divide-black">
              <div className="p-2 flex justify-center">
                <img
                  src={BurberryHero1}
                  alt=""
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-2 flex flex-col h-[70px]">
                <span className="text-xs sm:text-sm md:text-sm lg:text-sm leading-relaxed font-bold uppercase">
                  Burberry Hero
                </span>
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-xl font-bold uppercase">
                    $ 200
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col w-[200px]">
            <div className="grid grid-rows-[auto_70px] border-2 border-black divide-y-2 divide-black">
              <div className="p-2 flex justify-center">
                <img
                  src={ACQUADIGIÒ50mlEaudeParfum}
                  alt=""
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-2 flex flex-col h-[70px]">
                <span className="text-xs sm:text-sm md:text-sm lg:text-sm leading-relaxed font-bold uppercase">
                  ACQUA DI GIÒ
                </span>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg sm:text-xl font-bold uppercase">
                    $ 145
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col w-[200px]">
            <div className="grid grid-rows-[auto_70px] border-2 border-black divide-y-2 divide-black">
              <div className="p-2 flex justify-center">
                <img
                  src={PoisonGirl}
                  alt=""
                  className="w-full h-40 object-cover"
                />
              </div>
              <div className="p-2 flex flex-col h-[70px]">
                <span className="text-xs sm:text-sm md:text-sm lg:text-sm leading-relaxed font-bold uppercase">
                  Poison
                </span>
                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-xl font-bold uppercase">
                    $100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
