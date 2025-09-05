import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function SelectProduct() {
  const { state } = useLocation();
  const perfume = state?.perfume;
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("50ml"); 
  const navigate = useNavigate();

  if (!perfume) return <div className="text-center mt-20">No product selected</div>;

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // handle add to cart
  const handleAddToCart = async () => {
    try {
      const userId = localStorage.getItem("userId"); 
      if (!userId) {
        alert("Please login to add items to cart");
        return;
      }

      const response = await fetch("http://localhost:3001/cart/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          perfumeId: perfume._id,
          name: perfume.name,
          price: perfume.price,
          size,
          quantity,
          imageUrl: perfume.imageUrl,
        }),
      });

      const data = await response.json();
      console.log("Added to cart:", data);


      navigate("/cart");

    } catch (err) {
      console.error("Error adding to cart:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex flex-col pt-10 px-[60px] w-full">
      <div className="flex flex-col lg:flex-row gap-15 sm:px-8 item-start">
        <div className="flex flex-col gap-5">
          <div className="border-2 p-2">
            <img
              src={perfume.imageUrl}
              alt={perfume.name}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Perfume details */}
        <div className="flex flex-col flex-1">
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
            {perfume.name}
          </h1>
          <span className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 pt-5">
            ${perfume.price}
          </span>

          {/* Size Selection */}
          <div className="flex items-center gap-4">
            <span className="text-sm sm:text-md md:text-lg lg:text-xl capitalize pt-5 font-bold">
              Select Size
            </span>
            <div className="flex gap-4 pt-5">
              <button
                onClick={() => setSize("50ml")}
                className={`px-4 py-1 border-2 border-black font-bold ${
                  size === "50ml" ? "bg-gray-200" : ""
                }`}
              >
                50ml
              </button>
              <button
                onClick={() => setSize("100ml")}
                className={`px-4 py-1 border-2 border-black font-bold ${
                  size === "100ml" ? "bg-gray-200" : ""
                }`}
              >
                100ml
              </button>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-10 pt-5">
            <div className="grid grid-cols-3 items-center w-24 border-2 border-black">
              <button
                className="border-r border-black text-center py-1"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <div className="text-center">{quantity}</div>
              <button
                className="border-l border-black text-center py-1"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
            >
              <span>ADD TO CART</span>
              <FaArrowRight className="text-red-600 text-base sm:text-lg md:text-xl" />
            </button>
          </div>

          {/* description */}
          <div className="w-full border-t-2 border-b-2 border-black mt-20 py-3">
            <h2 className="font-bold text-md sm:text-sm lg:text-lg md:text-md uppercase mb-2">
              Description
            </h2>
            <p className="text-justify text-md sm:text-sm lg:text-lg md:text-md">
              {perfume.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectProduct;
