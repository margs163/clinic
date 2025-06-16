"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { uniqueGroups } from "@/app/lib/prices";

export default function SearchBar() {
  const [filterPressed, setFilterPressed] = useState(false);
  return (
    <div className={`relative ${filterPressed ? "space-y-4" : "space-y-2"}`}>
      <div className="flex gap-2">
        <div className="flex gap-2 items-center justify-start border border-gray-200 rounded-lg px-4 py-2 focus-within:border-gray-300 bg-white">
          <Search className="text-gray-700" />
          <input
            type="text"
            className=" focus-within:outline-none text-xs text-gray-800 font-medium"
            placeholder="Search for prices..."
          />
        </div>
        <button
          className="py-2 px-3 bg-teal-600 rounded-md"
          onClick={() => setFilterPressed((prev) => !prev)}
        >
          <SlidersHorizontal size={20} className="text-white" />
        </button>
      </div>
      <div
        className={`grid bg-white border border-gray-200 p-6 rounded-xl ${
          filterPressed
            ? "grid-rows-[1fr] opacity-100 py-6"
            : "grid-rows-[0fr] opacity-0 py-0"
        } overflow-hidden transition-all`}
      >
        <ul className="overflow-hidden flex flex-col gap-4 ">
          <li className="space-y-2">
            <h3 className="text-sm font-medium text-gray-800">Price</h3>
            <div className="flex flex-row lg:flex-col lg:items-start gap-2 text-xs w-full text-gray-700">
              <button className=" border border-gray-300 hover:bg-gray-50 rounded-sm p-3 font-medium">
                From most expensive
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 rounded-sm p-3 font-medium">
                From lest expensive
              </button>
            </div>
          </li>
          <li className="space-y-2">
            <h3 className="text-sm font-medium text-gray-800">Age</h3>
            <div className="flex gap-2 text-xs w-full justify-stretch text-gray-700">
              <button className="border border-gray-300 hover:bg-gray-50 rounded-sm p-3 font-medium">
                For Adults
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 rounded-sm p-3 font-medium">
                For Kids
              </button>
            </div>
          </li>
          <li className="space-y-2">
            <h3 className="text-sm font-medium text-gray-800">Category</h3>
            <div className="flex gap-2 text-xs w-full justify-stretch text-gray-700">
              <button className="border border-gray-300 hover:bg-gray-50 rounded-sm p-3 font-medium">
                Consultation
              </button>
              <button className="border border-gray-300 hover:bg-gray-50 rounded-sm p-3 font-medium">
                Diagnosis
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex-col gap-2 rounded-lg bg-white p-4 hidden lg:flex">
        {uniqueGroups.map((item, index) => (
          <div
            className="p-3 px-4 text-sm bg-slate-100 font-medium rounded-lg text-gray-800"
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
