"use client";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Section7() {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mainRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    (gsap.from(mainRef.current.querySelectorAll(".image"), {
      opacity: 0,
      scale: 0,
      duration: 1,
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    }),
      gsap.from(mainRef.current.querySelector(".text"), {
        y: 100,
        opacity: 0,
        duration: 1,
        delay:1,
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top 50%",
          toggleActions: "play reverse play reverse",
        },
      }));
  });
  return (
    <section
      ref={mainRef}
      className="bg-[#f5f2ed] min-h-screen py-10 md:py-20 px-4 md:px-10 w-full "
    >
      <div className="flex flex-col lg:flex-row justify-between mt-10 gap-6 lg:gap-10">
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="group image relative w-full h-[280px] sm:h-[350px] md:h-[450px] lg:h-[560px] overflow-hidden">
            <img
              src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FTeam-Sarah-Jess-Tom-John-scaled.jpeg&w=1920&q=75"
              alt="image"
              className="img-zoom w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text text gap-5">
            <span className="uppercase text-gray-500 ">
              Family built, with heart.
            </span>
            <p className="para text-base sm:text-lg md:text-xl lg:text-2xl text-left font-mono text-black">
              Behind every home is a team who care deeply about what they do,
              from those that have been with us for years, carrying the same
              craft, consistency, and attention that our founder, Brian believed
              in, to those ensuring we keep evolving for the future.
            </p>
          </div>
        </div>
        <div className="group image relative overflow-hidden w-full lg:w-1/2 h-[400px] sm:h-[500px] md:h-[650px] lg:h-[800px]">
          <img
            className="img-zoom w-full h-full object-cover"
            src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FVerity-Co-Jess-and-Tom-looking-out-scaled.jpeg&w=1920&q=75"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
