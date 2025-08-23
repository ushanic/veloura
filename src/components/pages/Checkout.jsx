import { BsArrowRight } from "react-icons/bs";

function Checkout() {
  return (
    <div className="flex flex-col w-full mt-10 px-[60px]">
      <div className="flex justify-center items-center space-x-2">
        {/* Step 1 */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-400">
          <span className="font-bold text-lg text-black">1</span>
        </div>

        <span className="text-xs md:text-sm font-bold text-red-600 uppercase">
          Personal Details
        </span>
        <BsArrowRight className="text-2xl" />

        {/* Step 2 */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black">
          <span className="font-bold text-lg text-black">2</span>
        </div>
        <span className="text-xs md:text-sm font-bold text-black uppercase">
          payment
        </span>
        <BsArrowRight className="text-black text-2xl" />

        {/* Step 3 */}
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black">
          <span className="font-bold text-lg text-black">3</span>
        </div>
        <span className="text-xs md:text-sm font-bold text-black uppercase">
          complete
        </span>
      </div>

      <div className="flex mt-20 w-full">
  {/* Left side form */}
  <div className="flex flex-col border-2 p-5 sm:p-8 md:p-10 w-full max-w-2xl">
    <span className="uppercase font-bold text-md sm:text-md md:text-lg mb-5">
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
            className="border border-black text-black text-sm uppercase font-bold block w-full p-2 dark:border-black dark:placeholder-black"
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
            className="border border-black text-black text-sm uppercase font-bold block w-full p-2 dark:border-black dark:placeholder-black"
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
            className="border border-black text-black text-sm uppercase font-bold block w-full p-2 dark:border-black dark:placeholder-black"
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
            className="border border-black text-black text-sm uppercase font-bold block w-full p-2 dark:border-black dark:placeholder-black"
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
            className="border border-black text-black text-sm uppercase font-bold block w-full p-2 dark:border-black dark:placeholder-black"
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
            className="border border-black text-black text-sm uppercase font-bold block w-full p-2 dark:border-black dark:placeholder-black"
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
            className="border border-black text-black text-sm uppercase font-bold block w-full p-2 dark:border-black dark:placeholder-black"
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
          className="border border-black text-sm uppercase font-bold block w-full p-2 text-gray-400 dark:border-black"
          placeholder="Enter a description..."
        ></textarea>
      </div>
    </form>
  </div>

  {/* Right side (another section placeholder) */}
  <div className="flex-1">
    {/* You can put another form or content here */}
  </div>
</div>

    </div>
  );
}

export default Checkout;
