"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AppDownloadSection() {
    return (
        <section className="w-full bg-white overflow-hidden">
            {/* ---------------- DESKTOP ---------------- */}

            <div className="hidden md:block pt-[40px] pb-[110px]">
                {/* TITLE */}
                <h2
                    className="
                        text-center

                        text-[56px]
                        leading-[0.95]

                        text-black
                    "
                    style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 600,
                    }}
                >
                    Your luxury vehicle care assistant.
                </h2>

                {/* DESC */}
                <p
                    className="
                        mt-[28px]

                        text-center

                        text-[20px]
                        leading-[1.3]

                        text-[#6F6F6F]
                    "
                    style={{
                        fontFamily: "var(--font-lato)",
                        fontWeight: 500,
                    }}
                >
                    Manage washes, subscriptions, detailing,
                    invoices and vehicle care — all in one
                    <br />
                    premium app.
                </p>

                {/* PHONE AREA */}
                <div className="relative mt-[94px] flex justify-center">
                    {/* BLUE BG */}
                    <div
                        className="
                            absolute
                            top-[40%]

                            w-[1004px]
                            h-[338px]

                            rounded-[38px]

                            bg-[#79C8EF]
                        "
                    />

                    {/* PHONES */}
                    <div
                        className="
                            
                            relative
                            z-[10]

                            flex
                            items-end
                            justify-center
                        "
                    >
                        {/* LEFT PHONE */}
                        <motion.div
                            initial={{ rotate: -18, y: 40, opacity: 0 }}
                            whileInView={{ rotate: -18, y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="relative left-[70px] top-[20px]"
                        >
                            <Image
                                src="/images/phone.svg"
                                alt="Phone"
                                width={320}
                                height={640}
                                className="
                                    w-[228.58515558160406px]
                                    h-[473.57274619899783px]
                                "
                                priority
                            />
                        </motion.div>

                        {/* CENTER PHONE */}
                        <motion.div
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: -50, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="
                                relative
                                z-[20]
                            "
                        >
                            <Image
                                src="/images/phone.svg"
                                alt="Phone"
                                width={340}
                                height={680}
                                className="
                                    w-[228.58515558160406px]
                                    h-[473.57274619899783px]
                                "
                                priority
                            />
                        </motion.div>

                        {/* RIGHT PHONE */}
                        <motion.div
                            initial={{ rotate: 18, y: 40, opacity: 0 }}
                            whileInView={{ rotate: 18, y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="relative right-[70px] top-[20px]"
                        >
                            <Image
                                src="/images/phone.svg"
                                alt="Phone"
                                width={320}
                                height={640}
                                className="
                                    w-[228.58515558160406px]
                                    h-[473.57274619899783px]
                                "
                                priority
                            />
                        </motion.div>
                    </div>
                </div>

                {/* STORE BUTTONS */}
                <div
                    className="
                        mt-[102px]

                        flex
                        items-center
                        justify-center
                        
                        gap-[16px]
                    "
                >
                    {/* GOOGLE PLAY */}
                    <motion.button
                        whileHover={{
                            scale: 1.04,
                            y: -2,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="flex items-center justify-center bg-black text-white w-[186px] h-[56px] rounded-[14px] gap-[8px]"
                    >
                        <svg viewBox="0 0 512 512" className="w-[24px] h-[24px]">
                            <path fill="#73E298" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
                            <path fill="#51E2C2" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                            <path fill="#FFC459" d="m425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
                            <path fill="#D84279" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                        </svg>
                        <div className="flex flex-col text-left font-sans">
                            <span className="text-[10px] leading-none tracking-wide text-gray-200">GET IT ON</span>
                            <span className="text-[20px] font-semibold leading-tight tracking-wide mt-[2px]">Google Play</span>
                        </div>
                    </motion.button>

                    {/* APP STORE */}
                    <motion.button
                        whileHover={{
                            scale: 1.04,
                            y: -2,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="flex items-center justify-center bg-black text-white w-[186px] h-[56px] rounded-[14px] gap-[10px]"
                    >
                        <svg viewBox="0 0 384 512" className="w-[28px] h-[28px] fill-current mb-1">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.6 88.5-86.7 100.8-125.2-46.7-19.1-59.5-49.6-59.9-85.4zM258.1 101c13.2-16.5 22.3-39.6 19.9-62.1-22.3 1-45.7 13.5-59.4 30.2-11.8 14.4-22.3 38.2-19.4 60.2 24.2 1.8 45.7-11.8 58.9-28.3z" />
                        </svg>
                        <div className="flex flex-col text-left font-sans">
                            <span className="text-[10px] leading-none text-gray-200">Download on the</span>
                            <span className="text-[21px] font-semibold leading-tight mt-[2px]">App Store</span>
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* ---------------- MOBILE ---------------- */}

            <div className="block md:hidden px-[20px] pt-[60px] pb-[80px] ">
                {/* TITLE */}
                <h2
                    className="
                        text-center

                        text-[24px]
                        leading-[0.94]

                        text-black
                    "
                    style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 600,
                    }}
                >
                    Your luxury vehicle care assistant.
                </h2>

                {/* DESC */}
                <p
                    className="
                        mt-[18px]

                        text-center

                        text-[16px]
                        leading-[1.35]

                        text-[#6F6F6F]
                    "
                    style={{
                        fontFamily: "var(--font-lato)",
                        fontWeight: 500,
                    }}
                >
                    Manage washes, subscriptions, detailing,
                    invoices and vehicle care — all in one
                    premium app.
                </p>

                {/* PHONE AREA */}
                <div className="relative mt-[64px] flex justify-center">
                    {/* BLUE BG */}
                    <div
                        className="
                            absolute
                            bottom-[-30]

                            w-full
                            h-[171px]

                            rounded-[24px]

                            bg-[#79C8EF]
                        "
                    />

                    {/* PHONES */}
                    <div
                        className="
                            relative
                            z-[10]

                            flex
                            items-end
                            justify-center
                        "
                    >
                        {/* LEFT PHONE */}
                        <motion.div
                            initial={{ rotate: -18, y: 40, opacity: 0 }}
                            whileInView={{ rotate: -18, y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="relative left-[38px] top-[14px]"
                        >
                            <Image
                                src="/images/phone.svg"
                                alt="Phone"
                                width={130}
                                height={260}
                                className="
                                    w-[130px]
                                    h-[264.8685869979382px]
                                "
                            />
                        </motion.div>

                        {/* CENTER PHONE */}
                        <motion.div
                            initial={{ y: 80, opacity: 0 }}
                            whileInView={{ y: -22, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="
                                relative
                                z-[20]
                            "
                        >
                            <Image
                                src="/images/phone.svg"
                                alt="Phone"
                                width={148}
                                height={296}
                                className="
                                    w-[148px]
                                    h-[264.8685869979382px]
                                "
                            />
                        </motion.div>

                        {/* RIGHT PHONE */}
                        <motion.div
                            initial={{ rotate: 18, y: 40, opacity: 0 }}
                            whileInView={{ rotate: 18, y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="relative right-[38px] top-[14px]"
                        >
                            <Image
                                src="/images/phone.svg"
                                alt="Phone"
                                width={130}
                                height={260}
                                className="
                                    w-[130px]
                                    h-[264.8685869979382px]
                                "
                            />
                        </motion.div>
                    </div>
                </div>

                {/* STORE BUTTONS */}
                <div
                    className="
                        mt-[64px]

                        flex
                        items-center
                        justify-center

                        gap-[40px]
                    "
                >
                    {/* GOOGLE PLAY */}
                    <motion.button
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center justify-center bg-black text-white w-[132px] h-[40px] rounded-[10px] gap-[6px]"
                    >
                        <svg viewBox="0 0 512 512" className="w-[16px] h-[16px]">
                            <path fill="#73E298" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
                            <path fill="#51E2C2" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
                            <path fill="#FFC459" d="m425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" />
                            <path fill="#D84279" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
                        </svg>
                        <div className="flex flex-col text-left font-sans">
                            <span className="text-[7.5px] leading-none tracking-[0.01em] text-gray-200">GET IT ON</span>
                            <span className="text-[14px] font-semibold leading-tight tracking-[0.01em] mt-[1px]">Google Play</span>
                        </div>
                    </motion.button>

                    {/* APP STORE */}
                    <motion.button
                        whileTap={{ scale: 0.96 }}
                        className="flex items-center justify-center bg-black text-white w-[132px] h-[40px] rounded-[10px] gap-[8px]"
                    >
                        <svg viewBox="0 0 384 512" className="w-[20px] h-[20px] fill-current mb-[2px]">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.3 48.6-.6 88.5-86.7 100.8-125.2-46.7-19.1-59.5-49.6-59.9-85.4zM258.1 101c13.2-16.5 22.3-39.6 19.9-62.1-22.3 1-45.7 13.5-59.4 30.2-11.8 14.4-22.3 38.2-19.4 60.2 24.2 1.8 45.7-11.8 58.9-28.3z" />
                        </svg>
                        <div className="flex flex-col text-left font-sans">
                            <span className="text-[7.5px] leading-none tracking-[0.01em] text-gray-200">Download on the</span>
                            <span className="text-[15px] font-semibold leading-tight tracking-[0.01em] mt-[1px]">App Store</span>
                        </div>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}