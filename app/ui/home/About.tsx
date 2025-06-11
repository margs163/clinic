"use client";
import image1 from "@/assets/about/1.png";
import image2 from "@/assets/about/2.png";
import image3 from "@/assets/about/3.png";
import image4 from "@/assets/about/4.png";
import image5 from "@/assets/about/5.png";
import image6 from "@/assets/about/6.png";
import image7 from "@/assets/about/7.png";
import image8 from "@/assets/about/8.png";
import Image, { StaticImageData } from "next/image";

const images: StaticImageData[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];
import { useState, useEffect } from "react";
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
    <section className="p-6 sm:p-8 lg:p-10 mx-2 lg:mx-0 rounded-2xl border border-gray-200 bg-white shadow-sm relative flex flex-col lg:flex-row lg:items-start gap-8 sm:gap-12">
      <div className="overflow-hidden relative shadow-sm rounded-lg max-w-[310px] sm:max-w-[540px] md:max-w-[598px] lg:max-w-[400px] lg:max-h-[280px] h-auto">
        <div
          className={`flex transition-transform ease-out duration-500 -translate-x-[${
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
                className=" object-cover lg:w-full lg:h-auto lg:shrink-0 rounded-xl pointer-events-none"
                alt="image"
              />
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-x-0 h-9 bottom-0 rounded-b-lg bg-gradient-to-t from-black/40 to-transparent z-10">
          <div className="w-full inset-0 flex flex-col justify-end p-4 items-start z-20">
            <div className="flex gap-1 items-center justify-center w-full min-h-3">
              {images.map((_, i) => {
                return (
                  <div
                    key={i}
                    className={`transition-all w-1 h-1 rounded-full bg-white ${
                      currentIndex === i ? "p-[3px]" : " opacity-50"
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 sm:gap-10 lg:gap-10 items-start">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            About Medical Clinic Levita
          </h2>
          <p className=" text-xs sm:text-sm md:text-base lg:text-sm lg:font-normal tracking-wider text-gray-500 font-medium leading-normal">
            Levita Clinic - is a modern medical institution that strives to
            provide high-quality medical care and attention to its patients. Its
            goal is to offer accessible and innovative medical services,
            ensuring the highest standard of care and treatment.
          </p>
        </div>
        <button className="rounded-md bg-blue-500 mt-auto hover:bg-blue-600 px-6 py-2 text-xs sm:text-sm lg:text-xs font-medium text-white">
          Learn More
        </button>
      </div>
    </section>
  );
}
