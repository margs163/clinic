import { CalendarCheck, Mail, MapPinHouse, PhoneCall } from "lucide-react";
import { type Contact } from "@/app/lib/types";
const contacts: Contact[] = [
  {
    icon: PhoneCall,
    title: "Emergency Contact",
    description: "Immediate medical assistance",
    info: "+7 700 950 57 57",
    color: "bg-blue-50 text-blue-600",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: MapPinHouse,
    title: "We Are Here",
    description: "Visit us at our location",
    info: "ул.Бекхожина 23, Pavlodar",
    color: "bg-green-50 text-green-600",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    icon: CalendarCheck,
    title: "We Are Available",
    description: "Professional care hours",
    info: ["Mon-Fri: 8:00 - 19:00", "Sat: 8:00 - 12:00"],
    color: "bg-orange-50 text-orange-600",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "We reply withing 2 hours",
    info: "info@levita.clinic",
    color: "bg-teal-50 text-teal-600",
    badgeColor: "",
  },
];

export default function Location() {
  return (
    <section className="flex flex-col gap-6 lg:gap-10 justify-start">
      <div className="space-y-2 text-center">
        <div className="flex gap-2 items-center px-2 py-1 lg:px-3 lg:py-1.5 rounded-xl bg-teal-50 border border-teal-300 max-w-max mb-4 mx-auto">
          {/* <Activity className=" size-4 text-teal-500" /> */}
          <p className="text-[10px] sm:text-xs text-teal-800 font-semibold">
            Our Contacts
          </p>
        </div>
        <h1 className="font-bold text-2xl lg:text-3xl text-gray-800">
          Get In Touch
        </h1>
        <p className="text-sm font-medium text-gray-500 lg:text-base lg:max-w-[50%] lg:mx-auto">
          Ready to take the next step in your healthcare journey? Contact us
          today to schedule your appointment.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 lg:items-stretch justify-center items-start gap-4 lg:gap-6 lg:mx-auto w-full">
        {contacts.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex flex-row lg:flex-col lg:items-center items-start justify-start lg:gap-2 gap-4 p-6 lg:py-10 bg-white shadow-sm rounded-xl shadow-gray-200"
            >
              <Icon
                strokeWidth={1.6}
                className={`${item.color} p-4 rounded-full box-content shrink-0 `}
              />
              <div className="lg:space-y-1 space-y-0.5 lg:text-center">
                <h3 className="lg:text-lg text-base text-gray-800 font-semibold">
                  {item.title}
                </h3>
                {index === contacts.length - 2 ? (
                  <div className="text-sm">
                    <h3 className="text-gray-700 font-medium">
                      {item.info[0]}
                    </h3>
                    <h3 className="text-gray-500 text-sm">{item.info[1]}</h3>
                  </div>
                ) : (
                  <h3 className="text-sm text-gray-800 font-medium">
                    {item.info}
                  </h3>
                )}
                {index !== contacts.length - 2 && (
                  <p className=" text-sm text-gray-500">{item.description}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
