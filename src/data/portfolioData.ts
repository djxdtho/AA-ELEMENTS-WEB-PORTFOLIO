export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Service {
  tier: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FitTrack - Fitness App",
    category: "Mobile App",
    description: "Production-ready iOS fitness tracking app with AI coach, workout tracking, analytics, and exercise library.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Swift", "SwiftUI", "Firebase"],
  },
  {
    id: 2,
    title: "KAY-FITS E-commerce",
    category: "E-commerce",
    description: "Modern e-commerce platform with shopping cart, checkout, product filters, and responsive design.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export const services: Service[] = [
  {
    tier: "Starter",
    price: "₦20,000",
    priceNote: "one-time",
    description: "Perfect for individuals and micro businesses who need a clean, functional presence online fast.",
    features: [
      "1–3 page static website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "Delivered in 3–5 days",
    ],
    highlighted: false,
  },
  {
    tier: "Professional",
    price: "₦50,000",
    priceNote: "one-time",
    description: "Ideal for growing brands and small businesses that need a polished, full-featured website.",
    features: [
      "Up to 7 custom pages",
      "Brand identity integration",
      "CMS / blog setup",
      "Performance optimized",
      "Advanced SEO",
      "3 rounds of revisions",
      "Delivered in 1–2 weeks",
    ],
    highlighted: true,
  },
  {
    tier: "Premium",
    price: "₦150,000",
    priceNote: "project-based",
    description: "Full-scale web solutions for businesses ready to invest in a high-impact digital experience.",
    features: [
      "Custom full-stack web app",
      "E-commerce / payment integration",
      "User authentication & dashboards",
      "Database design & management",
      "Analytics & performance tracking",
      "Unlimited revisions",
      "Ongoing support available",
    ],
    highlighted: false,
  },
];

export const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 88 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "Tailwind CSS", level: 92 },
  { name: "Supabase", level: 78 },
  { name: "UI/UX Design", level: 82 },
  { name: "Figma", level: 80 },
];
