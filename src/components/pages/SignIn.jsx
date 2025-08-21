import logo from "../images/logo/logo.png";
import signin from "../images/signin.jpg";

function SignIn() {
  return (
    <div className="flex flex-col w-full mt-10 px-[60px]">
      <div className="sm:px-6 md:px-10 lg:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 border-2 border-black divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-black">
          {/* Left - Image */}
          <div className="w-full">
            <img
              src={signin}
              className="w-full h-full object-cover max-h-[600px] filter grayscale"
            />
          </div>

          {/* Right - Text */}

         <div className="flex flex-col">
            <div className="flex flex-col items-center gap-2">
                <img src={logo} alt="Logo" className="h-25" />
              </div>
            <div className="flex flex-col items-center">
                <h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
            Welcome Back!
          </h2>
         
          <p className="flex px-15 text-justify text-sm sm:text-base md:text-lg leading-relaxed font-bold">
           Sign in to continue exploring timeless scents, curated for your unique style and story.
          </p>
            </div>
            <form>
              
            </form></div>
         
        </div>
      </div>
    </div>
  );
}

export default SignIn;
