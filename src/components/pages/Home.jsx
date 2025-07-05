import backgroundImage from "../images/backgroundimg.png";

function Home() {
  return (
    <div className="relative w-full aspect-[3/2] overflow-hidden px-4 sm:px-8 md:px-[60px] flex pb-8">
      {/* Responsive Image */}
      <img
        src={backgroundImage}
        alt="image description"
        className="mx-auto object-contain max-h-[65%] sm:max-h-[75%] md:max-h-[85%] min-h-[150px] z-10"
      />

      {/* Text Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex items-start pt-4 sm:pt-6 md:pt-10 px-4 sm:px-8 md:px-[60px]">
        <p className="uppercase font-bold text-3xl sm:text-5xl md:text-7xl lg:text-9xl leading-tight drop-shadow-md">
          Welcome&nbsp;&nbsp;&nbsp;to the
          <br />
          world
          <br />
          of scent
        </p>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
