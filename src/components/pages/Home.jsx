import { FaArrowRight } from "react-icons/fa";
import backgroundimg from '../images/backgroundimg.png';
function Home() {
  return (
    <div className="relative w-full aspect-[3/2] overflow-hidden flex px-[60px]">
      
      <img src={backgroundimg} alt="" className="mx-auto flex object-contain max-h-[75%] min-h-[150px] z-10"></img>
      
      <div className="flex-col pt-8 uppercase font-extrabold text-4xl sm:text-6xl md:text-8xl lg:text-9xl absolute w-full h-full flex items-start">
        <span>Welcome to the</span>
        <span>world</span>
        <span>of scent</span>
        <div className="pt-10 sm:pt-16 md:pt-20">
        <button
                      type="button"
                      className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-2.5 md:text-lg font-medium uppercase text-white dark:bg-black"
                    >
                      <span>Shop Now</span>
                      <FaArrowRight className="text-red-600 text-base sm:text-lg md:text-xl" />
                    </button></div>
      </div>
      <div className=" flex absolute right-0 top-80 -translate-y-1/2 text-justify max-w-[500px] px-4 sm:px-8 md:pr-[60px] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
  Reveal the essence of timeless scent, where every fragrance is a refined harmony of elegance and identity. Expertly composed and artfully bottled, each creation becomes a signature of distinction for those who appreciate beauty beyond the ordinary.
</div>

    </div>
    
  );
}

export default Home;
