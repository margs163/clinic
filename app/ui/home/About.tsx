"use client";
import image1 from "@/assets/about/1.png";
import image2 from "@/assets/about/2.png";
import image3 from "@/assets/about/3.png";
import image4 from "@/assets/about/4.png";
import image5 from "@/assets/about/5.png";
import image6 from "@/assets/about/6.png";
import image7 from "@/assets/about/7.png";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

const images: StaticImageData[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

const achievments = [
  {
    title: "Check-Ups Made",
    stat: "10,000+",
    bg: "bg-blue-50",
    heading: "text-blue-400",
    bigHeading: "text-blue-700",
  },
  {
    title: "Happy Clients",
    stat: "10,000+",
    bg: "bg-green-50",
    heading: "text-green-400",
    bigHeading: "text-green-700",
  },
  {
    title: "Happy Reviews",
    stat: "200+",
    bg: "bg-yellow-50",
    heading: "text-yellow-400",
    bigHeading: "text-yellow-700",
  },
  {
    title: "Working Since",
    stat: "2020",
    bg: "bg-red-50",
    heading: "text-red-400",
    bigHeading: "text-red-700",
  },
];
export default function About() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const timeId = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= images.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 4000);

    return () => {
      clearInterval(timeId);
    };
  }, []);

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStartX(e.touches[0].clientX);
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX === null) {
      return;
    }

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrentIndex((prev) => (prev >> (images.length - 1) ? 0 : prev + 1));
      } else {
        setCurrentIndex((prev) => (prev <= 0 ? images.length - 1 : prev - 1));
      }
    }
  }
  return (
    <section className="p-6 sm:p-8 lg:p-10 xl:p-12 mx-2 lg:mx-0 rounded-2xl xl:rounded-3xl border border-gray-200 bg-white shadow-sm shadow-gray-200 relative flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-12 lg:gap-14">
      <div className="overflow-hidden relative shadow-sm rounded-lg max-w-max sm:max-w-max md:max-w-max lg:max-w-[400px] lg:h-[340px] xl:max-w-[560px] xl:h-[380px] h-[190px] sm:h-[290px] md:h-[330px]">
        <div
          className={`flex transition-transform ease-out duration-500 w-full h-full -translate-x-[${
            currentIndex * 100
          }%]`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((item, index) => {
            return (
              <Image
                key={index}
                src={item}
                className=" object-cover object-bottom-right w-full h-full shrink-0 rounded-xl pointer-events-none lg:rounded-2xl"
                alt="image"
                priority
              />
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-x-0 h-9 xl:h-12 bottom-0 rounded-b-lg bg-gradient-to-t from-black/40 to-transparent z-10">
          <div className="w-full inset-0 flex flex-col justify-end p-4 items-start z-20 h-full">
            <div className="flex gap-1 items-center justify-center w-full">
              {images.map((_, i) => {
                return (
                  <div
                    key={i}
                    className={`transition-all w-1 h-1 xl:w-1.5 xl:h-1.5 rounded-full bg-white ${
                      currentIndex === i ? "p-[3px] xl:p-[3xp]" : " opacity-50"
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:grid sm:grid-cols-[0.6fr_0.4fr] sm:justify-items-start md:flex gap-8 sm:gap-6 lg:gap-4 items-start xl:gap-10">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-gray-800">
            About Medical Clinic Levita
          </h2>
          <p className=" text-xs sm:text-sm md:text-sm lg:text-xs xl:text-base lg:font-normal xl:font-medium tracking-wider text-gray-500 leading-normal">
            Levita Clinic - is a modern medical institution that strives to
            provide high-quality medical care and attention to its patients. Its
            goal is to offer accessible and innovative medical services,
            ensuring the highest standard of care and treatment.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {achievments.map((i1, i2) => {
            return (
              <div
                key={i2}
                className={`rounded-lg px-6 py-4 flex flex-col gap-1 text-center items-center justify-start ${i1.bg}`}
              >
                <h3 className={`text-xs ${i1.heading} font-normal`}>
                  {i1.title}
                </h3>
                <h1 className={`text-base font-bold ${i1.bigHeading}`}>
                  {i1.stat}
                </h1>
              </div>
            );
          })}
        </div>
        <button className="rounded-md bg-teal-500 mt-auto hover:bg-teal-600 px-6 py-2 text-xs sm:text-sm xl:text-sm lg:text-xs font-medium text-white">
          Learn More
        </button>
      </div>
    </section>
  );
}
