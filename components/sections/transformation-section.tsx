"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TransformationSection() {
    // Separate refs for Desktop and Mobile
    const desktopRef = useRef<HTMLDivElement | null>(null);
    const mobileRef = useRef<HTMLDivElement | null>(null);

    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const updateSlider = (clientX: number) => {
        // Determine which container is currently visible
        let activeRef = desktopRef.current;
        if (!activeRef || activeRef.getBoundingClientRect().width === 0) {
            activeRef = mobileRef.current;
        }

        if (!activeRef) return;

        const rect = activeRef.getBoundingClientRect();

        let position = ((clientX - rect.left) / rect.width) * 100;

        position = Math.max(0, Math.min(100, position));

        setSliderPos(position);
    };

    useEffect(() => {
        const move = (e: MouseEvent) => {
            if (!isDragging) return;
            updateSlider(e.clientX);
        };

        const up = () => {
            setIsDragging(false);
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseup", up);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseup", up);
        };
    }, [isDragging]);

    return (
        <section className="w-full bg-white overflow-hidden">
            {/* ---------------- DESKTOP ---------------- */}

            <div className="hidden md:block px-[67px] pt-[58px] pb-[120px]">
                {/* TOP */}
                <div className="ml-[50px] flex items-start justify-between">
                    {/* LEFT */}
                    <div>
                        {/* TAG */}
                        <div
                            className="
                                w-[163px]
                                h-[43px]

                                rounded-full
                                border
                                border-black

                                px-[20px]
                            "
                        >
                            <span
                                className="
                                    relative
                                    top-[7px]

                                    text-[16px]
                                    leading-none
                                "
                                style={{
                                    fontFamily: "var(--font-lato)",
                                    fontWeight: 500,
                                }}
                            >
                                Transformations
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
                            See the difference.
                        </h2>
                    </div>

                    {/* DESC */}
                    <p
                        className="
                            mr-[80px]
                            w-[397px]
                            mt-[40px]

                            text-[20px]
                            leading-[1.25]

                            text-[#6F6F6F]
                        "
                        style={{
                            fontFamily: "var(--font-lato)",
                            fontWeight: 500,
                        }}
                    >
                        Premium eco-smart detailing that restores
                        shine without harming paint. Drag to reveal
                        the transformation.
                    </p>
                </div>

                {/* SLIDER */}
                <div
                    ref={desktopRef}
                    className="
                        relative

                        mt-[74px]
                        ml-[50px]
                        w-[1240px]
                        h-[559px]

                        rounded-[38px]

                        bg-[#ECECEC]

                        overflow-hidden
                        select-none
                    "
                >
                    {/* BEFORE */}
                    <div
                        className="
                            absolute
                            top-[18px]
                            left-[22px]

                            z-[20]

                            h-[38px]

                            rounded-full

                            bg-[#1F9AE0]

                            px-[18px]
                        "
                    >
                        <span
                            className="
                                relative
                                top-[7px]

                                text-[24px]
                                leading-none

                                text-white
                            "
                            style={{
                                fontFamily: "var(--font-lato)",
                                fontWeight: 500,
                            }}
                        >
                            Before
                        </span>
                    </div>

                    {/* AFTER */}
                    <div
                        className="
                            absolute
                            top-[18px]
                            right-[22px]

                            z-[20]

                            h-[38px]

                            rounded-full

                            bg-[#1F9AE0]

                            px-[18px]
                        "
                    >
                        <span
                            className="
                                relative
                                top-[7px]

                                text-[24px]
                                leading-none

                                text-white
                            "
                            style={{
                                fontFamily: "var(--font-lato)",
                                fontWeight: 500,
                            }}
                        >
                            After
                        </span>
                    </div>

                    {/* IMAGE */}
                    <div
                        className="
                            absolute
                            inset-0

                            flex
                            items-center
                            justify-center
                        "
                    >
                        <Image
                            src="/images/car-before-after.svg"
                            alt="Car"
                            width={950}
                            height={520}
                            className="
                                w-[950px]
                                h-auto
                                object-contain
                                pointer-events-none
                            "
                            priority
                        />
                    </div>

                    {/* OVERLAY */}
                    <motion.div
                        className="
                            absolute
                            top-0
                            left-0
                            bottom-0

                            bg-black/10

                            z-[10]
                        "
                        animate={{
                            width: `${sliderPos}%`,
                        }}
                        transition={{
                            duration: 0,
                        }}
                    />

                    {/* LINE */}
                    <motion.div
                        className="
                            absolute
                            top-0
                            bottom-0

                            w-[6px]

                            bg-[#1F9AE0]

                            z-[15]
                        "
                        animate={{
                            left: `${sliderPos}%`,
                        }}
                        transition={{
                            duration: 0,
                        }}
                    />

                    {/* DRAG BUTTON */}
                    <motion.div
                        className="
                            absolute
                            top-1/2

                            z-[20]

                            w-[92px]
                            h-[92px]

                            rounded-full

                            bg-white

                            flex
                            items-center
                            justify-center

                            cursor-ew-resize

                            shadow-[0px_4px_20px_rgba(0,0,0,0.12)]
                        "
                        animate={{
                            left: `${sliderPos}%`,
                            x: "-50%",
                            y: "-50%",
                        }}
                        transition={{
                            duration: 0,
                        }}
                        onMouseDown={() => setIsDragging(true)}
                    >
                        {/* DRAG ICON */}
                        <div
                            className="
                                relative

                                flex
                                items-center
                                justify-center

                                w-[34px]
                                h-[34px]
                            "
                        >
                            <svg
                                width="56"
                                height="56"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="
                                    absolute
                                    left-[-10]
                                "
                            >
                                <path
                                    d="M14 6L8 12L14 18"
                                    stroke="#1F9AE0"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </motion.div>
                </div>

                {/* BUTTONS */}
                <div
                    className="
                        mt-[48px]

                        flex
                        items-center
                        justify-center

                        gap-[18px]
                    "
                >
                    {[
                        "Luxury SUV",
                        "Sports car",
                        "Family sedan",
                        "Executive vehicle",
                    ].map((item) => (
                        <button
                            key={item}
                            className="
                                h-[69px]
                                w-[212px]

                                rounded-full

                                border
                                border-[#D7D7D7]

                                bg-[#FFFFFF]

                                text-[20px]
                                leading-none

                                text-black

                                transition-all
                                duration-300

                                hover:bg-black
                                hover:text-white
                            "
                            style={{
                                fontFamily: "var(--font-syne)",
                                fontWeight: 500,
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            {/* ---------------- MOBILE ---------------- */}

            <div className="block md:hidden px-[24px] pt-[32px] pb-[80px]">
                {/* TOP */}
                <div>
                    {/* TAG */}
                    <div
                        className="
                            w-[110px]
                            h-[26px]

                            rounded-full
                            border-[1px]
                            border-black
                            pl-[9px]
                        "
                    >
                        <span
                            className="
                                relative

                                text-[12px]
                                leading-none
                            "
                            style={{
                                fontFamily: "var(--font-lato)",
                                fontWeight: 600,
                            }}
                        >
                            Transformations
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                            mt-[22px]

                            text-[24px]
                            leading-[0.94]

                            text-black
                        "
                        style={{
                            fontFamily: "var(--font-syne)",
                            fontWeight: 600,
                        }}
                    >
                        See the difference.
                    </h2>

                    {/* DESC */}
                    <p
                        className="
                            mt-[28px]

                            text-[16px]
                            leading-[1.18]

                            text-[#6F6F6F]
                        "
                        style={{
                            fontFamily: "var(--font-lato)",
                            fontWeight: 500,
                        }}
                    >
                        Premium eco-smart detailing that restores shine
                        without harming paint. Drag to reveal the
                        transformation.
                    </p>
                </div>

                {/* MOBILE SLIDER */}
                <div
                    ref={mobileRef}
                    className="
                        relative

                        mt-[52px]

                        w-[382px]
                        h-[263.1919403076172px]

                        rounded-[24px]

                        bg-[#ECECEC]

                        overflow-hidden
                        select-none
                    "
                    onTouchMove={(e) => {
                        updateSlider(e.touches[0].clientX);
                    }}
                >
                    {/* BEFORE */}
                    <div
                        className="
                            absolute
                            top-[10px]
                            left-[12px]

                            z-[20]
                            w-[50px]
                            h-[16.919355392456055px]

                            rounded-full
                            px-[6px]
                            bg-[#1F9AE0]
                        "
                    >
                        <span
                            className="
                                relative
                                top-[-5px]
                                text-[12px]
                                leading-none

                                text-white
                            "
                            style={{
                                fontFamily: "var(--font-syne)",
                                fontWeight: 500,
                            }}
                        >
                            Before
                        </span>
                    </div>

                    {/* AFTER */}
                    <div
                        className="
                            absolute
                            top-[10px]
                            right-[14px]

                            z-[20]
                            w-[50px]
                            h-[16.919355392456055px]

                            rounded-full
                            px-[10px]
                            bg-[#1F9AE0]
                        "
                    >
                        <span
                            className="
                                relative
                                top-[-5px]
                                text-[12px]
                                leading-none

                                text-white
                            "
                            style={{
                                fontFamily: "var(--font-syne)",
                                fontWeight: 500,
                            }}
                        >
                            After
                        </span>
                    </div>

                    {/* IMAGE */}
                    <div
                        className="
                            absolute
                            inset-0
                            flex
                            items-end
                            justify-center
                        "
                    >
                        <Image
                            src="/images/car-before-after.svg"
                            alt="Car"
                            width={430}
                            height={220}
                            className="
                                w-[403.3724670410156px]
                                h-[256.6784896850586px]
                                object-contain
                                pointer-events-none
                            "
                            priority
                        />
                    </div>

                    {/* OVERLAY */}
                    <motion.div
                        className="
                            absolute
                            top-0
                            left-0
                            bottom-0

                            bg-black/10

                            z-[10]
                        "
                        animate={{
                            width: `${sliderPos}%`,
                        }}
                        transition={{
                            duration: 0,
                        }}
                    />

                    {/* LINE */}
                    <motion.div
                        className="
                            absolute
                            top-0
                            bottom-0

                            w-[4px]

                            bg-[#1F9AE0]

                            z-[15]
                        "
                        animate={{
                            left: `${sliderPos}%`,
                        }}
                        transition={{
                            duration: 0,
                        }}
                    />

                    {/* DRAG BUTTON */}
                    <motion.div
                        className="
                            absolute
                            top-1/2

                            z-[20]

                            w-[29.19354820251465px]
                            h-[29.19354820251465px]

                            rounded-full

                            bg-white

                            flex
                            items-center
                            justify-center

                            shadow-[0px_4px_20px_rgba(0,0,0,0.12)]
                        "
                        animate={{
                            left: `${sliderPos}%`,
                            x: "-50%",
                            y: "-50%",
                        }}
                        transition={{
                            duration: 0,
                        }}
                        onTouchStart={() => setIsDragging(true)}
                    >
                        {/* DRAG ICON */}
                        <div
                            className="
                                relative

                                flex
                                items-center
                                justify-center

                                w-[16.348386764526367px]
                                h-[16.348386764526367px]
                            "
                        >
                            <svg
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="absolute"
                            >
                                <path
                                    d="M14 6L8 12L14 18"
                                    stroke="#1F9AE0"
                                    strokeWidth="2.4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </motion.div>
                </div>

                {/* BUTTONS */}
                <div
                    className="
                        mt-[38px]
                        w-[320px]
                        flex
                        flex-wrap

                        gap-[14px]
                    "
                >
                    {[
                        "Luxury SUV",
                        "Sports car",
                        "Family sedan",
                        "Executive vehicle",
                    ].map((item) => (
                        <button
                            key={item}
                            className="
                                h-[29px]
                                px-[1px]
                                rounded-full
                                min-w-[136px]
                                border
                                border-[#D7D7D7]

                                bg-[#FFFFFF]


                                text-[13px]
                                leading-none

                                text-black
                                mr-[15px]
                                transition-all
                                duration-300
                            "
                            style={{
                                fontFamily: "var(--font-syne)",
                                fontWeight: 600,
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}