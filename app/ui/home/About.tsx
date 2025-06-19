"use client";
// import image1 from "@/assets/about/1.png";
// import image2 from "@/assets/about/2.png";
// import image3 from "@/assets/about/3.png";
// import image4 from "@/assets/about/4.png";
// import image5 from "@/assets/about/5.png";
// import image6 from "@/assets/about/6.png";
// import image7 from "@/assets/about/7.png";
import { CircleCheckBig, Users, Calendar, TrendingUp } from "lucide-react";
import Link from "next/link";
// import { StaticImageData } from "next/image";
// import { useState, useEffect } from "react";

// const images: StaticImageData[] = [
//   image1,
//   image2,
//   image3,
//   image4,
//   image5,
//   image6,
//   image7,
// ];

const points = [
  "Современное медицинское оборудование",
  "Опытные медицинские специалисты",
  "Комплексные медицинские услуги",
];

const achievments = [
  {
    icon: CircleCheckBig,
    title: "Выполнено Check-Up услуг",
    stat: "10 000+",
    description: "Комплексные медицинские обследования",
    bg: "bg-blue-50",
    heading: "text-blue-500",
    bigHeading: "text-blue-700",
  },
  {
    icon: Users,
    title: "Довольных клиентов",
    stat: "10 000+",
    description: "Удовлетворённые пациенты и их семьи",
    bg: "bg-green-50",
    heading: "text-green-500",
    bigHeading: "text-green-700",
  },
  {
    icon: Users,
    title: "Положительных отзывов",
    stat: "200+",
    description: "Отличные отзывы пациентов",
    bg: "bg-yellow-50",
    heading: "text-yellow-500",
    bigHeading: "text-yellow-700",
  },
  {
    icon: Calendar,
    title: "Работаем с",
    stat: "2020",
    description: "Годы доверия и заботы о здоровье",
    bg: "bg-red-50",
    heading: "text-red-500",
    bigHeading: "text-red-700",
  },
];

