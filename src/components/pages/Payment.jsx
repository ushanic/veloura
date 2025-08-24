import { BsArrowRight } from "react-icons/bs";

function Payment(){
    return(
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
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black">
                        <span className="font-bold text-lg text-black">2</span>
                      </div>
                      <span className="text-xs md:text-sm font-bold text-black uppercase">
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
        </div>
    );
}

export default Payment;