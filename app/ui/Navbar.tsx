"use client";
import { ChevronDown, Menu, Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [navbarOpened, setNavbarOpened] = useState<boolean>(false);
  const [chevronPressed, setChevronPressed] = useState<boolean>(false);

  return (
    <header className="w-full fixed top-0 bg-white text-gray-800 z-50">
      <div className="flex flex-col gap-2 lg:hidden px-5 py-4 sm:px-8 sm:py-6">
        <div className="flex justify-between">
          <div>
            <Link
              href={"#"}
              className="text-2xl text-teal-700 font-extrabold uppercase"
            >
              Levita
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <Search />
            <Menu onClick={() => setNavbarOpened((prev) => !prev)} />
          </div>
        </div>
        <div
          className={`${
            navbarOpened
              ? "fixed w-full top-14 left-0 bg-white h-screen opacity-100 z-50"
              : " hidden opacity-0"
          } transition-opacity duration-700`}
        >
          <ul className="flex flex-col h-screen pb-5 text-base font-medium w-full">
            <li className="hover:bg-gray-50 px-5 py-3">
              <div className="flex justify-between w-full">
                <p className="">Services</p>
                <ChevronDown
                  onClick={() => setChevronPressed((prev) => !prev)}
                  className={`${
                    chevronPressed && "rotate-180"
                  } transition-transform`}
                />
              </div>
              <div
                className={`${
                  chevronPressed ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                } grid transition-[grid-template-rows]`}
              >
                <ul
                  className={`flex flex-col overflow-hidden ${
                    chevronPressed && "pt-2"
                  }`}
                >
                  <li className="px-3 py-2 rounded-md hover:bg-gray-100">
                    <Link href={"#"}>Children Specialists Consultation</Link>
                  </li>
                  <li className="px-3 py-2 rounded-md hover:bg-gray-100">
                    <Link href={"#"}>Adults Specialists Consultation</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="hover:bg-gray-50 px-5 py-3">
              <Link href={"#"}>Pricing</Link>
            </li>
            <li className="hover:bg-gray-50 px-5 py-3">
              <Link href={"#"}>Specialists</Link>
            </li>
            <li className="hover:bg-gray-50 px-5 py-3">
              <Link href={"#"}>Blog</Link>
            </li>
            <li className="hover:bg-gray-50 px-5 py-3">
              <Link href={"#"}>Licensing</Link>
            </li>
            <li className="px-4 py-3 w-full mt-6">
              <button className="px-6 py-3 rounded-lg bg-teal-500 text-white font-medium w-full hover:bg-teal-600">
                Make an appointment
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center px-5 py-4 sm:px-8 sm:py-6">
        <div>
          <Link
            href={"#"}
            className="text-3xl text-teal-700 font-extrabold uppercase"
          >
            Levita
          </Link>
        </div>
        <ul className="flex flex-row gap-x-10 text-[0.92rem] font-medium">
          <li>
            <Link href={"#"}>Services</Link>
          </li>
          <li>
            <Link href={"#"}>Pricing</Link>
          </li>
          <li>
            <Link href={"#"}>Blog</Link>
          </li>
          <li>
            <Link href={"#"}>Specialists</Link>
          </li>
          <li>
            <Link href={"#"}>Licensing</Link>
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <Search />
          <button className="px-4 py-2 rounded-lg bg-teal-500 text-white font-medium w-full hover:bg-teal-600 text-sm">
            Appointment
          </button>
        </div>
      </div>
      <hr className="w-full h-0.5 bg-gray-100" />
    </header>
  );
}
