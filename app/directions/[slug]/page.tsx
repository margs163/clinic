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
    <div className="flex flex-col gap-4 py-24 sm:py-32 lg:py-36 max-w-[370px] sm:max-w-[620px] md:max-w-[710px] lg:max-w-[940px] xl:max-w-[1500px] px-4 mx-auto min-h-screen">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="lg:text-base">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/directions" className="lg:text-base">
              Directions
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href={`/directions/${slug}`}
              className="lg:text-base"
            >
              {capitalHeader}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl">
          {capitalHeader}
        </h2>
        <ServiceInfo />
        <Advantages advantages={advantages} />
        <Doctors />
        <MakeAppointment />
      </main>
    </div>
  );
}
