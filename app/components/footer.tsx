"use client";
import { useState } from "react";
import { Great_Vibes } from "next/font/google";
import { ChevronRight, Music } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Footer() {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = () => {
    if (!email) {
      setError("⚠️ Please enter your email");
      return;
    }

    if (!isValidEmail(email)) {
      setError("⚠️ Please enter a valid email");
      return;
    }

    if (!checked) {
      setError("⚠️ Please accept Privacy & Cookie Policy");
      return;
    }

    setError("");
    alert("Form Submitted 🚀");
  };

  return (
    <section className="bg-[#191918] w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12">
      <div className="grid md:grid-cols-3 gap-10">
        {/* COLUMN 1 */}
        <div className="flex flex-col gap-5">
          <span
            className={`${greatVibes.className} text-white/80 text-4xl border-b border-white/50`}
          >
            Quick links
          </span>

          <ul className="flex flex-col gap-2">
            {[
              "homes of the month",
              "saved homes",
              "your buying journey",
              "our purpose",
              "join our family",
              "land to sell",
            ].map((item, i) => (
              <li
                key={i}
                className="uppercase text-white/70 text-md cursor-pointer relative inline-block w-fit group hover:text-white transition"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[1.5px] w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* COLUMN 2 */}
        <div className="flex flex-col gap-5">
          <span
            className={`${greatVibes.className} text-white/80 text-4xl border-b border-white/50`}
          >
            Get in touch
          </span>

          <div className="flex flex-col gap-3 text-white">
            <span className="uppercase w-fit tracking-wider relative inline-block group cursor-pointer">
              say hello
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </span>

            <span className="relative w-fit inline-block group cursor-pointer">
              01535 639 620
              <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </span>
          </div>

          <ul className="flex flex-col gap-1">
            <li className="uppercase text-white/70 text-sm">
              Verity & Co. Homes Ltd
            </li>
            <li className="uppercase text-white/70 text-sm">Riparian Court</li>
            <li className="uppercase text-white/70 text-sm">Riparian Way</li>
            <li className="uppercase text-white/70 text-sm">Cross Hills</li>
            <li className="uppercase text-white/70 text-sm">West Yorkshire</li>
            <li className="uppercase text-white/70 text-sm">BD20 7BW</li>
          </ul>
        </div>

        {/* COLUMN 3 */}
        <div className="flex flex-col gap-5">
          <span className={`${greatVibes.className} text-white/80 text-4xl`}>
            stay up to date
          </span>

          <div className="flex items-center border border-white/30 px-4 py-3 focus-within:border-white transition">
            <input
              type="email"
              placeholder="Email address.."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent w-full outline-none text-white placeholder:text-white/60"
            />

            <button
              onClick={handleSubmit}
              className="ml-3 text-white hover:translate-x-1 transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="w-8 h-8 accent-white cursor-pointer"
            />

            <p className="text-sm text-white/80 leading-relaxed">
              I confirm I have read and understood the{" "}
              <span className="underline cursor-pointer hover:text-white">
                Privacy Policy
              </span>{" "}
              &{" "}
              <span className="underline cursor-pointer hover:text-white">
                Cookie Policy
              </span>
              , and I agree to the{" "}
              <span className="underline cursor-pointer hover:text-white">
                Terms
              </span>
              .
            </p>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex gap-5 mt-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
              <FaFacebook size={18} />
            </div>

            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
              <FaInstagram size={18} />
            </div>

            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
              <FaTiktok size={16} />
            </div>

            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer">
              <Music size={18} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
