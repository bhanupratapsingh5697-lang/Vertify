"use client";
import { House, HousePlus, MapPin } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Section() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".card",
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cards-wrapper",
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      },
    );
  }, []);

  return (
    <section className="bg-[#f4f1ed] w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
      <div className="flex flex-col gap-4 text-center md:text-left">
        <span className="uppercase text-black/60 tracking-wider text-sm sm:text-base">
          Our values
        </span>
        <span className="border-b border-black/30 w-full mx-auto md:mx-0"></span>
      </div>

      <div className="cards-wrapper grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 md:mt-16">
        <div className="card flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="w-16 sm:w-20 rounded-full bg-white flex py-4 sm:py-5 justify-center">
            <House size={32} className="sm:w-10 sm:h-10" strokeWidth={1.8} />
          </div>
          <div className="font-medium font-serif text-2xl sm:text-3xl md:text-4xl">
            Simplemove
          </div>
          <p className="text-black/50 text-sm sm:text-base max-w-sm">
            SimpleMove makes selling your current home easier, with trusted
            support, less stress and a smoother move into your new Verity & Co
            home.
          </p>
        </div>

        <div className="card flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="w-16 sm:w-20 rounded-full bg-white flex py-4 sm:py-5 justify-center">
            <MapPin size={32} className="sm:w-10 sm:h-10" strokeWidth={1.8} />
          </div>
          <div className="font-medium font-serif text-2xl sm:text-3xl md:text-4xl">
            Part exchange
          </div>
          <p className="text-black/50 text-sm sm:text-base max-w-sm">
            With Part Exchange, we buy your current home, saving you time, fees,
            and uncertainty, making your move to a new one simpler.
          </p>
        </div>

        <div className="card flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="w-16 sm:w-20 rounded-full bg-white flex py-4 sm:py-5 justify-center">
            <HousePlus
              size={32}
              className="sm:w-10 sm:h-10"
              strokeWidth={1.8}
            />
          </div>
          <div className="font-medium font-serif text-2xl sm:text-3xl md:text-4xl">
            Mortgage advice
          </div>
          <p className="text-black/50 text-sm sm:text-base max-w-sm">
            Through our partners at the Mortgage Advice Bureau, you’ll have
            access to expert guidance and thousands of mortgage products,
            tailored to new-build homes like ours.
          </p>
        </div>
      </div>
    </section>
  );
}
