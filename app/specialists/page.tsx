"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { serviceDoctors } from "../lib/specialists";
import SearchDoctor from "../ui/specialists/SearchDoctor";
import { useState } from "react";
import DoctorsList from "../ui/specialists/DoctorsList";

export default function Page() {
  const [searchText, setSearchText] = useState("");
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);

  const filteredDoctors = serviceDoctors.filter((doctor) => {
    const matchesSearch =
      !searchText ||
      doctor.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesGroup =
      selectedGroups.length < 1 || selectedGroups.includes(doctor.group);
    return matchesSearch && matchesGroup;
  });

  const handleToggleGroup = (groupName: string) => {
    setSelectedGroups((prev) => {
      if (!groupName) {
        return prev;
      }
      const copyGroups = prev.slice();
      const index = copyGroups.indexOf(groupName);
      if (index > -1) {
        copyGroups.splice(index, 1);
      } else {
        copyGroups.push(groupName);
      }
      return copyGroups;
    });
  };
  return (
    <div className="flex flex-col gap-4 py-24 md:py-28 lg:py-30 max-w-[380px] sm:max-w-[620px] md:max-w-[710px] lg:max-w-[1000px] xl:max-w-[1400px] px-4 mx-auto min-h-screen lg:px-10 bg-white">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/specialists" className="">
              Our Team
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <main className="space-y-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-4xl">
            Our{" "}
            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
              Medical Team
            </span>
          </h2>
          <p className="text-sm text-gray-700 lg:text-base lg:max-w-[40%]">
            Meet our experienced healthcare professionals dedicated to providing
            exceptional medical care with compassion and expertise.
          </p>
        </div>
        <section className="flex flex-col gap-6 items-start justify-start w-full">
          <SearchDoctor
            searchText={searchText}
            setSearchText={setSearchText}
            selectedGroups={selectedGroups}
            handleToggleGroup={handleToggleGroup}
          />
          <DoctorsList filteredDoctors={filteredDoctors} />
        </section>
      </main>
    </div>
  );
}
