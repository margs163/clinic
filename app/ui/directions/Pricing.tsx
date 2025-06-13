import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const costs = [
  {
    title: "Children cardiologist consultation",
    cost: 7000,
  },
  {
    title: "Children Ultracardiography consultation",
    cost: 7000,
  },
  {
    title: "Children neurologist consultation",
    cost: 7000,
  },
  {
    title: "Children pediatrist consultation",
    cost: 7000,
  },
  {
    title: "Children infectionist consultation",
    cost: 7000,
  },
  {
    title: "Children traumotology-ortologist consultation",
    cost: 7000,
  },
  {
    title: "Children surgeon consultation",
    cost: 7000,
  },
  {
    title: "Children allergist consultation",
    cost: 7000,
  },
];
export default function Pricing() {
  return (
    <section className="flex flex-col gap-4 mt-8 lg:mt-0">
      <div className="flex justify-between items-center px-2">
        <h2 className="font-semibold text-gray-800 text-lg xl:text-xl">
          Pricing
        </h2>
        <Link
          href={"/directions"}
          className="text-xs sm:text-sm flex gap-1 items-center text-gray-700 hover:text-teal-700"
        >
          More
          <ArrowUpRight size={12} />
        </Link>
      </div>
      <div className="flex flex-col gap-2 md:grid md:grid-cols-2 lg:grid-cols-1 md:gap-0 rounded-xl bg-white border border-gray-200 shadow-sm">
        {costs.map((item, index) => {
          return (
            <div className="space-y-1 lg:space-y-0" key={index}>
              <div className="p-6 space-y-1 md:p-8 lg:p-6">
                <p className="text-xs xl:text-sm font-medium text-gray-700">
                  {item.title}
                </p>
                <h3 className="text-base xl:text-lg font-bold text-gray-800">
                  {item.cost} tenge
                </h3>
              </div>
              {index !== costs.length - 1 && (
                <hr className="w-full h-[1px] bg-gray-200" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
