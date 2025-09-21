"use client";

import { Icon } from "@iconify/react";

export default function Navigation() {
  const dataNavs = [
    { title: "Home", icon: "line-md:home", id: "home" },
    { title: "Couple", icon: "mdi:ring", id: "couple" },
    { title: "Event", icon: "uis:schedule", id: "event" },
    { title: "RSVP", icon: "material-symbols-light:chat", id: "rsvp" },
    { title: "Gift", icon: "mdi:present", id: "gift" },
  ];

  const scrollToElement = (elementId: string) => {
    if (typeof window !== "undefined") { // Ensure client-side execution
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="w-max-[500px] md:w-[500px] mx-auto fixed border-t-2 bg-black bottom-0 inset-x-0 flex text-xss z-40 rounded-t-2xl shadow-xl items-center justify-center py-1">
      <div className="w-full focus:outline-none flex py-2 text-center group items-center justify-evenly">
        {dataNavs.map((data, idx) => (
          <button
            onClick={() => scrollToElement(data.id)}
            key={idx}
            className="flex items-center justify-center flex-col"
          >
            <Icon icon={data.icon} className="text-4xl text-white" />
            {/* Uncomment if you want to show the title */}
            {/* <p className="text-sm text-white">{data.title}</p> */}
          </button>
        ))}
      </div>
    </nav>
  );
}
