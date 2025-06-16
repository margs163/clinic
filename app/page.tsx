import Hero from "./ui/home/Hero";
import Location from "./ui/home/Location";
// import Moto from "./ui/home/Moto";
import Appointment from "./ui/home/Appointment";
import Services from "./ui/home/Services";
import CheckUp from "./ui/home/CheckUp";
import Specialists from "./ui/home/Specialists";
import Reviews from "./ui/home/Reviews";
import About from "./ui/home/About";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 sm:gap-16 py-24 sm:py-32 lg:py-40 max-w-max sm:max-w-[600px] md:max-w-[680px] lg:max-w-[1000px] xl:max-w-[1300px] sm:mx-auto">
      <div className="px-5">
        <Hero />
      </div>
      <div className="px-5 lg:hidden">
        <Appointment />
      </div>
      <div className="p-6 bg-white rounded-xl">
        <About />
      </div>
      <div className="px-5">
        <Services />
      </div>
      <div className="px-5">
        <CheckUp />
      </div>
      <div className="px-5">
        <Specialists />
      </div>
      <div className="px-5">
        <Reviews />
      </div>
      <div className="px-5">
        <Location />
      </div>
    </main>
  );
}
