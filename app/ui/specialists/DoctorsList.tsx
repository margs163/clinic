import { type SpecialistInfo } from "@/app/lib/types";
import { Award, BriefcaseBusiness, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DoctorsList({
  filteredDoctors,
}: {
  filteredDoctors: SpecialistInfo[];
}) {
  return (
    <section className="space-y-8 mt-6 ">
      <div className="space-y-1">
        <h3 className="text-lg md:text-xl font-bold text-gray-800">
          {filteredDoctors.length} Doctors Available
        </h3>
        <p className="text-xs md:text-sm text-gray-600 font-medium">
          Experienced healthcare professionals ready to help
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 justify-items-center">
        {filteredDoctors.map((item, index) => {
          return (
            <div
              className="rounded-lg max-w-[340px] shadow-md relative"
              key={index}
            >
              <Image
                src={item.src}
                alt={index.toString()}
                className="object-cover object-top rounded-lg rounded-b-none h-[240px]"
              />
              <div className="absolute top-4 right-3">
                <p className="text-xs px-2 py-1 font-medium text-white bg-green-500 rounded-lg shadow-sm">
                  Available
                </p>
              </div>
              <div className="flex flex-col gap-4 p-5">
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm font-medium text-teal-700">
                    {item.role}
                  </p>
                </div>
                <p className="text-xs text-gray-600">{item.description}</p>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="flex gap-2 items-center">
                    <BriefcaseBusiness className="size-5 text-gray-600 box-content shrink-0" />
                    <p className="text-xs text-gray-600 font-medium">
                      {item.exp}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Award className="size-5 text-gray-600 box-content shrink-0" />
                    <p className="text-xs text-gray-600 font-medium">
                      Since {" " + item.since}
                    </p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <GraduationCap className="size-5 text-gray-600 box-content shrink-0" />
                    <p className="text-xs text-gray-600 font-medium">
                      {item.level}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <p className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs">
                    Kazakh
                  </p>
                  <p className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs">
                    Russian
                  </p>
                </div>
                <div className="flex py-2">
                  <Link
                    href={"#"}
                    className="rounded-md bg-gradient-to-r from-teal-600 to-teal-500 hover:to-teal-600 transition-colors px-4 py-2 text-xs font-semibold text-white"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
