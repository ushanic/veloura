import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import perfume1 from "../images/perfumes/dior/men/Sauvage_EauDeParfum.jpg";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("paypal"); // selected payment
  const [quantities, setQuantities] = useState([1, 1]);
  const prices = [85, 85]; // product prices

  const subtotal = prices.reduce(
    (acc, price, idx) => acc + price * quantities[idx],
    0
  );
  const total = subtotal; // shipping removed

  return (
    <div className="flex flex-col w-full mt-10 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Step Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-2 sm:space-y-0 mb-10">
        {/* Step 1 */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-600 bg-red-600">
            <span className="font-bold text-lg text-white">1</span>
          </div>
          <span className="text-xs md:text-sm font-bold text-red-600 uppercase">
            Personal Details
          </span>
          <BsArrowRight className="text-2xl hidden sm:block" />
        </div>

        {/* Step 2 */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-400">
            <span className="font-bold text-lg text-black">2</span>
          </div>
          <span className="text-xs md:text-sm font-bold text-red-600 uppercase">
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

      <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-10">
        {/* Left Side - Payment Options */}
        <div className="flex flex-col border-2 p-4 sm:p-6 md:p-8 lg:w-2/3">
          <span className="uppercase font-bold text-md md:text-lg mb-2">
            Select Payment Option
          </span>
          <span className="font-bold text-xs md:text-sm mb-5">
            All transactions are secure and encrypted
          </span>

          <form className="flex flex-col gap-4 w-full">
            {/* PayPal */}
            <label className="flex items-center border p-2 cursor-pointer w-full">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
                className="h-5 w-5 accent-red-500 mr-4"
              />
              <span className="font-bold text-sm uppercase">PayPal</span>
            </label>

            {/* Credit Card */}
            <label className="flex items-center border p-2 cursor-pointer w-full">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="h-5 w-5 accent-red-500 mr-4"
              />
              <span className="font-bold text-sm uppercase">Credit Card</span>
            </label>

            {/* Credit Card Fields (show if selected) */}
            {paymentMethod === "card" && (
              <div className="flex flex-col gap-4 border p-4 mt-2">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="border border-black p-2 text-sm font-bold uppercase"
                />
                <input
                  type="text"
                  placeholder="Name on Card"
                  className="border border-black p-2 text-sm font-bold uppercase"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="flex-1 border border-black p-2 text-sm font-bold uppercase"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="flex-1 border border-black p-2 text-sm font-bold uppercase"
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  <button
                    type="button"
                    className="flex-1 border border-black py-2 uppercase font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-black text-white py-2 uppercase font-bold"
                  >
                    Use This Card
                  </button>
                </div>
              </div>
            )}

            {/* Cash on Delivery */}
            <label className="flex items-center border p-2 cursor-pointer w-full">
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                className="h-5 w-5 accent-red-500 mr-4"
              />
              <span className="font-bold text-sm uppercase">
                Cash on Delivery
              </span>
            </label>
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

            {/* Subtotal / Total */}
            <div className="mt-5 flex flex-col gap-2 w-full">
              <div className="flex justify-between">
                <span className="font-bold text-black">Subtotal</span>
                <span className="font-bold text-black">${subtotal}</span>
              </div>
              <div className="flex justify-between border-t-2 border-b-2 pt-2 pb-2 mt-2">
                <span className="font-bold text-black">Total</span>
                <span className="font-bold text-black">${total}</span>
              </div>
            </div>

            {/* Continue Button */}
            <div className="pt-5 sm:pt-8 flex justify-center">
              <Link
                to="/Thank"
                className="flex items-center gap-2 rounded-lg px-4 py-2 sm:px-5 sm:py-2 md:px-6 md:py-2.5 md:text-lg font-medium uppercase text-white bg-black"
              >
                <span>Checkout</span>
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

export default Payment;
