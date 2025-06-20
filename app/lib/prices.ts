import {
  Heart,
  Bone,
  Stethoscope,
  Brain,
  Zap,
  ShieldCheck,
  Baby,
  Activity,
  Monitor,
  Gauge,
  Wind,
  Scan,
  Users,
  Shield,
  Flower2,
  TestTube,
  CircuitBoard,
  Waves,
  Slice,
} from "lucide-react";
import { type ServicePrice } from "./types";

// Extended type to include icon and group

export const costs: ServicePrice[] = [
  {
    title: "Adults vascular surgeon",
    cost: 7000,
    category: "consultation",
    icon: Heart,
    group: "Cardiology",
  },
  {
    title: "Adults X-ray surgeon",
    cost: 7000,
    category: "consultation",
    icon: Scan,
    group: "Diagnostic Imaging",
  },
  {
    title: "Adults cardigologist",
    cost: "7000-10000",
    category: "consultation",
    icon: Heart,
    group: "Cardiology",
  },
  {
    title: "Adults neurosurgeon",
    cost: 10000,
    category: "consultation",
    icon: Brain,
    group: "Neurology / Neurosurgery",
  },
  {
    title: "Adults urologist",
    cost: 7000,
    category: "consultation",
    icon: Slice,
    group: "Urology / Nephrology",
  },
  {
    title: "Adults oncologist-mammologist",
    cost: 8000,
    category: "consultation",
    icon: ShieldCheck,
    group: "Oncology / Mammology",
  },
  {
    title: "Adults therapist",
    cost: 7000,
    category: "consultation",
    icon: Stethoscope,
    group: "Therapy / General Medicine",
  },
  {
    title: "Children cardiologist",
    cost: 7000,
    category: "consultation",
    icon: Heart,
    group: "Cardiology",
  },
  {
    title: "Children ultracardiography",
    cost: 7000,
    category: "consultation",
    icon: Activity,
    group: "Cardiology",
  },
  {
    title: "Children neurologist",
    cost: 7000,
    category: "consultation",
    icon: Brain,
    group: "Neurology / Neurosurgery",
  },
  {
    title: "Children pediatrist",
    cost: 7000,
    category: "consultation",
    icon: Baby,
    group: "Therapy / General Medicine",
  },
  {
    title: "Children infectionist",
    cost: 7000,
    category: "consultation",
    icon: Shield,
    group: "Infectious Diseases / Immunology",
  },
  {
    title: "Children traumotology-ortologist",
    cost: 7000,
    category: "consultation",
    icon: Bone,
    group: "Traumatology / Orthopedics",
  },
  {
    title: "Children surgeon",
    cost: 7000,
    category: "consultation",
    icon: Zap,
    group: "Surgery / General Surgery",
  },
  {
    title: "Children allergist",
    cost: 7000,
    category: "consultation",
    icon: Flower2,
    group: "Infectious Diseases / Immunology",
  },
  {
    title: "Children echocardiography",
    cost: 7000,
    category: "diagnosis",
    icon: Waves,
    group: "Cardiology",
  },
  {
    title: "Children 24-hour ECG monitoring",
    cost: 8000,
    category: "diagnosis",
    icon: Monitor,
    group: "Cardiology",
  },
  {
    title: "Children 24-hour arterial pressure monitoring",
    cost: 7500,
    category: "diagnosis",
    icon: Gauge,
    group: "Cardiology",
  },
  {
    title: "Children spirography",
    cost: 4000,
    category: "diagnosis",
    icon: Wind,
    group: "Pulmonology / Respiratory",
  },
  {
    title: "Children ECG",
    cost: 2000,
    category: "diagnosis",
    icon: Activity,
    group: "Cardiology",
  },
  {
    title: "Children OBP ultrasound",
    cost: 5000,
    category: "diagnosis",
    icon: Scan,
    group: "Diagnostic Imaging",
  },
  {
    title: "Children OBP with weight",
    cost: 6000,
    category: "diagnosis",
    icon: Scan,
    group: "Diagnostic Imaging",
  },
  {
    title: "Children kidneys ultrasound",
    cost: 4000,
    category: "diagnosis",
    icon: Slice,
    group: "Urology / Nephrology",
  },
  {
    title: "Children ultrasound of soft tissues/lymph nodes",
    cost: 4500,
    category: "diagnosis",
    icon: Users,
    group: "Diagnostic Imaging",
  },
  {
    title: "Children thyroid ultrasound",
    cost: 4000,
    category: "diagnosis",
    icon: CircuitBoard,
    group: "Endocrinology",
  },
  {
    title: "Children ultrasound of joints",
    cost: 4500,
    category: "diagnosis",
    icon: Bone,
    group: "Traumatology / Orthopedics",
  },
  {
    title: "Children gynecological ultrasound",
    cost: 3500,
    category: "diagnosis",
    icon: Flower2,
    group: "Gynecology",
  },
  {
    title: "Children neurosonography",
    cost: 4000,
    category: "diagnosis",
    icon: Brain,
    group: "Neurology / Neurosurgery",
  },
  {
    title: "Children ultrasound of the scrotum",
    cost: 4000,
    category: "diagnosis",
    icon: TestTube,
    group: "Urology / Nephrology",
  },
  {
    title: "Children ultrasound Doppler of renal vessels",
    cost: 6000,
    category: "diagnosis",
    icon: Waves,
    group: "Urology / Nephrology",
  },
  {
    title: "Adults ultrasound of veins",
    cost: 6000,
    category: "diagnosis",
    icon: Heart,
    group: "Cardiology",
  },
  {
    title: "Adults ultrasound of the brachiocephalic trunk",
    cost: 6000,
    category: "diagnosis",
    icon: Heart,
    group: "Cardiology",
  },
  {
    title: "Adults ultrasound doppler of the renal arteries",
    cost: 6000,
    category: "diagnosis",
    icon: Waves,
    group: "Urology / Nephrology",
  },
  {
    title: "Adults echocardiography",
    cost: 7000,
    category: "diagnosis",
    icon: Waves,
    group: "Cardiology",
  },
  {
    title: "Adults ultrasound of the pelvic cavities",
    cost: 4000,
    category: "diagnosis",
    icon: Scan,
    group: "Diagnostic Imaging",
  },
  {
    title: "Adults holter ECG monitoring",
    cost: 8500,
    category: "diagnosis",
    icon: Monitor,
    group: "Cardiology",
  },
  {
    title: "Adults 24-hour blood pressure monitoring",
    cost: 7500,
    category: "diagnosis",
    icon: Gauge,
    group: "Cardiology",
  },
  {
    title: "Adults OBP ultrasound",
    cost: 6000,
    category: "diagnosis",
    icon: Scan,
    group: "Diagnostic Imaging",
  },
  {
    title: "Aduls ultrasound of soft tissues/lymph nodes",
    cost: 5000,
    category: "diagnosis",
    icon: Users,
    group: "Diagnostic Imaging",
  },
  {
    title: "Adults ultrasound of joints",
    cost: 4500,
    category: "diagnosis",
    icon: Bone,
    group: "Traumatology / Orthopedics",
  },
  {
    title: "Adults thyroid ultrasound",
    cost: 4000,
    category: "diagnosis",
    icon: CircuitBoard,
    group: "Endocrinology",
  },
  {
    title: "Adults ultrasound of the scrotum",
    cost: 4500,
    category: "diagnosis",
    icon: TestTube,
    group: "Urology / Nephrology",
  },
  {
    title: "Adults ultrasound of the mammary glands",
    cost: 6000,
    category: "diagnosis",
    icon: ShieldCheck,
    group: "Oncology / Mammology",
  },
  {
    title: "Adults ultrasound Doppler of arteries",
    cost: 6000,
    category: "diagnosis",
    icon: Waves,
    group: "Cardiology",
  },
];

export const uniqueGroups = new Set(costs.map((item) => item.group))
  .values()
  .toArray();
