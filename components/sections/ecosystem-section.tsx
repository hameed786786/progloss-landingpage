"use client";

import Image from "next/image";

export default function EcosystemSection() {
    return (
        <section className="w-full bg-white">

            {/* DESKTOP */}
            <div className="hidden md:block">

                <div className="pl-[100px] pr-[42px] pt-[72px] pb-[72px]">

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
                            Why Progloss
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                            mt-[28px]
                            w-[1240px]
                            text-[56px]
                            leading-[1.06]
                            tracking-[0.01em]
                            text-black
                        "
                        style={{
                            fontFamily: "var(--font-syne), sans-serif",
                            fontWeight: 600,
                        }}
                    >
                        A premium care ecosystem,
                        built for Dubai living.
                    </h2>

                    {/* GRID */}
                    <div className="ml-[40px] mt-[54px] w-[1234px]">

                        {/* ROW 1 */}
                        <div className="grid grid-cols-[517px_699px] gap-[18px]">

                            {/* ECO SMART */}
                            <div
                                className="
                                    relative
                                    h-[443px]
                                    overflow-hidden
                                    rounded-[26px]
                                    bg-gradient-to-bl from-[#0085C1] from-60% to-[#c4edff] to-100%
                                "
                            >
                                <div className="absolute left-[28px] top-[26px]">

                                    <h3
                                        className="
                                            text-[32px]
                                            leading-none
                                            text-white
                                        "
                                        style={{
                                            fontFamily: "var(--font-syne), sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Eco-smart cleaning
                                    </h3>

                                    <p
                                        className="
                                            mt-[16px]
                                            w-[250px]
                                            text-[13px]
                                            leading-[1.55]
                                            text-white/85
                                        "
                                        style={{
                                            fontFamily: "var(--font-lato), sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Waterless and minimal-water systems engineered
                                        for premium paint. Up to 95% less water vs
                                        traditional wash.
                                    </p>
                                </div>

                                <div className="absolute bottom-[-10px] right-[15px] w-[409px] h-[254px]">
                                    <Image
                                        src="/images/image 36.svg"
                                        alt="Eco Smart Cleaning"
                                        width={409}
                                        height={254}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>

                            {/* RIGHT STACK */}
                            <div className="grid grid-rows-2 gap-[18px]">

                                {/* LEGAL */}
                                <div
                                    className="
                                        relative
                                        h-[209.5px]
                                        rounded-[26px]
                                        bg-[#F3F3F3]
                                    "
                                >
                                    <div className="absolute left-[26px] top-[30px]">

                                        <h3
                                            className="
                                                text-[28px]
                                                leading-none
                                                text-black
                                            "
                                            style={{
                                                fontFamily: "var(--font-syne), sans-serif",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Legal residential washing
                                        </h3>

                                        <p
                                            className="
                                                mt-[16px]
                                                text-[13px]
                                                leading-[1.5]
                                                text-[#777]
                                            "
                                            style={{
                                                fontFamily: "var(--font-lato), sans-serif",
                                                fontWeight: 500,
                                            }}
                                        >
                                            Runoff-free. Community-safe. Dubai-friendly.
                                        </p>
                                    </div>
                                </div>

                                {/* SUBSCRIPTION */}
                                <div
                                    className="
                                        relative
                                        h-[209.5px]
                                        rounded-[26px]
                                        bg-[#F3F3F3]
                                    "
                                >
                                    <div className="absolute left-[26px] top-[30px]">

                                        <h3
                                            className="
                                                text-[28px]
                                                leading-none
                                                text-black
                                            "
                                            style={{
                                                fontFamily: "var(--font-syne), sans-serif",
                                                fontWeight: 600,
                                            }}
                                        >
                                            Subscription convenience
                                        </h3>

                                        <p
                                            className="
                                                mt-[16px]
                                                text-[13px]
                                                leading-[1.5]
                                                text-[#777]
                                            "
                                            style={{
                                                fontFamily: "var(--font-lato), sans-serif",
                                                fontWeight: 500,
                                            }}
                                        >
                                            Set, forget, shine. Pause, upgrade or skip anytime.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ROW 2 */}
                        <div className="grid grid-cols-[396px_400px_396px] gap-[18px] mt-[18px]">

                            {/* LIVE */}
                            <div
                                className="
                                    relative
                                    h-[344px]
                                    rounded-[26px]
                                    bg-[#F3F3F3]
                                "
                            >
                                <div className="absolute left-[26px] bottom-[28px]">

                                    <h3
                                        className="
                                            text-[28px]
                                            leading-none
                                            text-black
                                        "
                                        style={{
                                            fontFamily: "var(--font-syne), sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Live tracking
                                    </h3>

                                    <p
                                        className="
                                            mt-[16px]
                                            text-[13px]
                                            leading-[1.5]
                                            text-[#777]
                                        "
                                        style={{
                                            fontFamily: "var(--font-lato), sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Real visibility, full transparency
                                    </p>
                                </div>
                            </div>

                            {/* PAINT */}
                            <div
                                className="
                                    relative
                                    h-[344px]
                                    overflow-hidden
                                    rounded-[26px]
                                    bg-[#009BE3]
                                "
                            >
                                <div className="absolute left-[20px] top-[22px]">

                                    <h3
                                        className="
                                            text-[28px]
                                            leading-none
                                            text-white
                                        "
                                        style={{
                                            fontFamily: "var(--font-syne), sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Paint protection
                                    </h3>

                                    <p
                                        className="
                                            mt-[12px]
                                            text-[13px]
                                            leading-[1.5]
                                            text-white/85
                                        "
                                        style={{
                                            fontFamily: "var(--font-lato), sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Premium detailing ecosystem.
                                    </p>
                                </div>

                                <div className="absolute bottom-[6px] right-[-8px] w-[357px] h-[235px]">
                                    <Image
                                        src="/images/bro.svg"
                                        alt="Paint Protection"
                                        width={357}
                                        height={235}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>

                            {/* MULTI */}
                            <div
                                className="
                                    relative
                                    h-[344px]
                                    rounded-[26px]
                                    bg-[#F3F3F3]
                                "
                            >
                                <div className="absolute left-[26px] bottom-[28px]">

                                    <h3
                                        className="
                                            text-[28px]
                                            leading-none
                                            text-black
                                        "
                                        style={{
                                            fontFamily: "var(--font-syne), sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Multi-car garage
                                    </h3>

                                    <p
                                        className="
                                            mt-[16px]
                                            text-[13px]
                                            leading-[1.5]
                                            text-[#777]
                                        "
                                        style={{
                                            fontFamily: "var(--font-lato), sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        One household, every vehicle.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* ROW 3 */}
                        <div className="grid grid-cols-[608px_608px] gap-[18px] mt-[18px]">

                            {/* COMPLIANCE */}
                            <div
                                className="
                                    relative
                                    h-[344px]
                                    rounded-[26px]
                                    bg-[#F3F3F3]
                                "
                            >
                                <div className="absolute left-[26px] bottom-[28px]">

                                    <h3
                                        className="
                                            text-[28px]
                                            leading-none
                                            text-black
                                        "
                                        style={{
                                            fontFamily: "var(--font-syne), sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Compliance ready
                                    </h3>

                                    <p
                                        className="
                                            mt-[16px]
                                            text-[13px]
                                            leading-[1.5]
                                            text-[#777]
                                        "
                                        style={{
                                            fontFamily: "var(--font-lato), sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Avoid municipality concerns and community escalations.
                                    </p>
                                </div>
                            </div>

                            {/* SMART */}
                            <div
                                className="
                                    relative
                                    h-[344px]
                                    overflow-hidden
                                    rounded-[26px]
                                    bg-[#CBEFFF]
                                "
                            >
                                <div className="absolute left-[26px] top-[26px]">

                                    <h3
                                        className="
                                            text-[28px]
                                            leading-none
                                            text-black
                                        "
                                        style={{
                                            fontFamily: "var(--font-syne), sans-serif",
                                            fontWeight: 600,
                                        }}
                                    >
                                        Smart recommendations
                                    </h3>

                                    <p
                                        className="
                                            mt-[16px]
                                            w-[290px]
                                            text-[13px]
                                            leading-[1.5]
                                            text-[#5F5F5F]
                                        "
                                        style={{
                                            fontFamily: "var(--font-lato), sans-serif",
                                            fontWeight: 500,
                                        }}
                                    >
                                        Intelligent care suggestions, based on your vehicle's history.
                                    </p>
                                </div>

                                <div className="absolute bottom-[-12px] right-[-8px] w-[528px] h-[278px]">
                                    <Image
                                        src="/images/BmwPic.svg"
                                        alt="Smart Recommendations"
                                        width={528}
                                        height={278}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE */}
            <div className="block md:hidden w-full bg-white">

                <div className="px-[8px] pt-[28px] pb-[40px]">

                    {/* TAG */}
                    <div
                        className="
                            h-[28px]
                            w-fit
                            ml-[5px]
                            rounded-full
                            border
                            border-black

                            px-[12px]
                        "
                    >
                        <span
                            className="
                                relative
                                top-[1px]

                                text-[12px]
                                leading-none

                                text-black
                            "
                            style={{
                                fontFamily: "var(--font-lato), sans-serif",
                                fontWeight: 400,
                            }}
                        >
                            Why Progloss
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                            mt-[16px]
                            ml-[5px]
                            w-[320px]

                            text-[22px]
                            leading-[1.15]
                            tracking-[-0.03em]

                            text-black
                        "
                        style={{
                            fontFamily: "var(--font-syne), sans-serif",
                            fontWeight: 600,
                        }}
                    >
                        A premium care ecosystem,
                        built for Dubai living.
                    </h2>

                    {/* STACK */}
                    <div className="mt-[50px] space-y-[30px]">

                        {/* ECO */}
                        <div
                            className="
                                relative
                                h-[310px]
                                overflow-hidden
                                rounded-[27px]
                                bg-gradient-to-bl from-[#0085C1] from-40% to-[#c4edff] to-100%
                                "
                        >
                            <div className="absolute left-[26px] top-[16px]">

                                <h3
                                    className="
                                        text-[20px]
                                        leading-none
                                        pt-[10px]
                                        pl-[10px]
                                        text-white
                                    "
                                    style={{
                                        fontFamily: "var(--font-syne), sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Eco-smart cleaning
                                </h3>

                                <p
                                    className="
                                        mt-[10px]
                                        pl-[10px]
                                        w-[308.6004638671875px]

                                        text-[14px]
                                        leading-[1.45]

                                        text-white/85
                                    "
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Waterless and minimal-water systems engineered
                                    for premium paint.Up to 95% less water vs traditional wash.
                                </p>
                            </div>

                            <div className="absolute bottom-[-6px] right-[4px] w-[286.3764343261719px] h-[177.89132690429688px]">
                                <Image
                                    src="/images/image 36.svg"
                                    alt="Eco Smart Cleaning"
                                    width={286.3764343261719}
                                    height={177.89132690429688}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* LEGAL */}
                        <div
                            className="
                                relative
                                h-[115px]
                                flex 
                                justify-center
                                items-center
                                rounded-[40px]
                                bg-[#F3F3F3]
                            "
                        >
                            <div className="absolute left-[26px] top-[28px]">

                                <h3
                                    className="
                                        text-[20px]
                                        leading-none

                                        text-black
                                    "
                                    style={{
                                        fontFamily: "var(--font-syne), sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Legal residential washing
                                </h3>

                                <p
                                    className="
                                        mt-[20px]
                                        text-[14px]
                                        w-[284px]
                                        h-[17px]

                                        text-[#777]
                                    "
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Runoff-free. Community-safe. Dubai-friendly.
                                </p>
                            </div>
                        </div>

                        {/* SUBSCRIPTION */}
                        <div
                            className="
                                relative
                                h-[115px]
                                flex 
                                justify-center
                                items-center
                                rounded-[40px]
                                bg-[#F3F3F3]
                            "
                        >
                            <div className="absolute left-[26px] top-[16px]">

                                <h3
                                    className="
                                        text-[20px]
                                        leading-none

                                        text-black
                                    "
                                    style={{
                                        fontFamily: "var(--font-syne), sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Subscription convenience
                                </h3>

                                <p
                                    className="
                                        mt-[20px]
                                        text-[14px]
                                        w-[305px]
                                        h-[17px]
                                        leading-[1.45]

                                        text-[#777]
                                    "
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Set, forget, shine. Pause, upgrade or skip anytime.
                                </p>
                            </div>
                        </div>

                        {/* PAINT */}
                        <div
                            className="
                                relative
                                h-[311.3199768066406px]
                                
                                overflow-hidden
                                rounded-[40px]

                                bg-[#159AD5]
                            "
                        >
                            <div className="absolute left-[26px] top-[16px]">

                                <h3
                                    className="
                                        mt-[25px]
                                        text-[28.96px]
                                        leading-none

                                        text-white
                                    "
                                    style={{
                                        fontFamily: "var(--font-syne), sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Paint protection
                                </h3>

                                <p
                                    className="
                                        mt-[10px]

                                        text-[18.1px]
                                        leading-[1.45]

                                        text-white/85
                                    "
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Premium detailing ecosystem.
                                </p>
                            </div>

                            <div className="absolute bottom-[0px] right-[28px] w-[322.97406005859375px] h-[212.74806213378906px]">
                                <Image
                                    src="/images/bro.svg"
                                    alt="Paint Protection"
                                    width={210}
                                    height={140}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* LIVE */}
                        <div
                            className="
                                relative
                                h-[115px]
                                flex 
                                justify-center
                                items-center
                                rounded-[40px]
                                bg-[#F3F3F3]
                            "
                        >
                            <div className="absolute left-[26px] top-[28px]">

                                <h3
                                    className="
                                        text-[20px]
                                        leading-none

                                        text-black
                                    "
                                    style={{
                                        fontFamily: "var(--font-syne), sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Live tracking
                                </h3>

                                <p
                                    className="
                                        mt-[20px]
                                        text-[14px]
                                        w-[305px]
                                        h-[17px]
                                        leading-[1.45]

                                        text-[#777]
                                    "
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Real visibility, full transparency
                                </p>
                            </div>
                        </div>

                        {/* MULTI */}
                        <div
                            className="
                                relative
                                h-[115px]
                                flex 
                                justify-center
                                items-center
                                rounded-[40px]
                                bg-[#F3F3F3]
                            "
                        >
                            <div className="absolute left-[26px] top-[28px]">

                                <h3
                                    className="
                                         text-[20px]
                                        leading-none

                                        text-black
                                    "
                                    style={{
                                        fontFamily: "var(--font-syne), sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Multi-car garage
                                </h3>

                                <p
                                    className="
                                        mt-[20px]
                                        text-[14px]
                                        w-[305px]
                                        h-[17px]
                                        leading-[1.45]

                                        text-[#777]
                                    "
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    One household, every vehicle.
                                </p>
                            </div>
                        </div>

                        {/* COMPLIANCE */}
                        <div
                            className="
                                relative
                                h-[115px]
                                flex 
                                justify-center
                                items-center
                                rounded-[40px]
                                bg-[#F3F3F3]
                            "
                        >
                            <div className="absolute left-[26px] top-[28px]">

                                <h3
                                    className="
                                        text-[20px]
                                        leading-none

                                        text-black
                                    "
                                    style={{
                                        fontFamily: "var(--font-syne), sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Compliance ready
                                </h3>

                                <p
                                    className="
                                        mt-[20px]
                                        text-[14px]
                                        w-[305px]
                                        h-[17px]
                                        leading-[1.45]

                                        text-[#777]
                                    "
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Avoid municipality concerns and community escalations.
                                </p>
                            </div>
                        </div>

                        {/* SMART */}
                        <div
                            className="
                                relative
                                h-[344px]

                                overflow-hidden
                                rounded-[20px]

                                bg-[#CBEFFF]
                            "
                        >
                            <div className="absolute left-[26px] top-[36px]">

                                <h3
                                    className="
                                        text-[20px]
                                        leading-none
                                        
                                        text-black
                                    "
                                    style={{
                                        fontFamily: "var(--font-syne), sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Smart recommendations
                                </h3>

                                <p
                                    className="
                                        mt-[20px]
                                        text-[14px]
                                        w-[305px]
                                        h-[17px]
                                        leading-[1.45]

                                        text-[#5F5F5F]
                                    "
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Intelligent care suggestions, based on your vehicle's history.
                                </p>
                            </div>

                            <div className="absolute bottom-[34px] left-[76px] w-[528px] h-[278px]">
                                <Image
                                    src="/images/BmwPic.svg"
                                    alt="Smart Recommendations"
                                    width={220}
                                    height={130}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}