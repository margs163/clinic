import Link from "next/link";
import React from "react";
import adultneuro from "@/assets/services/adultNeurologist.jpg";
import adulttherapist from "@/assets/services/adultTherapist.jpg";
import allergist from "@/assets/services/allergist.jpg";
import heartsurgeon from "@/assets/services/Cardeologist.jpg";
import cardeologist from "@/assets/services/cardiologist.jpg";
import infectionist from "@/assets/services/infectionist.jpg";
import neurologist from "@/assets/services/neurologist.jpg";
import neurosurgeon from "@/assets/services/neurosurgeon.jpg";
import oncologist from "@/assets/services/oncologist.jpg";
import pediatrist from "@/assets/services/pediatrist.jpg";
import surgeon from "@/assets/services/surgeon.jpg";
import traumologist from "@/assets/services/traumologist.jpg";
import urologist from "@/assets/services/urologist.jpg";
import Image from "next/image";

const serviceDoctors = [
  {
    src: traumologist,
    title: "Adults traumology",
    color: "from-sky-600 to-sky-400/90",
  },
  {
    src: urologist,
    title: "Adults Urology",
    color: "from-indigo-600 to-indigo-400/90",
  },
  {
    src: allergist,
    title: "Kids Allergist",
    color: "from-yellow-600 to-yellow-400/90",
  },
  {
    src: heartsurgeon,
    title: "Adults Heart Surgery",
    color: "from-blue-600 to-blue-400/90",
  },
  {
    src: adulttherapist,
    title: "Adults Therapist",
    color: "from-green-600 to-green-400/90",
  },

  {
    src: adultneuro,
    title: "Adults Neurology",
    color: "from-blue-600 to-blue-400/90",
  },

  {
    src: cardeologist,
    title: "Adults Cardiology",
    color: "from-red-600 to-red-400/90",
  },
  {
    src: infectionist,
    title: "Kids Infectionist",
    color: "from-purple-600 to-purple-400/90",
  },
  {
    src: neurologist,
    title: "Kids Neurology",
    color: "from-cyan-600 to-cyan-400/90",
  },
  {
    src: neurosurgeon,
    title: "Adults Neuro Surgery",
    color: "from-amber-600 to-amber-400/90",
  },
  {
    src: oncologist,
    title: "Adults Oncology-mommology",
    color: "from-teal-600 to-teal-400/90",
  },
  {
    src: pediatrist,
    title: "Adults Pediatrist",
    color: "from-blue-600 to-blue-400/90",
  },
  {
    src: surgeon,
    title: "Kids Surgery",
    color: "from-blue-600 to-blue-400/90",
  },
];

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section className="px-4 sm:px-0 flex flex-col gap-6 mb-20 py-4">
      <div className="flex justify-between">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
          Our Services
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
        <CarouselContent className="sm:-ml-4 py-2 pb-4 px-2">
          {serviceDoctors.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/4 hover:scale-105 transition-all"
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={`${index}`}
                  className="object-cover w-full h-full rounded-xl drop-shadow-sm"
                />
                <div
                  className={`absolute bottom-0 rounded-b-xl w-full pl-4 sm:pl-5 py-1 sm:py-2 lg:py-3 bg-gradient-to-r ${item.color}`}
                >
                  <Link
                    href={"#"}
                    className={`font-bold text-xs sm:text-sm lg:text-base text-white`}
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-3 -translate-y-0 translate-x-32 sm:translate-x-64 md:translate-x-76 top-60 sm:top-76 md:top-82" />
        <CarouselNext className="-right-3 -translate-y-0 -translate-x-32 sm:-translate-x-64 md:-translate-x-76 top-60 sm:top-76 md:top-82" />
      </Carousel>
    </section>
  );
}
