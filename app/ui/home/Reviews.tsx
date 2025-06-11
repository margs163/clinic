import React from "react";
import person1 from "@/assets/motoPeople/person1.jpg";
import person2 from "@/assets/motoPeople/person2.jpg";
import person3 from "@/assets/motoPeople/person3.jpg";
import person4 from "@/assets/motoPeople/person4.jpg";
import person5 from "@/assets/testimonials/5.jpg";
import person6 from "@/assets/testimonials/6.jpg";
import starSVG from "@/assets/star-icon.svg";
import { type ReviewInfo } from "@/app/lib/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUpRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const testimonials: ReviewInfo[] = [
  {
    picture: person1,
    author: "Асемгуль Кереева",
    rating: 5,
    review:
      "Сегодня посетили новую клинику LEVITA - современная, светлая, красивая клиника. Зайдя в клинику нас встретила приятная девушка - администратор. Работают здесь лучшие специалисты города, цены на прием и процедуры доступные.",
  },
  {
    picture: person2,
    author: "Leila Davletova",
    rating: 5,
    review:
      "Обращались в эту клинику 2-ой раз и не пожалели 👍🏻👍🏻 отличный кардиолог Хагай Е., и девочки администраторы вежливые и приятные 👍🏻🤗.",
  },
  {
    picture: person3,
    author: "Guest Unknown",
    rating: 5,
    review:
      "Хочу выразить благодарность клинике за тёплый приём и внимательное отношение к маленьким пациентам. Делали УЗИ сердца ребёнку — всё прошло спокойно и профессионально. Персонал очень доброжелательный, врач всё подробно объяснил.",
  },
  {
    picture: person4,
    author: "Ульяна",
    rating: 5,
    review:
      "Обращалась в процедурный кабинет. Медсестра мастер своего дела - ничего не болело и сами процедуры быстрые и безболезненные. Очень понравилось",
  },
  {
    picture: person5,
    author: "Avalone Derpy",
    rating: 5,
    review:
      "Отзыв пишу очень поздно, т.к. был тут на процедурах еще зимой, но медсестра Нургуль - легенда. Благодаря ей и удобству клиники в целом (смарт-тв на капельнице, уютная атмосфера) не могу поверить, что лечение стало приятным воспоминанием. Еще и стоит недорого, как так?",
  },
  {
    picture: person6,
    author: "Дильназ Джелкайдарова",
    rating: 5,
    review:
      "Ходили 2 раза, осталось хорошое впечатления . Все обарудование современное, есть детская уютная зона, куллер. Приняли в назначеное время без задержек. Рекомендую всем особенно если есть грудные детки, можно прийти спокойно и без очереди.",
  },
];

export default function Reviews() {
  return (
    <section className=" flex flex-col gap-6 p-4 py-3">
      <div className="flex justify-between px-2">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
          Reviews
        </h3>
        <Link
          href={"#"}
          className="text-xs sm:text-sm flex gap-1 items-center text-gray-700 hover:text-blue-800"
        >
          More
          <ArrowUpRight size={12} />
        </Link>
      </div>
      <Carousel className="w-full lg:hidden flex flex-col">
        <CarouselContent className="-ml-2 lg:-ml-0 pb-3 py-3">
          {testimonials.map((item, index) => {
            return (
              <CarouselItem
                key={index}
                className=" hover:scale-105 transition-all"
              >
                <div className="flex flex-col items-start justify-start gap-4 sm:gap-6 px-6 py-4 pb-6 sm:p-8 sm:px-10 rounded-3xl shadow-md border border-gray-100 bg-white hover:shadow-lg transition-shadow">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex justify-between items-center">
                      <Quote className=" size-5 sm:size-7 border rounded-full border-gray-200 text-slate-400 p-3 shrink-0 box-content" />
                      <div className="flex gap-1">
                        {Array.from({ length: 4 }).map((_, i) => {
                          return (
                            <Image
                              key={`${i}`}
                              className="h-4 w-4 sm:h-6 sm:w-6"
                              src={starSVG}
                              alt={`${i}`}
                            />
                          );
                        })}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-medium leading-relaxed text-gray-800 pointer-events-none">
                      {item.review}
                    </p>
                  </div>
                  <div className="space-y-4 w-full">
                    <hr className="w-full h-1.5 sm:h-2 text-gray-50 rounded-3xl" />
                    <div className="flex justify-start items-center gap-4">
                      <Image
                        src={item.picture}
                        alt={`${index}`}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className=" text-gray-800 font-bold text-base sm:text-lg">
                          {item.author}
                        </h3>
                        <p className="text-sm font-medium text-gray-600 sm:text-base">
                          2GIS reviewer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="-left-3 -translate-y-0 translate-x-36 sm:translate-x-64 top-[24rem] sm:top-[26rem]" />
        <CarouselNext className="-right-3 -translate-y-0 -translate-x-36 sm:-translate-x-64 top-[24rem] sm:top-[26rem]" />
      </Carousel>
    </section>
  );
}
