import axios from "axios";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo/logo.png";
import signup from "../images/signup.jpg";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:3001/register', { name, email, password })
      .then((result) => {
        console.log(result)
        navigate('/SignIn')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col w-full mt-10 px-[60px]">
      <div className="sm:px-6 md:px-10 lg:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-2 border-black divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-black">
          {/* Left - Image */}
          <div className="w-full">
            <img
              src={signup}
              alt="Sign Up"
              className="w-full max-h-[690px] object-cover mx-auto filter grayscale"
            />
          </div>

          {/* Right - Text */}
          <div className="flex flex-col px-[60px]">
            <div className="flex flex-col items-center gap-2">
              <img src={logo} alt="Logo" className="h-[100px]" />
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
                Welcome!
              </h2>

              <p className="mt-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed font-bold">
                Create Your Account And Begin Your Journey With Timeless Scents.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="max-w-full flex flex-col flex-1 mt-7 gap-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-black text-md uppercase font-bold"
                >
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  className="border border-black text-black focus:ring-primary-600 block w-full p-2.5 dark:border-black dark:placeholder-gray-400"
                  placeholder="Enter your full name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-black text-md uppercase font-bold"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-black text-black focus:ring-primary-600 block w-full p-2.5 dark:border-black dark:placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-black text-md uppercase font-bold"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border border-black text-black focus:ring-primary-600 block w-full p-2.5 dark:border-black dark:placeholder-gray-400"
                  placeholder=" "
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-black font-bold dark:text-black"
                    >
                      I agree to the Terms and Conditions & Privacy Policy
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-5 sm:pt-16 md:pt-10 flex justify-center">
                <button
                  type='submit'
                  className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
                >
                  sign up
                  <FaArrowRight className="text-red-600 text-base sm:text-lg md:text-xl" />
                </button>
              </div>

              <p className="text-sm text-black dark:text-black font-bold">
                already have an account?{" "}
                <Link
                  to="/SignIn"
                  className="font-bold text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
