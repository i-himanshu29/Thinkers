
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function FloatingNavDemo() {
    const navItems = [
      {
        name: "Home",
        link: "/",
        icon: <IconHome className="h-4 w-4 bg-slate-950 rounded-lg text-white" />,
      },
      {
        name: "Trigger",
        link: "/trigger",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Socializer",
        link: "/socializer",
        icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Researcher",
        link: "/researcher",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Investor",
        link: "/investor",
        icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Events",
        link: "/events",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Product & Service",
        link: "/product-service",
        icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Teams",
        link: "/teams",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Registration",
        link: "/registration",
        icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Q&A",
        link: "/qa",
        icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Career",
        Link: "/career",
        icon: <IconMessage className="h-4 w-4 text-neutral-900 dark:text-white" />,
      },
    ];
    

  return (
    <div className="relative w-full  ">
      <FloatingNav navItems={navItems} className="hover:text-red-600 bg-richblack-200 " />
    </div>
  );
}

