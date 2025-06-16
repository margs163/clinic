"use client";
import hero1 from "@/assets/hero/hero12.jpg";
import hero2 from "@/assets/hero/hero22.jpg";
import hero3 from "@/assets/hero/hero32.jpg";
import hero4 from "@/assets/hero/hero42.jpg";
import hero5 from "@/assets/hero/hero52.jpg";
import { type ImagePayload } from "@/app/lib/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Star, Users } from "lucide-react";

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
    <section className="flex flex-col lg:flex-row lg:items-start lg:justify-start items-center justify-start sm:px-4 gap-10 lg:gap-21 sm:gap-14">
      <div className="flex flex-col items-start justify-start gap-6 md:gap-8">
        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="flex gap-2 items-center px-2 py-1 rounded-xl bg-teal-50 border border-teal-300 max-w-max mb-2">
            <Star className=" fill-teal-500 size-4 text-teal-500" />
            <p className="text-[10px] sm:text-xs text-teal-800 font-semibold">
              Trusted by 10,000+ patients
            </p>
          </div>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
            Consult your and your family&apos;s{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              health
            </span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-gray-600">
            Experience personalized healthcare with our team of expert
            specialists. From routine check-ups to specialized treatments, we're
            here to provide the care you and your family deserve.
          </p>
          <div className="flex gap-6 mt-4 xl:mt-6">
            <div className="flex gap-2 items-center">
              <Shield className="size-5 lg:size-6 text-teal-600" />
              <p className="text-xs lg:text-sm text-gray-600">
                Licensed & Certified
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Users className="size-5 lg:size-6 text-teal-600" />
              <p className="text-xs lg:text-sm text-gray-600">
                Expert Specialists
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-stretch justify-start">
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
        </div>
      </div>
      <div className="overflow-hidden relative shadow-xl rounded-lg max-w-[360px] sm:max-w-[570px] md:max-w-[650px] lg:max-w-[480px] lg:h-[360px] xl:max-w-[600px] xl:h-[420px]">
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
                src={item.src}
                className=" object-cover object-center h-full w-full shrink-0 rounded-lg pointer-events-none"
                alt="image"
                priority
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
