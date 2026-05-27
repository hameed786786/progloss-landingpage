"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
    const footerData = [
        {
            title: "About Progloss",
            links: ["Company Overview", "Careers", "Press & Media", "Testimonials"]
        },
        {
            title: "Resources",
            links: ["Blog", "Help Center", "Webinars & Events", "Case Studies"]
        },
        {
            title: "Support & Contact",
            links: ["Contact Us", "Technical Support", "Feedback", "Community Forum"]
        }
    ];

    const socialLinks = [
        { name: "Instagram", icon: "/icons/instagram.svg" },
        { name: "Facebook", icon: "/icons/facebook.svg" },
        { name: "Twitter / X", icon: "/icons/twitter.svg" },
        { name: "Linkedin", icon: "/icons/linkedin.svg" },
    ];

    return (
        <footer className="w-full bg-white relative overflow-hidden flex flex-col pt-[20px]">
            
            {/* ---------------- DESKTOP ---------------- */}
            <div className="hidden md:flex flex-col px-[60px] lg:px-[110px] pb-[40px] z-10 max-w-[1600px] mx-auto w-full relative">
                
                {/* LOGO & TOP LINE */}
                <div className="flex items-center gap-[30px] w-full">
                    <Image 
                        src="/icons/logo.svg" 
                        alt="Progloss Logo" 
                        width={120} 
                        height={40} 
                        className="w-[76px] h-[55px] object-contain shrink-0" 
                    />
                    <div className="flex-1 h-[1px] bg-[#F0F0F0]" />
                </div>

                {/* MAIN GRID */}
                <div className="mt-[60px] flex justify-between items-start  pr-[100px]">
                    
                    {/* COLUMN 1: Brand Info */}
                    <div className="w-[241px] shrink-0">
                        <p 
                            className="text-[16px] leading-[1.4] text-[#6F6F6F]"
                            style={{ fontFamily: "var(--font-lato)", fontWeight: 500 }}
                        >
                            Luxury eco-smart car care, on<br />
                            subscription. Built for Dubai<br />
                            apartments, villas, gated<br />
                            communities and office parking.
                        </p>
                    </div>

                    {/* COLUMNS 2, 3, 4: Links */}
                    {footerData.map((col, idx) => (
                        <div key={idx} className="flex flex-col gap-[20px]">
                            <h4 
                                className="text-[16px] text-[#333333]" 
                                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700 }}
                            >
                                {col.title}
                            </h4>
                            <ul className="flex flex-col gap-[14px]">
                                {col.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link 
                                            href="#" 
                                            className="text-[16px] text-[#6F6F6F] hover:text-black transition-colors"
                                            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* COLUMN 5: Socials */}
                    <div className="flex flex-col gap-[20px]">
                        <h4 
                            className="text-[16px] text-[#333333]" 
                            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700 }}
                        >
                            Connect
                        </h4>
                        <ul className="flex flex-col gap-[14px]">
                            {socialLinks.map((social, sIdx) => (
                                <li key={sIdx}>
                                    <Link 
                                        href="#" 
                                        className="flex items-center gap-[10px] text-[16px] text-[#6F6F6F] hover:text-black transition-colors"
                                        style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
                                    >
                                        <div className="flex items-center justify-center w-[16px] h-[16px]">
                                            <Image 
                                                src={social.icon} 
                                                alt={social.name} 
                                                width={16} 
                                                height={16} 
                                                className="w-full h-full object-contain brightness-0"
                                            />
                                        </div>
                                        {social.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-[100px] w-full border-t-2 border-[#F0F0F0] pt-[24px] flex justify-between items-center pb-[140px] ">
                    <p 
                        className="text-[13px] text-[#888888]"
                        style={{ fontFamily: "var(--font-lato)", fontWeight: 500 }}
                    >
                        ©2026 PROGLOSS · All rights reserved.
                    </p>
                    <div className="flex gap-[32px]">
                        {["Term of use", "Privacy policy", "Security"].map((item, idx) => (
                            <Link 
                                key={idx} 
                                href="#" 
                                className="text-[14px] text-[#555555] hover:text-black transition-colors"
                                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ---------------- MOBILE ---------------- */}
            <div className="flex md:hidden flex-col px-[24px] pb-[40px] z-10 relative">
                
                {/* LOGO & TOP LINE */}
                <div className="flex items-center gap-[20px] w-full">
                    <Image 
                        src="/icons/logo.svg" 
                        alt="Progloss Logo" 
                        width={76} 
                        height={55} 
                        className="w-[76px] h-[55px] object-contain shrink-0" 
                    />
                    <div className="flex-1 h-[2px] bg-[#EAEAEA]" />
                </div>

                {/* BRAND INFO */}
                <div className="mt-[32px] w-full">
                    <p 
                        className="text-[16px] leading-[1.6] text-[#00000099]"
                        style={{ fontFamily: "var(--font-lato)", fontWeight: 500 }}
                    >
                        Luxury eco-smart car care, on subscription. Built for Dubai apartments, villas, gated communities and office parking.
                    </p>
                </div>

                {/* LINKS ACCORDION / STACK */}
                <div className="mt-[40px] flex flex-col gap-[32px]">
                    {footerData.map((col, idx) => (
                        <div key={idx} className="flex flex-col gap-[16px]">
                            <h4 
                                className="text-[16px] text-[#1A1A1A]" 
                                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700 }}
                            >
                                {col.title}
                            </h4>
                            <ul className="flex flex-col gap-[12px]">
                                {col.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <Link 
                                            href="#" 
                                            className="text-[16px] text-[#555555] hover:text-black transition-colors"
                                            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* SOCIALS */}
                    <div className="flex flex-col gap-[16px]">
                        <h4 
                            className="text-[16px] text-[#1A1A1A]" 
                            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 700 }}
                        >
                            Connect
                        </h4>
                        <ul className="flex flex-col gap-[12px]">
                            {socialLinks.map((social, sIdx) => (
                                <li key={sIdx}>
                                    <Link 
                                        href="#" 
                                        className="flex items-center gap-[10px] text-[16px] text-[#555555] hover:text-black transition-colors"
                                        style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
                                    >
                                        <div className="flex items-center justify-center w-[16px] h-[16px]">
                                            <Image 
                                                src={social.icon} 
                                                alt={social.name} 
                                                width={16} 
                                                height={16} 
                                                className="w-full h-full object-contain brightness-0"
                                            />
                                        </div>
                                        {social.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-[60px] w-full flex flex-col items-center gap-[24px] pb-[20px] ">
                    <p 
                        className="text-[14px] text-[#626981] text-center"
                        style={{ fontFamily: "var(--font-lato)", fontWeight: 500 }}
                    >
                        ©2026 PROGLOSS · All rights reserved.
                    </p>
                    <div className="flex gap-[20px] justify-center flex-wrap">
                        {["Term of use", "Privacy policy", "Security"].map((item, idx) => (
                            <Link 
                                key={idx} 
                                href="#" 
                                className="text-[14px] text-[#4B5162] hover:text-black transition-colors"
                                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500 }}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* ---------------- WATERMARK (DESKTOP) ---------------- */}
            <div 
                className="
                    hidden 
                    md:flex 
                    absolute 
                    bottom-[-15%] 
                    left-0 
                    w-full 
                    justify-center 
                    pointer-events-none 
                    overflow-hidden
                    select-none 
                    z-0
                "
            >
                <img
                    src="/icons/PROGLOSS.svg"
                    alt="PROGLOSS Watermark"
                    className="w-[1373px] h-[315px] object-contain "
                />
            </div>

            {/* ---------------- WATERMARK (MOBILE) ---------------- */}
            <div 
                className="
                    
                    flex 
                    md:hidden 
                    absolute 
                    bottom-[-2%] 
                    left-0 
                    w-full 
                    justify-center 
                    pointer-events-none 
                    overflow-hidden
                    select-none 
                    z-0
                "
            >
                <img
                    src="/icons/PROGLOSS.svg"
                    alt="PROGLOSS Watermark"
                    className="w-[352px] h-[81px] object-contain max-w-none"
                />
            </div>
            
        </footer>
    );
}