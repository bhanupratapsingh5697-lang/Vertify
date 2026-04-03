"use client";
import { useState } from "react";
import { ChevronDown, Heart, Logs, X } from "lucide-react";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <Navbar
      fluid
      rounded
      className="navbar z-100 h-25 pt-6 transition-all duration-300 "
    >
      <NavbarBrand>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 136 50"
          className="header__image header__image--logo text-white "
          width="100"
        >
          <path
            fill="currentColor"
            d="m4.384 6.312 7.537 18.496h.652l6.34-16.61c2.609-6.783 3.37-7.58 5.073-7.725l.399-.037V.001h-7.682v.435l.762.037c1.521.072 1.92 1.124 1.92 2.575 0 1.523-.399 3.336-1.087 5.15l-4.746 12.476L7.79 6.057C6.014 1.597 5.724.544 7.717.472L8.66.435V.001H0v.435l.29.037c1.486.181 1.956.616 4.094 5.839M45.652 18.026c-1.666 5.078-3.695 5.948-7.391 5.948h-2.5c-1.595 0-1.704-.58-1.704-5.476v-6.383h2.066c1.666 0 3.478.217 4.276 3.118l.217.798h.326V7.762h-.326l-.218.798c-.797 2.901-2.608 3.119-4.275 3.119h-2.066v-5.73c0-4.897.11-5.477 1.703-5.477h1.776c3.37 0 5.978.58 7.392 4.86l.398 1.233h.327V.001H27.899v.435l.761.037c1.776.072 2.102.507 2.102 5.476v12.548c0 4.969-.327 5.404-2.102 5.477l-.761.036v.435h18.478v-7.652h-.326zM69.606 20.13c-.362-.617-1.304-2.249-1.92-3.228-1.522-2.358-3.116-3.482-6.559-4.425 1.704.035 3.225-.073 4.892-.69 2.427-.87 4.239-2.938 4.239-5.621C70.258 2.067 66.635 0 62.287 0H50.33v.435l.762.037c1.775.072 2.1.508 2.1 5.476v12.549c0 4.968-.326 5.403-2.1 5.476l-.762.036v.435h9.023v-.435l-.762-.036c-1.775-.073-2.1-.508-2.1-5.476v-6.021h2.21c2.463 0 3.442.725 5.507 4.316.652 1.124 1.74 3.3 2.464 4.642a60 60 0 0 1 1.521 3.01h6.015v-.434l-.652-.036c-1.34-.073-2.464-1.45-3.95-3.844M56.49 12.04V5.948c0-4.896.11-5.476 1.703-5.476h4.095c2.68 0 4.275 2.03 4.275 5.766 0 3.156-.833 5.803-5.036 5.803zM76.568.436l.761.037c1.776.072 2.101.507 2.101 5.476v12.548c0 4.969-.325 5.404-2.101 5.477l-.761.036v.435h9.022v-.435l-.761-.036c-1.776-.073-2.101-.508-2.101-5.477V5.95c0-4.969.326-5.404 2.1-5.476l.762-.037V.001h-9.022zM89.109 7.29h.326l.4-1.233C91.464 1.052 93.456.472 95.27.472h.797c1.594 0 1.703.508 1.703 5.404v12.62c0 4.97-.327 5.404-2.102 5.477l-.76.036v.435h9.021v-.435l-.762-.036c-1.775-.073-2.101-.508-2.101-5.476V5.877c0-4.897.109-5.404 1.703-5.404h.797c1.812 0 3.805.58 5.435 5.585l.399 1.233h.327V.001H89.111v7.29zM127.81 0v.436l.761.037c1.413.072 1.921 1.015 1.921 2.067 0 1.56-1.051 3.59-2.319 5.476l-2.681 4.062-3.587-5.911C119.369 1.96 118.644.58 120.746.473l.761-.037V.001h-8.95v.435l.652.037c1.486.072 2.246 1.233 5.181 5.875l4.058 6.384v5.766c0 4.969-.326 5.404-2.101 5.476l-.761.036v.435h9.021v-.435l-.761-.036c-1.776-.072-2.102-.507-2.102-5.476v-5.876l3.044-4.606c4.13-6.31 4.891-7.47 6.232-7.543l-.161-.037V.001zM24.874 49.998c-3.314-.023-5.508-2.201-5.485-5.862.044-5.345 3.403-10.33 8.798-10.33 1.232 0 2.418.291 3.224.763.493.292.739.629.739 1.123-.023.561-.18 1.257-.85 3.57h-.225c.18-2.762-.671-5.142-2.865-5.187-3.74-.09-6.09 6.872-6.112 11.117 0 2.605.94 4.492 2.91 4.514 2.037.067 3.65-1.662 4.97-4.626h.246c-.447 2.043-.626 2.74-.828 3.256-.29.719-.672.92-1.32 1.145-.986.382-2.016.54-3.202.517"
          ></path>
        </svg>
      </NavbarBrand>
      <div className="flex  md:order-2 group navText relative uppercase cursor-pointer">
        journel
        <span className=" absolute top-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full "></span>
      </div>
      <div className="flex w-auto navText flex-row gap-6 md:gap-10 items-center justify-center md:order-2">
        {/* HEART ICON */}
        <div>
          <Heart className="w-5 h-5 md:w-6 md:h-6 hidden lg:block text-black hover:fill-black hover:scale-110 transition-all duration-300 cursor-pointer" />
        </div>

        {/* MENU ICON */}
        <div className="relative">
          <Logs
            onClick={() => setOpen(true)}
            className="w-6 h-6 md:w-7 md:h-7 cursor-pointer hover:scale-90 transition"
          />

          {/* OVERLAY */}
          <div
            onClick={() => setOpen(false)}
            className={`fixed inset-0 bg-black/40 z-40 transition-all duration-300 ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          ></div>

          {/* DRAWER */}
          <div
            className={`fixed top-0 right-0 h-full w-full sm:w-[80%] md:w-[60%] lg:w-[40%] bg-[#f5f2ed] z-50 shadow-lg transform transition-transform duration-300 ${
              open ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* CLOSE BUTTON */}
            <div className="flex justify-end items-center p-4 md:p-5">
              <button onClick={() => setOpen(false)}>
                <X className="w-8 h-8 md:w-10 md:h-10 cursor-pointer text-black" />
              </button>
            </div>

            {/* MAIN LINKS */}
            <div className="py-6 md:py-10 text-black flex flex-col gap-4 px-6 md:px-10 text-2xl md:text-3xl lg:text-4xl font-serif border-b mx-4 md:mx-10">
              {[
                "Homes of the month",
                "Saved homes",
                "Our Homes Collection",
                "Land to Sell?",
                "Say hello",
              ].map((item, i) => (
                <a key={i} href="#" className="group relative w-fit">
                  {item}
                  <span className="absolute top-full left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* SECONDARY LINKS */}
            <div className="px-6 md:px-10 py-6 md:py-10 flex flex-col md:flex-row gap-6 md:gap-10 justify-between">
              {/* COLUMN 1 */}
              <div className="flex flex-col gap-3">
                {["our purposes", "the journal", "making it easier"].map(
                  (item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="text-xs md:text-sm group relative w-fit uppercase text-black/70"
                    >
                      {item}
                      <span className="absolute top-full left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  ),
                )}
              </div>

              {/* COLUMN 2 */}
              <div className="flex flex-col gap-3">
                {[
                  "your buying journal",
                  "inside our homes",
                  "communities we've built",
                ].map((item, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-xs md:text-sm group relative w-fit uppercase text-black/70"
                  >
                    {item}
                    <span className="absolute top-full left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="px-6 md:px-10 pb-6 flex gap-4">
              <i className="ri-facebook-circle-fill text-2xl md:text-3xl cursor-pointer hover:opacity-30 transition"></i>
              <i className="ri-instagram-fill text-2xl md:text-3xl cursor-pointer hover:opacity-30 transition"></i>
              <i className="ri-tiktok-fill text-2xl md:text-3xl cursor-pointer hover:opacity-30 transition"></i>
              <i className="ri-youtube-fill text-2xl md:text-3xl cursor-pointer hover:opacity-30 transition"></i>
            </div>
          </div>
        </div>
      </div>
      <NavbarCollapse>
        <NavbarLink
          className="navText  uppercase flex flex-row gap-3 flex-nowrap items-center justify-center group relative"
          href="#"
        >
          Find Your Home
          <span className="absolute top-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </NavbarLink>
        <NavbarLink
          className="navText  uppercase flex flex-row gap-3 flex-nowrap items-center justify-center group relative"
          href="#"
        >
          your buying journey
          <ChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
          <span className="absolute top-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </NavbarLink>
        <NavbarLink
          className="navText  uppercase flex flex-row gap-3 flex-nowrap items-center justify-center group relative"
          href="#"
        >
          our purposes
          <ChevronDown className="transition-transform duration-300 group-hover:rotate-180" />
          <span className="absolute top-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
