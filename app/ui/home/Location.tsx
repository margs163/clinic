import { CalendarCheck, MapPinHouse, PhoneCall } from "lucide-react";
import { type Contact } from "@/app/lib/types";
const contacts: Contact[] = [
  {
    icon: PhoneCall,
    title: "Emergency Contact",
    description: "Immediate medical assistance",
    info: "+7 700 950 57 57",
  },
  {
    icon: MapPinHouse,
    title: "We Are Here",
    description: "Visit us at our location",
    info: "ул.Бекхожина 23, Pavlodar",
  },
  {
    icon: CalendarCheck,
    title: "We Are Available",
    description: "Professional care hours",
    info: ["Mon-Fri: 8:00 - 19:00", "Sat: 8:00 - 12:00"],
  },
];

export default function Location() {
  return (
    <section className="flex flex-col gap-6 lg:gap-10 justify-start">
      <div className="space-y-2 text-center">
        <h1 className="font-bold text-2xl lg:text-3xl text-gray-800">
          Get In Touch
        </h1>
        <p className="text-sm font-medium text-gray-500 lg:text-base lg:max-w-[50%] lg:mx-auto">
          Ready to take the next step in your healthcare journey? Contact us
          today to schedule your appointment.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:items-stretch justify-center items-start gap-4 lg:gap-6">
        {contacts.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-row lg:flex-col lg:items-stretch items-start justify-start lg:gap-2 gap-4 p-6 bg-white shadow-sm rounded-xl border border-gray-100 shadow-gray-200"
            >
              <Icon
                strokeWidth={1.6}
                className="text-teal-600 bg-teal-50 p-4 rounded-full box-content shrink-0 "
              />
              <div className="space-y-1 lg:text-center">
                <h3 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h3>
                {index === contacts.length - 1 ? (
                  <div className="text-sm">
                    <h3 className="text-gray-700 font-medium">
                      {item.info[0]}
                    </h3>
                    <h3 className="text-gray-500 text-sm">{item.info[1]}</h3>
                  </div>
                ) : (
                  <h3>{item.info}</h3>
                )}
                {index !== contacts.length - 1 && (
                  <p className="text-sm text-gray-500">{item.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
