"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Cards1 from "./cards1";
export default function Section8() {
  const properties = [
    {
      image:
        "https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FTeam-Managers-scaled.jpg&w=1920&q=75",
      title: "Family built,  with heart.",
      desc: "We care for people, our colleagues, our customers and our community, putting the same attention into every decision that we do into our homes.",
    },
    {
      image:
        "https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FTeam-Caroline-Mya-Grosvenor-Railing-Backs-scaled.jpeg&w=1080&q=75",
      title: "Tomorrow in mind, today in focus.",
      desc: "We evolve with purpose, keeping what works, improving what doesn’t, and building homes for the lives of today and tomorrow.",
    },
    {
      image:
        "https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FSarah-Natural-Random-Stone-Pendle-Farm-scaled.jpeg&w=1080&q=75",
      title: "Inspired by tradition, defined by quality.",
      desc: "From thoughtful design to lasting materials, we take pride in doing things properly, creating homes where quality shines.",
    },
  ];
  const mainref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mainref.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(mainref.current.querySelectorAll(".images"), {
      scale: 0,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: mainref.current,
        start: "top 20%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <section
      ref={mainref}
      className="bg-[#f5f2ed] py-16 md:py-24 px-4 md:px-12 w-full"
    >
      <div className="flex flex-col gap-4 mb-10">
        <div className="uppercase text-black text-md  tracking-widest">
          our values
        </div>
        <span className="border-b border-black/20 w-full"></span>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {properties.map((item, index) => (
          <Cards1 key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
