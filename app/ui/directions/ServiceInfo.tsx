import allergist from "@/assets/services/allergist.jpg";
import Image from "next/image";

export default function ServiceInfo() {
  return (
    <section className="space-y-10 bg-white">
      <Image
        src={allergist}
        alt="allergist"
        className="rounded-xl shadow-sm border border-gray-200"
      />
      <div className="flex flex-col gap-2 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h4 className="font-semibold text-gray-800 text-lg">
          About the Service
        </h4>
        <div className="space-y-6 text-sm text-gray-700 font-normal leading-relaxed ">
          <p>
            Allergy consultation is a comprehensive medical service designed to
            help individuals identify, understand, and manage their allergic
            conditions effectively. During an allergy consultation, patients
            meet with a qualified allergist who specializes in diagnosing and
            treating a wide range of allergies, including those related to food,
            pollen, dust, pets, medications, and environmental factors.
          </p>
          <p>
            The consultation typically begins with a detailed discussion of the
            patient’s symptoms, medical history, lifestyle, and any known
            triggers. This is often followed by a physical examination and, if
            necessary, diagnostic tests such as skin prick tests, blood tests,
            or patch tests to accurately determine the specific allergens
            responsible for the patient’s reactions. Based on the results, the
            allergist develops a personalized treatment plan, which may include
            recommendations for allergen avoidance, prescription medications, or
            advanced therapies like immunotherapy (allergy shots or drops).
            Education is a key component of the consultation, empowering
            patients with knowledge about their condition, how to recognize
            early signs of an allergic reaction, and steps to take in case of
            emergencies.
          </p>
          <p>
            The ultimate goal of an allergy consultation is to improve the
            patient’s quality of life by minimizing symptoms, preventing severe
            reactions, and providing ongoing support for long-term allergy
            management and overall well-being.
          </p>
        </div>
      </div>
    </section>
  );
}