export default function About() {
  // const [currentIndex, setCurrentIndex] = useState<number>(0);
  // const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // useEffect(() => {
  //   const timeId = setInterval(() => {
  //     setCurrentIndex((prev) => {
  //       if (prev >= images.length - 1) {
  //         return 0;
  //       } else {
  //         return prev + 1;
  //       }
  //     });
  //   }, 4000);

  //   return () => {
  //     clearInterval(timeId);
  //   };
  // }, []);

  // function handleTouchStart(e: React.TouchEvent) {
  //   setTouchStartX(e.touches[0].clientX);
  // }

  // function handleTouchEnd(e: React.TouchEvent) {
  //   if (touchStartX === null) {
  //     return;
  //   }

  //   const touchEndX = e.changedTouches[0].clientX;
  //   const diff = touchStartX - touchEndX;
  //   if (Math.abs(diff) > 50) {
  //     if (diff > 0) {
  //       setCurrentIndex((prev) => (prev >> (images.length - 1) ? 0 : prev + 1));
  //     } else {
  //       setCurrentIndex((prev) => (prev <= 0 ? images.length - 1 : prev - 1));
  //     }
  //   }
  // }
  return (
    <section className=" sm:p-8 lg:p-10 xl:p-10 lg:py-6 px-2 lg:mx-0 xl:rounded-3xl flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-6 sm:gap-12 lg:gap-10 ">
      <div className="flex flex-col md:flex gap-4 sm:gap-6 lg:gap-4 items-start xl:gap-4">
        <div className="flex gap-2 items-center px-2 py-1 lg:px-3 lg:py-1.5 rounded-xl bg-teal-50 border border-teal-300 max-w-max">
          <TrendingUp className=" fill-teal-500 size-4 text-teal-500" />
          <p className="text-[10px] sm:text-xs text-teal-800 font-semibold">
            О нашей клинике
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-3xl xl:text-4xl font-extrabold text-gray-800">
            Медицинская клиника{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Levita
            </span>
          </h2>
          <p className=" text-sm font-medium sm:text-sm md:text-sm lg:text-xs xl:text-base lg:font-normal xl:font-medium tracking-wide text-gray-600 leading-normal lg:max-w-[85%]">
            Клиника Левита - это современное медицинское учреждение, которое
            стремится оказывать высококачественную медицинскую помощь и внимание
            своим пациентам. Ее цель - предлагать доступные и инновационные
            медицинские услуги, гарантируя высочайший уровень ухода и лечения.
          </p>
          <div className="space-y-3 mt-8 hidden lg:block">
            {points.map((damn, god) => (
              <div
                key={god}
                className="flex gap-2 lg:gap-3 items-center justify-start"
              >
                <CircleCheckBig className="size-4 lg:size-4.5 text-teal-600 bg-teal-100 p-1 lg:p-2 rounded-full shrink-0 box-content" />
                <p className="font-medium text-sm text-gray-800 lg:text-base">
                  {damn}
                </p>
              </div>
            ))}
          </div>
          <Link
            href={"#"}
            className="rounded-md bg-gradient-to-r from-teal-600 to-teal-500 hover:to-teal-600 transition-colors 0 px-4 sm:px-5 sm:py-2.5 py-2 mt-6 text-xs sm:text-sm xl:text-sm font-semibold text-white hidden lg:inline-block"
          >
            Узнать Больше
          </Link>
        </div>
        {/* <div className="flex gap-2 items-stretch justify-start">
          <Link
            href={"#"}
            className="rounded-md bg-gradient-to-r from-teal-600 to-teal-500 hover:to-teal-600 transition-colors 0 px-4 sm:px-5 sm:py-2.5 py-2 text-xs sm:text-sm xl:text-base font-semibold text-white flex items-center gap-2"
          >
            Book an appointment
            <ArrowRight className="size-3 text-white" />
          </Link>
          <Link
            href={"/pricing"}
            className="rounded-sm bg-transparent hover:border-teal-500 hover:text-teal-700 text-gray-800 border-2 border-gray-400 px-4 sm:px-5 sm:py-2.5 py-2 text-xs sm:text-sm xl:text-base font-medium"
          >
            See prices
          </Link>
        </div> */}
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-2 gap-4 lg:gap-5 lg:grid-cols-2">
          {achievments.map((i1, i2) => {
            const Icon = i1.icon;
            return (
              <div
                key={i2}
                className={`rounded-lg p-4 lg:p-6 lg:px-8 flex flex-col gap-2 items-start justify-start bg-white shadow-md shadow-gray-200 border border-gray-100`}
              >
                <div className="flex items-center justify-start gap-3">
                  <Icon
                    className={`size-5 lg:size-6 p-3 rounded-md ${i1.bg} ${i1.heading} box-content shrink-0`}
                  />
                  <h1
                    className={`text-base lg:text-2xl font-bold ${i1.bigHeading}`}
                  >
                    {i1.stat}
                  </h1>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-800 font-medium text-sm lg:text-base">
                    {i1.title}
                  </p>
                  <h3
                    className={`text-xs font-normal text-gray-600 lg:text-sm`}
                  >
                    {i1.description}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="space-y-3 mt-2 lg:hidden">
          {points.map((damn, god) => (
            <div key={god} className="flex gap-2 items-center justify-start">
              <CircleCheckBig className="size-4 text-teal-600 bg-teal-100 p-1 rounded-full shrink-0 box-content" />
              <p className="font-medium text-sm text-gray-700">{damn}</p>
            </div>
          ))}
        </div>
        <Link
          href={"#"}
          className="rounded-md bg-gradient-to-r from-teal-600 to-teal-500 hover:to-teal-600 transition-colors 0 px-4 sm:px-5 sm:py-2.5 py-2 text-xs sm:text-sm xl:text-base font-semibold text-white lg:hidden"
        >
          Узнать Больше
        </Link>
      </div>
    </section>
  );
}
