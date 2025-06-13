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
      <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 shadow-sm items-stretch bg-white">
        <h4 className="font-semibold text-gray-800 text-lg mb-2">Advantages</h4>
        {advantages.map((item, index) => {
          return (
            <div key={index} className="flex gap-6 items-start justify-start">
              <h1 className="text-xl text-center font-bold text-teal-700 py-3 px-5 bg-gray-100 rounded-[50%] shrink-0">
                {index}
              </h1>
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs font-normal text-gray-600 max-w-[95%]">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
