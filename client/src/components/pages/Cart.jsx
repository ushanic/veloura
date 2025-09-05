import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // get userId from localStorage (saved during login)
  const userId = localStorage.getItem("userId");

  // Fetch cart items on page load
  useEffect(() => {
    if (!userId) return;
    axios
      .get(`http://127.0.0.1:3001/cart/${userId}`)
      .then((res) => setCartItems(res.data))
      .catch((err) => console.error("Error fetching cart:", err));
  }, [userId]);

  // Update quantity
  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return; // prevent 0
    axios
      .put(`http://127.0.0.1:3001/cart/update/${cartId}`, { quantity: newQuantity })
      .then((res) => {
        setCartItems((prev) =>
          prev.map((item) => (item._id === cartId ? res.data : item))
        );
      })
      .catch((err) => console.error("Error updating quantity:", err));
  };

  // Remove item
  const removeItem = (cartId) => {
    axios
      .delete(`http://127.0.0.1:3001/cart/remove/${cartId}`)
      .then(() => {
        setCartItems((prev) => prev.filter((item) => item._id !== cartId));
      })
      .catch((err) => console.error("Error removing item:", err));
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
      <div className="mt-10 relative overflow-x-auto shadow-md">
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
                Quantity
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
            {cartItems.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-6 text-black font-bold">
                  Your cart is empty
                </td>
              </tr>
            ) : (
              cartItems.map((item) => (
                <tr key={item._id} className="border-b-2 border-black">
                  <td className="p-4">
                    <img
                      src={item.imageUrl}
                      className="border-2 border-black w-12 h-12 md:h-24 md:w-24 object-cover"
                      alt={item.name}
                    />
                  </td>
                  <td className="px-6 py-4 font-bold text-black text-md">
                    <div className="text-sm md:text-xl whitespace-nowrap">{item.name}</div>
                    <div className="text-sm md:text-md whitespace-nowrap">Size: {item.size}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="grid grid-cols-3 items-center w-24 border-2 border-black text-black font-bold">
                      <button
                        className="border-r border-black text-center py-1"
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <div className="text-center">{item.quantity}</div>
                      <button
                        className="border-l border-black text-center py-1"
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-black text-lg">
                    ${item.price * item.quantity}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => removeItem(item._id)}
                      className="font-bold text-lg text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-10 flex justify-end">
        <h1 className="font-bold text-sm text-right">
          Shipping, taxes and discounts calculated at checkout.
        </h1>
      </div>

      <div className="pt-5 sm:pt-16 md:pt-10 flex justify-between items-center w-full">
        {/* Continue Shopping - left */}
        <Link
          to="/"
          className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
        >
          <FaArrowLeft className="text-red-600 text-base sm:text-lg md:text-xl" />
          <span>continue shopping</span>
        </Link>

        {/* Checkout - right */}
        <Link
          to="/Checkout"
          className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
        >
          <span>checkout</span>
          <FaArrowRight className="text-red-600 text-base sm:text-lg md:text-xl" />
        </Link>
      </div>
    </div>
  );
}

export default Cart;
