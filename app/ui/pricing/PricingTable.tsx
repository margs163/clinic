import costs from "@/app/lib/prices";
export default function PricingTable() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-1 lg:gap-2 w-full">
      <div className="w-full py-4 px-6 justify-between items-start hidden lg:flex text-sm text-gray-500 font-medium">
        <h3 className="w-[260px]">Service name</h3>
        <h3 className="text-left max-w-[100px]">Type</h3>
        <h3 className="text-left w-[60px]">Price</h3>
        <h3 className="text-left">Book</h3>
      </div>
      {costs.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index}>
            <div className="p-4 px-6 space-y-8 border border-gray-200 rounded-md bg-white lg:hidden">
              <div className="flex gap-4 items-center justify-start">
                {/* <Icon
                size={22}
                className="p-2 rounded-lg bg-teal-50 text-teal-600 box-content shrink-0"
                /> */}
                <div className="flex flex-col gap-2 justify-start items-start">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p
                    className={`py-1 px-2 text-[11px] font-medium ${
                      item.category === "consultation"
                        ? "bg-teal-100 text-teal-700 border-teal-200"
                        : "bg-blue-100 text-blue-700 border-blue-200"
                    } rounded-lg border`}
                  >
                    {item.category}
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between items-end">
                <div className="space-y-1">
                  <p className="text-xs text-gray-500">Starting from</p>
                  <h3 className="text-xl font-bold text-gray-800">
                    ₸{item.cost}
                  </h3>
                </div>
                <button className="bg-teal-600/80 text-white px-4 py-2 text-xs font-medium rounded-md">
                  Book Now
                </button>
              </div>
            </div>
            <div
              key={index}
              className="p-4 px-6 space-y-8 border-gray-200 rounded-lg bg-white hidden lg:flex lg:flex-row lg:justify-between lg:items-center"
            >
              <h2 className="text-lg lg:text-sm font-semibold text-gray-800 w-[300px] m-0">
                {item.title}
              </h2>
              <p
                className={`py-1 px-2 text-[11px] font-medium lg:text-sm max-w-[100px] m-0 ${
                  item.category === "consultation"
                    ? "bg-teal-100 text-teal-700 border-teal-200"
                    : "bg-blue-100 text-blue-700 border-blue-200"
                } rounded-lg border`}
              >
                {item.category}
              </p>
              <h3 className="text-xl lg:text-base font-bold text-gray-800 w-[60px] m-0">
                ₸{item.cost}
              </h3>
              <button className="bg-teal-600/80 text-white px-4 py-2 text-xs font-medium rounded-md">
                Book Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
