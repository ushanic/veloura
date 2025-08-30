import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import perfume1 from "../images/perfumes/dior/men/Sauvage_EauDeParfum.jpg";

function Checkout() {
  const [shipping, setShipping] = useState("free"); // shipping option
  const [quantities, setQuantities] = useState([1, 1]); // quantities for products
  const prices = [85, 85]; // product prices

  const subtotal = prices.reduce(
    (acc, price, idx) => acc + price * quantities[idx],
    0
  );
  const shippingCost = shipping === "express" ? 10 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="flex flex-col w-full mt-10 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Step Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-2 sm:space-y-0 mb-10">
        {/* Step 1 */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-400">
            <span className="font-bold text-lg text-black">1</span>
          </div>
          <span className="text-xs md:text-sm font-bold text-red-600 uppercase">
            Personal Details
          </span>
          <BsArrowRight className="text-2xl hidden sm:block" />
        </div>

        {/* Step 2 */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black">
            <span className="font-bold text-lg text-black">2</span>
          </div>
          <span className="text-xs md:text-sm font-bold text-black uppercase">
            Payment
          </span>
          <BsArrowRight className="text-black text-2xl hidden sm:block" />
        </div>

        {/* Step 3 */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black">
            <span className="font-bold text-lg text-black">3</span>
          </div>
          <span className="text-xs md:text-sm font-bold text-black uppercase">
            Complete
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-10">
        {/* Left Side Form */}
        <div className="flex flex-col border-2 p-4 sm:p-6 md:p-8 lg:w-2/3">
          <span className="uppercase font-bold text-md md:text-lg mb-5">
            Shipping Details
          </span>
          <form className="flex flex-col gap-4 w-full">
            {/* Row 1: Name & Last Name */}
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex-1 mb-4">
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm uppercase font-bold leading-none"
                >
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-black text-black text-sm uppercase font-bold block w-full p-2"
                  placeholder=""
                  required
                />
              </div>
              <div className="flex-1 mb-4">
                <label
                  htmlFor="lastname"
                  className="block mb-1 text-sm uppercase font-bold leading-none"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  id="lastname"
                  className="border border-black text-black text-sm uppercase font-bold block w-full p-2"
                  placeholder=""
                  required
                />
              </div>
            </div>

            {/* Row 2: Phone & Email */}
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex-1 mb-4">
                <label
                  htmlFor="contact"
                  className="block mb-1 text-sm uppercase font-bold leading-none"
                >
                  Phone*
                </label>
                <input
                  type="text"
                  id="contact"
                  className="border border-black text-black text-sm uppercase font-bold block w-full p-2"
                  placeholder=""
                  required
                />
              </div>
              <div className="flex-1 mb-4">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm uppercase font-bold leading-none"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-black text-black text-sm uppercase font-bold block w-full p-2"
                  placeholder=""
                  required
                />
              </div>
            </div>

            {/* Row 3: City, State, Zip */}
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="flex-1 mb-4">
                <label
                  htmlFor="city"
                  className="block mb-1 text-sm uppercase font-bold leading-none"
                >
                  City*
                </label>
                <input
                  type="text"
                  id="city"
                  className="border border-black text-black text-sm uppercase font-bold block w-full p-2"
                  placeholder=""
                  required
                />
              </div>
              <div className="flex-1 mb-4">
                <label
                  htmlFor="state"
                  className="block mb-1 text-sm uppercase font-bold leading-none"
                >
                  State*
                </label>
                <input
                  type="text"
                  id="state"
                  className="border border-black text-black text-sm uppercase font-bold block w-full p-2"
                  placeholder=""
                  required
                />
              </div>
              <div className="flex-1 mb-4">
                <label
                  htmlFor="zipcode"
                  className="block mb-1 text-sm uppercase font-bold leading-none"
                >
                  Zip Code*
                </label>
                <input
                  type="text"
                  id="zipcode"
                  className="border border-black text-black text-sm uppercase font-bold block w-full p-2"
                  placeholder=""
                  required
                />
              </div>
            </div>

            {/* Row 4: Description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block mb-1 text-sm uppercase font-bold leading-none"
              >
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                className="border border-black text-sm uppercase font-bold block w-full p-2 text-gray-400"
                placeholder="Enter a description..."
              />
            </div>

            {/* Shipping Method */}
            <div className="mt-6">
              <span className="uppercase font-bold text-md md:text-lg">
                Shipping Method
              </span>
              <div className="flex flex-col gap-4 mt-4 md:flex-row md:gap-4">
                <label className="flex items-center border p-2 cursor-pointer w-full transition">
                  <input
                    type="radio"
                    name="shipping"
                    value="free"
                    className="h-4 w-4 accent-red-500 mr-4"
                    defaultChecked
                    onChange={() => setShipping("free")}
                  />
                  <div className="flex flex-col flex-1">
                    <span className="font-bold text-sm uppercase">
                      Free Shipping
                    </span>
                    <span className="text-sm text-black font-bold">
                      10 - 20 days
                    </span>
                  </div>
                  <span className="font-bold text-lg">$0</span>
                </label>

                <label className="flex items-center border px-3 cursor-pointer w-full transition">
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    className="h-4 w-4 accent-red-500 mr-4"
                    onChange={() => setShipping("express")}
                  />
                  <div className="flex flex-col flex-1">
                    <span className="font-bold text-sm uppercase">
                      Express Shipping
                    </span>
                    <span className="text-sm text-black font-bold">
                      3 - 4 days
                    </span>
                  </div>
                  <span className="font-bold text-lg">$10</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Right Side - Order Summary */}
        <div className="flex-1 mt-8 lg:mt-0">
          <div className="flex flex-col border-2 p-4 sm:p-6 md:p-8 lg:w-full">
            <span className="uppercase font-bold text-md md:text-lg mb-5">
              Order Summary
            </span>

            <table className="w-full text-md border-collapse">
              <tbody>
                {prices.map((price, idx) => (
                  <tr key={idx}>
                    <td className="p-2">
                      <img
                        src={perfume1}
                        className="border-2 border-black w-8 h-8 md:h-16 md:w-16 object-cover"
                        alt="perfume1"
                      />
                    </td>
                    <td className="font-bold text-black text-md">
                      <div className="flex justify-between items-start">
                        <div className="flex flex-col">
                          <span className="text-sm md:text-lg whitespace-nowrap">
                            Sauvage Eau de Parfum
                          </span>
                          <span className="text-sm text-black">
                            Qty: {quantities[idx]}
                          </span>
                        </div>
                        <span className="text-sm md:text-lg font-bold text-black whitespace-nowrap">
                          ${price * quantities[idx]}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Subtotal / Shipping / Total */}
            <div className="mt-5 flex flex-col gap-2 w-full">
              <div className="flex justify-between">
                <span className="font-bold text-black">Subtotal</span>
                <span className="font-bold text-black">${subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-black">Shipping</span>
                <span className="font-bold text-black">${shippingCost}</span>
              </div>
              <div className="flex justify-between border-t-2 border-b-2 pt-2 pb-2 mt-2">
                <span className="font-bold text-black">Total</span>
                <span className="font-bold text-black">${total}</span>
              </div>
            </div>

            {/* Continue Button */}
            <div className="pt-5 sm:pt-8 flex justify-center">
              <Link
              to="/Payment"
              className="flex items-center gap-2 rounded-lg px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2.5 md:text-lg font-medium uppercase text-white bg-black">
                <span>continue</span>
                <FaArrowRight className="text-red-600 text-base sm:text-lg md:text-xl" />
              </Link>
            </div>
            <span className="mt-5 capitalize text-sm text-center lg:text-left">
              Need help? Call us at +1 (212) 555-0182
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
