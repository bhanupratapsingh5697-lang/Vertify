"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Cards from "./cards";

const properties = [
  {
    image:
      "https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2026%2F03%2FPlot-49-The-Elliot-The-Oaks-Show-Home-Wilman-Front-External-EDITED.jpg&w=1920&q=75",
    title: "The Elliot",
    number: "No. 45",
    location: "The Oaks, Skipton",
    price: "£400,000",
    beds: 3,
    baths: 2,
    button: "SHOW HOME STYLE",
    button1: "SMOOTH MOVE HOME",
  },
  {
    image:
      "https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2026%2F03%2FLiving-Room-The-Croft-Pendle-Farm-scaled.jpg&w=1920&q=75",
    title: "The Aspen",
    number: "No. 12",
    location: "Green Park, London",
    price: "£520,000",
    beds: 4,
    baths: 3,
    button: "NOW RELEASED!",
  },
  {
    image:
      "https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FThe-Earnshaw.jpg&w=1920&q=75",
    title: "The Maple",
    number: "No. 78",
    location: "Sunset Villas",
    price: "£350,000",
    beds: 2,
    baths: 1,
    button: "SMOOTH MOVE HOME",
  },
];

export default function Section5() {
  const mainref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mainref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(mainref.current.querySelectorAll(".cards"), {
      opacity: 0,
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: mainref.current,
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });
  });
  return (
    <section
      ref={mainref}
      className="min-h-screen  py-10 md:py-20 px-4 md:px-10 bg-[#f5f2ed] w-full"
    >
      <div className="flex flex-col gap-6 mb-10">
        <span className="uppercase text-gray-500 font-semibold tracking-wide">
          homes of the month
        </span>
        <span className="border-b border-black/20 w-full"></span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {properties.map((item, index) => (
          <Cards key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
