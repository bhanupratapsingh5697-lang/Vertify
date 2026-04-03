"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Section10() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const leftRef = useRef<HTMLDivElement>(null);
  const rightTopRef = useRef<HTMLDivElement>(null);
  const rightMiddleRef = useRef<HTMLDivElement>(null);
  const rightBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "restart reverse restart reverse",
        },
      });

      // Step 1: Left + Right Top
      tl.from([leftRef.current, rightTopRef.current], {
        scale: 0,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      // Step 2: Right middle
      tl.from(rightMiddleRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      // Step 3: Right bottom
      tl.from(rightBottomRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      // Step 4: Text animation
      tl.from(
        ".bottomText",
        {
          y: 40,
          opacity: 0,
          duration: 0.5,
          stagger: 0.2,
        },
        "-=0.3",
      );
    }, sectionRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#1a1a18] py-10 md:py-20 px-4 md:px-10 overflow-hidden"
    >
      <div className="flex flex-col gap-6">
        <span className="uppercase text-white tracking-wider text-sm md:text-base">
          from the journal
        </span>
        <div className="w-full border-b border-white/40"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        <div
          ref={leftRef}
          className="flex flex-col gap-4 lg:w-2/3 lg:border-r border-white/20 lg:pr-8"
        >
          <img
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover"
            src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2026%2F03%2FCroft-Bedroom--scaled.jpg&w=1920&q=75"
            alt="home"
          />

          <div className="bottomText">
            <span className="text-white/40 uppercase text-xs md:text-sm">
              1 April 2026
            </span>
            <p className="text-xl sm:text-3xl md:text-5xl lg:text-6xl uppercase text-white/70 leading-tight">
              A different kind of home: The final barns at Pendle Farm
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:w-1/3">
          <div ref={rightTopRef} className="flex flex-col gap-3">
            <img
              className="w-full border border-white/30 p-2 object-cover"
              src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F12%2FMeeting-Sarah-and-Rob-Marketing-Lounge.jpg&w=640&q=75"
              alt="journal"
            />
            <div className="bottomText">
              <span className="uppercase text-xs text-white/50">
                27 March 2026
              </span>
              <p className="text-white/60 text-sm md:text-lg font-medium">
                The math no one is talking about...
              </p>
            </div>
          </div>

          <div ref={rightMiddleRef} className="flex flex-col gap-3">
            <img
              className="w-full border border-white/30 p-2 object-cover"
              src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2026%2F03%2FPlot-49-The-Elliot-The-Oaks-Show-Home-Wilman-Front-External-EDITED.jpg&w=640&q=75"
              alt="home"
            />
            <div className="bottomText ">
              <span className="uppercase text-xs text-white/50">
                16 March 2026
              </span>
              <p className="text-white/60 text-sm md:text-lg font-medium">
                The Elliot Show Home Now Open at The Oaks, Skipton
              </p>
            </div>
            <div className="flex w-full mt-10 justify-end">
              <button className="bg-transparent border hover:text-black hover:bg-white  transition-all duration-500 border-white  w-fit  items-end text-end  justify-end flex   flex  uppercase text-white tracking-wide px-4 py-2 ">
                learn more
              </button>
            </div>
          </div>

          <div ref={rightBottomRef} className="bottomText">
            <p className="text-white/50 hidden text-sm md:text-base">
              Discover more stories from our latest developments and insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
