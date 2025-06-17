import { Search } from "lucide-react";
import React, { Dispatch, SetStateAction } from "react";
import { uniqueGroups } from "@/app/lib/prices";
import { serviceDoctors } from "@/app/lib/specialists";

const countGroups = uniqueGroups.map((item) => {
  let count = 0;
  serviceDoctors.forEach((i) => {
    if (i.group === item) {
      count += 1;
    }
  });
  return {
    name: item,
    count: count,
  };
});

type SearchDoctorsProps = {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  selectedGroups: string[];
  handleToggleGroup: (groupName: string) => void;
};

export default function SearchDoctor({
  searchText,
  setSearchText,
  selectedGroups,
  handleToggleGroup,
}: SearchDoctorsProps) {
  return (
    <div className="flex flex-col gap-6 items-start justify-start sm:p-6 sm:rounded-lg sm:shadow-md lg:p-8">
      <div className="px-4 py-2 border-2 border-gray-300 rounded-xl flex gap-2 items-center focus-within:border-teal-400">
        <Search className="size-4" />
        <input
          type="text"
          className="text-sm text-gray-700 focus-within:outline-0 "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search for doctors..."
        />
      </div>
      <div className="space-y-4">
        <p className="text-sm font-medium  text-gray-600">
          Filter by Specialty
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => handleToggleGroup("")}
            className={`transition-all rounded-2xl px-4 py-1.5 font-medium text-xs flex gap-2 items-center ${
              selectedGroups.length < 1
                ? " bg-teal-600 text-white shadow-sm"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            All Specialists
            <p
              className={`px-3 py-1 transition-colors ${
                selectedGroups.length < 1
                  ? "bg-teal-500 text-white"
                  : "bg-gray-200 text-gray-700"
              } rounded-xl text-xs font-bold`}
            >
              20
            </p>
          </button>
          {countGroups.map((item, index) => (
            <button
              onClick={() => {
                handleToggleGroup(item.name);
              }}
              key={index}
              className={`rounded-2xl px-4 py-1.5 transition-all ${
                selectedGroups.includes(item.name)
                  ? "bg-teal-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-800"
              } font-medium text-xs flex gap-2 items-center`}
            >
              {item.name}
              <p
                className={`px-3 py-1 transition-colors ${
                  selectedGroups.includes(item.name)
                    ? "bg-teal-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } rounded-xl text-xs font-bold`}
              >
                {item.count}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
