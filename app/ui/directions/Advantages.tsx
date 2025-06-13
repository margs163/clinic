type AdvantageProp = {
  title: string;
  description: string;
};

export default function Advantages({
  advantages,
}: {
  advantages: AdvantageProp[];
}) {
  return (
    <section>
      <div className="flex flex-col gap-4 p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm items-stretch bg-white">
        <h4 className="font-semibold text-gray-800 text-lg mb-2 xl:text-xl">
          Advantages
        </h4>
        <div className="flex flex-col gap-4 md:gap-6 items-stretch md:grid-cols-2 md:grid">
          {advantages.map((item, index) => {
            return (
              <div key={index} className="flex gap-6 items-start justify-start">
                <h1 className="text-xl text-center font-bold text-teal-700 py-3 px-5 bg-gray-100 rounded-[50%] shrink-0">
                  {index + 1}
                </h1>
                <div className="space-y-2">
                  <h3 className="text-sm md:text-base font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm font-normal text-gray-600 max-w-[95%]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
