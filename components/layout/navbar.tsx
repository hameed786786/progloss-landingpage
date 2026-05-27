"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Why Progloss", href: "#" },
  { label: "How it works", href: "#" },
  { label: "Plans", href: "#" },
  { label: "Services", href: "#" },
  { label: "Coverage", href: "#" },
  { label: "FAQ", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-[112px] bg-white">
        <div className="relative w-full h-full max-w-[1440px]">

          {/* DESKTOP LOGO */}
          <Link
            href="/"
            className="absolute left-[78px] top-1/2 -translate-y-1/2 hidden md:block"
          >
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={82}
              height={60}
              className="w-[82px] h-auto object-contain"
            />
          </Link>

          {/* MOBILE LOGO */}
          <Link
            href="/"
            className="absolute left-[16px] top-[34px] block md:hidden z-[120]"
          >
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={46}
              height={34}
              className="w-[46px] h-auto object-contain"
            />
          </Link>

          {/* CENTER NAV */}
          <div
            className="
              w-[607px]
              h-[68px]
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2

              flex
              items-center
              justify-center
              gap-[34px]

              rounded-full
              bg-[#D9D9D933]
              px-[32px]

              hidden
              md:flex
            "
          >
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="
                  whitespace-nowrap
                  text-[16px]
                  font-[400]
                  leading-none
                  text-[#5E5E5E]
                  transition-colors
                  duration-200
                  hover:text-black
                "
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* DOWNLOAD BUTTON */}
          <button
            className="
              group

              w-[210px]
              h-[54px]

              absolute
              right-[10px]
              top-1/2
              -translate-y-1/2

              flex
              items-center

              rounded-full
              border
              border-[#E7E7E7]

              bg-white

              shadow-[0px_1px_7px_0px_#00000029]

              transition-all
              duration-300
              hover:scale-[1.01]

              hidden
              md:flex
            "
          >
            <span
              className="
                flex-1

                whitespace-nowrap

                text-[16px]
                font-[600]
                leading-none
                tracking-normal
                align-middle
                text-black
              "
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Download app
            </span>

            <div
              className="
                relative
                right-[4px]
                h-[46px]
                w-[46px]
                rounded-full
                bg-black

                transition-transform
                duration-300
              "
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                <path
                  d="M9 5L16 12L9 19"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="
              absolute
              right-[16px]
              top-[44px]

              block
              md:hidden

              z-[120]
            "
          >
            <Image
              src="/icons/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="w-[24px] h-auto object-contain">
            </Image>
          </button>
        </div>
      </nav>

      {/* MOBILE SIDEBAR OVERLAY */}
      <div
        className={`
          fixed
          inset-0
          z-[200]
          bg-black/40
          transition-opacity
          duration-300

          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`
          fixed
          top-0
          right-0
          z-[300]

          h-screen
          w-[280px]

          bg-white

          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${open ? "translate-x-0" : "translate-x-full"}

          md:hidden
        `}
      >

        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-[18px] top-[22px]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#111111"
            strokeWidth="2"
          >
            <path
              d="M6 6L18 18"
              strokeLinecap="round"
            />
            <path
              d="M18 6L6 18"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* SIDEBAR LINKS */}
        <div className="absolute left-[28px] top-[100px]">

          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="
                block
                mb-[28px]

                text-[20px]
                font-[600]
                leading-none

                text-black
              "
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="
            absolute
            left-[24px]
            bottom-[40px]

            h-[54px]
            w-[220px]

            rounded-full
            bg-black
          "
        >
          <span
            className="
              absolute
              left-[22px]
              top-1/2
              -translate-y-1/2

              text-[14px]
              font-[600]

              text-white
            "
          >
            Download app
          </span>

          <div
            className="
              absolute
              right-[5px]
              top-1/2

              h-[44px]
              w-[44px]

              -translate-y-1/2

              rounded-full
              bg-white
            "
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              strokeWidth="2.5"
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
              "
            >
              <path
                d="M9 5L16 12L9 19"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
}