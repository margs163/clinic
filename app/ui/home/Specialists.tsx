import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { serviceDoctors } from "@/app/lib/specialists";

export default function Specialists() {
  return (
    <section className=" flex flex-col gap-6 py-4">
      <div className="flex justify-between px-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
          Our Specialists
        </h3>
        <Link
          href={"#"}
          className="text-xs sm:text-sm flex gap-1 items-center text-gray-700 hover:text-blue-800"
        >
          More
          <ArrowUpRight size={12} />
        </Link>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0 sm:-ml-4 py-2 pb-4">
          {serviceDoctors.map((item, index) => (
            <CarouselItem
              key={index}
              className=" sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 px-4 sm:px-0 transition-all sm:pl-6 lg:max-h-[380px] lg:min-h-0 max-h-[360px] sm:min-h-[360px]"
            >
              <div className="relative items-start h-full w-full rounded-xl bg-gray-100 border border-gray-200 overflow-hidden shadow-sm">
                <Image
                  src={item.src}
                  alt={`${index}`}
                  className=" object-cover rounded-lg w-full h-full object-top"
                />
                <div
                  className={` flex flex-col gap-3 p-5 sm:pb-2 bg-white absolute bottom-0 rounded-b-xl w-full overflow-hidden h-[40%] sm:h-[50%] md:h-[50%] lg:h-[43%]`}
                >
                  <div className="">
                    <h4 className="sm:text-lg lg:text-base font-bold text-gray-800">
                      {item.name}
                    </h4>
                    <h4 className="text-sm sm:text-base lg:text-sm font-semibold text-teal-700">
                      {item.role}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-center justify-start">
                      <BriefcaseBusiness className="size-4 sm:size-5 lg:size-4 text-gray-700" />
                      <p className="text-xs sm:text-sm lg:text-xs text-gray-700">
                        {item.exp}
                      </p>
                    </div>
                    <div className="flex gap-2 items-start justify-start">
                      <GraduationCap className="size-4 sm:size-5 lg:size-4 text-gray-700" />
                      <p className="text-xs sm:text-sm lg:text-xs text-gray-700">
                        {item.level}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -translate-y-0 flex flex-row gap-8 sm:gap-10 -bottom-12 sm:-bottom-14 w-full justify-center">
          <CarouselPrevious className="static " />
          <CarouselNext className=" static" />
        </div>
      </Carousel>
    </section>
  );
}
