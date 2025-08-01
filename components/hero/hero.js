import React from "react";
import Orb from "../org";
import { cn } from "./lib/utils";

const Hero = () => {
  return (
    <div className="relative md:mt-0 -mt-10">
      {/* Top gradient (light to transparent) */}
      <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#060606] to-transparent z-10 pointer-events-none" />

      {/* Bottom gradient (light to transparent) */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#060606] to-transparent z-10 pointer-events-none" />

      {/* Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:50px_50px] select-none opacity-70",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      {/* Half Circle Overlay with mask */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[350px] w-full flex justify-center overflow-hidden pointer-events-none"
        style={{
          maskImage: "linear-gradient(to top, white, transparent)",
          WebkitMaskImage: "linear-gradient(to top, white, transparent)",
          maskSize: "100% 100%",
          WebkitMaskSize: "100% 100%",
        }}
      >
        <div className="relative w-[700px] h-[700px]">
          <div className="absolute inset-0 rounded-full border-[20px] border-[#2F2F2F] opacity-5" />
          <div className="absolute inset-6 rounded-full border-[20px] border-[#2F2F2F] opacity-15" />
          <div className="absolute inset-0 rounded-full border-[20px] border-[#2F2F2F] opacity-5" />
        </div>
      </div>

      {/* Orb + Hero Content */}
      <div className="w-full md:h-[580px] h-[420px] md:-mt-6 relative flex items-center justify-center overflow-hidden">
        {/* Orb */}
        <Orb
          className="md:mt-0 -mt-40"
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />

        {/* Text Content */}
        <div className="absolute z-20 text-center md:mt-0 mt-4 md:max-w-4xl px-2 md:px-4">
          <h1 className="text-lg md:text-[40px] md:px-0 px-4 font-normal text-white leading-tight">
            97% of customer support {" "}
            <br className="hidden md:block" />
            conversations go unheard. <br className="hidden md:block" /> Only 3%
            get reviewed.
          </h1>

          <p className="text-gray-300 text-xs md:text-base mt-4 font-normal max-w-5xl mx-auto">
            Convoze AI analyses 100% of calls, flags compliance risks & delivers
            actionable insights to CX, QA & compliance teams reducing churn,
            cutting review time & driving smarter decisions in real time.
          </p>

          <div className="md:mt-8 mt-4 font-light md:text-base text-xs flex flex-row justify-center items-center gap-2 md:gap-4">
            <button className="bg-black cursor-pointer text-white border border-purple-500 md:px-4 px-3 md:py-3 py-2 rounded-full font-normal hover:bg-white hover:text-black transition-all duration-300">
              Book a Demo
            </button>
            <button className="bg-gradient-to-r from-[#C068D1] to-[#3224AF]  cursor-pointer text-white md:px-4 px-3 md:py-3 py-2 rounded-full font-normal hover:opacity-90 transition-all duration-300">
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
