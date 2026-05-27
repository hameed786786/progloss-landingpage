"use client";

import Image from "next/image";

export default function PricingSection() {

    return (
        <>
            {/* ---------------- DESKTOP ---------------- */}

            <section className="hidden md:block w-full bg-white overflow-hidden">

                <div className="px-[56px] pt-[60px] pb-[120px]">

                    {/* TAG */}
                    <div
                        className="
                            ml-[50px]
                            h-[43px]
                            w-[178px]

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

                                text-black
                            "
                            style={{
                                fontFamily: "var(--font-lato), sans-serif",
                                fontWeight: 500,
                            }}
                        >
                            Subscription plans
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                            mt-[24px]
                            ml-[50px]

                            text-[56px]
                            leading-[1.04]

                            text-black
                        "
                        style={{
                            fontFamily: "var(--font-syne), sans-serif",
                            fontWeight: 700,
                        }}
                    >
                        One subscription. A lifetime of shine.
                    </h2>

                    {/* CARDS */}
                    <div
                        className="
                            mt-[112px]

                            flex
                            items-center
                            justify-center

                            gap-[10px]
                        "
                    >

                        {/* ---------------- SAPPHIRE ---------------- */}

                        <div
                            className="
                                relative

                                rounded-[22px]

                                transition-all
                                duration-500

                                hover:-translate-y-[8px]
                                hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)]

                                text-black
                            "
                            style={{
                                width: "420px",
                                height: "562px",
                                marginTop: "24px",
                                borderRadius: "22px",

                                background: `
                                    linear-gradient(#EAEBEB, #EAEBEB) padding-box,
                                    linear-gradient(
                                        180deg,
                                        #3FAEFF 0%,
                                        rgba(63, 174, 255, 0.45) 18%,
                                        rgba(63, 174, 255, 0.12) 48%,
                                        rgba(63, 174, 255, 0.06) 72%,
                                        #3FAEFF 100%
                                    ) border-box
                                `,

                                border: "1px solid transparent",

                                boxShadow:
                                    "0px 4px 18px rgba(0,0,0,0.04)",
                            }}
                        >

                            <div className="px-[28px] pt-[30px]">

                                <h3
                                    className="
                                        text-[32px]
                                        leading-none
                                    "
                                    style={{
                                        fontFamily: "inter, sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Sapphire
                                </h3>

                                <div className="mt-[18px]">

                                    <span
                                        className="
                                            text-[44px]
                                            leading-none
                                            tracking-[-0.04em]
                                        "
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 700,
                                        }}
                                    >
                                        $199
                                    </span>

                                    <span
                                        className="
                                            ml-[4px]
                                            text-[26px]
                                            opacity-[0.6]
                                        "
                                        style={{
                                            fontFamily: "var(--font-lato), sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        /month
                                    </span>
                                </div>

                                <button
                                    className="
                                        mt-[22px]

                                        h-[64px]
                                        w-[360px]

                                        rounded-full

                                        border
                                        border-[#33AFFF]

                                        bg-white

                                        flex
                                        items-center
                                        justify-center
                                        gap-[14px]

                                        transition-all
                                        duration-300

                                        hover:scale-[1.02]
                                    "
                                >

                                    <span
                                        className="
                                            text-[20px]
                                            leading-none
                                            text-black
                                        "
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Get started
                                    </span>

                                    <Image
                                        src="/icons/arrow-left.svg"
                                        alt="Arrow"
                                        width={24}
                                        height={24}
                                        className="w-[24px] h-[24px]"
                                    />

                                </button>

                                <div className="mt-[24px]">

                                    <h4
                                        className="
                                            text-[20px]
                                        "
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 700,
                                        }}
                                    >
                                        Includes:
                                    </h4>

                                    <div className="mt-[22px] space-y-[25px]">

                                        {[
                                            "4 exterior washes / month",
                                            "Waterless eco wash",
                                            "Live tracking",
                                            "1 vehicle",
                                            "Apartment-safe",
                                        ].map((feature) => (

                                            <div
                                                key={feature}
                                                className="flex items-center gap-[12px]"
                                            >

                                                <Image
                                                    src="/icons/tick.svg"
                                                    alt="Tick"
                                                    width={20}
                                                    height={20}
                                                    className="opacity-[0.4]"
                                                />

                                                <span
                                                    className="
                                                        text-[20px]
                                                        leading-[1.3]
                                                    "
                                                    style={{
                                                        fontFamily: "var(--font-inter), sans-serif",
                                                        fontWeight: 500,
                                                        opacity: 0.4,
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ---------------- EMERALD ---------------- */}

                        <div
                            className="
                                relative
                                rounded-[22px]

                                transition-all
                                duration-500

                                hover:-translate-y-[8px]
                                hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)]

                                text-white
                            "
                            style={{
                                width: "420px",
                                height: "618px",
                                marginTop: "-56px",
                                borderRadius: "22px",
                                border: "1px solid transparent",
                                background: `
                                    radial-gradient(120% 120% at 20% 10%, #1A3E61 0%, #000000 60%) padding-box,
                                    linear-gradient(0deg, #1C1C1C, #1C1C1C) border-box,
                                    radial-gradient(28.97% 32.98% at 63.3% 100%, #159AD5 0%, rgba(47, 63, 161, 0) 100%) border-box,
                                    radial-gradient(62.96% 84.68% at 4.65% 2.1%, #2A58FF 0%, rgba(42, 88, 255, 0) 41.09%) border-box
                                `,
                            }}
                        >

                            <div className="px-[28px] pt-[30px]">

                                <h3
                                    className="
                                        text-[32px]
                                        leading-none
                                    "
                                    style={{
                                        fontFamily: "inter, sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Emerald
                                </h3>

                                <div className="mt-[18px]">

                                    <span
                                        className="
                                            text-[44px]
                                            leading-none
                                            tracking-[-0.04em]
                                        "
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 700,
                                        }}
                                    >
                                        $319
                                    </span>

                                    <span
                                        className="
                                            ml-[4px]
                                            text-[26px]
                                            opacity-[0.6]
                                        "
                                        style={{
                                            fontFamily: "var(--font-lato), sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        /month
                                    </span>
                                </div>

                                <button
                                    className="
                                        mt-[22px]

                                        h-[64px]
                                        w-[360px]

                                        rounded-full

                                        border
                                        border-white

                                        bg-white
                                        text-black

                                        flex
                                        items-center
                                        justify-center
                                        gap-[14px]

                                        transition-all
                                        duration-300

                                        hover:scale-[1.02]
                                    "
                                >

                                    <span
                                        className="
                                            text-[20px]
                                            leading-none
                                            text-black
                                        "
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Get started
                                    </span>

                                    <Image
                                        src="/icons/arrow-left.svg"
                                        alt="Arrow"
                                        width={24}
                                        height={24}
                                        className="w-[24px] h-[24px]"
                                    />
                                </button>

                                <div className="mt-[24px]">

                                    <h4
                                        className="
                                            text-[20px]
                                            leading-none
                                        "
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 700,
                                        }}
                                    >
                                        Includes:
                                    </h4>

                                    <div className="mt-[22px] space-y-[25px]">

                                        {[
                                            "6 washes + 2 interior",
                                            "Tire & rim care",
                                            "Priority dispatch",
                                            "Up to 2 vehicles",
                                            "Free fragrance refresh",
                                            "Detailed usage reports",
                                        ].map((feature) => (

                                            <div
                                                key={feature}
                                                className="flex items-center gap-[12px]"
                                            >

                                                <Image
                                                    src="/icons/tick.svg"
                                                    alt="Tick"
                                                    width={20}
                                                    height={20}
                                                    className="opacity-[0.5] invert"
                                                />

                                                <span
                                                    className="
                                                        text-[20px]
                                                        leading-[1.3]
                                                    "
                                                    style={{
                                                        fontFamily: "var(--font-inter), sans-serif",
                                                        fontWeight: 500,
                                                        opacity: 0.5,
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ---------------- DIAMOND ---------------- */}

                        <div
                            className="
                                relative

                                rounded-[22px]

                                transition-all
                                duration-500

                                hover:-translate-y-[8px]
                                hover:shadow-[0px_10px_30px_rgba(0,0,0,0.08)]

                                text-black
                            "
                            style={{
                                width: "420px",
                                height: "562px",
                                marginTop: "24px",
                                borderRadius: "22px",

                                background: `
                                    linear-gradient(#EAEBEB, #EAEBEB) padding-box,
                                    linear-gradient(
                                        180deg,
                                        #3FAEFF 0%,
                                        rgba(63, 174, 255, 0.45) 18%,
                                        rgba(63, 174, 255, 0.12) 48%,
                                        rgba(63, 174, 255, 0.06) 72%,
                                        #3FAEFF 100%
                                    ) border-box
                                `,

                                border: "1px solid transparent",

                                boxShadow:
                                    "0px 4px 18px rgba(0,0,0,0.04)",
                            }}
                        >

                            <div className="px-[28px] pt-[30px]">

                                <h3
                                    className="
                                        text-[32px]
                                        leading-none
                                    "
                                    style={{
                                        fontFamily: "inter, sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Diamond
                                </h3>

                                <div className="mt-[18px]">

                                    <span
                                        className="
                                            text-[44px]
                                            leading-none
                                            tracking-[-0.04em]
                                        "
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 700,
                                        }}
                                    >
                                        $449
                                    </span>

                                    <span
                                        className="
                                            ml-[4px]
                                            text-[26px]
                                            opacity-[0.6]
                                        "
                                        style={{
                                            fontFamily: "var(--font-lato), sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        /month
                                    </span>
                                </div>

                                <button
                                    className="
                                        mt-[22px]

                                        h-[64px]
                                        w-[360px]

                                        rounded-full

                                        border
                                        border-[#33AFFF]

                                        bg-white

                                        flex
                                        items-center
                                        justify-center
                                        gap-[14px]

                                        transition-all
                                        duration-300

                                        hover:scale-[1.02]
                                    "
                                >

                                    <span
                                        className="
                                            text-[20px]
                                            leading-none
                                            text-black
                                        "
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Get started
                                    </span>

                                    <Image
                                        src="/icons/arrow-left.svg"
                                        alt="Arrow"
                                        width={24}
                                        height={24}
                                        className="w-[24px] h-[24px]"
                                    />
                                </button>

                                <div className="mt-[24px]">

                                    <h4
                                        className="
                                            text-[20px]
                                            leading-none
                                        "
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 700,
                                        }}
                                    >
                                        Includes:
                                    </h4>

                                    <div className="mt-[22px] space-y-[25px]">

                                        {[
                                            "8 washes + 1 detail",
                                            "Ceramic touch-ups",
                                            "Concierge manager",
                                            "Unlimited vehicles",
                                            "Quarterly clay bar",
                                        ].map((feature) => (

                                            <div
                                                key={feature}
                                                className="flex items-center gap-[12px]"
                                            >

                                                <Image
                                                    src="/icons/tick.svg"
                                                    alt="Tick"
                                                    width={20}
                                                    height={20}
                                                    className="opacity-[0.4]"
                                                />

                                                <span
                                                    className="
                                                        text-[20px]
                                                        leading-[1.3]
                                                    "
                                                    style={{
                                                        fontFamily: "var(--font-inter), sans-serif",
                                                        fontWeight: 500,
                                                        opacity: 0.4,
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ---------------- MOBILE ---------------- */}

            <section className="block md:hidden w-full bg-white overflow-hidden">

                <div className="px-[18px] pt-[2px] pb-[60px]">

                    {/* TAG */}
                    <div
                        className="
                            h-[26px]
                            w-[121px]

                            rounded-full
                            border-[1px]
                            border-black

                            px-[9px]
                            
                        "
                    >
                        <span
                            className="
                                relative
                                
                                text-[12px]
                                leading-none

                                text-black
                            "
                            style={{
                                fontFamily: "var(--font-lato), sans-serif",
                                fontWeight: 600,
                            }}
                        >
                            Subscription plans
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                            mt-[10px]

                            w-[362px]
                            
                            text-[24px]
                            leading-[1.2]

                            text-black
                        "
                        style={{
                            fontFamily: "var(--font-syne), sans-serif",
                            fontWeight: 700,
                        }}
                    >
                        One subscription. A lifetime of shine.
                    </h2>

                    {/* MOBILE CARDS */}
                    <div className="mt-[18px] flex flex-col gap-[8px]">

                        {/* EMERALD */}
                        <div
                            className="
                                relative
                                overflow-hidden
                                text-white
                            "
                            style={{
                                width: "100%",
                                height: "544.4285888671875px",
                                borderRadius: "21.14px",
                                background: `
                                    radial-gradient(120% 120% at 20% 10%, #1A3E61 0%, #000000 60%) padding-box,
                                    linear-gradient(0deg, #1C1C1C, #1C1C1C) border-box,
                                    radial-gradient(28.97% 32.98% at 63.3% 100%, #159AD5 0%, rgba(47, 63, 161, 0) 100%) border-box,
                                    radial-gradient(62.96% 84.68% at 4.65% 2.1%, #2A58FF 0%, rgba(42, 88, 255, 0) 41.09%) border-box
                                `,
                            }}
                        >

                            <div className="px-[12px] pt-[22px]">

                                <h3
                                    className="pl-[10px] text-[28.19px] h-[34px] w-[110px]"
                                    style={{
                                        fontFamily: "var(--font-inter), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Emerald
                                </h3>

                                <div className="pl-[10px] mt-[4px] flex items-end">

                                    <span
                                        className="text-[38.76px] leading-none"
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 700,
                                        }}
                                    >
                                        $319
                                    </span>

                                    <span
                                        className="ml-[2px] mb-[2px] text-[22.9px] opacity-[0.8] pt-[25px]"
                                        style={{
                                            fontFamily: "var(--font-lato), sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        /month
                                    </span>
                                </div>

                                <button
                                    className="
                                        mt-[32px]

                                        h-[56.38095474243164px]
                                        w-[317.14288330078125px]
                                        ml-[25px]
                                        rounded-full

                                        bg-white

                                        flex
                                        items-center
                                        justify-center
                                        gap-[8px]
                                    "
                                >

                                    <span
                                        className="text-[17.62px] text-black"
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Get started
                                    </span>

                                    <Image
                                        src="/icons/arrow-left.svg"
                                        alt="Arrow"
                                        width={14}
                                        height={14}
                                        className="w-[28.19047737121582px] h-[28.19047737121582px]"
                                    />
                                </button>

                                <div className="mt-[12px]">

                                    <h4
                                        className="text-[17.62px] pl-[15px]"
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 400,
                                        }}
                                    >
                                        Includes:
                                    </h4>

                                    <div className="ml-[15px] mt-[8px] space-y-[9px] w-[297.7826232910156px] h-[241.2392578125px]">

                                        {[
                                            "6 washes + 2 interior",
                                            "Tire & rim care",
                                            "Priority dispatch",
                                            "Up to 2 vehicles",
                                            "Free fragrance refresh",
                                            "Detailed usage reports",
                                        ].map((feature) => (

                                            <div
                                                key={feature}
                                                className="flex items-center gap-[6px]"
                                            >

                                                <Image
                                                    src="/icons/tick.svg"
                                                    alt="Tick"
                                                    width={10}
                                                    height={10}
                                                    className="w-[17.619049072265625px] h-[12.333333015441895px] opacity-[0.5] invert"
                                                />

                                                <span
                                                    className="text-[17.62px] leading-[2]"
                                                    style={{
                                                        fontFamily: "var(--font-inter), sans-serif",
                                                        fontWeight: 500,
                                                        opacity: 0.5,
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SAPPHIRE */}
                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-[14px]
                                
                                text-black
                            "
                            style={{
                                width: "100%",
                                height: "484.3904724121094px",
                                borderRadius: "20.69px",

                                background: `
                                    linear-gradient(#EAEBEB, #EAEBEB) padding-box,
                                    linear-gradient(
                                        180deg,
                                        #3FAEFF 0%,
                                        rgba(63, 174, 255, 0.45) 18%,
                                        rgba(63, 174, 255, 0.12) 48%,
                                        rgba(63, 174, 255, 0.06) 72%,
                                        #3FAEFF 100%
                                    ) border-box
                                `,

                                border: "1px solid transparent",
                            }}
                        >

                            <div className="px-[12px] pt-[22px]">

                                <h3
                                    className="text-[27.58px] pl-[10px]"
                                    style={{
                                        fontFamily: "var(--font-inter), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Sapphire
                                </h3>

                                <div className="mt-[12px] flex items-end">

                                    <span
                                        className="text-[37.92px] leading-none pl-[10px]"
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 700,
                                        }}
                                    >
                                        $199
                                    </span>

                                    <span
                                        className="ml-[2px] mb-[2px] text-[22.41px] opacity-[0.8]"
                                        style={{
                                            fontFamily: "var(--font-lato), sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        /month
                                    </span>
                                </div>

                                <button
                                    className="
                                        mt-[32px]
                                        ml-[25px]
                                        h-[55.161903381347656px]
                                        w-[310.28570556640625px]

                                        rounded-full

                                        border
                                        border-[#33AFFF]

                                        bg-white

                                        flex
                                        items-center
                                        justify-center
                                        gap-[8px]
                                    "
                                >

                                    <span
                                        className="text-[17.62px] text-black"
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Get started
                                    </span>

                                    <Image
                                        src="/icons/arrow-left.svg"
                                        alt="Arrow"
                                        width={14}
                                        height={14}
                                        className="w-[28.19047737121582px] h-[28.19047737121582px]"
                                    />
                                </button>

                                <div className="mt-[12px]">

                                    <h4
                                        className="text-[17.62px] pl-[15px]"
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 400,
                                        }}
                                    >
                                        Includes:
                                    </h4>

                                    <div className="ml-[15px] mt-[8px] space-y-[9px] w-[297.7826232910156px] h-[241.2392578125px]">

                                        {[
                                            "4 exterior washes / month",
                                            "Waterless eco wash",
                                            "Live tracking",
                                            "1 vehicle",
                                            "Apartment-safe",
                                        ].map((feature) => (

                                            <div
                                                key={feature}
                                                className="flex items-center gap-[6px]"
                                            >

                                                <Image
                                                    src="/icons/tick.svg"
                                                    alt="Tick"
                                                    width={10}
                                                    height={10}
                                                    className="w-[17.619049072265625px] h-[12.333333015441895px] opacity-[0.5] invert"
                                                />

                                                <span
                                                    className="text-[17.62px] leading-[2]"
                                                    style={{
                                                        fontFamily: "var(--font-inter), sans-serif",
                                                        fontWeight: 500,
                                                        opacity: 0.5,
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DIAMOND */}
                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-[14px]
                                
                                text-black
                            "
                            style={{
                                width: "100%",
                                height: "484.3904724121094px",
                                borderRadius: "20.69px",

                                background: `
                                    linear-gradient(#EAEBEB, #EAEBEB) padding-box,
                                    linear-gradient(
                                        180deg,
                                        #3FAEFF 0%,
                                        rgba(63, 174, 255, 0.45) 18%,
                                        rgba(63, 174, 255, 0.12) 48%,
                                        rgba(63, 174, 255, 0.06) 72%,
                                        #3FAEFF 100%
                                    ) border-box
                                `,

                                border: "1px solid transparent",
                            }}
                        >

                            <div className="px-[12px] pt-[22px]">

                                <h3
                                    className="text-[27.58px] pl-[10px]"
                                    style={{
                                        fontFamily: "var(--font-inter), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Diamond
                                </h3>

                                <div className="mt-[12px] flex items-end">

                                    <span
                                        className="text-[37.92px] leading-none pl-[10px]"
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 700,
                                        }}
                                    >
                                        $449
                                    </span>

                                    <span
                                        className="ml-[2px] mb-[2px] text-[22.41px] opacity-[0.8]"
                                        style={{
                                            fontFamily: "var(--font-lato), sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        /month
                                    </span>
                                </div>

                                <button
                                    className="
                                        mt-[32px]
                                        ml-[25px]
                                        h-[55.161903381347656px]
                                        w-[310.28570556640625px]

                                        rounded-full

                                        border
                                        border-[#33AFFF]

                                        bg-white

                                        flex
                                        items-center
                                        justify-center
                                        gap-[8px]
                                    "
                                >

                                    <span
                                        className="text-[17.62px] text-black"
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Get started
                                    </span>

                                    <Image
                                        src="/icons/arrow-left.svg"
                                        alt="Arrow"
                                        width={14}
                                        height={14}
                                        className="w-[28.19047737121582px] h-[28.19047737121582px]"
                                    />
                                </button>

                                <div className="mt-[12px]">

                                    <h4
                                        className="text-[17.62px] pl-[15px]"
                                        style={{
                                            fontFamily: "var(--font-inter), sans-serif",
                                            fontWeight: 400,
                                        }}
                                    >
                                        Includes:
                                    </h4>

                                    <div className="ml-[15px] mt-[8px] space-y-[9px] w-[297.7826232910156px] h-[241.2392578125px]">

                                        {[
                                            "8 washes + 1 detail",
                                            "Ceramic touch-ups",
                                            "Concierge manager",
                                            "Unlimited vehicles",
                                            "Quarterly clay bar",
                                        ].map((feature) => (

                                            <div
                                                key={feature}
                                                className="flex items-center gap-[6px]"
                                            >

                                                <Image
                                                    src="/icons/tick.svg"
                                                    alt="Tick"
                                                    width={10}
                                                    height={10}
                                                    className="w-[17.619049072265625px] h-[12.333333015441895px] opacity-[0.5] invert"
                                                />

                                                <span
                                                    className="text-[17.62px] leading-[2]"
                                                    style={{
                                                        fontFamily: "var(--font-inter), sans-serif",
                                                        fontWeight: 500,
                                                        opacity: 0.5,
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}