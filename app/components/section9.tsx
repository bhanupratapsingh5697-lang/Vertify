"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Section9() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      imageRef.current,
      { scale: 1 },
      {
        scale: 1.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play reverse play reverse", // 🔥 important
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen relative overflow-hidden"
    >
      <img
        ref={imageRef}
        className="w-full h-full object-cover will-change-transform"
        src="/bg-x.webp"
        alt=""
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90"></div>

      <div
        ref={textRef}
        className="absolute w-full h-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-12 top-0 flex flex-col justify-end gap-3 sm:gap-4"
      >
        <span className="uppercase text-white text-xs sm:text-sm md:text-base font-medium tracking-wider">
          each one part of a family's story
        </span>

        <h2 className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl text-white leading-tight font-semibold">
          We’ve built almost <br />
          4000 homes in Yorkshire & <br />
          Lancashire
        </h2>
      </div>
    </section>
  );
}
