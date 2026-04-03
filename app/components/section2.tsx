"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Section2() {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mainRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(mainRef.current.querySelectorAll(".card"), {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: 2,
      },
    });
  }, []);
  return (
    <section>
      <div
        ref={mainRef}
        className="flex  overflow-x-auto no-scrollbar main flex-row px-20 bg-white items-center justify-between text-black gap-5 py-10"
      >
        <div className="flex card  flex-col flex-nowrap gap-5">
          <div className="relative w-[180px] h-[180px] flex items-center justify-center cursor-pointer hover:scale-115 transition-all duration-300">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-400 animate-spinSlow"></div>
            <div className="absolute inset-2 rounded-full bg-white z-0"></div>
            <img
              src="/Pendle-Farm-Kitchen-and-Dining-Plus-Bifolds-scaled.webp"
              className="relative z-10 w-full h-full object-cover rounded-full p-3"
            />
          </div>
          <div>
            <a
              href="#"
              className="uppercase text-black flex font-semibold justify-center"
            >
              inside your homes
            </a>
          </div>
        </div>
        <div className="flex card flex-col flex-nowrap gap-5">
          <div className="relative w-[180px] h-[180px] flex items-center justify-center cursor-pointer hover:scale-115 transition-all duration-300">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-400 animate-spinSlow"></div>
            <div className="absolute inset-2 rounded-full bg-white z-0"></div>
            <img
              src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FJess-Marketing-Lounge-scaled.jpeg&w=1920&q=75"
              className="relative z-10 w-full h-full object-cover rounded-full p-3"
            />
          </div>
          <div>
            <a
              href="#"
              className="uppercase text-black flex font-semibold justify-center"
            >
              your buying journey
            </a>
          </div>
        </div>
        <div className="flex card flex-col flex-nowrap gap-5">
          <div className="relative w-[180px] h-[180px] flex items-center justify-center cursor-pointer hover:scale-115 transition-all duration-300">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-400 animate-spinSlow"></div>
            <div className="absolute inset-2 rounded-full bg-white z-0"></div>
            <img
              src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F11%2FTabitha-Jackson-Owens-Quay-Bingley-Case-Study-32.jpg&w=1920&q=75"
              className="relative z-10 w-full h-full object-cover rounded-full p-3"
            />
          </div>
          <div>
            <a
              href="#"
              className="uppercase text-black flex font-semibold justify-center"
            >
              homeowner stories
            </a>
          </div>
        </div>
        <div className="flex card flex-col flex-nowrap gap-5">
          <div className="relative w-[180px] h-[180px] flex items-center justify-center cursor-pointer hover:scale-115 transition-all duration-300">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-400 animate-spinSlow"></div>
            <div className="absolute inset-2 rounded-full bg-white z-0"></div>
            <img
              src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FTeam-Managers-scaled.jpg&w=1920&q=75"
              className="relative z-10 w-full h-full object-cover rounded-full p-3"
            />
          </div>
          <div>
            <a
              href="#"
              className="uppercase text-black flex font-semibold justify-center"
            >
              our family
            </a>
          </div>
        </div>
        <div className="flex card flex-col flex-nowrap gap-5">
          <div className="relative w-[180px] h-[180px] flex items-center justify-center cursor-pointer hover:scale-115 transition-all duration-300">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-400 animate-spinSlow"></div>
            <div className="absolute inset-2 rounded-full bg-white z-0"></div>
            <img
              src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FSarah-and-Caroline-Dry-Stone-Wall-Double-Chin-Small-scaled.jpg&w=1920&q=75"
              className="relative z-10 w-full h-full object-cover rounded-full p-3"
            />
          </div>
          <div>
            <a
              href="#"
              className="uppercase text-black flex font-semibold justify-center"
            >
              our purpose
            </a>
          </div>
        </div>
        <div className="flex card flex-col flex-nowrap gap-5 ">
          <div className="relative w-[180px] h-[180px] flex items-center justify-center cursor-pointer hover:scale-115 transition-all duration-300">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-400 animate-spinSlow"></div>
            <div className="absolute inset-2 rounded-full bg-white z-0"></div>
            <img
              src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2025%2F10%2FYorkshire-Post-Awards-Nov-2024-3-scaled.jpeg&w=1920&q=75"
              className="relative z-10 w-full h-full object-cover rounded-full p-3"
            />
          </div>
          <div>
            <a
              href="#"
              className="uppercase text-center text-black flex font-semibold justify-center"
            >
              awards & recognition
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
