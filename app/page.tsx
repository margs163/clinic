import Image from "next/image";
import Hero from "./ui/home/Hero";
import Location from "./ui/home/Location";
import Moto from "./ui/home/Moto";
import Appointment from "./ui/home/Appointment";
import Services from "./ui/home/Services";
import CheckUp from "./ui/home/CheckUp";
import Specialists from "./ui/home/Specialists";
import Reviews from "./ui/home/Reviews";
import About from "./ui/home/About";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 sm:gap-16 py-24 sm:py-32 lg:py-36 max-w-[370px] sm:max-w-[600px] md:max-w-[680px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto">
      <Hero />
      <Location />
      <About />
      <Appointment />
      <Services />
      <CheckUp />
      <Specialists />
      <Reviews />
      <Moto />
    </main>
  );
}
