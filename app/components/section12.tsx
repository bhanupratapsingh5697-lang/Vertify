"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import gsap from "gsap";

export default function Section12() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const handleHover = (e: any) => {
    gsap.to(e.currentTarget, {
      x: 8,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = (e: any) => {
    gsap.to(e.currentTarget, {
      x: 0,
      duration: 0.3,
    });
  };

  const handleSubmit = () => {
    if (!checked) {
      setError(" Please accept Privacy & Cookie Policy");
      return;
    }

    if (!email) {
      setError(" Please enter your email");
      return;
    }

    setError("");
    alert("Sucessfully submitted ");
  };

  return (
    <section className="bg-white w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 py-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black max-w-xl leading-tight">
          Stay up to date with Verity & Co. Homes
        </h2>

        <div className="flex flex-col gap-4 w-full md:max-w-md">
          <div className="flex items-center border border-black/50 focus-within:border-black transition">
            <input
              className="px-4 py-3 w-full outline-none"
              type="email"
              placeholder="Email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              onClick={handleSubmit}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
              className="p-3 flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex gap-3 items-start">
            <input
              type="checkbox"
              className="mt-1 w-5 h-5"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />

            <p className="text-sm text-black/70 leading-relaxed">
              I confirm I have read and understood the{" "}
              <span className="underline cursor-pointer">Privacy Policy</span> &{" "}
              <span className="underline cursor-pointer">Cookie Policy</span>,
              and I agree to the terms.
            </p>
          </div>

          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
      </div>
    </section>
  );
}
