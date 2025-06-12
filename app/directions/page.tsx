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
import DirectionCard from "../ui/directions/DirectionCard";

const availableDirections: DirectionCardProps[] = [
  {
    icon: <Stethoscope />,
    title: "Adults traumology",
    type: "consult",
  },
  {
    icon: <Syringe />,
    title: "Adults Urology",
    type: "consult",
  },
  {
    icon: <Droplets />,
    title: "Kids Allergist",
    type: "consult",
  },
  {
    icon: <HeartPulse />,
    title: "Adults Heart Surgery",
    type: "consult",
  },
  {
    icon: <Stethoscope />,
    title: "Adults Therapist",
    type: "consult",
  },
  {
    icon: <Brain />,
    title: "Adults Neurology",
    type: "consult",
  },
  {
    icon: <Stethoscope />,
    title: "Adults Cardiology",
    type: "consult",
  },
  {
    icon: <Bug />,
    title: "Kids Infectionist",
    type: "consult",
  },
  {
    icon: <Brain />,
    title: "Kids Neurology",
    type: "consult",
  },
  {
    icon: <Slice />,
    title: "Adults Neuro Surgery",
    type: "consult",
  },
  {
    icon: <Microscope />,
    title: "Adults Oncology-mommology",
    type: "consult",
  },
  {
    icon: <UserPlus />,
    title: "Adults Pediatrist",
    type: "consult",
  },
  {
    icon: <Slice />,
    title: "Kids Surgery",
    type: "consult",
  },
];

export default function page() {
  return (
    <div className="flex flex-col gap-6 py-24 sm:py-32 lg:py-36 max-w-[370px] sm:max-w-[620px] md:max-w-[710px] lg:max-w-[940px] xl:max-w-[1500px] px-6 mx-auto min-h-screen">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="lg:text-base">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components" className="lg:text-base">
              Directions
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Tabs defaultValue="consult" className="w-full flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row justify-between items-stretch  sm:items-center gap-4 w-full">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl">
            Directions
          </h2>
          <TabsList className="w-full px-6 py-8 rounded-xl sm:p-6 lg:p-8 max-w-[320px]">
            <TabsTrigger
              value="consult"
              className=" px-6 py-5 sm:p-4 lg:px-6 lg:py-5 data-[state=active]:shadow-none data-[state=active]:bg-teal-400 data-[state=active]:text-white data-[state=active]:font-semibold transition-all"
            >
              Consultation
            </TabsTrigger>
            <TabsTrigger
              value="diagnose"
              className="px-6 py-5 sm:p-4 lg:px-6 lg:py-5 data-[state=active]:shadow-none data-[state=active]:bg-teal-400 data-[state=active]:text-white data-[state=active]:font-semibold transition-all"
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
