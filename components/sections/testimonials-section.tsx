"use client";

import { motion } from "framer-motion";

const StarIcon = ({ className = "text-black" }: { className?: string }) => (
    <svg
        className={`w-[18px] h-[18px] ${className}`}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>
);

const LargeQuoteIcon = () => (
    <svg
        className="w-[120px] h-[120px] text-[#FFFFFF40] absolute top-[20px] left-[42px] pointer-events-none rotate-180"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
);

const MobileQuoteIcon = () => (
    <svg
        className="w-[100px] h-[100px] text-[#FFFFFF40] absolute top-[10px] left-[20px] pointer-events-none rotate-180"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
);

export default function TestimonialsSection() {
    return (
        <section className="w-full bg-white overflow-hidden">
            
            {/* ---------------- DESKTOP ---------------- */}
            <div className="hidden md:block pt-[80px] pb-[120px] ml-[110px] mr-[67px]">
                
                {/* HEADER */}
                <div className="flex flex-col items-start ml-[5px]">
                    
                    {/* TAG */}
                    <div
                        className="
                            h-[43px]
                            px-[14px]
                            w-[185px]
                            rounded-full
                            border
                            border-black

                            flex
                            items-center
                            justify-center
                        "
                    >
                        <span
                            className="
                                text-[16px]
                                leading-none
                            "
                            style={{
                                fontFamily: "var(--font-lato)",
                                fontWeight: 600,
                            }}
                        >
                            Loved across Dubai
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                            mt-[26px]

                            text-[56px]
                            leading-[0.95]

                            text-black
                        "
                        style={{
                            fontFamily: "var(--font-syne)",
                            fontWeight: 600,
                        }}
                    >
                        Trusted by 5,000+ luxury car owners.
                    </h2>
                </div>

                {/* CONTENT AREA */}
                <div
                    className="
                        mt-[64px]

                        flex
                        items-stretch
                        gap-[24px]
                    "
                >
                    {/* LEFT FEATURED CARD */}
                    <div
                        className="
                            relative
                            w-[517px]
                            h-[492px]
                            rounded-[32px]
                            shrink-0
                            
                            bg-gradient-to-br 
                            from-[#045476] 
                            via-[#2385af] 
                            to-[#4c8ead]

                            p-[48px]
                            
                            flex
                            flex-col
                            justify-between

                            overflow-hidden
                        "
                    >
                        <LargeQuoteIcon />

                        <p
                            className="
                                relative
                                z-10

                                text-[32px]
                                leading-[1.3]
                                text-white
                            "
                            style={{
                                fontFamily: "var(--font-syne)",
                                fontWeight: 500,
                            }}
                        >
                            It feels like having a personal valet. My car is always immaculate without me lifting a finger.
                        </p>

                        <div className="relative z-10 mt-[60px]">
                            {/* STARS */}
                            <div className="flex gap-[8px]">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <StarIcon key={`featured-${star}`} className="text-white w-[24px] h-[24px]" />
                                ))}
                            </div>

                            {/* DIVIDER */}
                            <div className="w-full h-[1px] bg-white/40 my-[24px]" />

                            {/* AUTHOR */}
                            <h4
                                className="
                                    text-[28px]
                                    text-white
                                    leading-none
                                "
                                style={{
                                    fontFamily: "var(--font-syne)",
                                    fontWeight: 600,
                                }}
                            >
                                Sara M.
                            </h4>
                            <p
                                className="
                                    mt-[8px]
                                    text-[12px]
                                    text-white/90
                                "
                                style={{
                                    fontFamily: "var(--font-lato)",
                                    fontWeight: 400,
                                }}
                            >
                                Porsche Cayenne - Arabian Ranches
                            </p>
                        </div>
                    </div>

                    {/* RIGHT GRID CARDS */}
                    <div
                        className="
                            grid
                            grid-cols-[337.5px_337.5px]
                            grid-rows-[234px_234px]
                            gap-[24px]
                        "
                    >
                        {/* CARD 1 */}
                        <div className="bg-[#EBEBEB] rounded-[32px] p-[36px] w-full h-full flex flex-col justify-between">
                            <div>
                                <div className="flex gap-[6px]">
                                    {[1, 2, 3, 4, 5].map((star) => <StarIcon key={`c1-${star}`} />)}
                                </div>
                                <p className="mt-[15px] text-[#6F6F6F] text-[18px] leading-[1.4]" style={{ fontFamily: "var(--font-lato)", fontWeight: 500 }}>
                                    I haven't thought about washing my car in 8 months. That's the highest compliment I can give.
                                </p>
                            </div>
                            <div className="mt-[22px]">
                                <h4 className="text-[24px] text-black leading-none" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>Sara M.</h4>
                                <p className="mt-[6px] text-[#4A4A4A] text-[11px]" style={{ fontFamily: "var(--font-lato)" }}>Mercedes GLE - Dubai Marina</p>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="bg-[#EBEBEB] rounded-[32px] p-[36px] w-full h-full flex flex-col justify-between">
                            <div>
                                <div className="flex gap-[6px]">
                                    {[1, 2, 3, 4, 5].map((star) => <StarIcon key={`c2-${star}`} />)}
                                </div>
                                <p className="mt-[15px] text-[#6F6F6F] text-[18px] leading-[1.4]" style={{ fontFamily: "var(--font-lato)", fontWeight: 500 }}>
                                    Building security loves them. No water, no mess, fully compliant.
                                </p>
                            </div>
                            <div className="mt-[22px]">
                                <h4 className="text-[24px] text-black leading-none" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>Aman R.</h4>
                                <p className="mt-[6px] text-[#4A4A4A] text-[11px]" style={{ fontFamily: "var(--font-lato)" }}>BMW X5 - Business Bay</p>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="bg-[#EBEBEB] rounded-[32px] p-[36px] w-full h-full flex flex-col justify-between">
                            <div>
                                <div className="flex gap-[6px]">
                                    {[1, 2, 3, 4, 5].map((star) => <StarIcon key={`c3-${star}`} />)}
                                </div>
                                <p className="mt-[15px] text-[#6F6F6F] text-[18px] leading-[1.4]" style={{ fontFamily: "var(--font-lato)", fontWeight: 500 }}>
                                    The Diamond plan changed how I think about car ownership in Dubai.
                                </p>
                            </div>
                            <div className="mt-[22px]">
                                <h4 className="text-[24px] text-black leading-none" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>Layla F.</h4>
                                <p className="mt-[6px] text-[#4A4A4A] text-[11px]" style={{ fontFamily: "var(--font-lato)" }}>Range Rover - Palm Jumeirah</p>
                            </div>
                        </div>

                        {/* CARD 4 */}
                        <div className="bg-[#EBEBEB] rounded-[32px] p-[36px] w-full h-full flex flex-col justify-between">
                            <div>
                                <div className="flex gap-[6px]">
                                    {[1, 2, 3, 4, 5].map((star) => <StarIcon key={`c4-${star}`} />)}
                                </div>
                                <p className="mt-[15px] text-[#6F6F6F] text-[18px] leading-[1.4]" style={{ fontFamily: "var(--font-lato)", fontWeight: 500 }}>
                                    I haven't thought about washing my car in 8 months. That's the highest compliment I can give.
                                </p>
                            </div>
                            <div className="mt-[22px]">
                                <h4 className="text-[24px] text-black leading-none" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>Sara M.</h4>
                                <p className="mt-[6px] text-[#4A4A4A] text-[11px]" style={{ fontFamily: "var(--font-lato)" }}>Mercedes GLE - Dubai Marina</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ---------------- MOBILE ---------------- */}
            <div className="block md:hidden px-[20px] pt-[50px] pb-[80px]">
                 {/* HEADER */}
                 <div className="flex flex-col items-start">
                    <div className="h-[28px] px-[14px] rounded-full border border-black flex items-center justify-center">
                        <span className="text-[12px] leading-none" style={{ fontFamily: "var(--font-lato)", fontWeight: 600 }}>
                            Loved across Dubai
                        </span>
                    </div>
                    <h2 className="mt-[16px] text-[32px] leading-[1.1] text-black w-[90%]" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>
                        Trusted by 5,000+ luxury car owners.
                    </h2>
                </div>

                {/* CONTENT AREA */}
                <div className="mt-[32px] flex flex-col gap-[16px]">
                    
                    {/* FEATURED CARD */}
                    <div className="relative w-full rounded-[40px] bg-gradient-to-br from-[#0B72A4] via-[#1F9AE0] to-[#E0F2FE] p-[28px] flex flex-col overflow-hidden">
                        <MobileQuoteIcon />
                        <p className="relative z-10 text-[20px] leading-[1.4] text-white pt-[10px]" style={{ fontFamily: "var(--font-syne)", fontWeight: 500 }}>
                            It feels like having a personal valet. My car is always immaculate without me lifting a finger.
                        </p>
                        <div className="relative z-10 mt-[40px]">
                            <div className="flex gap-[6px]">
                                {[1, 2, 3, 4, 5].map((star) => <StarIcon key={`m-featured-${star}`} className="text-white w-[16px] h-[16px]" />)}
                            </div>
                            <div className="w-full h-[1px] bg-white/30 my-[16px]" />
                            <h4 className="text-[20px] text-white leading-none" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>Sara M.</h4>
                            <p className="mt-[6px] text-[9px] text-white/90" style={{ fontFamily: "var(--font-lato)" }}>Porsche Cayenne - Arabian Ranches</p>
                        </div>
                    </div>

                    {/* SMALL CARDS */}
                    {[
                        { text: "I haven't thought about washing my car in 8 months. That's the highest compliment I can give.", name: "Sara M.", sub: "Mercedes GLE - Dubai Marina" },
                        { text: "Building security loves them. No water, no mess, fully compliant.", name: "Aman R.", sub: "BMW X5 - Business Bay" },
                        { text: "The Diamond plan changed how I think about car ownership in Dubai.", name: "Layla F.", sub: "Range Rover - Palm Jumeirah" },
                        { text: "I haven't thought about washing my car in 8 months. That's the highest compliment I can give.", name: "Sara M.", sub: "Mercedes GLE - Dubai Marina" },
                    ].map((card, idx) => (
                        <div key={idx} className="bg-[#EBEBEB] rounded-[40px] p-[24px] flex flex-col justify-between">
                            <div>
                                <div className="flex gap-[4px]">
                                    {[1, 2, 3, 4, 5].map((star) => <StarIcon key={`m-c${idx}-${star}`} className="w-[14px] h-[14px]" />)}
                                </div>
                                <p className="mt-[16px] text-[#6F6F6F] text-[15px] leading-[1.4]" style={{ fontFamily: "var(--font-lato)", fontWeight: 500 }}>
                                    {card.text}
                                </p>
                            </div>
                            <div className="mt-[24px]">
                                <h4 className="text-[18px] text-black leading-none" style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}>{card.name}</h4>
                                <p className="mt-[4px] text-[#4A4A4A] text-[10px]" style={{ fontFamily: "var(--font-lato)" }}>{card.sub}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </section>
    );
}