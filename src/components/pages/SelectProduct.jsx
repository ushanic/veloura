import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import perfume1 from "../images/perfumes/dior/men/Sauvage_EauDeParfum.jpg";
import perfumeimg2 from "../images/perfumes/dior/perfumeimg2.jpg";
import perfumeimg3 from "../images/perfumes/dior/perfumeimg3.jpg";
import perfumeimg4 from "../images/perfumes/dior/perfumeimg4.jpg";

function SelectProduct() {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col pt-10 px-[60px] w-full">
      <div className="flex flex-col lg:flex-row gap-15 sm:px-8 item-start">
        <div className="flex flex-col gap-5">
          <div className="border-2 p-2">
            <img
              src={perfume1}
              alt=""
              className="w-full h-[400px] object-cover"
            ></img>
          </div>

          <div className="flex-col flex gap-5 justify-between sm:flex-row">
            <div className="border-2 w-50 h-50">
              <img
                src={perfumeimg2}
                alt=""
                className="w-full h-full object-cover"
              ></img>
            </div>
            <div className="border-2 w-50 h-50">
              <img
                src={perfumeimg3}
                alt=""
                className="w-full h-full object-cover"
              ></img>
            </div>
            <div className="border-2 w-50 h-50">
              <img
                src={perfumeimg4}
                alt=""
                className="w-full h-full object-cover"
              ></img>
            </div>
          </div>
        </div>

        {/*Perfume details*/}
        <div className="flex flex-col flex-1">
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
            Sauvage Eau de Parfum
          </h1>
          <span className="text-sm sm:text-md md:text-lg lg:text-xl capitalize pt-5 font-bold">
            Eau de Parfum - Citrus and Vanilla Notes - Refillable
          </span>
          <span className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600 pt-5">
            $135
          </span>
          <div className="flex items-center gap-4">
            <span className="text-sm sm:text-md md:text-lg lg:text-xl capitalize pt-5 font-bold">
              Select Size
            </span>
            <div className="flex gap-4 pt-5">
              <button className="px-4 py-1 border-2 border-black text-black transparent-rounded hover:bg-gray-100 font-bold">
                50ml
              </button>
              <button className="px-4 py-1 border-2 border-black text-black transparent-rounded hover:bg-gray-100 font-bold">
                100ml
              </button>
            </div>
          </div>

          <div className="flex items-center gap-10 pt-5">
            {/* Quantity Counter */}
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

            {/* Add to Cart Button */}
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
            >
              <span>ADD TO CART</span>
              <FaArrowRight className="text-red-600 text-base sm:text-lg md:text-xl" />
            </button>
          </div>

          <div className="w-full border-t-2 border-b-2 border-black mt-20">
            {/* description */}
            <div>
              <div
                className="border-b-2 border-black h-10 flex items-center"
                onClick={() => toggleSection("description")}
              >
                <span className="font-bold text-md sm:text-sm lg:text-lg md:text-md uppercase">
                  description
                </span>
              </div>
              {openSection === "description" && (
                <div className=" py-3 text-justify text-md sm:text-sm lg:text-lg md:text-md">
                  Inspiration for the creation of Sauvage Eau de Parfum was
                  taken from the desert in the magical hour of twilight: mixed
                  with the coolness of the night, the burning desert air exudes
                  profound scents.{" "}
                </div>
              )}
            </div>

            {/* Row 2 */}
            <div className="border-b-2 border-black h-10 flex items-center">
              <span className="font-bold text-md sm:text-sm lg:text-lg md:text-md uppercase">
                key notes
              </span>
            </div>

            {/* Row 3 */}
            <div className="border-b-2 border-black h-10 flex items-center">
              <span className="font-bold text-md sm:text-sm lg:text-lg md:text-md uppercase">
                Ingredients
              </span>
            </div>

            {/* Row 4 */}
            <div className="h-10 flex items-center ">
              <span className="font-bold text-md sm:text-sm lg:text-lg md:text-md uppercase">
                how to use
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectProduct;
