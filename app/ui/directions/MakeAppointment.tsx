import { MapPinHouse } from "lucide-react";

export default function MakeAppointment() {
  return (
    <div className="space-y-4">
      <div className="flex justify-start items-center py-4 px-6 gap-4 border-gray-200 w-full border rounded-xl bg-white">
        <div className="p-3 flex justify-center items-center bg-teal-500 rounded-xl">
          <MapPinHouse
            className="shrink-0 size-6 box-content text-white"
            strokeWidth={1.6}
          />
        </div>
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-semibold text-sm text-gray-800">We Are Here</h3>
          <p className="text-xs text-gray-400">Visit us at our location</p>
          <p className="font-semibold text-xs text-gray-500">
            ул.Бекхожина 23, Pavlodar
          </p>
        </div>
      </div>
      <div className="p-6 flex flex-col gap-6 border border-gray-200 bg-white rounded-xl">
        <p className="text-sm font-semibold text-gray-800">
          Fill out the online appointment form and we will contact you shortly.
        </p>
        <button className="p-3 bg-teal-500 text-white rounded-md font-medium text-xs">
          Make Appointment
        </button>
      </div>
    </div>
  );
}
