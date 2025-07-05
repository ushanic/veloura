import backgroundimg from '../images/backgroundimg.png';

function Home() {
  return (
    <div className="relative w-full aspect-[3/2] overflow-hidden flex px-[60px]">
      <img src={backgroundimg} alt="" className="mx-auto flex object-contain max-h-[75%] min-h-[150px] z-10"></img>
      <div className="flex-col pt-8 uppercase font-extrabold lg:text-9xl absolute w-full h-full flex items-start">
        <span>Welcome to the</span>
        <span>world</span>
        <span>of scent</span>
      </div>
    </div>
  );
}

export default Home;
