import React from "react";
import family1 from "@/assets/checkup/family1.jpg";
import family2 from "@/assets/checkup/family2.jpg";
import person4 from "@/assets/motoPeople/person4.jpg";
import Image from "next/image";

export default function CheckUp() {
  return (
    <section className="p-5 mx-4 lg:pr-0 xl:p-8 xl:mx-2 rounded-2xl border border-gray-200 bg-white shadow-sm mt-12 sm:mt-28 lg:mt-0 flex flex-col lg:flex-row lg:gap-6 xl:gap-20 shadow-gray-200">
      <div className="h-[210px] sm:h-[280px] w-[110%] self-center relative lg:hidden">
        <div className="w-full absolute -top-32 flex flex-col gap-1 sm:gap-3 md:gap-5">
          <div className="flex gap-4 sm:gap-10 justify-center">
            <Image
              src={family1}
              alt="family1"
              className="self-end rounded-full h-14 w-14 sm:w-18 sm:h-18 object-cover shadow-sm mb-1"
            />
            <div className="self-start relative -top-10 p-4 sm:p-5 bg-gray-100 rounded-2xl flex justify-between items-center gap-4 max-w-[260px] sm:max-w-[340px] md:max-w-[380px] shadow-sm shadow-gray-200">
              <h3 className="py-2 px-4 sm:px-5 sm:py-2.5 text-sm sm:text-base font-bold bg-white rounded-2xl">
                Over 60%
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm font-medium">
                of chronic deseases are preventable or manageable with regular
                check-ups.
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center relative sm:gap-10 -left-6">
            <div className="self-end p-4 sm:p-5 bg-amber-200 rounded-2xl flex justify-between items-center gap-4 max-w-[240px] sm:max-w-[320px] md:max-w-[360px] shadow-sm shadow-gray-200">
              <h3 className="p-3 py-4 sm:px-4 sm:py-5 text-sm sm:text-base font-bold bg-white rounded-2xl">
                85%
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm font-medium">
                of serious illnesses are treatable with early check-ups.
              </p>
            </div>
            <Image
              src={family2}
              alt="family2"
              className="rounded-full self-start relative -top-8 w-18 h-18 sm:w-24 sm:h-24 object-cover shadow-sm"
            />
          </div>
          <div className="flex justify-center gap-4 sm:gap-10 relative top-3">
            <Image
              src={person4}
              alt="person4"
              className="rounded-full relative -top-2 self-start w-14 h-14 shrink-0 sm:w-20 sm:h-20 object-cover shadow-sm"
            />
            <div className="relative -right-4 self-end p-4 sm:p-5 bg-purple-200 rounded-2xl flex justify-between items-center gap-4 max-w-[260px] sm:max-w-[340px] md:max-w-[380px] shadow-sm shadow-gray-200">
              <p className=" text-gray-700 text-xs sm:text-sm font-medium">
                discovers an unknown condition during annual exams.
              </p>
              <h3 className=" p-3 sm:p-4 text-sm sm:text-base w-20 text-center font-bold bg-white rounded-2xl">
                1 in 3 adults
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:gap-12 xl:gap-16 items-start sm:p-3">
        <div className="space-y-2 xl:space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800">
            The Importance of Regular Check-Ups
          </h2>
          <p className=" text-xs sm:text-sm md:text-base text-gray-500 font-medium xl:max-w-[85%]">
            According to the Centers for Desease Control and Prevention, regular
            check-ups can reduce the risk of serious illnesses by up to 50%.
            Make sure to schedule your annual check-up today to stay on top of
            your health!
          </p>
        </div>
        <button className="rounded-md bg-teal-500 hover:bg-teal-600 px-6 py-2 text-xs sm:text-sm font-medium text-white">
          Book an appointment
        </button>
      </div>
      <div className="min-w-[45%] xl:min-w-[46%] self-center xl:ml-auto -top-4 xl:-top-12 relative lg:inline-block hidden xl:scale-108">
        <div className="w-full absolute -top-32 flex flex-col gap-2 sm:gap-3 md:gap-5 lg:gap-3">
          <div className="flex gap-4 sm:gap-10 lg:gap-4 justify-center">
            <Image
              src={family1}
              alt="family1"
              className="self-end rounded-full h-14 w-14 sm:w-18 sm:h-18 lg:h-14 lg:w-14 xl:w-18 xl:h-18 object-cover shadow-sm"
            />
            <div className="self-start relative -top-10 p-4 sm:p-5 lg:p-4 bg-gray-100 rounded-2xl flex justify-between items-center gap-4 max-w-[260px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[340px] xl:max-w-[360px] shadow-sm shadow-gray-200">
              <h3 className="py-2 px-4 sm:px-5 sm:py-2 lg:py-2 lg:px-4 xl:px-5 xl:py-2 text-sm sm:text-base lg:text-sm xl:text-base font-bold bg-white rounded-2xl">
                Over 60%
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm lg:text-xs xl:text-sm font-medium">
                of chronic deseases are preventable or manageable with regular
                check-ups.
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-center relative sm:gap-10 -left-6 lg:gap-8 lg:-left-2 lg:justify-start">
            <div className="self-end p-4 sm:p-5 lg:p-4 xl:p-5 bg-amber-200 rounded-2xl flex justify-between items-center gap-4 max-w-[240px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[240px] xl:max-w-[340px] shadow-sm shadow-gray-200">
              <h3 className="p-3 py-4 sm:px-4 sm:py-5 lg:px-3 lg:py-4 xl:px-4 xl:py-5 text-sm sm:text-base lg:text-sm xl:text-base font-bold bg-white rounded-2xl">
                85%
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm lg:text-xs xl:text-sm font-medium">
                of serious illnesses are treatable with early check-ups.
              </p>
            </div>
            <Image
              src={family2}
              alt="family2"
              className="rounded-full self-start relative -top-8 w-18 h-18 sm:w-24 sm:h-24 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-cover shadow-sm"
            />
          </div>
          <div className="flex justify-center gap-4 sm:gap-10 relative top-4 lg:gap-4">
            <Image
              src={person4}
              alt="person4"
              className="rounded-full relative -top-2 self-start w-14 h-14 shrink-0 sm:w-20 sm:h-20 lg:w-14 lg:h-14 xl:w-20 xl:h-20 object-cover shadow-sm"
            />
            <div className="relative -right-4 self-end p-4 sm:p-5 lg:p-4 xl:p-5 bg-purple-200 rounded-2xl flex justify-between items-center gap-4 max-w-[260px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[260px] xl:max-w-[360px] shadow-sm shadow-gray-200">
              <p className=" text-gray-700 text-xs sm:text-sm lg:text-xs xl:text-sm font-medium">
                discovers an unknown condition during annual exams.
              </p>
              <h3 className=" p-3 sm:p-4 lg:p-3 xl:p-4 text-sm sm:text-base lg:text-sm xl:text-base w-20 text-center font-bold bg-white rounded-2xl">
                1 in 3 adults
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
