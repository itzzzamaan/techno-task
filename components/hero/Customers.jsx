// "use client";

// const logos = [
//   { src: "/logos/10web.svg", alt: "10Web" },
//   { src: "/logos/typewise.svg", alt: "Typewise" },
//   { src: "/logos/lavender.svg", alt: "Lavender" },
//   { src: "/logos/writesonic.svg", alt: "Writesonic" },
//   { src: "/logos/10web.svg", alt: "10Web Duplicate" },
//   { src: "/logos/typewise.svg", alt: "Typewise Duplicate" },
// ];

// const Customers = () => {
//   return (
//     <section className="w-full py-12 bg-[#0A0A0A] text-white text-center">
//       <h2 className="text-gray-400 text-base mb-8 font-medium tracking-wide">
//         Already chosen by the leaders
//       </h2>

//       <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 max-w-5xl mx-auto">
//         {logos.map((logo, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-2 min-w-[120px] justify-center"
//           >
//             <img
//               src={logo.src}
//               alt={logo.alt}
//               width={32}
//               height={32}
//               className="object-contain"
//             />
//             <span className="text-sm font-semibold text-white">
//               {logo.alt.split(" ")[0]}
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Customers;


"use client";

import {
  Cpu,
  Brain,
  PenTool,
  Code2,
  ServerCog,
  WandSparkles,
} from "lucide-react";

const logos = [
  { icon: Cpu, label: "10Web" },
  { icon: Brain, label: "Typewise" },
  { icon: PenTool, label: "Lavender" },
  { icon: WandSparkles, label: "Writesonic" },
  { icon: Code2, label: "10Web" },
  { icon: ServerCog, label: "Typewise" },
];

const Customers = () => {
  return (
    <section className="w-full pt-4 pb-8 bg-[#060606] text-white text-center">
      <h2 className="text-gray-400 text-base mb-8 font-medium tracking-wide">
        Already chosen by the leaders
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 max-w-5xl mx-auto">
        {logos.map((logo, index) => {
          const Icon = logo.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 min-w-[120px] justify-center"
            >
              <Icon className="w-6 h-6 text-purple-400" />
              <span className="text-sm font-semibold text-white">
                {logo.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Customers;

