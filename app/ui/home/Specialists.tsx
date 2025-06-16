import Link from "next/link";
import React from "react";
import doctor1 from "@/assets/doctors/1.png";
import doctor2 from "@/assets/doctors/2.png";
import doctor3 from "@/assets/doctors/3.png";
import doctor4 from "@/assets/doctors/4.png";
import doctor5 from "@/assets/doctors/5.png";
import doctor6 from "@/assets/doctors/6.png";
import doctor7 from "@/assets/doctors/7.png";
import doctor8 from "@/assets/doctors/8.png";
import doctor9 from "@/assets/doctors/9.png";
import doctor10 from "@/assets/doctors/10.png";
import doctor11 from "@/assets/doctors/11.png";
import doctor12 from "@/assets/doctors/12.png";
import doctor13 from "@/assets/doctors/13.png";
import doctor15 from "@/assets/doctors/15.png";
import doctor16 from "@/assets/doctors/16.png";
import doctor17 from "@/assets/doctors/17.png";
import doctor18 from "@/assets/doctors/18.png";
import doctor19 from "@/assets/doctors/19.png";
import doctor20 from "@/assets/doctors/20.png";
import doctor22 from "@/assets/doctors/22.png";
import Image from "next/image";
import { type SpecialistInfo } from "@/app/lib/types";

const serviceDoctors: SpecialistInfo[] = [
  {
    src: doctor1,
    name: "Хагай Елена Игоревна",
    role: "Children Cardiologist",
    exp: "8+ years",
    level: "First category doctor",
  },
  {
    src: doctor9,
    name: "Талгат Асылбек Талгатулы",
    role: "Children Infectionist",
    exp: "12+ years",
    level: "Highest category doctor",
  },
  {
    src: doctor18,
    name: "Сарсекеева Асем Шакеровна",
    role: "Children Cardiologist",
    exp: "8+ years",
    level: "First category doctor",
  },
  {
    src: doctor13,
    name: "Темирбулатов Ринат Хамзаевич",
    role: "Ultrasound Specialist",
    exp: "12+ years",
    level: "Highest category doctor",
  },
  {
    src: doctor5,
    name: "Наукенова Бахыт Кастаевна",
    role: "Adults Cargiologist",
    exp: "12+ years",
    level: "Highest category doctor",
  },
  {
    src: doctor10,
    name: "Онбаева Асель Русланова",
    role: "Doctor-pediatrist",
    exp: "8+ years",
    level: "Urgent help doctor",
  },

  {
    src: doctor2,
    name: "Иманов Арман Казиретович",
    role: "Children Neurologist",
    exp: "12+ years",
    level: "Highest category doctor",
  },
  {
    src: doctor8,
    name: "Асылхан Нуржан Канатович",
    role: "Vascular surgeon",
    exp: "8+ years",
    level: "Highest category doctor",
  },
  {
    src: doctor7,
    name: "Рафиков Фарух Фаридович",
    role: "Adult, Children Neurologist",
    exp: "12+ years",
    level: "Highest category doctor",
  },
  {
    src: doctor6,
    name: "Могер Наталья Борисовна",
    role: "Doctor-pediatrist",
    exp: "8+ years",
    level: "First category doctor",
  },
  {
    src: doctor4,
    name: "Шайкенов Aлмас Мерекулы",
    role: "Cardiosurgeon",
    exp: "12+ years",
    level: "Highest category doctor",
  },
  {
    src: doctor3,
    name: "Темиргалиев Галымжан Абаевич",
    role: "Oncologist-mammologistr",
    exp: "8+ years",
    level: "First category doctor",
  },
  {
    src: doctor22,
    name: "Тулеугазинова Айгерим Еркынова",
    role: "Allergist",
    exp: "12+ years",
    level: "First category doctor",
  },
  {
    src: doctor17,
    name: "Сабеков Ринат Дулатбекович",
    role: "Vascular Surgeon",
    exp: "12+ years",
    level: "Highest category doctor",
  },
  {
    src: doctor20,
    name: "Райханов Мурат Арыстанович",
    role: "Cardiologist",
    exp: "12+ years",
    level: "First category doctor",
  },
  {
    src: doctor16,
    name: "Смаилов Совет Сляммуратович",
    role: "Children Surgeon",
    exp: "12+ years",
    level: "Highest category doctor",
  },
  {
    src: doctor19,
    name: "Муканова Гульнара Халеловна",
    role: "Doctor Cardiologist",
    exp: "12+ years",
    level: "Highest category doctor",
  },
  {
    src: doctor15,
    name: "Жусупов Сабит Муталяпович",
    role: "Vascular surgeon",
    exp: "12+ years",
    level: "Highest category doctor",
  },
  {
    src: doctor12,
    name: "Муратов Даниил Ринатович",
    role: "Urologist-Andrologist",
    exp: "12+ years",
    level: "Highest category doctor",
  },
  {
    src: doctor11,
    name: "Тулеубаев Мусаип Мусаевич",
    role: "Trauomologist-Ortologist",
    exp: "12+ years",
    level: "First category doctor",
  },
];

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";

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
