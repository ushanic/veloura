import { FaEnvelope, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="flex flex-col w-full pt-10 px-[60px]">
      <div className="flex flex-col lg:flex-row gap-30 sm:px-8 justify-between">
        <div className="flex flex-col flex-1 max-w-[530px]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
            We Are Here to Help!
          </h2>
          <div className="mt-2 h-0.5 w-full bg-gray-300" />
          <p className="mt-4 text-justify text-sm sm:text-base md:text-lg leading-relaxed font-bold">
            At VELOURA, we believe that fragrance is more than a scent—it's a
            statement, a story, a reflection of individuality. Since launching
            our online store in 2015, we've been dedicated to offering a refined
            curation of perfumes that exude timeless elegance and personal
            distinction.
          </p>

          <div className="space-y-1 mt-10">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-black text-base" />
              <span className="text-justify text-sm sm:text-base md:text-lg font-bold">
                Email: support@veloura.com
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-black text-base" />
              <span className="text-justify text-sm sm:text-base md:text-lg font-bold">
                Phone: +1 (212) 555-0182
              </span>
            </div>
          </div>
        </div>

        <form class="max-w-full flex-1 flex-col flex">
          <div class="mb-4">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-black"
            ></label>
            <input
              type="name"
              id="name"
              class="border border-black text-black text-md uppercase font-bold block w-full p-2.5  dark:border-black dark:placeholder-black"
              placeholder="Name"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-black"
            ></label>
            <input
              type="email"
              id="email"
              class="border border-black text-black text-md uppercase font-bold block w-full p-2.5  dark:border-black dark:placeholder-black"
              placeholder="Email"
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="contact"
              class="block mb-2 text-sm font-medium text-black"
            ></label>
            <input
              type="contact"
              id="contact"
              class="border border-black text-black text-md uppercase font-bold block w-full p-2.5  dark:border-black dark:placeholder-black"
              placeholder="Contact Number"
              required
            />
          </div>
          <div class="mb-4">
            

  <label for="message" class="block mb-2 text-sm font-medium text-black"></label>
  <textarea id="message" rows="4" class="border border-black text-black text-md uppercase font-bold block w-full p-2.5  dark:border-black dark:placeholder-black" placeholder="your message"></textarea>


          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
