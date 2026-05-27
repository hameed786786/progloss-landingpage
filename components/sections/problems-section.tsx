"use client";

import Image from "next/image";
import { useState } from "react";

const problems = [
  {
    title: "Illegal Washing",
    description:
      "Runoff in residential areas violates community and municipal rules.",
    image: "/images/problem-1.svg",
  },
  {
    title: "Dirty Vehicle Penalty",
    description:
      "Vehicles left dusty for extended periods may receive fines.",
    image: "/images/problem-2.svg",
  },
  {
    title: "Time Waste",
    description:
      "Manual booking and chasing technicians is exhausting.",
    image: "/images/problem-3.svg",
  },
  {
    title: "Parking Restrictions",
    description:
      "Most towers ban manual washing at parking levels.",
    image: "/images/problem-4.svg",
  },
  {
    title: "Inconsistent Quality",
    description:
      "Different technicians, different results, every time.",
    image: "/images/problem-5.svg",
  },
];

export default function ProblemsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white pl-[55px]">

      {/* DESKTOP */}
      <div className="hidden md:block">

        <div className="px-[42px] pt-[54px] pb-[40px]">

          {/* TAG */}
          <div
            className="
              h-[34px]
              w-fit

              rounded-full
              border
              border-black

              px-[16px]
            "
          >
            <span
              className="
                relative
                top-[2px]

                text-[13px]
                leading-none

                text-black
              "
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                fontWeight: 600,
              }}
            >
              What We Solve
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-[28px]

              w-[1178px]
              h-[148px]

              text-[62px]
              leading-[1.06]
              tracking-[-0.05em]

              text-black
            "
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
            }}
          >
            Keeping your vehicle clean in Dubai shouldn’t be stressful.
          </h2>

          {/* ITEMS */}
          <div className="mt-[52px]">

            {problems.map((item, index) => (
              <div
                key={index}
                className="border-b border-[#ECECEC]"
                onMouseEnter={() => setActiveIndex(index)}
              >

                {/* CONTENT */}
                <div className="pt-[10px] pb-[28px]">

                  {/* TITLE */}
                  <h3
                    className="
                      text-[36px]
                      leading-none
                      tracking-[-0.03em]

                      text-black
                    "
                    style={{
                      fontFamily: "var(--font-syne), sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-[24px]

                      text-[16px]
                      leading-[1.6]
                      tracking-[0.02em]
                      text-[#7B7B7B]
                    "
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {item.description}
                  </p>

                  {/* IMAGE */}
                  <div
                    className={`
                      relative
                      overflow-hidden

                      transition-all
                      duration-500
                      ease-out

                      ${
                        activeIndex === index
                          ? "h-[250px] w-[1320px] mt-[28px] opacity-100"
                          : "h-0 opacity-0"
                      }
                    `}
                  >
                    <div
                      className="
                        relative
                        h-[320px]
                        w-full

                        overflow-hidden
                        rounded-[28px]
                      "
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="block md:hidden">

        <div className="ml-[-34px] pt-[28px] pb-[36px]">

          {/* TAG */}
          <div
            className="
              h-[30px]
              w-fit

              rounded-full
              border
              border-black

              px-[14px]
            "
          >
            <span
              className="
                relative
                top-[2px]

                text-[12px]
                leading-none

                text-black
              "
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                fontWeight: 400,
              }}
            >
              What We Solve
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-[18px]

              w-[361px]
              h-[58px]

              text-[24px]
              leading-[1.15]
              

              text-black
            "
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 500,
            }}
          >
            Keeping your vehicle clean in Dubai shouldn't be stressful.
          </h2>

          {/* ITEMS */}
          <div className="mt-[34px]">

            {problems.map((item, index) => (
              <div
                key={index}
                className="border-b border-[#E9E9E9]"
                onClick={() => setActiveIndex(index)}
              >

                {/* CONTENT */}
                <div className="pt-[18px] pb-[18px]">

                  {/* TITLE */}
                  <h3
                    className="
                      text-[20px]
                      leading-none

                      text-black
                    "
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-[14px]
                     w-[340px]
                      text-[16px]
                      leading-[1.45]

                      text-[#7B7B7B]
                    "
                    style={{
                      fontFamily: "var(--font-lato), sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {item.description}
                  </p>

                  {/* IMAGE */}
                  <div
                    className={`
                      relative
                      overflow-hidden

                      transition-all
                      duration-500
                      ease-out

                      ${
                        activeIndex === index
                          ? " w-[362px] mt-[18px] opacity-100"
                          : "h-0 opacity-0"
                      }
                    `}
                  >
                    <div
                      className="
                        relative
                        h-[250px]
                        w-[362px]
                        w-full

                        overflow-hidden
                        rounded-[24px]
                      "
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}