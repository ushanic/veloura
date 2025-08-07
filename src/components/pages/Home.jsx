import { FaArrowRight } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { GiPerfumeBottle } from "react-icons/gi";
import { RiUserStarLine } from "react-icons/ri";

import bg1 from "../images/background/bg1.jpg";
import bg2 from "../images/background/bg2.png";
import bg3 from "../images/background/bg3.jpg";
import bg4 from "../images/background/bg4.jpg";
import customer1 from "../images/background/customer/customer1.jpg";
import customer2 from "../images/background/customer/customer2.jpg";
import customer3 from "../images/background/customer/customer3.jpeg";
import customer4 from "../images/background/customer/customer4.jpg";
import customer5 from "../images/background/customer/customer5.jpg";
import customer6 from "../images/background/customer/customer6.jpg";
import backgroundimg from "../images/backgroundimg.png";
import brand1 from "../images/brands/brand1.png";
import brand2 from "../images/brands/brand2.png";
import brand3 from "../images/brands/brand3.png";
import brand4 from "../images/brands/brand4.png";
import brand5 from "../images/brands/brand5.png";
import BoisTalisman from "../images/perfumes/background/BoisTalisman.jpg";
import DiorSauvage from "../images/perfumes/background/DiorSauvage.jpg";
import MyEuphoria from "../images/perfumes/background/MyEuphoria.jpg";

