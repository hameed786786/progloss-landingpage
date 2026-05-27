"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">

      {/* ───────────────── DESKTOP HERO ───────────────── */}
      <div className="hidden md:block bg-white">

        {/* HERO TEXT + CAR BLOCK */}
        <div className="relative w-full h-[520px]">

          {/* LUXURY */}
          <h1
            className="absolute top-0 left-0 w-full text-center z-0 select-none leading-none tracking-tight text-black"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "236px",
            }}
          >
            LUXURY
          </h1>

          {/* CAR */}
          <div
            className="
              absolute
              z-10
              pointer-events-none
              animate-[carDriveIn_5s_cubic-bezier(0.16,1,0.3,1)_forwards]
            "
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -48%)",
              width: "700px",
              height: "350px",
            }}
          >
            <Image
              src="/images/hero-car.svg"
              alt="Luxury Car"
              width={860}
              height={420}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* CAR WASH */}
          <h2
            className="absolute bottom-[-30px] left-[-10px] w-full text-center z-0 select-none tracking-[0.03em]"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 700,
              fontSize: "200px",
              color: "#E9E9E9",
            }}
          >
            CAR WASH
          </h2>
        </div>

        {/* DESCRIPTION + CTA */}
        <div
          className="relative w-full px-[80px]"
          style={{
            marginTop: "32px",
            paddingBottom: "48px",
            height: "90px",
          }}
        >

          {/* DESCRIPTION */}
          <p
            className="absolute left-[102px] top-0"
            style={{
              width: "298px",
              fontFamily: "Lato, sans-serif",
              fontWeight: 500,
              color: "#757575",
              fontSize: "16px",
              lineHeight: "160%",
              margin: 0,
            }}
          >
            Premium eco car care for Dubai homes, communities,
            and workplaces apartment-safe, municipality-compliant,
            concierge-level convenience.
          </p>

          {/* BUTTON */}
          <button
            className="
              absolute
              right-[80px]
              top-0

              h-[56px]
              w-[226px]

              rounded-[999px]
              bg-black
            "
          >
            <span
              className="
                absolute
                left-[24px]
                top-1/2
                -translate-y-1/2

                text-[16px]
                text-white
              "
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                fontWeight: 600,
              }}
            >
              Subscription Plan
            </span>

            <span
              className="
                absolute
                right-[6px]
                top-1/2
                -translate-y-1/2

                w-[44px]
                h-[44px]

                rounded-full
                bg-white
              "
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#000"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* STATS BAR */}
        <div className="w-full px-[80px]">
          <div className="w-full border-t border-[#EAEAEA]" />
        </div>

        {/* STATS */}
        <div className="relative w-full h-[170px]">

          {/* LEFT */}
          <div className="absolute left-[100px] top-[42px]">

            <span
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 600,
                fontSize: "105px",
                fontStyle: "semibold",
                lineHeight: "76px",
                color: "#111111",
              }}
            >
              1
            </span>
            <span
              style={{
                bottom: "12px",
                display: "inline-block",
                fontFamily: "var(--font-syne)",
                fontWeight: 600,
                fontSize: "95px",
                fontStyle: "semibold",
                lineHeight: "76px",
                color: "#111111",
              }}
            >
              4
            </span>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-syne)",
                fontWeight: 600,
                fontSize: "80px",
                fontStyle: "semibold",
                lineHeight: "76px",
                color: "#111111",
              }}
            >
              M
            </span>

            <span
              className="absolute left-[205px] top-[20px]"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "28px",
                color: "#9B9B9B",
                whiteSpace: "nowrap",
              }}
            >
              Cars
              <br />
              serviced
            </span>
          </div>

          {/* CENTER */}
          <div
            className="absolute"
            style={{
              left: "48%",
              top: "42px",
              transform: "translateX(-50%)",
            }}
          >
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 600,
                fontSize: "105px",
                lineHeight: "76px",
                color: "#111111",
              }}
            >
              1.2
            </span>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 600,
                fontSize: "80px",
                lineHeight: "76px",
                color: "#111111",
              }}
            >
              M
            </span>

            <span
              className="absolute left-[215px] top-[34px]"
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "28px",
                color: "#9B9B9B",
                whiteSpace: "nowrap",
              }}
            >
              Communities
            </span>
          </div>

          {/* RIGHT */}
          <div className="absolute right-[160px] top-[32px]">

            <span
              className="block"
              style={{
                fontFamily: "var(--font-lato), sans-serif", 
                fontWeight:600,
                fontSize: "76px",
                lineHeight: "",
                color: "#111111",
              }}
            >
              89%
            </span>

            <span
              className="absolute left-[175px] top-[32px]"
              style={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "28px",
                color: "#9B9B9B",
                whiteSpace: "nowrap",
              }}
            >
              Liters
              <br />
              saved
            </span>
          </div>
        </div>
      </div>

      {/* ───────────────── MOBILE HERO ───────────────── */}
      <div className="block md:hidden bg-white overflow-hidden">

        {/* HERO WRAPPER */}
        <div className="relative w-full h-[660px]">

          {/* LUXURY */}
          <h1
            className="
              absolute
              top-[-6px]
              left-1/2
              -translate-x-1/2
              text-center
              tracking-[0.04em]
              text-black
            "
            style={{
              width: "294px",
              height: "77px",
              opacity: 1,
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 600,
              fontSize: "64px",
              lineHeight: "100%",
            }}
          >
            LUXURY
          </h1>

          {/* CAR WASH */}
          <h2
            className="
              absolute
              top-[66px]
              left-1/2
              -translate-x-1/2
              text-center
              tracking-[0.04em]
              text-[#E8E8E8]
            "
            style={{
              width: "393px",
              height: "58px",
              opacity: 1,
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 600,
              fontSize: "48px",
              lineHeight: "100%",
            }}
          >
            CAR WASH
          </h2>

          {/* CAR */}
          <div
            className="
              absolute
              left-1/2
              top-[120px]
              -translate-x-1/2

              w-[150px]

              animate-[carDriveInMobile_4s_cubic-bezier(0.16,1,0.3,1)_forwards]
            "
          >
            <Image
              src="/images/mobile-car.jpg"
              alt="Luxury Car"
              width={420}
              height={420}
              priority
              className="
                w-full
                h-auto
                object-contain
              "
            />
          </div>

          {/* DESCRIPTION */}
          <p
            className="absolute text-center"
            style={{
              top: "455px",
              left: "35px",
              width: "322px",
              height: "76px",
              opacity: 1,
              fontFamily: "var(--font-lato), sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#7A7A7A",
              margin: 0,
            }}
          >
            Premium eco car care for Dubai homes, communities, and workplaces apartment-safe, municipality-compliant, concierge-level convenience.
          </p>

          {/* BUTTON */}
          <button
            className="
              absolute
              left-1/2
              top-[555px]
              -translate-x-1/2

              h-[56px]
              w-[236px]

              rounded-full
              bg-black
            "
          >
            <span
              className="
                absolute
                left-[24px]
                top-1/2
                -translate-y-1/2

                text-[16px]
                text-white
              "
              style={{
                fontFamily: "var(--font-lato), sans-serif",
                fontWeight: 600,
              }}
            >
              Subscription Plan
            </span>

            {/* ARROW */}
            <div
              className="
                absolute
                right-[5px]
                top-1/2
                -translate-y-1/2

                h-[46px]
                w-[46px]

                rounded-full
                bg-white
              "
            >
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="#000"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* MOBILE STATS */}
        <div className="w-full px-[20px] pb-[40px]">
          {/* DIVIDER */}
          <div className="w-full border-t border-[#EAEAEA] mb-[30px]" />

          <div className="relative w-full flex flex-col items-center gap-[30px]">
            {/* TOP ROW */}
            <div className="flex justify-between items-center w-full px-[10px]">
              {/* LEFT */}
              <div className="flex items-center gap-[8px]">
                <span
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "100%",
                    color: "#111111",
                  }}
                >
                  14M
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "1.2",
                    color: "#9B9B9B",
                  }}
                >
                  Cars
                  <br />
                  serviced
                </span>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-[8px]">
                <span
                  style={{
                    fontFamily: "var(--font-syne), sans-serif",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "100%",
                    color: "#111111",
                  }}
                >
                  89%
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-lato), sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "1.2",
                    color: "#9B9B9B",
                  }}
                >
                  Liters
                  <br />
                  saved
                </span>
              </div>
            </div>

            {/* BOTTOM CENTER */}
            <div className="mt-[10px] ml-[-10px] gap-[8px]">
              <span
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "100%",
                  color: "#111111",
                }}
              >
                1.2M
              </span>
              <span
                style={{
                  paddingLeft: "8px",
                  fontFamily: "var(--font-lato), sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "0.5",
                  color: "#9B9B9B",
                }}
              >
                Communities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}