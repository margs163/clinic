import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SearchBar from "../ui/pricing/SearchBar";
import PricingTable from "../ui/pricing/PricingTable";

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
            <BreadcrumbLink href="/pricing" className="">
              Pricing
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
            Pricing
          </h2>
          <div className="hidden lg:block">
            <SearchBar />
          </div>
        </div>
        <section className="space-y-2 flex flex-col lg:flex-row gap-0 lg:gap-8 items-start justify-start w-full">
          <SearchBar />
          <PricingTable />
        </section>
      </main>
    </div>
  );
}
