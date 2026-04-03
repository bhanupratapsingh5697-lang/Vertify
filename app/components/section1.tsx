"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Section1() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(mainRef.current.querySelectorAll("h2, .last"), {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.4,
    });
  }, []);

  return (
    <div className="relative w-full h-screen">
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        src="/Verity-Co-Launch-Video-20-s-no-sound-v3.mp4"
      ></video>
      <div
        ref={mainRef}
        className="absolute inset-0 flex flex-col items-center justify-end gap-6 
        px-4 sm:px-6 md:px-10 pb-10 sm:pb-16 md:pb-20"
      >
        <a
          href="#"
          className="uppercase text-white text-center 
          text-xs sm:text-sm md:text-base lg:text-lg 
          tracking-wide sm:tracking-wider 
          max-w-xl"
        >
          crafted with care. designed to last.
        </a>
        <h2
          className="uppercase text-center 
          text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl 
          font-mono font-bold tracking-tight text-white 
          max-w-3xl leading-snug"
        >
          A family builder, crafting homes with heart.
        </h2>
        <div
          className="flex flex-col last sm:flex-row items-center justify-center 
          w-full sm:w-[90%] md:w-[70%] lg:w-1/2 
          bg-white overflow-hidden rounded-md"
        >
          <input type="text"
            placeholder="Search by Postcode or area"
            className="w-full p-3 sm:p-4 outline-none text-sm"/>

          <button
            className="w-full sm:w-auto px-6 py-3 sm:py-4 uppercase 
            bg-[#bead8b] hover:bg-black hover:text-white 
            text-black transition-all duration-300 text-sm"
          >
            find your home
          </button>
        </div>
      </div>
    </div>
  );
}
