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
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white px-[20px] md:px-0">
      
      {/* DESKTOP */}
      <div className="hidden md:block pl-[55px]">
        <div className="px-[42px] pt-[54px] pb-[40px]">
          <div className="h-[34px] w-fit rounded-full border border-black px-[16px]">
            <span className="relative top-[2px] text-[13px] leading-none text-black" style={{ fontFamily: "var(--font-lato)", fontWeight: 600 }}>
              What We Solve
            </span>
          </div>
          <h2 className="mt-[28px] w-[1178px] text-[62px] leading-[1.06] tracking-[-0.05em] text-black" style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}>
            Keeping your vehicle clean in Dubai shouldn’t be stressful.
          </h2>
          <div className="mt-[52px]">
            {problems.map((item, index) => (
              <div key={index} className="border-b border-[#ECECEC]" onMouseEnter={() => setActiveIndex(index)}>
                <div className="pt-[10px] pb-[28px]">
                  <h3 className="text-[36px] leading-none tracking-[-0.03em] text-black" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>
                    {item.title}
                  </h3>
                  <p className="mt-[24px] text-[16px] leading-[1.6] tracking-[0.02em] text-[#7B7B7B]" style={{ fontFamily: "var(--font-lato)", fontWeight: 500 }}>
                    {item.description}
                  </p>
                  <div className={`relative overflow-hidden transition-all duration-500 ease-out ${activeIndex === index ? "h-[250px] mt-[28px] opacity-100" : "h-0 opacity-0"}`}>
                    <div className="relative h-[250px] w-full overflow-hidden rounded-[28px]">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="block md:hidden pt-[28px] pb-[36px]">
        <div className="h-[30px] w-fit rounded-full border border-black px-[14px] flex items-center">
          <span className="text-[12px] leading-none text-black" style={{ fontFamily: "var(--font-lato)", fontWeight: 400 }}>
            What We Solve
          </span>
        </div>
        <h2 className="mt-[16px] text-[24px] leading-[1.2] text-black" style={{ fontFamily: "var(--font-syne)", fontWeight: 500 }}>
          Keeping your vehicle clean in Dubai shouldn't be stressful.
        </h2>

        <div className="mt-[34px]">
          {problems.map((item, index) => (
            <div key={index} className="border-b border-[#E9E9E9]" onClick={() => setActiveIndex(activeIndex === index ? null : index)}>
              <div className="py-[18px]">
                <h3 className="text-[20px] leading-none text-black" style={{ fontFamily: "var(--font-lato)", fontWeight: 600 }}>
                  {item.title}
                </h3>
                
                {/* Image and Description appear together when active */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}>
                  <p className="mt-[14px] text-[16px] leading-[1.45] text-[#7B7B7B]" style={{ fontFamily: "var(--font-lato)", fontWeight: 500 }}>
                    {item.description}
                  </p>
                  <div className="relative h-[200px] w-full mt-[16px] overflow-hidden rounded-[20px]">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}