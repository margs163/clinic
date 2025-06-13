import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import doctor22 from "@/assets/doctors/22.png";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import Image from "next/image";
const doctors = [
  {
    src: doctor22,
    name: "Тулеугазинова Айгерим Еркынова",
    role: "Allergist",
    exp: "Working experience in medicine 12 years.",
    level: "First category doctor",
  },
];
export default function Doctors() {
  return (
    <section className="mt-6 md:col-start-2 md:col-end-2 md:row-span-1 md:mt-0">
      <Carousel
        opts={{
          align: "start",
        }}
        className="relative"
      >
        <header className="flex justify-between w-full px-2">
          <h4 className="font-semibold text-gray-800 text-lg xl:text-xl mb-2">
            Doctors and Stuff
          </h4>
          <div className="flex gap-4 absolute top-4 right-2">
            <CarouselPrevious className="size-6 static" />
            <CarouselNext className="size-6 static" />
          </div>
        </header>

        <CarouselContent className="px-4 py-2 pr-0">
          {doctors.map((item, index) => {
            return (
              <CarouselItem
                key={index}
                className="p-6 rounded-xl border border-gray-200 flex lg:flex-col justify-between gap-6 shadow-sm bg-white"
              >
                <Image
                  src={doctor22}
                  alt="doctor22"
                  className="w-20 h-20 rounded-xl shrink-0 object-cover object-top"
                />
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm lg:text-base font-bold text-gray-800">
                      {item.name}
                    </h4>
                    <h4 className="text-xs lg:text-sm text-teal-700 uppercase font-bold mt-1">
                      {item.role}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-center justify-start">
                      <BriefcaseBusiness className="size-4 xl:size-5 text-gray-700 shrink-0" />
                      <p className="text-xs xl:text-[13px] text-gray-700">
                        {item.exp}
                      </p>
                    </div>
                    <div className="flex gap-2 items-start justify-start">
                      <GraduationCap className="size-4 xl:size-5 text-gray-700 shrink-0" />
                      <p className="text-xs xl:text-[13px] text-gray-700">
                        {item.level}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
