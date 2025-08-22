function Cart() {
  return (
    <div className="flex flex-col w-full pt-10 px-[60px]">
      <div className="flex flex-col max-w-[210px]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
          my cart
        </h2>
        <div className="mt-2 h-0.5 w-full bg-gray-300" />
      </div>

      {/*Product Table*/}
      <div className=" mt-10 relative overflow-x-auto shadow-md">
        <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-md text-gray-700 uppercase bg-gray-50 dark:bg-black dark:text-white">
            <tr>
              <th scope="col" class="px-16 py-3">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="px-6 py-3">
                Product
              </th>
              <th scope="col" class="px-6 py-3">
                quantity
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Cart;
