import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../images/background/Fragrances.png";
import bg3 from "../images/background/bg3.jpg";

function Fragrances() {
  const [filters, setFilters] = useState({
    brand: "",
    gender: "",
    priceRange: "",
  });

  const items = Array(12).fill(0);
  return (
    <div className="flex flex-col pt-10 px-[60px] w-full">
      <div className="sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] border-2 border-black divide-y lg:divide-y-0 lg:divide-x-2 divide-black">
          <div className="bg-black flex items-center pl-20 text-justify">
            <span className="text-white font-bold sm:text-lg lg:text-4xl leading-snug uppercase">
              GET 20% OF IN SEASONAL
              <br />
              PRODUCTS
            </span>
          </div>

          <div className="h-full w-full bg-black">
            <img
              src={img}
              alt="Fragrances"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/*Filter section*/}
      <div className="mt-20 p-4 border border-black w-auto mx-auto flex flex-wrap gap-12 items-center">
        {/* Brand Filter */}
        <select
          className=" border border-gray-300 p-2 uppercase font-bold"
          value={filters.brand}
          onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
        >
          <option value="">All Brands</option>
          <option value="Dior">Dior</option>
          <option value="Burberry">Burberry</option>
          <option value="Giorgio Armani">Giorgio Armani</option>
          <option value="Chanel">Chanel</option>
          <option value="Calvin Klein">Calvin Klein</option>
        </select>

        {/* Gender Filter */}
        <select
          className=" border border-gray-300 p-2 uppercase font-bold"
          value={filters.gender}
          onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>

        {/* Price Range*/}
        <select
          className="border border-gray-300 p-2 uppercase font-bold"
          value={filters.priceRange}
          onChange={(e) =>
            setFilters({ ...filters, priceRange: e.target.value })
          }
        >
          <option value="">All Prices</option>
          <option value="50-100">0$ - 100$</option>
          <option value="100-200">100$ - 200$</option>
          <option value="200-300">200$ - 300$</option>
          <option value="300-400">300$ - 400$</option>
          <option value="500+">$500+</option>
        </select>

        {/* Filter Button */}
        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 uppercase font-bold"
          onClick={() => console.log("Filters applied:", filters)}
        >
          Apply Filters
        </button>
      </div>

      <div
        className="grid gap-6 px-6 max-w-full mt-20"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
      >
        {items.map((_, idx) => (
          <Link to="/SelectProduct" key={idx} className="flex flex-col max-w-[180px] w-full">
            <div className="grid grid-rows-[auto_90px] border-2 border-black divide-y-2 divide-black">
              <div className="p-2 flex justify-center">
                <img src={bg3} className="w-full h-35 object-cover"></img>
              </div>
              <div className="p-2 flex flex-col h-[100px]">
                <span className="text-xs sm:text-xs md:text-xs lg:text-xs leading-relaxed font-bold uppercase">
                  ARMANI ROSE D'ARABIE LIMITED EDITION - 100ml
                </span>
                <div className="flex justify-between items-center mt-2">
                  <div className=" flex justify-start">
                    <button
                      type="button"
                      className="flex items-center gap-1 rounded px-1.5 py-1.5 text-[10px] font-medium uppercase text-white dark:bg-black"
                    >
                      <span>Add to cart</span>
                      <FaArrowRight className="text-red-600 text-xs" />
                    </button>
                  </div>
                  <span className="text-sm sm:text-sm font-bold uppercase">
                    $330
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
        
      </div>
      <div className="pt-10 sm:pt-16 md:pt-20 flex justify-center">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
            >
              <span>Load More</span>
            
            </button>
          </div>
    </div>
  );
}

export default Fragrances;
