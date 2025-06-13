import { CalendarCheck, MapPinHouse, PhoneCall } from "lucide-react";
import { type Contact } from "@/app/lib/types";
const contacts: Contact[] = [
  {
    icon: (
      <PhoneCall
        className=" shrink-0 size-6 sm:size-7 lg:size-6 xl:size-7 box-content text-white"
        strokeWidth={1.6}
      />
    ),
    title: "Emergency Contact",
    description: "Immediate medical assistance",
    info: "+7 700 950 57 57",
  },
  {
    icon: (
      <MapPinHouse
        className="shrink-0 size-6 sm:size-7 lg:size-6 xl:size-7 box-content text-white"
        strokeWidth={1.6}
      />
    ),
    title: "We Are Here",
    description: "Visit us at our location",
    info: "ул.Бекхожина 23, Pavlodar",
  },
  {
    icon: (
      <CalendarCheck
        className="shrink-0 size-6 sm:size-7 lg:size-6 xl:size-7 box-content text-white"
        strokeWidth={1.6}
      />
    ),
    title: "We Are Available",
    description: "Professional care hours",
    info: ["8:00", "19:00", "8:00", "12:00"],
  },
];

export default function Location() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 justify-items-start gap-4 lg:gap-2 items-stretch justify-center px-2 lg:border lg:border-gray-200 w-full lg:rounded-2xl xl:rounded-3xl lg:bg-white drop-shadow-none lg:drop-shadow-gray-200">
      {contacts.map((item, index) => {
        return index != 2 ? (
          <div
            key={index}
            className="flex justify-start items-center py-4 px-6 sm:px-8 sm:py-6 lg:p-6 xl:p-8 gap-4 border-gray-100 w-full border rounded-2xl bg-white shadow-sm shadow-gray-200 lg:border-0 lg:rounded-2xl lg:shadow-none lg:border-none xl:gap-5"
          >
            <div className="p-3 sm:p-4 lg:p-3 xl:p-4 flex justify-center items-center bg-teal-500 rounded-xl">
              {item.icon}
            </div>
            <div className="flex flex-col justify-start items-start gap-0.5 md:gap-1 lg:gap-0 xl:gap-1">
              <h3 className="font-medium text-xs sm:text-lg lg:text-base xl:text-lg text-gray-500">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm xl:hidden hidden xl:text-sm lg:hidden text-gray-400">
                {item.description}
              </p>
              <p className="font-semibold text-sm md:text-base xl:text-base lg:text-sm text-gray-800">
                {item.info}
              </p>
            </div>
          </div>
        ) : (
          <div
            key={index}
            className="flex justify-start items-center sm:justify-start py-4 px-6 sm:px-8 sm:py-6 xl:p-8 lg:py-4 lg:px-6 gap-4 border-gray-100 rounded-2xl border w-full bg-white shadow-sm shadow-gray-200 lg:border-0 lg:rounded-2xl lg:shadow-none lg:border-none xl:gap-5"
          >
            <div className="p-3 sm:p-4 lg:p-3 xl:p-4 flex justify-center items-center bg-teal-500 rounded-xl">
              {item.icon}
            </div>
            <div className="flex flex-col justify-start items-start sm:gap-0.5 md:gap-0.5">
              <h3 className="font-medium text-xs xl:text-lg text-gray-500">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm lg:hidden xl:hidden hidden xl:text-sm text-gray-400">
                {item.description}
              </p>
              <p className="font-medium text-sm md:text-base lg:text-sm xl:text-base text-gray-800 flex justify-between">
                <span className="text-gray-700 mr-1">Mon-Fri:</span>
                <span>
                  {item.info[0]} - {item.info[1]}
                </span>
              </p>
              <p className="font-medium text-sm md:text-base lg:text-sm xl:text-base text-gray-800 flex justify-between">
                <span className="text-gray-700 mr-1">Sat:</span>
                <span>
                  {item.info[2]} - {item.info[3]}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
