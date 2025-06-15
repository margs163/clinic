import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ServiceInfo from "@/app/ui/directions/ServiceInfo";
import Advantages from "@/app/ui/directions/Advantages";
import Doctors from "@/app/ui/directions/Doctors";
import MakeAppointment from "@/app/ui/directions/MakeAppointment";
import Pricing from "@/app/ui/directions/Pricing";
import WeAreHere from "@/app/ui/directions/WeAreHere";

const advantages = [
  {
    title: "Accurate Diagnosis",
    description:
      "Identifies the exact allergens causing symptoms, enabling focused and effective treatment.",
  },
  {
    title: "Personalized Care",
    description:
      "Provides tailored treatment plans and advice based on each patient’s unique needs.",
  },
  {
    title: "Better Quality of Life",
    description:
      "Helps patients manage allergies, reduce reactions, and enjoy daily life with confidence.",
  },
];

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const header = slug.split("-").join(" ");
  const capitalHeader = header[0].toUpperCase() + header.slice(1);
  return (
    <div className="flex flex-col gap-4 lg:gap-6 py-24 lg:py-30 lg:pb-16 max-w-[380px] sm:max-w-[620px] md:max-w-[710px] lg:max-w-max xl:max-w-[1460px] px-4 mx-auto min-h-screen lg:px-8">
      <Breadcrumb className="lg:pl-2">
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
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href={`/directions/${slug}`} className="">
              {capitalHeader}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="space-y-6 lg:grid lg:grid-cols-[0.27fr_0.55fr_0.25fr] lg:items-start lg:gap-8">
        <div className="hidden lg:inline-block lg:space-y-6">
          <Doctors />
          <WeAreHere />
          <MakeAppointment />
        </div>
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800 lg:text-xl pl-2">
              {capitalHeader}
            </h2>
            <ServiceInfo />
          </div>
          <div className="hidden lg:block">
            <Advantages advantages={advantages} />
          </div>
        </div>
        <div className="hidden lg:block">
          <Pricing />
        </div>
        <div className="hidden md:grid md:grid-cols-2 md:gap-6 md:items-start lg:hidden">
          <Advantages advantages={advantages} />
          <div className="space-y-4">
            <Doctors />
            <WeAreHere />
            <MakeAppointment />
          </div>
        </div>
        <div className="md:hidden space-y-6">
          <Advantages advantages={advantages} />
          <Doctors />
          <WeAreHere />
        </div>
        <div className="md:hidden">
          <MakeAppointment />
          <Pricing />
        </div>
      </main>
    </div>
  );
}
