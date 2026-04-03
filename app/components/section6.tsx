"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Section6() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".img-zoom", {
        scale: 0.7,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse",
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 0%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(".overlay-text-left", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(
          ".overlay-text-right",
          {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.7",
        )
        .from(
          ".para",
          {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.6",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#c7c0b3] min-h-screen py-10 md:py-20 px-4 md:px-10 w-full"
    >
      <div className="flex flex-col gap-5">
        <div className="uppercase text-black text-xs md:text-sm tracking-wider">
          homeowner stories
        </div>
        <span className="border-b border-black/20 w-full"></span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6 lg:gap-10">
        <div className="group relative overflow-hidden w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[650px] lg:h-[800px]">
          <img
            className="img-zoom w-full h-full object-cover"
            src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2026%2F02%2FRos-Smith-Plot-1The-HartfordThe-Willows-Silsden-9-scaled.png&w=1920&q=75"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90"></div>
          <div className="overlay-text-left absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
              Ruth & Alistair
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm tracking-widest mt-2">
              THE BLENHEIM, WORSTHORNE
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="group relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[560px] overflow-hidden">
            <img
              src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2026%2F01%2FAlistar-Ruth-Plot-4-The-Blenhiem-Pendle-Farm-Kitchen-1.jpg&w=1920&q=75"
              alt="image"
              className="img-zoom w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90"></div>
            <div className="overlay-text-right absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                Ruth & Alistair
              </h1>
              <p className="text-[10px] sm:text-xs md:text-sm tracking-widest mt-2">
                THE BLENHEIM, WORSTHORNE
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <p className="para text-base sm:text-lg md:text-xl lg:text-2xl text-right font-mono text-black">
              “Every family becomes part of our story. Here they share theirs,
              from the first days of moving in, to a lifetime of memories made
              within the walls of a Verity & Co home.”
            </p>

            <div className="w-full flex justify-end">
              <button className="text-black text-xs md:text-sm px-5 md:px-6 py-2 md:py-3 transition-all duration-300 border border-black bg-transparent hover:text-white hover:bg-black cursor-pointer uppercase">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
