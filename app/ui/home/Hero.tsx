"use client";
import hero1 from "@/assets/hero/hero12.jpg";
import hero2 from "@/assets/hero/hero22.jpg";
import hero3 from "@/assets/hero/hero32.jpg";
import hero4 from "@/assets/hero/hero42.jpg";
import hero5 from "@/assets/hero/hero52.jpg";
import { type ImagePayload } from "@/app/lib/types";
import { useEffect, useState } from "react";
import Image from "next/image";

const images: ImagePayload[] = [
  {
    src: hero1,
    title: "Health consultation",
    description:
      "It gets much better from here. Get a personal help that works and lasts - from the best specialists in Pavlodar.",
  },
  {
    src: hero2,
    title: "Health consultation",
    description:
      "It gets much better from here. Get a personal help that works and lasts - from the best specialists in Pavlodar.",
  },
  {
    src: hero3,
    title: "Health consultation",
    description:
      "It gets much better from here. Get a personal help that works and lasts - from the best specialists in Pavlodar.",
  },
  {
    src: hero4,
    title: "Health consultation",
    description:
      "It gets much better from here. Get a personal help that works and lasts - from the best specialists in Pavlodar.",
  },
  {
    src: hero5,
    title: "Health consultation",
    description:
      "It gets much better from here. Get a personal help that works and lasts - from the best specialists in Pavlodar.",
  },
];

export default function Hero() {
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
    <section className="flex flex-col lg:flex-row lg:items-start lg:justify-start items-center justify-start px-2 sm:px-4 gap-10 lg:gap-10 sm:gap-14">
      <div className="flex flex-col items-start justify-start gap-6 sm:gap-12">
        <div className="flex flex-col gap-2 sm:gap-4">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800">
            Consult your and your family's health
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Wether you require routine check-ups or specialized treatments our
            team is here to provide the care you deserve
          </p>
        </div>
        <div className="flex gap-2 items-stretch justify-start">
          <button className="rounded-md bg-blue-500 hover:bg-blue-600 px-4 sm:px-5 sm:py-2.5 py-2 text-xs sm:text-sm font-medium text-white">
            Make an appointment
          </button>
          <button className="rounded-md bg-transparent hover:bg-gray-100 text-gray-800 border-2 border-blue-500 px-4 sm:px-5 sm:py-2.5 py-2 text-xs sm:text-sm font-medium">
            See prices
          </button>
        </div>
      </div>
      <div className="overflow-hidden relative shadow-lg rounded-lg">
        <div
          className={`flex transition-transform ease-out duration-500 lg:max-w-[1200px] lg:min-h-[430px] -translate-x-[${
            currentIndex * 100
          }%]`}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.src}
                className=" object-cover w-[360px] h-[230px] lg:h-auto lg:w-full lg:shrink-0 lg:grow-0 lg:object-cover sm:w-[570px] sm:h-[350px] md:h-[380px] md:w-[650px] rounded-lg pointer-events-none"
                alt="image"
              />
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-x-0 h-36 sm:h-44 bottom-0 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent z-10">
          <div className="absolute w-11/12 inset-0 flex flex-col justify-end p-4 sm:px-6 items-start z-20">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg sm:text-xl text-gray-50 font-bold">
                {images.at(currentIndex)?.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 font-medium">
                {images.at(currentIndex)?.description}
              </p>
            </div>
            <div className="flex gap-1 items-center justify-center w-full min-h-2 sm:min-h-4 sm:pt-2">
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
    </section>
  );
}
