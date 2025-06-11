import { Facebook, Instagram, PhoneCall, Twitter } from "lucide-react";
import Link from "next/link";
const times = ["8:00", "19:00", "8:00", "12:00"];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-indigo-800 to-blue-700/85 pt-10 p-6">
      <section className="flex flex-col items-center justify-start gap-8">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="uppercase text-4xl font-extrabold text-white">
              Levita
            </h2>
            <p className="text-sm text-gray-200 font-medium tracking-wide">
              A diagnostic clinic that provides medical diagnostic services,
              including imaging and analysis.
            </p>
          </div>
          <div className="flex gap-6 justify-center text-gray-300">
            <Instagram size={28} />
            <Facebook size={28} />
            <Twitter size={28} />
          </div>
        </div>
        <div className="flex flex-wrap self-start justify-between items-start gap-10">
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
