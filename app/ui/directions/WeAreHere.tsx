import { MapPinHouse } from "lucide-react";

export default function WeAreHere() {
  return (
    <div className="flex justify-start items-center py-4 px-6 gap-4 border-gray-200 w-full border rounded-xl bg-white shadow-sm md:col-start-2 md:col-end-2">
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
  );
}
