"use client";
import hero1 from "@/assets/about/2.png";
import hero2 from "@/assets/about/3.png";
import hero3 from "@/assets/about/4.png";
import hero4 from "@/assets/about/5.png";
import hero5 from "@/assets/about/6.png";
import hero6 from "@/assets/about/7.png";
import { type ImagePayload } from "@/app/lib/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Star, Users } from "lucide-react";

const images: ImagePayload[] = [
  {
    src: hero1,
    title: "Медицинская консультация",
    description:
      "Получите персональную помощь, которая действительно помогает.",
  },
  {
    src: hero2,
    title: "Медицинская консультация",
    description:
      "Получите персональную помощь, которая действительно помогает.",
  },
  {
    src: hero3,
    title: "Медицинская консультация",
    description:
      "Получите персональную помощь, которая действительно помогает.",
  },
  {
    src: hero4,
    title: "Медицинская консультация",
    description:
      "Получите персональную помощь, которая действительно помогает.",
  },
  {
    src: hero5,
    title: "Медицинская консультация",
    description:
      "Получите персональную помощь, которая действительно помогает.",
  },
  {
    src: hero6,
    title: "Медицинская консультация",
    description:
      "Получите персональную помощь, которая действительно помогает.",
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
    <section className="flex flex-col lg:flex-row lg:items-end lg:justify-start items-center justify-start sm:px-4 gap-10 lg:gap-16 sm:gap-14">
      <div className="flex flex-col items-start justify-start gap-6 md:gap-8">
        <div className="flex flex-col gap-2 sm:gap-4">
          <div className="flex gap-2 items-center px-2 py-1 lg:px-3 lg:py-1.5 rounded-xl bg-teal-50 border border-teal-300 max-w-max">
            <Star className=" fill-teal-500 size-4 text-teal-500" />
            <p className="text-[10px] sm:text-xs text-teal-800 font-semibold">
              Нам доверяют более 10 000 пациентов
            </p>
          </div>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-gray-800">
            Позаботьтесь о здоровье{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              своем и своей семьи
            </span>
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-gray-600">
            Получите персонализированную медицинскую помощь от нашей команды
            опытных специалистов. От профилактических осмотров до
            специализированного лечения.
          </p>
          <div className="flex gap-0 lg:gap-6 mt-4 xl:mt-4">
            <div className="flex gap-2 items-center justify-start">
              <Shield className="size-5 lg:size-6 text-teal-600" />
              <p className="text-xs lg:text-sm text-gray-600">
                Лицензировано и сертифицировано
              </p>
            </div>
            <div className="flex gap-2 items-center justify-start">
              <Users className="size-5 lg:size-6 text-teal-600" />
              <p className="text-xs lg:text-sm text-gray-600">
                Опытные специалисты
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-stretch justify-start">
          <Link
            href={"#"}
            className="rounded-md bg-gradient-to-r from-teal-600 to-teal-500 hover:to-teal-600 transition-colors 0 px-4 sm:px-5 sm:py-2.5 py-2 text-xs sm:text-sm xl:text-base font-semibold text-white flex items-center gap-2"
          >
            Записаться на приём
            <ArrowRight className="size-3 text-white" />
          </Link>
          <Link
            href={"/pricing"}
            className="rounded-sm bg-transparent hover:border-teal-500 hover:text-teal-700 text-gray-800 border-2 border-gray-400 px-4 sm:px-5 sm:py-2.5 py-2 text-xs sm:text-sm xl:text-base font-medium"
          >
            Посмотреть цены
          </Link>
        </div>
      </div>
      <div className="overflow-hidden relative shadow-xl lg:shadow-xl rounded-lg max-w-[360px] sm:max-w-[570px] md:max-w-[650px] lg:max-w-[480px] lg:h-[360px] xl:max-w-[600px] xl:h-[420px]">
        <div
          className={`flex transition-transform ease-out duration-500 w-full h-full`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((item, index) => {
            return (
              <Image
                key={index}
                src={item.src}
                className=" object-cover object-bottom h-full w-full shrink-0 rounded-lg pointer-events-none"
                alt="image"
                priority
              />
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-x-0 h-32 sm:h-44 bottom-0 rounded-b-lg bg-gradient-to-t from-black/80 to-transparent z-10">
          <div className="absolute w-11/12 inset-0 flex flex-col justify-end p-4 sm:px-6 items-start z-20 gap-1">
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