function Home() {
  return (
    <div className="relative w-full flex  flex-col">
      {/*--Header Section--*/}
      <div className="relative w-full h-[800px] overflow-hidden">
        {/* TEXT: Underneath the image */}
        <div className="relative z-0 px-[60px] pt-10 uppercase font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl flex flex-col items-start">
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

        {/* IMAGE: on top of the text */}
        <img
          src={backgroundimg}
          alt="Perfume Background"
          className="absolute top-0 left-0 w-full h-full object-contain z-10"
        />

        {/* Right Side Paragraph and Info Boxes */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 max-w-[500px] px-4 sm:px-8 md:pr-[60px] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-justify font-bold">
          <div>
            Reveal the essence of timeless scent, where every fragrance is a
            refined harmony of elegance and identity. Expertly composed and
            artfully bottled, each creation becomes a signature of distinction
            for those who appreciate beauty beyond the ordinary.
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
      </div>

      {/* Brands Section */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-6 md:px-20 py-4 bg-black">
  <div className="flex justify-center items-center">
    <img src={brand1} alt="brand1" className="w-auto h-[60px] object-contain" />
  </div>
  <div className="flex justify-center items-center">
    <img src={brand2} alt="brand2" className="w-auto h-[60px] object-contain" />
  </div>
  <div className="flex justify-center items-center">
    <img src={brand3} alt="brand3" className="w-auto h-[60px] object-contain" />
  </div>
  <div className="flex justify-center items-center">
    <img src={brand4} alt="brand4" className="w-auto h-[60px] object-contain" />
  </div>
  <div className="flex justify-center items-center">
    <img src={brand5} alt="brand5" className="w-auto h-[60px] object-contain" />
  </div>
</div>


      {/* Timeline Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start mt-10 px-4 sm:px-8 md:px-16 lg:px-[60px] gap-10">
        {/* Left Column: Timeline */}
        <div className="flex flex-col gap-10 max-w-full lg:max-w-[450px]">
          <span className="text-9xl font-bold">2015</span>

          {/* Timeline Entry 1 */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col max-w-[420px]">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                Introduced premium perfume collections for all
              </span>
              <div className="mt-2 space-y-1">
                <div className="h-0.5 w-full sm:w-[350px] lg:w-[470px] bg-gray-300" />
              </div>
            </div>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold ml-4 self-start">
              2017
            </span>
          </div>

          {/* Timeline Entry 2 */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col max-w-[420px]">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                Enhanced curation with timeless signature scents
              </span>
              <div className="mt-2 space-y-1">
                <div className="h-0.5 w-full sm:w-[350px] lg:w-[470px] bg-gray-300" />
              </div>
            </div>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold ml-4 self-start">
              2020
            </span>
          </div>

          {/* Timeline Entry 3 */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col max-w-[420px]">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">
                Redesigned experience for modern fragrance lovers
              </span>
              <div className="mt-2 space-y-1">
                <div className="h-0.5 w-full sm:w-[350px] lg:w-[470px] bg-gray-300" />
              </div>
            </div>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold ml-4 self-start">
              2024
            </span>
          </div>
        </div>

        {/* Right Column: Description */}
        <div className="flex flex-col mt-0 lg:mt-15 max-w-full lg:max-w-[675px] w-full">
          <div className="flex justify-between items-center w-full">
            <span className="text-5xl font-bold uppercase">
              A Journey Through Scent
            </span>
          </div>

          <div className="mt-2 h-0.5 w-full bg-gray-300" />

          <div className="mt-4 text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold">
            VELOURA is a curated destination for timeless fragrances. We bring
            together an exclusive selection of perfumes known for their
            elegance, depth, and character. Each scent is carefully chosen to
            inspire confidence and individuality, helping you find the perfect
            fragrance to express your personal story with grace and distinction.
          </div>

          <div className="mt-10 flex justify-start">
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

      {/* Most Adored Scents Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start px-4 sm:px-8 md:px-12 lg:px-[60px] gap-10">
        {/* Left Column: Heading */}
        <div className="flex flex-col max-w-full lg:max-w-[850px] mt-10 lg:mt-30">
          <span className="text-5xl font-bold uppercase w-full">
            Our Most Adored Scents
          </span>
          <div className="mt-2 h-0.5 w-full bg-gray-300" />
        </div>

        {/* Right Column: Description */}
        <div className="flex flex-col max-w-full lg:max-w-[575px] w-full mt-10 lg:mt-25">
          <div className="flex justify-between items-center w-full"></div>

          <div className="mt-2 h-0.5 w-full bg-gray-300" />

          <div className="mt-4 text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold">
            Discover the top-selling perfumes in our exclusive collection —
            explore the most popular scents of the year from classic fragrances.
          </div>

          <div className="mt-10 flex justify-start">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
            >
              <span>view Fragrance</span>
              <FaArrowRight className="text-red-600 text-base sm:text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Perfume Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 md:px-12 lg:px-[60px] mt-20">
        {/* CARD 1 */}
        <div className="border-2 border-black divide-y-2 divide-black grid grid-rows-[auto_100px]">
          <div className="p-4 flex justify-center">
            <img
              src={DiorSauvage}
              alt="Sauvage Eau de Parfum"
              className="w-80 h-100 object-cover"
            />
          </div>
          <div className="p-2 flex flex-col h-[100px]">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold uppercase">
              Sauvage Parfum
            </span>
            <div className="flex justify-between items-center space-x-1">
              {/* Stars */}
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <span className="text-4xl font-bold uppercase">$160</span>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="border-2 border-black divide-y-2 divide-black grid grid-rows-[auto_100px]">
          <div className="p-4 flex justify-center">
            <img
              src={MyEuphoria}
              alt="My Euphoria"
              className="w-80 h-100 object-cover"
            />
          </div>
          <div className="p-2 flex flex-col h-[100px]">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold uppercase">
              My Euphoria Eau De Parfum
            </span>
            <div className="flex justify-between items-center space-x-1">
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <span className="text-4xl font-bold uppercase">$100</span>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="border-2 border-black divide-y-2 divide-black grid grid-rows-[auto_100px]">
          <div className="p-4 flex justify-center">
            <img
              src={BoisTalisman}
              alt="Bois Talisman"
              className="w-80 h-100 object-cover"
            />
          </div>
          <div className="p-2 flex flex-col h-[100px]">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold uppercase">
              Bois Talisman
            </span>
            <div className="flex justify-between items-center space-x-1">
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>
              <span className="text-4xl font-bold uppercase">$250</span>
            </div>
          </div>
        </div>
      </div>

      {/* Promotional Section */}
      <div className="mt-25 px-4 sm:px-6 md:px-10 lg:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-2 border-black divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-black">
          {/* Left - Image */}
          <div className="w-full">
            <img
              src={bg1}
              className="w-full h-full object-cover max-h-[600px]"
            />
          </div>

          {/* Right - Text */}
          <div className="bg-red-600 flex items-center">
            <div className="p-6 sm:p-10 flex flex-col">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase">
                Get 20% off in Seasonal Product
              </span>
              <div className="my-4 h-0.5 w-full bg-gray-300" />
              <span className="mb-4 text-xl sm:text-2xl md:text-3xl font-bold uppercase text-white">
                Chanel SCENTS
              </span>
              <span className="mb-4 text-lg sm:text-xl font-bold capitalize text-white">
                Item #23720 (In Stock)
              </span>
              <span className="mb-6 text-base sm:text-lg font-bold text-white">
                Indulge in exclusive savings on our seasonal selections and
                iconic Chanel fragrances. A perfect moment to experience
                elegance at an exceptional value.
              </span>
              <div className="mt-4">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm sm:text-base md:text-lg font-medium uppercase text-white dark:bg-black"
                >
                  <span>Buy Now</span>
                  <FaArrowRight className="text-red-600 text-lg md:text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Limited Editions Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start mt-25 px-6 lg:px-[60px] gap-10">
        {/* Text Section */}
        <div className="flex flex-col max-w-full lg:max-w-[600px]">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase w-full">
            The Art of Scent in Limited Editions
          </span>
          <div className="mt-2 h-0.5 w-full bg-gray-300" />
          <div className="mt-4 text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold">
            Discover a rare collection of limited-edition perfumes, each crafted
            with precision and distinction. These exclusive scents are designed
            for true connoisseurs, offering elegance, depth, and a touch of
            rarity that sets them apart. Available only for a limited time.
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center lg:justify-between max-w-full lg:max-w-[650px]">
          {/* Card 1 */}
          <div className="flex flex-col max-w-[250px] w-full">
            <div className="grid grid-rows-[auto_90px] border-2 border-black divide-y-2 divide-black">
              <div className="p-2 flex justify-center">
                <img src={bg3} alt="" className="w-full h-48 object-cover" />
              </div>
              <div className="p-2 flex flex-col h-[100px]">
                <span className="text-xs sm:text-sm md:text-sm lg:text-sm leading-relaxed font-bold uppercase">
                  ARMANI ROSE D'ARABIE LIMITED EDITION - 100ml
                </span>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg sm:text-xl font-bold uppercase">
                    $330
                  </span>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm dark:bg-black"
                  >
                    <FaArrowRight className="text-red-600 text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col max-w-[250px] w-full">
            <div className="grid grid-rows-[auto_90px] border-2 border-black divide-y-2 divide-black">
              <div className="p-2 flex justify-center">
                <img src={bg2} alt="" className="w-full h-48 object-cover" />
              </div>
              <div className="p-2 flex flex-col h-[100px]">
                <span className="text-xs sm:text-sm md:text-sm lg:text-sm leading-relaxed font-bold uppercase">
                  Sauvage Elixir - Limited Edition - 60ml
                </span>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg sm:text-xl font-bold uppercase">
                    $200
                  </span>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm dark:bg-black"
                  >
                    <FaArrowRight className="text-red-600 text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="mt-25 flex flex-col">
        <div className="px-[60px]">
          <span className="text-5xl font-bold uppercase w-full">
            What Our Customers Are Saying
          </span>
          <div className="mt-2 h-0.5 w-full bg-gray-300" />
          <div className="mt-4 text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-bold">
            Real stories from those who’ve experienced the essence of Veloura.
            Explore thoughtful reviews from customers who found their signature
            scent in our timeless collection.
          </div>
        </div>

        {/* 3 Rows x 2 Columns Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-0.125 px-0">
          {/* Row 1 */}
          <div className="p-6 border bg-black text-white flex flex-col items-center gap-2.5">
            <img
              src={customer1}
              className="w-15 h-15 object-cover rounded-full filter grayscale"
            />
            <span className="font-bold text-xl uppercase">Olivia Bennett</span>
            <span className="text-md italic">
              "Every scent I’ve tried from Veloura feels like it was made just
              for me. Incredibly sophisticated, long-lasting, and truly
              unforgettable."
            </span>
          </div>
          <div className="p-6 border bg-black text-white flex flex-col items-center gap-2.5">
            <img
              src={customer2}
              className="w-15 h-15 object-cover rounded-full filter grayscale"
            />
            <span className="font-bold text-xl uppercase">
              Marcus Ellington
            </span>
            <span className="text-md italic">
              "I purchased a Burberry perfume from VELOURA, and the experience
              was seamless. The perfume is timeless and refined — I’ll
              definitely return for more."
            </span>
          </div>
          <div className="p-6 border bg-black text-white flex flex-col items-center gap-2.5">
            <img
              src={customer3}
              className="w-15 h-15 object-cover rounded-full filter grayscale"
            />
            <span className="font-bold text-xl uppercase">Isabelle Moreau</span>
            <span className="text-md italic">
              "I discovered my signature scent from Armani through VELOURA.
              Exceptional service and a truly premium shopping experience."
            </span>
          </div>

          {/* Row 2 */}
          <div className="p-6 border bg-black text-white flex flex-col items-center gap-2.5">
            <img
              src={customer4}
              className="w-15 h-15 object-cover rounded-full filter grayscale"
            />
            <span className="font-bold text-xl uppercase">Daniel Kovac</span>
            <span className="text-md italic">
              "The Chanel fragrance I purchased from VELOURA is authentic and
              long-lasting. I appreciate the quality and trusted selection."
            </span>
          </div>
          <div className="p-6 border bg-black text-white flex flex-col items-center gap-2.5">
            <img
              src={customer5}
              className="w-15 h-15 object-cover rounded-full filter grayscale"
            />
            <span className="font-bold text-xl uppercase">Sofia Rinaldi</span>
            <span className="text-md italic">
              "Got my Calvin Klein perfume from VELOURA with a 30% seasonal
              offer. Great deal and a smooth shopping experience."
            </span>
          </div>
          <div className="p-6 border bg-black text-white flex flex-col items-center gap-2.5">
            <img
              src={customer6}
              className="w-15 h-15 object-cover rounded-full filter grayscale"
            />
            <span className="font-bold text-xl uppercase">Liam Carter</span>
            <span className="text-md italic">
              "VELOURA impressed me with its elegant range of luxury perfumes
              and a seamless, high-end shopping experience tailored for
              fragrance lovers."
            </span>
          </div>
        </div>
      </div>

      {/* Promotional Section with Background Image */}
      <div className="w-full flex mt-24 px-6 sm:px-10 md:px-[60px]">
        <div className="relative border-2 w-full h-[400px] sm:h-[500px] md:h-[600px] p-2 overflow-hidden">
          {/* Background Image */}
          <img
            src={bg4}
            className="object-cover w-full h-full filter grayscale brightness-50"
            alt=""
          />

          {/* Overlay Content: Text + Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center text-center space-y-4 px-4 sm:px-6">
            <span className="text-white text-xl sm:text-2xl md:text-4xl font-bold uppercase max-w-[800px]">
              Step into a world where scent defines your true essence
            </span>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg px-4 sm:px-5 py-2 text-sm sm:text-base md:text-lg font-medium uppercase text-white bg-black"
            >
              <span>Shop Now</span>
              <FaArrowRight className="text-red-600 text-lg sm:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
