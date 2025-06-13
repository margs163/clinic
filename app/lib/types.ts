import { type StaticImageData } from "next/image";
import { ReactElement } from "react";

export type DirectionCardProps = {
  icon: ReactElement;
  title: string;
  type: "consult" | "diagnose";
  img: StaticImageData;
};

export type ImagePayload = {
  src: StaticImageData;
  title: string;
  description: string;
};

export type Contact = {
  icon: ReactElement;
  title: string;
  description: string;
  info: string | string[];
};

export type AppointmentData = {
  name: string;
  phoneNumber: `+7 ${string}`;
  appointmentDate: Date;
  appointmentDirection: KidsAppointemntDirection & AdultsAppointemntDirection;
};

export type SpecialistInfo = {
  src: StaticImageData;
  name: string;
  role: string;
  exp: string;
  level: string;
};

export type ReviewInfo = {
  picture: StaticImageData;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
};

export type KidsAppointemntDirection =
  | "Orthopedic-traumatologist"
  | "Cardiologist"
  | "Kids Neurologist"
  | "Kids Surgeon"
  | "Pediatrist"
  | "Infectionist"
  | "Allergist";

export type AdultsAppointemntDirection =
  | "Vascular surgeon"
  | "Adult Neurosurgeon"
  | "Adult Cardiosurgeon"
  | "Therapist"
  | "Adult Neurologist"
  | "Infectionist"
  | "Oncologist-mammologist";
