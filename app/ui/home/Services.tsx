import Link from "next/link";
import React from "react";
// import adultneuro from "@/assets/services/adultNeurologist.jpg";
// import adulttherapist from "@/assets/services/adultTherapist.jpg";
// import allergist from "@/assets/services/allergist.jpg";
// import heartsurgeon from "@/assets/services/Cardeologist.jpg";
// import cardeologist from "@/assets/services/cardiologist.jpg";
// import infectionist from "@/assets/services/infectionist.jpg";
// import neurologist from "@/assets/services/neurologist.jpg";
// import neurosurgeon from "@/assets/services/neurosurgeon.jpg";
// import oncologist from "@/assets/services/oncologist.jpg";
// import pediatrist from "@/assets/services/pediatrist.jpg";
// import surgeon from "@/assets/services/surgeon.jpg";
// import traumologist from "@/assets/services/traumologist.jpg";
// import urologist from "@/assets/services/urologist.jpg";
// import Image from "next/image";

export const serviceGroups = [
  {
    name: "Cardiology & Vascular",
    description: "Heart and blood vessel care, diagnostics, and consultations.",
    tag: "Cardiac Care",
    icon: Heart,
    color: "bg-red-50 text-red-600",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    name: "Neurology & Neurosurgery",
    description: "Brain and nervous system consultations and diagnostics.",
    tag: "Neuro Care",
    icon: Brain,
    color: "bg-blue-50 text-blue-600",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    name: "Urology & Endocrinology",
    description: "Urinary, reproductive, and hormonal health services.",
    tag: "Specialized Care",
    icon: Slice,
    color: "bg-green-50 text-green-600",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    name: "General & Pediatric Medicine",
    description: "General health, therapy, and pediatric consultations.",
    tag: "Primary Care",
    icon: Stethoscope,
    color: "bg-orange-50 text-orange-600",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    name: "Imaging & Diagnostics",
    description: "Ultrasound, X-ray, and other diagnostic imaging services.",
    tag: "Diagnostics",
    icon: Scan,
    color: "bg-purple-50 text-purple-600",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    name: "Surgery & Oncology",
    description: "Surgical, oncological, orthopedic, and gynecological care.",
    tag: "Advanced Care",
    icon: ShieldCheck,
    color: "bg-teal-50 text-teal-600",
    badgeColor: "bg-teal-100 text-teal-700",
  },
];

// const serviceDoctors = [
//   {
//     src: traumologist,
//     title: "Adults traumology",
//     color: "from-teal-600 to-teal-400/90",
//   },
//   {
//     src: urologist,
//     title: "Adults Urology",
//     color: "from-teal-600 to-teal-400/90",
//   },
//   {
//     src: allergist,
//     title: "Kids Allergist",
//     color: "from-teal-600 to-teal-400/90",
//   },
//   {
//     src: cardeologist,
//     title: "Adults Cardiology",
//     color: "from-teal-600 to-teal-400/90",
//   },

//   {
//     src: adulttherapist,
//     title: "Adults Therapist",
//     color: "from-teal-600 to-teal-400/90",
//   },

//   {
//     src: adultneuro,
//     title: "Adults Neurology",
//     color: "from-teal-600 to-teal-400/90",
//   },
//   {
//     src: heartsurgeon,
//     title: "Adults Heart Surgery",
//     color: "from-teal-600 to-teal-400/90",
//   },

//   {
//     src: infectionist,
//     title: "Kids Infectionist",
//     color: "from-teal-600 to-teal-400/90",
//   },
//   {
//     src: neurologist,
//     title: "Kids Neurology",
//     color: "from-teal-600 to-teal-400/90",
//   },
//   {
//     src: neurosurgeon,
//     title: "Adults Neuro Surgery",
//     color: "from-teal-600 to-teal-400/90",
//   },
//   {
//     src: oncologist,
//     title: "Adults Oncology-mommology",
//     color: "from-teal-600 to-teal-400/90",
//   },
//   {
//     src: pediatrist,
//     title: "Adults Pediatrist",
//     color: "from-teal-600 to-teal-400/90",
//   },
//   {
//     src: surgeon,
//     title: "Kids Surgery",
//     color: "from-teal-600 to-teal-400/90",
//   },
// ];

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
import {
  ArrowRight,
  // ArrowUpRight,
  Brain,
  Heart,
  Scan,
  ShieldCheck,
  Slice,
  Stethoscope,
} from "lucide-react";

