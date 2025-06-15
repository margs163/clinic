import {
  Heart,
  Bone,
  Stethoscope,
  Brain,
  Zap,
  ShieldCheck,
  Thermometer,
  Baby,
  Activity,
  Monitor,
  Gauge,
  Wind,
  Scan,
  Users,
  Shield,
  Flower2,
  Eye,
  TestTube,
  CircuitBoard,
  Waves,
  Slice,
} from "lucide-react";
import { type ServicePrice } from "./types";

// Extended type to include icon

const costs: ServicePrice[] = [
  {
    title: "Adults vascular surgeon",
    cost: 7000,
    category: "consultation",
    icon: Heart, // Vascular = blood vessels/heart related
  },
  {
    title: "Adults X-ray surgeon",
    cost: 7000,
    category: "consultation",
    icon: Scan, // X-ray/imaging related
  },
  {
    title: "Adults cardigologist",
    cost: "7000-10000",
    category: "consultation",
    icon: Heart, // Cardiology = heart
  },
  {
    title: "Adults neurosurgeon",
    cost: 10000,
    category: "consultation",
    icon: Brain, // Neurosurgery = brain/nervous system
  },
  {
    title: "Adults urologist",
    cost: 7000,
    category: "consultation",
    icon: Slice, // Urology = kidneys/urinary system
  },
  {
    title: "Adults oncologist-mammologist",
    cost: 8000,
    category: "consultation",
    icon: ShieldCheck, // Oncology = cancer screening/protection
  },
  {
    title: "Adults therapist",
    cost: 7000,
    category: "consultation",
    icon: Stethoscope, // General medical consultation
  },
  {
    title: "Children cardiologist",
    cost: 7000,
    category: "consultation",
    icon: Heart, // Pediatric cardiology
  },
  {
    title: "Children ultracardiography",
    cost: 7000,
    category: "consultation",
    icon: Activity, // Heart monitoring/ultrasound
  },
  {
    title: "Children neurologist",
    cost: 7000,
    category: "consultation",
    icon: Brain, // Pediatric neurology
  },
  {
    title: "Children pediatrist",
    cost: 7000,
    category: "consultation",
    icon: Baby, // Pediatric care
  },
  {
    title: "Children infectionist",
    cost: 7000,
    category: "consultation",
    icon: Shield, // Infectious disease protection
  },
  {
    title: "Children traumotology-ortologist",
    cost: 7000,
    category: "consultation",
    icon: Bone, // Orthopedics = bones/joints
  },
  {
    title: "Children surgeon",
    cost: 7000,
    category: "consultation",
    icon: Zap, // Surgery (precision/cutting)
  },
  {
    title: "Children allergist",
    cost: 7000,
    category: "consultation",
    icon: Flower2, // Allergies often related to pollen/flowers
  },
  {
    title: "Children echocardiography",
    cost: 7000,
    category: "diagnosis",
    icon: Waves, // Echo = sound waves
  },
  {
    title: "Children 24-hour ECG monitoring",
    cost: 8000,
    category: "diagnosis",
    icon: Monitor, // 24-hour monitoring
  },
  {
    title: "Children 24-hour arterial pressure monitoring",
    cost: 7500,
    category: "diagnosis",
    icon: Gauge, // Pressure monitoring
  },
  {
    title: "Children spirography",
    cost: 4000,
    category: "diagnosis",
    icon: Wind, // Lung function/breathing test
  },
  {
    title: "Children ECG",
    cost: 2000,
    category: "diagnosis",
    icon: Activity, // Heart electrical activity
  },
  {
    title: "Children OBP ultrasound",
    cost: 5000,
    category: "diagnosis",
    icon: Scan, // General ultrasound scanning
  },
  {
    title: "Children OBP with weight",
    cost: 6000,
    category: "diagnosis",
    icon: Scan, // Ultrasound with additional measurement
  },
  {
    title: "Children kidneys ultrasound",
    cost: 4000,
    category: "diagnosis",
    icon: Slice, // Kidney imaging
  },
  {
    title: "Children ultrasound of soft tissues/lymph nodes",
    cost: 4500,
    category: "diagnosis",
    icon: Users, // Lymph nodes = immune system
  },
  {
    title: "Children thyroid ultrasound",
    cost: 4000,
    category: "diagnosis",
    icon: CircuitBoard, // Thyroid = endocrine system (complex network)
  },
  {
    title: "Children ultrasound of joints",
    cost: 4500,
    category: "diagnosis",
    icon: Bone, // Joint imaging
  },
  {
    title: "Children gynecological ultrasound",
    cost: 3500,
    category: "diagnosis",
    icon: Flower2, // Gynecological care
  },
  {
    title: "Children neurosonography",
    cost: 4000,
    category: "diagnosis",
    icon: Brain, // Brain ultrasound
  },
  {
    title: "Children ultrasound of the scrotum",
    cost: 4000,
    category: "diagnosis",
    icon: TestTube, // Urological/reproductive imaging
  },
  {
    title: "Children ultrasound Doppler of renal vessels",
    cost: 6000,
    category: "diagnosis",
    icon: Waves, // Doppler = blood flow waves
  },
  {
    title: "Adults ultrasound of veins",
    cost: 6000,
    category: "diagnosis",
    icon: Heart, // Vascular imaging
  },
  {
    title: "Adults ultrasound of the brachiocephalic trunk",
    cost: 6000,
    category: "diagnosis",
    icon: Heart, // Major blood vessel imaging
  },
  {
    title: "Adults ultrasound doppler of the renal arteries",
    cost: 6000,
    category: "diagnosis",
    icon: Waves, // Doppler blood flow
  },
  {
    title: "Adults echocardiography",
    cost: 7000,
    category: "diagnosis",
    icon: Waves, // Heart echo
  },
  {
    title: "Adults ultrasound of the pelvic cavities",
    cost: 4000,
    category: "diagnosis",
    icon: Scan, // Pelvic imaging
  },
  {
    title: "Adults holter ECG monitoring",
    cost: 8500,
    category: "diagnosis",
    icon: Monitor, // Continuous heart monitoring
  },
  {
    title: "Adults 24-hour blood pressure monitoring",
    cost: 7500,
    category: "diagnosis",
    icon: Gauge, // Blood pressure monitoring
  },
  {
    title: "Adults OBP ultrasound",
    cost: 6000,
    category: "diagnosis",
    icon: Scan, // General ultrasound
  },
  {
    title: "Aduls ultrasound of soft tissues/lymph nodes",
    cost: 5000,
    category: "diagnosis",
    icon: Users, // Lymphatic system
  },
  {
    title: "Adults ultrasound of joints",
    cost: 4500,
    category: "diagnosis",
    icon: Bone, // Joint imaging
  },
  {
    title: "Adults thyroid ultrasound",
    cost: 4000,
    category: "diagnosis",
    icon: CircuitBoard, // Thyroid/endocrine
  },
  {
    title: "Adults ultrasound of the scrotum",
    cost: 4500,
    category: "diagnosis",
    icon: TestTube, // Urological imaging
  },
  {
    title: "Adults ultrasound of the mammary glands",
    cost: 6000,
    category: "diagnosis",
    icon: ShieldCheck, // Breast screening/health check
  },
  {
    title: "Adults ultrasound Doppler of arteries",
    cost: 6000,
    category: "diagnosis",
    icon: Waves, // Doppler blood flow
  },
];

export default costs;
