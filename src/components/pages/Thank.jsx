import { BsArrowRight } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function Thank() {
  return (
    <div className="flex flex-col w-full mt-10 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Step Bar */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-3 sm:space-y-0 mb-10">
        {/* Step 1 */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-red-600 bg-red-600">
            <span className="font-bold text-sm sm:text-base text-white">1</span>
          </div>
          <span className="text-xs sm:text-sm md:text-base font-bold text-red-600 uppercase">
            Personal Details
          </span>
          <BsArrowRight className="hidden sm:block text-xl md:text-2xl text-black" />
        </div>

        {/* Step 2 */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-red-600 bg-red-600">
            <span className="font-bold text-sm sm:text-base text-white">2</span>
          </div>
          <span className="text-xs sm:text-sm md:text-base font-bold text-red-600 uppercase">
            Payment
          </span>
          <BsArrowRight className="hidden sm:block text-xl md:text-2xl text-black" />
        </div>

        {/* Step 3 */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-red-600 bg-red-600">
            <span className="font-bold text-sm sm:text-base text-white">3</span>
          </div>
          <span className="text-xs sm:text-sm md:text-base font-bold text-red-600 uppercase">
            Complete
          </span>
        </div>
      </div>

      {/* Thank You Section */}
      <div className="flex items-center justify-center">
        <div className="flex flex-col border bg-black items-center p-6 sm:p-10 md:p-16 lg:p-20 max-w-[700px] w-full">
          <IoMdCheckmarkCircleOutline className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl" />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase text-center mt-5">
            Thank You for Ordering!
          </span>
          <p className="text-sm sm:text-base md:text-lg text-white text-center mt-5">
            We’ve received your order and are preparing your fragrances with care.
            A confirmation email with all the details has been sent to you.
          </p>
          <Link
            to="/"
            type="button"
            className="flex items-center gap-2 rounded-lg px-3 py-1.5 
            text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg 
            font-medium uppercase text-white dark:bg-black mt-10"
          >
            <FaArrowLeft className="text-red-600 text-base sm:text-lg md:text-xl" />
            <span>RETURN TO HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Thank;
