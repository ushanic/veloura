import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img from "../images/background/Fragrances.png";

function Fragrances() {
  const [filters, setFilters] = useState({
    brand: "",
    gender: "",
    priceRange: "",
  });
  const [perfumes, setPerfumes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);

  // Fetch perfumes from backend
  useEffect(() => {
    fetch("http://localhost:3001/perfumes")
      .then((res) => res.json())
      .then((data) => setPerfumes(data))
      .catch((err) => console.error(err));
  }, []);

  // Apply filters
  const filteredPerfumes = perfumes.filter((p) => {
    const matchesBrand = filters.brand ? p.brand === filters.brand : true;
    const matchesGender = filters.gender ? p.gender === filters.gender : true;

    let matchesPrice = true;
    if (filters.priceRange) {
      if (filters.priceRange === "50-100")
        matchesPrice = p.price >= 0 && p.price <= 100;
      if (filters.priceRange === "100-200")
        matchesPrice = p.price > 100 && p.price <= 200;
      if (filters.priceRange === "200-300")
        matchesPrice = p.price > 200 && p.price <= 300;
      if (filters.priceRange === "300-400")
        matchesPrice = p.price > 300 && p.price <= 400;
      if (filters.priceRange === "500+") matchesPrice = p.price > 500;
    }

    return matchesBrand && matchesGender && matchesPrice;
  });

  // Load more perfumes
  const loadMore = () => setVisibleCount((prev) => prev + 12);

  return (
    <div className="flex flex-col pt-10 px-[60px] w-full">
      <div className="sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] border-2 border-black divide-y lg:divide-y-0 lg:divide-x-2 divide-black">
          <div className="bg-black flex items-center pl-20 text-justify">
            <span className="text-white font-bold sm:text-lg lg:text-4xl leading-snug uppercase">
              GET 20% OFF IN SEASONAL <br /> PRODUCTS
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

      {/* Filter Section */}
      <div className="mt-20 p-4 border border-black w-auto mx-auto flex flex-wrap gap-12 items-center">
        {/* Brand Filter */}
        <select
          className="border border-gray-300 p-2 uppercase font-bold"
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
          className="border border-gray-300 p-2 uppercase font-bold"
          value={filters.gender}
          onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
        >
          <option value="">All Genders</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>

        {/* Price Range */}
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

        <button
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 uppercase font-bold"
          onClick={() => setVisibleCount(12)} // reset load more when applying filters
        >
          Apply Filters
        </button>
      </div>

      {/* Perfume Grid */}
      <div
        className="grid gap-6 px-6 max-w-full mt-20"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
      >
        {filteredPerfumes.slice(0, visibleCount).map((p, idx) => (
          <Link
            key={idx}
            to="/SelectProduct"
            className="flex flex-col max-w-[180px] w-full"
          >
            <div className="grid grid-rows-[auto_90px] border-2 border-black divide-y-2 divide-black">
              <div className="p-2 flex justify-center">
                <img
                  src={p.imageUrl}
                  alt={p.name}
                  className="w-full h-35 object-cover"
                />
              </div>
              <div className="p-2 flex flex-col h-[85px] justify-between">
                <span className="text-xs sm:text-xs md:text-xs lg:text-xs font-bold uppercase leading-snug line-clamp-2">
                  {p.name} - 100 ml
                </span>
                <div className="flex justify-between items-center mt-2">
                  <button
                    type="button"
                    className="flex items-center gap-1 rounded px-1.5 py-1.5 text-[10px] font-medium uppercase text-white dark:bg-black"
                  >
                    <span>Add to cart</span>
                    <FaArrowRight className="text-red-600 text-xs" />
                  </button>
                  <span className="text-sm sm:text-sm font-bold uppercase">
                    ${p.price}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredPerfumes.length && (
        <div className="pt-10 sm:pt-16 md:pt-20 flex justify-center">
          <button
            type="button"
            className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
            onClick={loadMore}
          >
            <span>Load More</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Fragrances;
