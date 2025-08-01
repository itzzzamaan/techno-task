"use client";

import { motion } from "framer-motion";
import { Cpu, TrendingUp, BarChart, LineChart } from "lucide-react";


const stats = [
   {
    value: "100%",
    label: "Call Reviews",
    icon: BarChart,
  },
  {
    value: "60%",
    label: "less time spent on manual QA",
    icon: Cpu,
  },
  {
    value: "35%",
    label: "Increase in CSAT",
    icon: TrendingUp,
  },
  // {
  //   value: "2X",
  //   label: "Agent Coaching Efficiency",
  //   icon: LineChart,
  // },
];


const StatsCart = () => {
  return (
    <section className="w-full bg-[#060606] text-white px-4 md:pt-20">
      {/* <div className="max-w-[52rem] mx-auto text-center mb-14 px-4">
        <p className="text-xl md:text-2xl font-light leading-relaxed text-white">
          You’re only hearing 3% of the story. That’s a big risk. With Convoze,
          you analyze <span className="font-semibold">100%</span> of your
          customer calls using powerful AI that listens, understands, and
          summarizes in real-time — so nothing falls through the cracks.
        </p>
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="relative bg-[#0A0A0A] rounded-2xl px-6 py-10 pt-8 text-center border border-white/10 transition duration-300 shadow-lg hover:shadow-purple-500/10"
          >
            <div className="absolute top-4 right-4">
              <div className="md:w-18 md:h-18 w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center shadow-md">
              <item.icon className="md:w-10 md:h-10 w-8 h-8 text-white" />

              </div>
            </div>

            <div className="text-3xl text-start font-normal text-white mb-2">
              {item.value}
            </div>
            <div className="text-sm text-start text-gray-300">{item.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsCart;
