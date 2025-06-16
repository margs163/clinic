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
    <main className="flex flex-col gap-12 sm:gap-16 py-24 sm:py-32 lg:py-36 max-w-max sm:max-w-[600px] md:max-w-[680px] lg:max-w-[1000px] xl:max-w-[1300px] sm:mx-auto">
      <div className="px-6">
        <Hero />
      </div>
      <div className="px-6">
        <Appointment />
      </div>
      <div className="p-6 bg-white">
        <About />
      </div>
      <div className="px-6">
        <Services />
      </div>
      <div className="px-6">
        <CheckUp />
      </div>
      <div className="px-6">
        <Specialists />
      </div>
      <div className="px-6">
        <Reviews />
      </div>
      <div className="px-6">
        <Location />
      </div>
    </main>
  );
}
