"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Section() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mainRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    gsap.from(mainRef.current.querySelectorAll(".image"), {
      scale: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 60%",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.from(mainRef.current.querySelectorAll(".content"), {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <section
      ref={mainRef}
      className="min-h-screen py-10 md:py-20 px-4 md:px-10 bg-[#f5f2ed] flex md:flex-row flex-col gap-10 md:gap-20 w-full"
    >
      <div className="border image border-black border-opacity-50 p-2 w-fit ">
        <img
          className="w-full h-full "
          src="https://www.verityandcohomes.com/_next/image/?url=https%3A%2F%2Fcms.verityandcohomes.com%2Fwp-content%2Fuploads%2F2026%2F02%2FSmooth-Move-website-Image-2.jpg&w=1920&q=75"
          alt=""
        />
      </div>
      <div className="flex content flex-col w-full md:w-1/2 gap-5">
        <a
          href="#"
          className="items-start text-start uppercase text-sm tracking-[3px] opacity-90  "
        >
          introducing smooth move
        </a>
        <p>
          Our <span className="font-bold">Smooth Move Package</span> has been
          created to ease that pressure — helping you focus on your new
          beginning, not the upfront expenses.
        </p>
        <p>
          If you’re ready to complete{" "}
          <span className="font-bold">within 8 weeks,</span> we’ll contribute
          towards the costs that matter most, so you can step into your new home
          feeling prepared, not stretched.
        </p>
        <span className="text-2xl font-semibold">What’s included?</span>
        <p>
          <span className="font-bold text-lg">Stamp Duty</span> – a contribution
          towards your stamp duty liability (value is plot-specific and capped
          at an agreed maximum per home).
        </p>
        <p>
          <span className="font-bold text-lg">£1,500 towards removals</span> –
          provided exclusively via our chosen removals partner,
          <span className="underline decoration-dashed  decoration-black/50 underline-offset-4 cursor-pointer hover:text-gray-500 transition-all duration-300">
            Yorkshire Rhodes,
          </span>
          in the form of a gift voucher.
        </p>
        <p>
          <span className="font-bold text-lg">£1,500 Towards legal fees</span> –
          To support your conveyancing costs.
        </p>
        <p>
          <span className="font-bold text-lg"> £500 Towards mortgage fees</span>
          – Helping cover lender application and valuation charges.
        </p>
        <a
          href="#"
          className="underline decoration-dashed decoratiom-blacck/50 tracking-wide underline-offset-4 hover:text-gray-500"
        >
          T&C'S APPLY
        </a>
        <button className="bg-transparent text-black py-2 px-6 cursor-pointer border border-black w-fit hover:bg-black hover:text-white transition-all duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
}