export default function Services() {
  return (
    <section className="px-2 flex flex-col gap-6 lg:gap-16 mb-24 sm:mb-12 lg:mb-6 py-4">
      <div className="space-y-2 lg:space-y-4 text-center">
        <div className="flex gap-2 items-center px-2 py-1 lg:px-3 lg:py-1.5 rounded-xl bg-teal-50 border border-teal-300 max-w-max mb-4 mx-auto">
          <p className="text-[10px] sm:text-xs text-teal-800 font-semibold">
            Our Expertise
          </p>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800">
          Comprehensive Healthcare Services
        </h3>
        <p className="text-sm font-normal text-gray-700 lg:text-base lg:max-w-[60%] lg:mx-auto">
          From preventive care to specialized treatments, our expert team
          provides personalized healthcare solutions for you and your family.
        </p>
        {/* <Link
          href={"/directions"}
          className="text-xs sm:text-sm flex gap-1 items-center text-gray-700 hover:text-blue-800"
        >
          More
          <ArrowUpRight size={12} />
        </Link> */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
        {serviceGroups.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="space-y-6 lg:space-y-8 bg-white shadow-md border border-gray-100 rounded-xl p-6 lg:p-8 shadow-gray-200"
            >
              <div className="flex flex-row gap-5 items-center justify-start">
                <Icon
                  className={`size-6 lg:size-7 p-3 rounded-md ${item.color} box-content shrink-0`}
                />
                <div className="flex flex-col justify-start items-start gap-1">
                  <h3 className="font-semibold lg:text-lg text-gray-800">
                    {item.name}
                  </h3>
                  <p
                    className={`px-2 py-1 ${item.badgeColor} rounded-2xl text-[10px] lg:text-xs max-w-max text-center`}
                  >
                    {item.tag}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 font-medium text-sm lg:text-base">
                {item.description}
              </p>
              <Link
                href={"#"}
                className="text-xs lg:text-sm text-teal-600 font-medium flex item-center gap-2"
              >
                Learn More
                <ArrowRight className="size-4 lg:size-4" />
              </Link>
            </div>
          );
        })}
      </div>

      <Link
        href={"#"}
        className="rounded-md bg-gradient-to-r from-teal-600 to-teal-500 hover:to-teal-600 transition-colors 0 px-4 sm:px-5 sm:py-2.5 py-2 text-xs sm:text-sm xl:text-sm font-semibold text-white flex items-center gap-2 self-center"
      >
        View All Services
        <ArrowRight className="size-3 text-white" />
      </Link>
      {/* <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="sm:-ml-4 py-2 pb-4 xl:-ml-6 px-2">
          {serviceDoctors.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5 hover:scale-105 transition-all lg:max-h-[280px]"
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.src}
                  alt={`${index}`}
                  className="object-cover w-full h-full rounded-xl drop-shadow-sm "
                />
                <div
                  className={`absolute bottom-0 rounded-b-xl w-full pl-4 sm:pl-5 py-2 sm:py-2 lg:py-3 bg-gradient-to-r ${item.color}`}
                >
                  <Link
                    href={"#"}
                    className={`font-bold text-xs sm:text-sm lg:text-sm text-white`}
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -translate-y-0 flex flex-row gap-8 sm:gap-10 -bottom-12 sm:-bottom-14 w-full justify-center">
          <CarouselPrevious className="static " />
          <CarouselNext className=" static" />
        </div>
      </Carousel> */}
    </section>
  );
}
