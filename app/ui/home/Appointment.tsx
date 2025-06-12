import {
  PhoneCall,
  CalendarCheck,
  Compass,
  CircleUserRound,
} from "lucide-react";

export default function Appointment() {
  return (
    <div className="rounded-2xl xl:rounded-3xl shadow-sm border border-gray-200 p-6 sm:p-8 xl:p-12 bg-white mx-2 lg:mx-0  flex flex-col justify-start items-center gap-8">
      <div className="w-full xl:self-center">
        <h3 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-800 leading-12">
          Book an Appointment
        </h3>
        <p className="text-xs sm:text-sm xl:text-base text-gray-600 font-normal sm:font-medium">
          Book an appointment to a specialized doctor. Choose your suitable
          date.
        </p>
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 sm:gap-3 lg:gap-2 xl:gap-3 gap-3 w-full">
        <div className="border flex gap-3 border-gray-200 transition-colors focus-within:border-gray-300 focus-within:bg-gray-50 rounded-2xl px-4 py-3 bg-white items-center w-full">
          <CircleUserRound
            strokeWidth={1.6}
            className=" text-gray-800 shrink-0 size-5.5 xl:size-6"
          />
          <input
            placeholder="Your name"
            className="focus:outline-none text-gray-700 font-medium text-xs xl:text-[0.8rem]"
            type="text"
          />
        </div>
        <div className="border flex gap-3 border-gray-200 transition-colors focus-within:border-gray-300 focus-within:bg-gray-50 rounded-2xl px-4 py-3 bg-white items-center w-full">
          <PhoneCall
            strokeWidth={1.6}
            className=" text-gray-800 shrink-0 size-5.5"
          />
          <input
            placeholder="Phone number"
            className="focus:outline-none text-gray-700 font-medium text-xs"
            type="tel"
          />
        </div>

        <div className="border flex gap-3 border-gray-200 transition-colors focus-within:border-gray-300 focus-within:bg-gray-50 rounded-2xl px-4 py-3 bg-white items-center w-full">
          <CalendarCheck
            strokeWidth={1.6}
            className=" text-gray-800 shrink-0 size-5.5"
          />
          <input
            placeholder="Appointment date"
            className="focus:outline-none text-gray-700 font-medium text-xs w-full"
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}
          />
        </div>
        <div className="border flex gap-3 border-gray-200 transition-colors focus-within:border-gray-200 focus-within:bg-gray-50 rounded-2xl px-4 py-3 bg-white items-center w-full">
          <Compass
            strokeWidth={1.6}
            className=" text-gray-800 shrink-0 size-5.5"
          />
          <select className="focus:outline-none text-gray-700 font-medium text-xs w-full">
            <option className="ml-auto">Appointment direction</option>
          </select>
        </div>
        <button className="px-8 py-3 sm:py-2 text-white text-xs sm:text-sm lg:text-xs lg:py-3 lg:justify-self-stretch sm:justify-self-start bg-teal-500 hover:bg-teal-600 transition-colors rounded-lg self-stretch mt-2 sm:mt-4 xl:mt-0 xl:text-sm xl:font-semibold font-medium">
          Book Appointment
        </button>
      </form>
    </div>
  );
}
