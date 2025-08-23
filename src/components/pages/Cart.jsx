import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import perfume1 from "../images/perfumes/dior/men/Sauvage_EauDeParfum.jpg";

function Cart() {
  const [quantity, setQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col w-full pt-10 px-[60px]">
      <div className="flex flex-col max-w-[210px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
          my cart
        </h2>
        <div className="mt-2 h-0.5 w-full bg-gray-300" />
      </div>

      {/*Product Table*/}
      <div className=" mt-10 relative overflow-x-auto shadow-md">
        <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-white">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b-2 border-black">
              <td className="p-4">
                <img
                  src={perfume1}
                  className="border-2 border-black w-12 h-12 md:h-24 md:w-24 max-w-full max-h-full"
                  alt="perfume1"
                ></img>
              </td>
              <td className="px-6 py-4 font-bold text-black text-md">
                <div className="text-sm md:text-xl whitespace-nowrap">
                  Sauvage Eau de Parfum
                </div>
                <div className="text-sm md:text-md whitespace-nowrap">
                  Item No: 276453
                </div>
                <div className="text-sm md:text-md whitespace-nowrap">
                  Size: 50ml
                </div>
              </td>

              <td className="px-6 py-4">
                <div className="grid grid-cols-3 items-center w-24 border-2 border-black text-black font-bold">
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
              </td>
              <td className="px-6 py-4 font-bold text-black text-lg">$599</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-bold text-lg text-red-600 dark:text-red-500 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>

            <tr className="border-b-2 border-black">
              <td className="p-4">
                <img
                  src={perfume1}
                  className="border-2 border-black w-12 h-12 md:h-24 md:w-24 max-w-full max-h-full"
                  alt="perfume1"
                ></img>
              </td>
              <td className="px-6 py-4 font-bold text-black text-md">
                <div className="text-sm md:text-xl whitespace-nowrap">
                  Sauvage Eau de Parfum
                </div>
                <div className="text-sm md:text-md whitespace-nowrap">
                  Item No: 276453
                </div>
                <div className="text-sm md:text-md whitespace-nowrap">
                  Size: 50ml
                </div>
              </td>

              <td className="px-6 py-4">
                <div className="grid grid-cols-3 items-center w-24 border-2 border-black text-black font-bold">
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
              </td>
              <td className="px-6 py-4 font-bold text-black text-lg">$599</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-bold text-lg text-red-600 dark:text-red-500 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>

            <tr className="border-b-2 border-black">
              <td className="p-4">
                <img
                  src={perfume1}
                  className="border-2 border-black w-12 h-12 md:h-24 md:w-24 max-w-full max-h-full"
                  alt="perfume1"
                ></img>
              </td>
              <td className="px-6 py-4 font-bold text-black text-md">
                <div className="text-sm md:text-xl whitespace-nowrap">
                  Sauvage Eau de Parfum
                </div>
                <div className="text-sm md:text-md whitespace-nowrap">
                  Item No: 276453
                </div>
                <div className="text-sm md:text-md whitespace-nowrap">
                  Size: 50ml
                </div>
              </td>

              <td className="px-6 py-4">
                <div className="grid grid-cols-3 items-center w-24 border-2 border-black text-black font-bold">
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
              </td>
              <td className="px-6 py-4 font-bold text-black text-lg">$599</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-bold text-lg text-red-600 dark:text-red-500 hover:underline"
                >
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-10 flex justify-end">
        <h1 className="font-bold text-sm text-right">
          shipping, taxes and discount calculated at checkout.
        </h1>
      </div>

      <div className="pt-5 sm:pt-16 md:pt-10 flex justify-between items-center w-full">
        {/* Continue Shopping - left */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
        >
          <FaArrowLeft className="text-red-600 text-base sm:text-lg md:text-xl" />
          <span>continue shopping</span>
        </button>

        {/* Checkout - right */}
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
        >
          <span>checkout</span>
          <FaArrowRight className="text-red-600 text-base sm:text-lg md:text-xl" />
        </button>
      </div>
    </div>
  );
}

export default Cart;
