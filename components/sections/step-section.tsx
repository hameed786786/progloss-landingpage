"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function StepsSection() {

    const desktopRef = useRef<HTMLDivElement | null>(null);
    const mobileRef = useRef<HTMLDivElement | null>(null);

    /* ---------------- DESKTOP ANIMATION ---------------- */

    useEffect(() => {

        const ctx = gsap.context(() => {

            const car = document.querySelector(".desktop-moving-car") as HTMLElement;

            const wrapper = document.querySelector(".desktop-steps-wrapper") as HTMLElement;

            const targets = gsap.utils.toArray(".desktop-step-target") as HTMLElement[];

            if (!car || !wrapper || targets.length === 0) return;

            let scrollTriggerInstance: ScrollTrigger | null = null;

            function initTimeline() {

                if (scrollTriggerInstance) {
                    scrollTriggerInstance.kill();
                }

                const wrapperRect = wrapper.getBoundingClientRect();

                const carRect = car.getBoundingClientRect();

                const points = targets.map((target) => {

                    const rect = target.getBoundingClientRect();

                    return {
                        x:
                            rect.left -
                            wrapperRect.left +
                            rect.width / 2 -
                            carRect.width / 2,

                        y:
                            rect.top -
                            wrapperRect.top +
                            rect.height / 2 -
                            carRect.height / 2,
                    };
                });

                gsap.set(car, {
                    x: points[0].x,
                    y: points[0].y,
                    transformOrigin: "50% 50%",
                });

                scrollTriggerInstance = ScrollTrigger.create({
                    trigger: desktopRef.current,
                    start: "top top",
                    end: "bottom center",
                    scrub: 1.2,
                    invalidateOnRefresh: true,

                    animation: gsap.to(car, {
                        duration: 1,
                        ease: "none",

                        motionPath: {
                            path: points.slice(1),

                            curviness: 1.5,

                            autoRotate: {
                                target: car,
                                property: "rotation",
                                rotationOffset: -90,
                            },
                        },
                    }),
                });
            }

            const timeout = setTimeout(initTimeline, 150);

            window.addEventListener("resize", initTimeline);

            return () => {
                clearTimeout(timeout);
                window.removeEventListener("resize", initTimeline);
            };

        }, desktopRef);

        return () => ctx.revert();

    }, []);

    /* ---------------- MOBILE ANIMATION ---------------- */

    useEffect(() => {

        const ctx = gsap.context(() => {

            const car = document.querySelector(".mobile-moving-car") as HTMLElement;

            const wrapper = document.querySelector(".mobile-steps-wrapper") as HTMLElement;

            const targets = gsap.utils.toArray(".mobile-step-target") as HTMLElement[];

            if (!car || !wrapper || targets.length === 0) return;

            let scrollTriggerInstance: ScrollTrigger | null = null;

            function initTimeline() {

                if (scrollTriggerInstance) {
                    scrollTriggerInstance.kill();
                }

                const wrapperRect = wrapper.getBoundingClientRect();

                const carRect = car.getBoundingClientRect();

                const points = targets.map((target) => {

                    const rect = target.getBoundingClientRect();

                    return {
                        x:
                            rect.left -
                            wrapperRect.left +
                            rect.width / 2 -
                            carRect.width / 2,

                        y:
                            rect.top -
                            wrapperRect.top +
                            rect.height / 2 -
                            carRect.height / 2,
                    };
                });

                gsap.set(car, {
                    x: points[0].x,
                    y: points[0].y,
                    transformOrigin: "50% 50%",
                });

                scrollTriggerInstance = ScrollTrigger.create({
                    trigger: mobileRef.current,
                    start: "top top",
                    end: "bottom center",
                    scrub: 1.2,
                    invalidateOnRefresh: true,

                    animation: gsap.to(car, {
                        duration: 1,
                        ease: "none",

                        motionPath: {
                            path: points.slice(1),

                            curviness: 1.5,

                            autoRotate: {
                                target: car,
                                property: "rotation",
                                rotationOffset: -100,
                            },
                        },
                    }),
                });
            }

            const timeout = setTimeout(initTimeline, 150);

            window.addEventListener("resize", initTimeline);

            return () => {
                clearTimeout(timeout);
                window.removeEventListener("resize", initTimeline);
            };

        }, mobileRef);

        return () => ctx.revert();

    }, []);

    return (
        <>
            {/* ---------------- DESKTOP ---------------- */}

            <section
                ref={desktopRef}
                className="hidden md:block w-full bg-white overflow-hidden"
            >
                <div className="ml-[55px] px-[48px] pt-[84px] pb-[40px]">

                    {/* TAG */}
                    <div className="h-[34px] w-fit rounded-full border border-black px-[16px]">
                        <span
                            className="relative top-[2px] text-[13px] leading-none text-black"
                            style={{
                                fontFamily: "var(--font-lato), sans-serif",
                                fontWeight: 600,
                            }}
                        >
                            How it works
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2
                        className="mt-[28px] w-[980px] text-[62px] leading-[1.04] tracking-[-0.04em] text-black"
                        style={{
                            fontFamily: "var(--font-syne), sans-serif",
                            fontWeight: 700,
                        }}
                    >
                        Four steps to set-and-forget vehicle care.
                    </h2>

                    {/* WRAPPER */}
                    <div className="desktop-steps-wrapper relative mt-[120px]">

                        {/* MOVING CAR */}
                        <div
                            className="
                                desktop-moving-car
                                absolute
                                ml-[20px]
                                z-[50]
                                
                                will-change-transform
                                pointer-events-none
                            "
                        >
                            <Image
                                src="/images/hero-car.svg"
                                alt="Moving Car"
                                width={140}
                                height={140}
                                priority
                                className="w-[222.08277002108298px]
                                h-[107.66009829277886px] rotate-[-2deg] object-contain"
                            />
                        </div>

                        {/* STEP 1 */}
                        <div className="relative h-[180px]">

                            <div className="desktop-step-target absolute left-[20px] top-[-30px] w-[140px] h-[140px]" />

                            <div className="absolute left-[300px] top-[10px]">

                                <h3
                                    className="text-[40px] leading-none text-black"
                                    style={{
                                        fontFamily: "var(--font-syne), sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Add your vehicle
                                </h3>

                                <p
                                    className="mt-[18px] text-[16px] leading-[1.5] text-[#7A7A7A]"
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    UAE plate configurator. Make, model, paint type.
                                </p>
                            </div>
                        </div>

                        {/* STEP 2 */}
                        <div className="relative h-[220px]">

                            <div className="desktop-step-target absolute right-[10px] top-[0px] w-[140px] h-[140px]" />

                            <div className="absolute left-[560px] top-[40px]">

                                <h3
                                    className="text-[40px] leading-none text-black"
                                    style={{
                                        fontFamily: "var(--font-syne), sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Pin parking spot
                                </h3>

                                <p
                                    className="mt-[18px] text-[16px] leading-[1.5] text-[#7A7A7A]"
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Basement, floor and bay — saved for every visit.
                                </p>
                            </div>
                        </div>

                        {/* STEP 3 */}
                        <div className="relative h-[220px]">

                            <div className="desktop-step-target absolute left-[20px] top-[0px] w-[140px] h-[140px]" />

                            <div className="absolute left-[300px] top-[55px]">

                                <h3
                                    className="text-[40px] leading-none text-black"
                                    style={{
                                        fontFamily: "var(--font-syne), sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Choose subscription
                                </h3>

                                <p
                                    className="mt-[18px] text-[16px] leading-[1.5] text-[#7A7A7A]"
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Sapphire, Emerald or Diamond. Pause anytime.
                                </p>
                            </div>
                        </div>

                        {/* STEP 4 */}
                        <div className="relative h-[200px]">

                            <div className="desktop-step-target absolute right-[10px] top-[0px] w-[140px] h-[140px]" />

                            <div className="absolute left-[560px] top-[50px]">

                                <h3
                                    className="text-[40px] leading-none text-black"
                                    style={{
                                        fontFamily: "var(--font-syne), sans-serif",
                                        fontWeight: 600,
                                    }}
                                >
                                    Relax & shine
                                </h3>

                                <p
                                    className="mt-[18px] text-[16px] leading-[1.5] text-[#7A7A7A]"
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Track in real time. Walk back to a flawless car.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------------- MOBILE ---------------- */}

            <section
                ref={mobileRef}
                className="block md:hidden w-full bg-white overflow-hidden"
            >

                <div className="px-[20px] pt-[36px] pb-[60px]">

                    {/* TAG */}
                    <div
                        className="
                            h-[28px]
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
                                top-[1px]

                                text-[12px]
                                leading-none

                                text-black
                            "
                            style={{
                                fontFamily: "var(--font-lato), sans-serif",
                                fontWeight: 600,
                            }}
                        >
                            How it works
                        </span>
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
                            mt-[20px]

                            w-[362px]

                            text-[24px]
                            leading-[1.08]
                            tracking-[-0.04em]

                            text-black
                        "
                        style={{
                            fontFamily: "var(--font-syne), sans-serif",
                            fontWeight: 700,
                        }}
                    >
                        Four steps to set-and-forget vehicle care.
                    </h2>

                    {/* MOBILE WRAPPER */}
                    <div className="mobile-steps-wrapper relative mt-[78px]">

                        {/* MOVING CAR */}
                        <div
                            className="
                                mobile-moving-car

                                absolute
                                left-0
                                top-0

                                z-[50]

                                w-[88px]
                                h-[88px]

                                will-change-transform
                                pointer-events-none
                            "
                        >
                            <Image
                                src="/images/hero-car.svg"
                                alt="Moving Car"
                                width={88}
                                height={88}
                                priority
                                className="rotate-[-5deg] w-full h-full object-contain"
                            />
                        </div>

                        {/* STEP 1 */}
                        <div className="relative h-[150px]">

                            <div className="mobile-step-target absolute left-[8px] top-[-8px] w-[88px] h-[88px]" />

                            <div className="absolute left-[152px] top-[0px]">

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
                                    Add your vehicle
                                </h3>

                                <p
                                    className="
                                        mt-[18px]

                                        w-[220px]

                                        text-[16px]
                                        leading-[1.45]

                                        text-[#7A7A7A]
                                    "
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    UAE plate configurator. Make,
                                    model, paint type.
                                </p>
                            </div>
                        </div>

                        {/* STEP 2 */}
                        <div className="relative h-[150px]">

                            <div className="mobile-step-target absolute right-[0px] top-[-6px] w-[88px] h-[88px]" />

                            <div className="absolute left-[0px] top-[0px]">

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
                                    Pin parking spot
                                </h3>

                                <p
                                    className="
                                        mt-[18px]

                                        w-[230px]

                                        text-[16px]
                                        leading-[1.45]

                                        text-[#7A7A7A]
                                    "
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Basement, floor and bay — saved for every visit.
                                </p>
                            </div>
                        </div>

                        {/* STEP 3 */}
                        <div className="relative h-[150px]">

                            <div className="mobile-step-target absolute left-[8px] top-[-6px] w-[88px] h-[88px]" />

                            <div className="absolute left-[152px] top-[0px]">

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
                                    Choose subscription
                                </h3>

                                <p
                                    className="
                                        mt-[18px]

                                        w-[220px]

                                        text-[16px]
                                        leading-[1.45]

                                        text-[#7A7A7A]
                                    "
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Sapphire, Emerald or Diamond.
                                    Pause anytime.
                                </p>
                            </div>
                        </div>

                        {/* STEP 4 */}
                        <div className="relative h-[150px]">

                            <div className="mobile-step-target absolute right-[0px] top-[-6px] w-[88px] h-[88px]" />

                            <div className="absolute left-[0px] top-[0px]">

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
                                    Relax & shine
                                </h3>

                                <p
                                    className="
                                        mt-[18px]

                                        w-[240px]

                                        text-[16px]
                                        leading-[1.45]

                                        text-[#7A7A7A]
                                    "
                                    style={{
                                        fontFamily: "var(--font-lato), sans-serif",
                                        fontWeight: 500,
                                    }}
                                >
                                    Track in real time. Walk back to a flawless car.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}