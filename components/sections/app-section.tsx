"use client";

import Image from "next/image";
import { useState } from "react";

const features = [
    {
        title: "Garage",
        desc: "Add unlimited vehicles. Track service history per car.",
    },
    {
        title: "Parking setup",
        desc: "Pin floor, bay and instructions once. Saved forever.",
    },
    {
        title: "Live tracking",
        desc: "Watch your technician arrive in real time.",
    },
    {
        title: "Subscriptions",
        desc: "Pause, upgrade or skip a month with a tap.",
    },
    {
        title: "Invoices",
        desc: "Download VAT-compliant receipts on demand.",
    },
    {
        title: "Support tickets",
        desc: "Concierge response in under 2 minutes.",
    },
];

export default function AppSection() {

    const [active, setActive] = useState(0);

    return (
        <>
            {/* ---------------- DESKTOP ---------------- */}

            <section className="hidden md:block w-full bg-white overflow-hidden">

                <div className="px-[86px] pt-[92px] pb-[120px]">

                    {/* TAG */}
                    <div
                        className="
                            h-[40px]
                            w-fit
                            rounded-full
                            border
                            border-black
                            px-[18px]
                        "
                    >
                        <span
                            className="
                                relative
                                top-[6px]
                                text-[14px]
                                leading-none
                                text-black
                            "
                            style={{
                                fontFamily: "var(--font-lato), sans-serif",
                                fontWeight: 600,
                            }}
                        >
                            The app
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                            mt-[34px]
                            w-[1180px]
                            text-[56px]
                            leading-[1.08]
                            tracking-[-0.05em]
                            text-black
                        "
                        style={{
                            fontFamily: "var(--font-syne), sans-serif",
                            fontWeight: 700,
                        }}
                    >
                        Your luxury vehicle care, in one premium app.
                    </h2>

                    {/* CONTENT */}
                    <div className="ml-[10px] mt-[90px] flex justify-between">

                        {/* LEFT FEATURES */}
                        <div className="w-[430px]">

                            {features.map((item, index) => (

                                <div
                                    key={item.title}
                                    onMouseEnter={() => setActive(index)}
                                    className="
                                        group
                                        cursor-pointer
                                        border-b
                                        border-[#D8D8D8]
                                        py-[28px]
                                        transition-all
                                        duration-500
                                    "
                                >

                                    <h3
                                        className="
                                            text-[32px]
                                            leading-none
                                            tracking-[-0.04em]
                                            transition-all
                                            duration-500
                                        "
                                        style={{
                                            fontFamily: "var(--font-syne), sans-serif",
                                            fontWeight: active === index ? 700 : 500,
                                            color: active === index ? "#000" : "#7E7E7E",
                                        }}
                                    >
                                        {item.title}
                                    </h3>

                                    <div
                                        className="
                                            overflow-hidden
                                            transition-all
                                            duration-500
                                        "
                                        style={{
                                            maxHeight: active === index ? "80px" : "0px",
                                            opacity: active === index ? 1 : 0,
                                            marginTop: active === index ? "18px" : "0px",
                                        }}
                                    >
                                        <p
                                            className="
                                                text-[20px]
                                                leading-[1.45]
                                                w-[397px]
                                                text-[#7A7A7A]
                                            "
                                            style={{
                                                fontFamily: "var(--font-lato), sans-serif",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>

                        {/* RIGHT PHONE CARD */}
                        <div
                            className="
                                relative
                                h-[915px]
                                w-[713px]
                                rounded-[42px]
                                bg-gradient-to-bl
                                from-[#0085C1]
                                from-50%
                                to-[#c4edff]
                                to-100%
                                overflow-hidden
                            "
                        >

                            {/* PHONE */}
                            <div
                                className="
                                    absolute
                                    left-1/2
                                    top-1/2
                                    w-[396px]
                                    h-[821px]
                                    transition-all
                                    duration-700
                                "
                                style={{
                                    transform: `
                                        translate(-50%, -50%)
                                        scale(${active === 0 ? 1 : 1.02})
                                    `,
                                }}
                            >
                                <Image
                                    src="/images/phone.svg"
                                    alt="Phone"
                                    width={420}
                                    height={760}
                                    priority
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- MOBILE ---------------- */}

            <section className="block md:hidden w-full bg-white overflow-hidden">

                <div className="px-[30px] pt-[16px] pb-[70px]">

                    {/* TAG */}
                    <div
                        className="
                            h-[29px]
                            w-[74px]
                            rounded-full
                            border
                            border-black
                            pl-[9px]
                        "
                    >
                        <span
                            className="
                                relative
                                text-[14px]
                                leading-none
                                text-black
                            "
                            style={{
                                fontFamily: "var(--font-lato), sans-serif",
                                fontWeight: 600,
                            }}
                        >
                            The app
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                            mt-[22px]
                            w-full
                            text-[24px]
                            leading-[1.04]
                            tracking-[-0.05em]
                            text-black
                        "
                        style={{
                            fontFamily: "var(--font-syne), sans-serif",
                            fontWeight: 700,
                        }}
                    >
                        Your luxury vehicle care, in one premium app.
                    </h2>

                    {/* PHONE CARD */}
                    <div
                        className="
                            relative
                            mt-[42px]
                            w-full
                            h-[483px]
                            rounded-[30px]
                            overflow-hidden
                            bg-gradient-to-bl
                                from-[#0085C1]
                                from-50%
                                to-[#c4edff]
                                to-100%
                        "
                    >

                        {/* PHONE */}
                        <div
                            className="
                                absolute
                                left-1/2
                                top-1/2
                                -translate-x-1/2
                                -translate-y-1/2
                            "
                        >
                            <Image
                                src="/images/phone.svg"
                                alt="Phone"
                                width={240}
                                height={470}
                                priority
                                className="
                                    w-[209.11050415039062px]
                                    h-[433.22607421875px]
                                    object-contain
                                "
                            />
                        </div>
                    </div>

                    {/* FEATURES */}
                    <div className="mt-[34px]">

                        {features.map((item, index) => (

                            <div
                                key={item.title}
                                onClick={() => setActive(index)}
                                className={`
                                    border-[#D8D8D8]
                                    cursor-pointer

                                    transition-all
                                    duration-500

                                    ${index !== features.length - 1
                                        ? "border-b"
                                        : ""
                                    }
                                `}
                            >

                                {/* HEADER */}
                                <div className="py-[24px]">

                                    <h3
                                        className="
                                            text-[24px]
                                            leading-[1]

                                            transition-all
                                            duration-500
                                        "
                                        style={{
                                            fontFamily: "var(--font-syne), sans-serif",
                                            fontWeight: active === index ? 700 : 500,
                                            color: active === index ? "#000" : "#7E7E7E",
                                        }}
                                    >
                                        {item.title}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <div
                                        className="
                                            overflow-hidden

                                            transition-all
                                            duration-500
                                        "
                                        style={{
                                            maxHeight: active === index ? "120px" : "0px",
                                            opacity: active === index ? 1 : 0,
                                            marginTop: active === index ? "16px" : "0px",
                                        }}
                                    >
                                        <p
                                            className="
                                                w-[320px]

                                                text-[16px]
                                                leading-[1.45]

                                                text-[#707070]
                                            "
                                            style={{
                                                fontFamily: "var(--font-lato), sans-serif",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}