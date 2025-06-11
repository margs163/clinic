import person1 from "@/assets/motoPeople/person1.jpg";
import person2 from "@/assets/motoPeople/person2.jpg";
import person3 from "@/assets/motoPeople/person3.jpg";
import person4 from "@/assets/motoPeople/person4.jpg";
import Image from "next/image";

const people = [person1, person2, person3, person4];

export default function Moto() {
  return (
    <section className="flex flex-col gap-6 sm:gap-10 items-center justify-start px-4 mt-10">
      <div className="space-y-6">
        <h3 className="text-lg sm:text-2xl font-normal tracking-wide text-center text-gray-800 pointer-events-none">
          We strive to improve the quality of life of our patients by providing
          them with <span className=" text-blue-600">professional</span> and{" "}
          <span className="text-blue-600">effective</span> medical care.
        </h3>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="flex">
            {people.map((item, index) => {
              return (
                <Image
                  src={item}
                  key={index}
                  alt="index"
                  className={`rounded-full w-9 h-9 sm:w-12 sm:h-12 object-cover border-2 border-gray-600 pointer-events-none relative ${
                    index !== 0 && "-ml-2.5"
                  }`}
                />
              );
            })}
          </div>
          <p className="text-xs sm:text-sm font-medium tracking-wide text-gray-400 mt-1">
            200+ people trust our clinic
          </p>
        </div>
      </div>
    </section>
  );
}
