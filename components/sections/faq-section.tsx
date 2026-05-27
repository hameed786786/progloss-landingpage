"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    {
        q: "How does the subscription work?",
        a: "Pick a plan, add your vehicle, and we auto-schedule washes at your saved parking spot. Pause, skip or upgrade anytime."
    },
    {
        q: "How does the technician find my car in basement parking?",
        a: "Our technicians use GPS and the specific parking details you provide in the app to locate your vehicle seamlessly."
    },
    {
        q: "Is waterless washing safe for premium vehicles?",
        a: "Yes, our eco-smart waterless solutions are specifically formulated to lift dirt safely without scratching, leaving a protective wax finish."
    },
    {
        q: "Can I pause my subscription?",
        a: "Absolutely. You can pause, modify, or cancel your subscription at any time right from the app."
    },
    {
        q: "Can I manage multiple cars?",
        a: "Yes, you can add multiple vehicles to a single account and manage their wash schedules independently."
    },
    {
        q: "Can I book one-time washes?",
        a: "We currently prioritize our subscribers, but one-time washes can be booked subject to availability in your area."
    }
];

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <motion.svg
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 ml-[16px]"
    >
        <path
            d="M1 1L7 7L13 1"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </motion.svg>
);

export default function FAQSection() {
    const [openIndexDesktop, setOpenIndexDesktop] = useState<number | null>(0);
    const [openIndexMobile, setOpenIndexMobile] = useState<number | null>(0);

    return (
        <section className="w-full bg-white overflow-hidden">
            
            {/* ---------------- DESKTOP ---------------- */}
            <div className="hidden md:flex pt-[40px] pb-[120px] ml-[120px] mr-[77px] justify-between items-start gap-[60px]">
                
                {/* LEFT COLUMN: TITLE & SUBTEXT */}
                <div className="w-[35%] sticky top-[40px]">
                    {/* TAG */}
                    <div
                        className="
                            h-[34px]
                            px-[20px]
                            w-max
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
                            FAQ
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                            mt-[32px]

                            text-[56px]
                            leading-[1.1]

                            text-black
                        "
                        style={{
                            fontFamily: "var(--font-syne)",
                            fontWeight: 600,
                        }}
                    >
                        Answers,<br />
                        before you<br />
                        ask.
                    </h2>

                    {/* SUBTEXT */}
                    <p
                        className="
                            mt-[24px]
                            text-[20px]
                            leading-[1.4]
                            text-[#6F6F6F]
                            max-w-[280px]
                        "
                        style={{
                            fontFamily: "var(--font-lato)",
                            fontWeight: 500,
                        }}
                    >
                        Can't find what you're looking for? Our concierge replies in under 2 minutes.
                    </p>
                </div>

                {/* RIGHT COLUMN: ACCORDIONS */}
                <div className="ml-[-100px] w-[819px] flex flex-col gap-[10px]">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndexDesktop === index;

                        return (
                            <div
                                key={`desktop-faq-${index}`}
                                onClick={() => setOpenIndexDesktop(isOpen ? null : index)}
                                className="
                                    border
                                    border-[#D9D9D9]
                                    rounded-[32px]
                                    px-[30px]
                                    py-[32px]
                                    cursor-pointer
                                    bg-white
                                    transition-colors
                                    duration-300
                                "
                            >
                                <div className="flex justify-between items-center">
                                    <h3
                                        className="text-[32px] leading-[1] text-black pr-[20px]"
                                        style={{
                                            fontFamily: "var(--font-syne)",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {faq.q}
                                    </h3>
                                    <ChevronIcon isOpen={isOpen} />
                                </div>
                                
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p
                                                className="mt-[16px] text-[20px] leading-[1] text-[#6F6F6F]"
                                                style={{
                                                    fontFamily: "var(--font-lato)",
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ---------------- MOBILE ---------------- */}
            <div className="block md:hidden px-[24px] pt-[30px] pb-[80px]">
                 
                 {/* HEADER */}
                 <div className="flex flex-col items-start">
                    {/* TAG */}
                    <div
                        className="
                            h-[28px]
                            px-[14px]
                            w-max
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
                                text-[10px]
                                leading-none
                            "
                            style={{
                                fontFamily: "var(--font-lato)",
                                fontWeight: 600,
                            }}
                        >
                            FAQ
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                            mt-[20px]

                            text-[24px]
                            leading-[1.1]

                            text-black
                        "
                        style={{
                            fontFamily: "var(--font-syne)",
                            fontWeight: 600,
                        }}
                    >
                        Answers, before you ask.
                    </h2>

                    {/* SUBTEXT */}
                    <p
                        className="
                            mt-[16px]
                            text-[14px]
                            leading-[1.4]
                            text-[#6F6F6F]
                        "
                        style={{
                            fontFamily: "var(--font-lato)",
                            fontWeight: 500,
                        }}
                    >
                        Can't find what you're looking for? Our concierge replies in under 2 minutes.
                    </p>
                </div>

                {/* ACCORDIONS */}
                <div className="mt-[32px] flex flex-col gap-[12px]">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndexMobile === index;

                        return (
                            <div
                                key={`mobile-faq-${index}`}
                                onClick={() => setOpenIndexMobile(isOpen ? null : index)}
                                className="
                                    border
                                    border-[#D9D9D9]
                                    rounded-[24px]
                                    px-[24px]
                                    py-[24px]
                                    cursor-pointer
                                    bg-white
                                "
                            >
                                <div className="flex justify-between items-center">
                                    <h3
                                        className="text-[20px] leading-[1.25] text-black pr-[16px]"
                                        style={{
                                            fontFamily: "var(--font-syne)",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {faq.q}
                                    </h3>
                                    <ChevronIcon isOpen={isOpen} />
                                </div>
                                
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p
                                                className="mt-[12px] text-[14px] leading-[1.5] text-[#6F6F6F]"
                                                style={{
                                                    fontFamily: "var(--font-lato)",
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}