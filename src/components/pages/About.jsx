import { FaHandshake } from "react-icons/fa6";
import { GiPerfumeBottle } from "react-icons/gi";
import { RiUserStarLine } from "react-icons/ri";
import img1 from "../images/about/img1.jpg";
import img2 from "../images/about/img2.jpg";

function About() {
  return (
    <div className="flex flex-col w-full pt-10">
      {/* Flex layout: column on mobile, row on lg+ */}
      <div className="flex flex-col lg:flex-row gap-30 sm:px-8 lg:px-20 px-[60px] justify-between">
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
            className="w-[350px] h-[500px] object-cover filter grayscale"
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
    </div>
  );
}

export default About;
