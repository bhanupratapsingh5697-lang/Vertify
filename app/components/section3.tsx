"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Borel, Pacifico } from "next/font/google";

const borel = Borel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Section3() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(mainRef.current.querySelectorAll(".main"), {
      y: 80,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <section
      ref={mainRef}
      className="min-h-screen py-10 md:py-20 px-4 md:px-10 bg-[#f5f2ed] flex flex-col md:flex-row gap-10 md:gap-20"
    >
      {/* LEFT IMAGE */}
      <div className="w-full md:w-1/3 main relative border border-black/50 p-2">
        <img
          className="w-full h-[250px] sm:h-[320px] md:h-[500px] object-cover"
          src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FTeam-Managers-scaled.jpg&w=1920&q=75"
          alt=""
        />

        <img
          className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 bg-white p-1 w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 object-cover"
          src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FSarah-Talking-to-Rob-Portait-scaled.jpg&w=1920&q=75"
          alt=""
        />
      </div>

      {/* TEXT */}
      <div className="flex main flex-col gap-4 md:gap-5 w-full md:w-1/3 text-center md:text-left">
        <span className="uppercase text-gray-600 tracking-wide text-xs sm:text-sm md:text-base">
          family built, with hearts
        </span>

        <p className={`${pacifico.className} text-base sm:text-lg md:text-2xl text-black leading-relaxed`}>
          “For generations, homebuilding has been part of our family story.
          Founded in Yorkshire in 1986 by Brian Verity as Skipton Properties,
          and now led by his daughters and the team beside them, we create new
          homes across Yorkshire and Lancashire with care and character. Each
          development is shaped to belong, thoughtful communities built to last,
          rooted in craftsmanship and a sense of place.”
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-1/3 main relative flex justify-center md:block">
        <img
          className="w-40 h-56 sm:w-52 sm:h-72 md:w-72 md:h-96 object-cover md:absolute md:bottom-0 md:right-0"
          src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FSarah-and-Caroline-Pendle-Farm-Grosvenor-Random-Stone-External-scaled.jpeg&w=1920&q=75"
          alt=""
        />
      </div>
    </section>
  );
}