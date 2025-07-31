"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  UploadCloud,
  Brain,
  Waves
} from "lucide-react";


const steps = [
  {
    id: 1,
    title: "Upload",
    step: "STEP 01",
    icon: UploadCloud,
    image: "step1.jpeg",
  },
  {
    id: 2,
    title: "Transcribe",
    step: "STEP 02",
    icon: Waves,
    image: "step2.jpeg",
  },
  {
    id: 3,
    title: "Analyze",
    step: "STEP 03",
    icon: Brain,
    image: "step3.jpeg",
  },
  {
    id: 4,
    title: "Insights",
    step: "STEP 04",
    icon: BarChart3,
    image: "step4.jpeg",
  },
];


export default function SolutionCarts() {
  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <section className="bg-[#060606] text-white pb-4 px-4 md:px-10">
      <div className="text-center mt-6">
  <h2 className="text-2xl md:text-4xl font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
    How <span className=" font-normal text-white">{" "}Convoze Works</span>
  </h2>
  <p className="text-gray-300 font-light text-lg md:text-xl max-w-4xl mx-auto">
    Convoze doesn’t just “listen” — it understands, evaluates, and guides your team at every moment, without interrupting their workflow.
  </p>

  {/* CTA Button */}
  <div className="mt-4">
    <button className="bg-gradient-to-r cursor-pointer from-purple-500 to-blue-500 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition duration-300">
      Try it yourself
    </button>
  </div>
</div>


      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row gap-12 items-start">
        {/* Left Side */}
        <div className="space-y-6 max-w-[18rem] w-full">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveStep(step)}
              className={`relative transition-all duration-300 rounded-2xl px-5 py-4 border cursor-pointer overflow-hidden group
                ${
                  activeStep.id === step.id
                    ? "border-purple-600"
                    : "border-zinc-700"
                }`}
            >
              <div className="absolute top-0 left-0 w-[150px] h-[150px] z-0" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="bg-gradient-to-r to-[#B462CE] from-[#3F2AB2] w-10 h-7 rounded-full flex items-center justify-center text-white">
                  <step.icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400 font-medium mb-1">
                    {step.step}
                  </h4>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side */}
        <div className="relative w-full flex-1 h-[300px] md:h-[440px]">
          {steps.map((step) => {
            const isActive = step.id === activeStep.id;
            return (
              <motion.img
                key={step.id}
                src={step.image}
                alt={step.title}
                className={`absolute inset-0 w-full h-full object-contain rounded-2xl shadow-lg transition-all duration-500
                  ${isActive ? "z-30 opacity-100 scale-105 " : "z-10 opacity-30 scale-[0.90]"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0.3 }}
                transition={{ duration: 0.5, delay: isActive ? 0.1 : 0 }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
