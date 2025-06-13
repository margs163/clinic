import { type DirectionCardProps } from "@/app/lib/types";
import Link from "next/link";
export default function DirectionCard({
  directionCardObj,
}: {
  directionCardObj: DirectionCardProps;
}) {
  return (
    <Link
      href={
        "/directions/" +
        directionCardObj.title.split(" ").join("-").toLowerCase()
      }
      className="flex flex-col justify-between items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm shadow-gray-200 hover:bg-slate-50 hover:shadow-md transition-all cursor-pointer w-full"
    >
      <div className="flex justify-between items-start w-full">
        <div className="rounded-full p-4 text-teal-600 bg-gray-100">
          {directionCardObj.icon}
        </div>
        <p className="bg-teal-500 text-white px-4 py-2 text-xs rounded-xl font-semibold">
          {directionCardObj.title.split(" ")[0]}
        </p>
      </div>
      <div>
        <div>
          <p className="uppercase text-xs text-gray-500">
            {directionCardObj.type === "diagnose"
              ? "Diagnosis"
              : "Consultation"}
          </p>
          <h3 className="text-lg font-semibold text-gray-700">
            {directionCardObj.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
