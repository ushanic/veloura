import { useState } from "react";
import img from "../images/background/Fragrances.png";

function Fragrances() {
  const [filters, setFilters] = useState({
    brand: "",
    gender: "",
    priceRange: "",

  });
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
        onChange={(e) => setFilters({...filters, priceRange: e.target.value })}
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
        >Apply Filters</button>
      </div>
    </div>
  );
}

export default Fragrances;
