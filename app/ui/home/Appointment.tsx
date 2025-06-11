import {
  User,
  PhoneCall,
  CalendarCheck,
  Compass,
  CircleUserRound,
} from "lucide-react";

export default function Appointment() {
  return (
    <div className="rounded-2xl shadow-lg p-6 sm:p-8 bg-gradient-to-br from-indigo-800 to-blue-700/85 mx-3 flex flex-col justify-start items-center gap-8">
      <div className="w-full">
        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-12 drop-shadow-md">
          Book an Appointment
        </h3>
        <p className="text-xs sm:text-sm text-gray-200 font-medium">
          Book an appointment to a specialized doctor. Choose your suitable
          date.
        </p>
      </div>
      <form className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-3 lg:gap-2 gap-3 w-full">
        <div className="border flex gap-3 border-gray-400 transition-colors focus-within:border-blue-400 focus-within:bg-blue-900/65 rounded-2xl px-4 py-3 bg-blue-900/80 drop-shadow-sm items-center w-full">
          <CircleUserRound
            size={22}
            strokeWidth={1.6}
            className=" text-gray-300 shrink-0"
          />
          <input
            placeholder="Your name"
            className="focus:outline-none text-gray-100 font-medium text-xs"
            type="text"
          />
        </div>
        <div className="border flex gap-3 border-gray-400 transition-colors focus-within:border-blue-400 focus-within:bg-blue-900/65 rounded-2xl px-4 py-3 bg-blue-900/80 drop-shadow-sm items-center w-full">
          <PhoneCall
            size={22}
            strokeWidth={1.6}
            className=" text-gray-300 shrink-0"
          />
          <input
            placeholder="Phone number"
            className="focus:outline-none text-gray-100 font-medium text-xs"
            type="tel"
          />
        </div>
        <div className="border flex gap-3 border-gray-400 transition-colors focus-within:border-blue-400 focus-within:bg-blue-900/65 rounded-2xl px-4 py-3 bg-blue-900/80 drop-shadow-sm items-center w-full">
          <CalendarCheck
            size={22}
            strokeWidth={1.6}
            className=" text-gray-300 shrink-0"
          />
          <input
            placeholder="Appointemnt date"
            className="focus:outline-none text-gray-100 font-medium text-xs w-full"
            type="date"
          />
        </div>
        <div className="border flex gap-3 border-gray-400 transition-colors focus-within:border-blue-400 focus-within:bg-blue-900/65 rounded-2xl px-4 py-3 bg-blue-900/80 drop-shadow-sm items-center w-full">
          <Compass
            size={22}
            strokeWidth={1.6}
            className=" text-gray-300 shrink-0"
          />
          <select className="focus:outline-none text-gray-100 font-medium text-xs w-full">
            <option className="ml-auto">Appointment direction</option>
          </select>
        </div>
        <button className="px-8 py-2 text-white text-xs sm:text-sm lg:text-xs lg:py-3 lg:justify-self-stretch sm:justify-self-start bg-blue-500 hover:bg-blue-600 transition-colors rounded-lg self-center mt-4 shadow-md shadow-black/5 font-medium">
          Book Appointment
        </button>
      </form>
    </div>
  );
}
