import React from "react";
import family1 from "@/assets/checkup/family1.jpg";
import family2 from "@/assets/checkup/family2.jpg";
import person4 from "@/assets/motoPeople/person4.jpg";
import Image from "next/image";

export default function CheckUp() {
  return (
    <section className="p-5 mx-4 rounded-2xl border border-gray-200 bg-white shadow-sm relative mt-12 sm:mt-28">
      <div className="w-full h-[210px] sm:h-[280px] relative sm:-top-4">
        <Image
          src={family1}
          alt="family1"
          className=" rounded-full h-14 w-14 sm:w-20 sm:h-20 absolute -top-20 sm:-top-28 left-0 sm:left-20 md:left-24 object-cover shadow-sm"
        />
        <div className="p-4 sm:p-5 bg-gray-100 rounded-2xl flex justify-between items-center gap-4 max-w-[260px] sm:max-w-[340px] md:max-w-[380px] absolute -top-36 sm:-top-44 sm:right-0 md:right-2 -right-8 shadow-sm shadow-gray-200">
          <h3 className="py-2 px-4 sm:px-5 sm:py-2.5 text-sm sm:text-base font-bold bg-white rounded-2xl">
            Over 60%
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm font-medium">
            of chronic deseases are preventable or manageable with regular
            check-ups.
          </p>
        </div>
        <Image
          src={family2}
          alt="family2"
          className="rounded-full w-18 h-18 sm:w-26 sm:h-26 absolute right-0 sm:right-16 md:right-22 sm:-top-12 -top-9 object-cover shadow-sm"
        />
        <div className="p-4 sm:p-5 bg-amber-200 rounded-2xl flex justify-between items-center gap-4 max-w-[240px] sm:max-w-[320px] md:max-w-[360px] absolute -top-2 sm:-top-4 sm:-left-0 md:left-2 -left-8 shadow-sm shadow-gray-200">
          <h3 className="p-3 py-4 sm:px-4 sm:py-5 text-sm sm:text-base font-bold bg-white rounded-2xl">
            85%
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm font-medium">
            of serious illnesses are treatable with early check-ups.
          </p>
        </div>
        <Image
          src={person4}
          alt="person4"
          className="rounded-full w-14 h-14 sm:w-20 sm:h-20 absolute top-22 sm:top-26 -left-4 sm:left-14 md:left-24 md:top-28 object-cover shadow-sm"
        />
        <div className=" p-4 sm:p-5 bg-purple-200 rounded-2xl flex justify-between items-center gap-4 max-w-[260px] sm:max-w-[340px] md:max-w-[380px] absolute top-24 sm:top-30 -right-6 sm:right-6 shadow-sm shadow-gray-200">
          <p className=" text-gray-700 text-xs sm:text-sm font-medium">
            discovers an unknown condition during annual exams.
          </p>
          <h3 className=" p-3 sm:p-4 text-sm sm:text-base w-20 text-center font-bold bg-white rounded-2xl">
            1 in 3 adults
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:gap-12 items-start sm:p-3">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            The Importance of Regular Check-Ups
          </h2>
          <p className=" text-xs sm:text-sm md:text-base text-gray-500 font-medium">
            According to the Centers for Desease Control and Prevention, regular
            check-ups can reduce the risk of serious illnesses by up to 50%.
            Make sure to schedule your annual check-up today to stay on top of
            your health!
          </p>
        </div>
        <button className="rounded-md bg-blue-500 hover:bg-blue-600 px-6 py-2 text-xs sm:text-sm font-medium text-white">
          Book an appointment
        </button>
      </div>
    </section>
  );
}
