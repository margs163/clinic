import { Facebook, Instagram, PhoneCall, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-teal-800 to-teal-700/85 pt-10 p-6 lg:p-12 lg:px-16 xl:px-32 xl:p-16">
      <section className="flex flex-col lg:grid lg:grid-cols-[0.4fr_0.6fr] xl:grid-cols-[0.2fr_0.8fr] items-center lg:items-center lg:justify-items-center justify-start gap-8 lg:gap-8 xl:gap-8">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="uppercase text-4xl font-extrabold text-white lg:text-left">
              Levita
            </h2>
            <p className="text-sm text-gray-200 font-medium tracking-wide lg:text-left lg:max-w-[70%] xl:max-w-max">
              A diagnostic clinic that provides medical diagnostic services,
              including imaging and analysis.
            </p>
          </div>
          <div className="flex gap-6 justify-center lg:justify-start text-gray-300">
            <Instagram size={28} />
            <Facebook size={28} />
            <Twitter size={28} />
          </div>
        </div>
        <div className="flex flex-wrap self-start justify-between items-start gap-10 lg:gap-16 xl:gap-32">
          <div className="space-y-2">
            <h3 className="font-semibold text-white">Menu</h3>
            <ul className="space-y-2 text-sm text-gray-200 tracking-wide">
              <li className="">
                <Link href={"#"}>Services</Link>
              </li>
              <li>
                <Link href={"#"}>Pricing</Link>
              </li>
              <li>
                <Link href={"#"}>Blog</Link>
              </li>
              <li>
                <Link href={"#"}>Schedule</Link>
              </li>
              <li>
                <Link href={"#"}>Licensing</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-white">Schedule</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-300 tracking-wide">
                Mon-Fri: <span>8:00 - 19:00</span>
              </p>
              <p className="text-sm text-gray-300">
                Sat: <span>8:00 - 12:00</span>
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-white tracking-wide">Contacts</h3>
            <div className="space-y-2">
              <div className="flex gap-3 items-center">
                <PhoneCall className="text-gray-300" size={20} />
                <p className="text-sm text-gray-300">+7 700 950 57 57</p>
              </div>
              <div className="flex gap-3 items-center">
                <Instagram className="text-gray-300" size={20} />
                <p className="text-sm text-gray-300">levita.pvl</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
