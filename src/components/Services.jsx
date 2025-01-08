import { HoverEffect } from "../components/ui/card-hover-effect";
import img1 from "../assets/brain.png"
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <h1 className="text-6xl font-extrabold font-serif mt-10 text-black justify-center justify-items-center">Our Services</h1>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Trigger",
    description:
      "A Centralised Interaction System for Facilitating Communication and Collaboration between Entities.",
    link: "/about",
    Img:{img1}
  },
  {
    title: "Socializer",
    description:
      "Socializers are individuals who enjoy connecting with others and building relationships online.",
    link: "/socializer",
  },
  {
    title: "Researcher",
    description:
      "A Researcher is a person who collects, analyzes, and interprets data in order to advance knowledge or solve problems.",
    link: "/researcher",
  },
  {
    title: "Investor",
    description:
      "This platform is the ideal solution for identifying and connecting with promising researchers and innovators.",
    link: "/investor",
  },
  {
    title: "Events",
    description:
      "We will continuously organize events to engage users in adding data to the platform, which can be further used to calibrate our search engine's accuracy.",
    link: "/events",
  },
  {
    title: "Products",
    description:
      "Thinkers Platform offers three distinct user profiles: Researcher, Investor, and Socializer. Each profile has access to a unique set of tools and features tailored to their specific needs.",
    link: "/products",
  },
];
