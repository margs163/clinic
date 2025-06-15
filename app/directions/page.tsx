import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type DirectionCardProps } from "../lib/types";

import {
  Stethoscope,
  Syringe,
  Droplets,
  HeartPulse,
  Brain,
  Bug,
  UserPlus,
  Microscope,
  Slice,
} from "lucide-react";
import allergist from "@/assets/services/allergist.jpg";
import cardeologist from "@/assets/services/cardiologist.jpg";
import infectionist from "@/assets/services/infectionist.jpg";
import neurologist from "@/assets/services/neurologist.jpg";
import neurosurgeon from "@/assets/services/neurosurgeon.jpg";
import oncologist from "@/assets/services/oncologist.jpg";
import pediatrist from "@/assets/services/pediatrist.jpg";
import surgeon from "@/assets/services/surgeon.jpg";
import traumologist from "@/assets/services/traumologist.jpg";
import urologist from "@/assets/services/urologist.jpg";

import DirectionCard from "../ui/directions/DirectionCard";

const availableDirections: DirectionCardProps[] = [
  {
    icon: <Stethoscope />,
    title: "Adults traumology",
    type: "consult",
    img: traumologist,
  },
  {
    icon: <Syringe />,
    title: "Adults Urology",
    type: "consult",
    img: urologist,
  },
  {
    icon: <Droplets />,
    title: "Kids Allergist",
    type: "consult",
    img: allergist,
  },
  {
    icon: <HeartPulse />,
    title: "Adults Heart Surgery",
    type: "consult",
    img: surgeon,
  },
  {
    icon: <Stethoscope />,
    title: "Adults Therapist",
    type: "consult",
    img: pediatrist,
  },
  {
    icon: <Brain />,
    title: "Adults Neurology",
    type: "consult",
    img: neurologist,
  },
  {
    icon: <Stethoscope />,
    title: "Adults Cardiology",
    type: "consult",
    img: cardeologist,
  },
  {
    icon: <Bug />,
    title: "Kids Infectionist",
    type: "consult",
    img: infectionist,
  },
  {
    icon: <Brain />,
    title: "Kids Neurology",
    type: "consult",
    img: neurologist,
  },
  {
    icon: <Slice />,
    title: "Adults Neuro Surgery",
    type: "consult",
    img: neurosurgeon,
  },
  {
    icon: <Microscope />,
    title: "Adults Oncology-mommology",
    type: "consult",
    img: oncologist,
  },
  {
    icon: <UserPlus />,
    title: "Adults Pediatrist",
    type: "consult",
    img: pediatrist,
  },
  {
    icon: <Slice />,
    title: "Kids Surgery",
    type: "consult",
    img: surgeon,
  },
];

export default function page() {
  return (
    <div className="flex flex-col gap-4 py-24 md:py-28 lg:py-30 max-w-[380px] sm:max-w-[620px] md:max-w-[710px] lg:max-w-[1000px] xl:max-w-[1400px] px-4 mx-auto min-h-screen lg:px-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/directions" className="">
              Directions
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Tabs defaultValue="consult" className="w-full flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row justify-between items-stretch  sm:items-center gap-4 w-full">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Directions
          </h2>
          <TabsList className="w-full px-4 py-7 rounded-xl sm:p-6 lg:p-8 max-w-[320px]">
            <TabsTrigger
              value="consult"
              className=" px-5 py-4 sm:p-4 lg:px-6 lg:py-5 data-[state=active]:shadow-none data-[state=active]:bg-teal-500 data-[state=active]:text-white data-[state=active]:font-semibold transition-all text-xs"
            >
              Consultation
            </TabsTrigger>
            <TabsTrigger
              value="diagnose"
              className="px-5 py-4 sm:p-4 lg:px-6 lg:py-5 data-[state=active]:shadow-none data-[state=active]:bg-teal-500 data-[state=active]:text-white data-[state=active]:font-semibold transition-all text-xs"
            >
              Diagnosis
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="consult"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {availableDirections.map(
            (item, index) =>
              item.type === "consult" && (
                <DirectionCard directionCardObj={item} key={index} />
              )
          )}
        </TabsContent>
        <TabsContent value="diagnose">
          {availableDirections.map(
            (item, index) =>
              item.type === "diagnose" && (
                <DirectionCard directionCardObj={item} key={index} />
              )
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
