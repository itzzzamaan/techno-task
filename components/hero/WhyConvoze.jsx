import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  TrendingDown,
  Clock,
  Shield,
  Heart,
  DollarSign,
  Users,
  MessageSquare,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  BarChart,
  Phone,
  DiscIcon,
  Link,
  Unlink,
} from "lucide-react";

const WhyConvoze = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const [hoveredProblem, setHoveredProblem] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    // Auto-cycle through stats
    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const wastedStats = [
    {
      percentage: "95%",
      label: "Conversations Wasted",
      description: "In traditional contact centers",
      icon: MessageSquare,
    },
    {
      percentage: "<5%",
      label: "Calls Reviewed",
      description: "Through manual QA coverage",
      icon: Phone,
    },
    {
      percentage: "Timing Gap",
      label: "Delayed Coaching",
      description: "Agent feedback timing",
      icon: Clock,
    },
    {
      percentage: "Disconnect",
      label: "Customer Sentiment",
      description: "Is misunderstood or ignored",
      icon: Unlink,
    },
  ];

  const problems = [
    {
      icon: Shield,
      title: "Compliance Risks",
      description: "Go unnoticed until escalation",
      impact: "Millions in fines",
      delay: 0,
    },
    {
      icon: TrendingDown,
      title: "Poor QA = Churn",
      description: "Drives customers away",
      impact: "40% higher churn",
      delay: 0.1,
    },
    {
      icon: Clock,
      title: "Delayed Feedback",
      description: "Kills team growth",
      impact: "50% slower development",
      delay: 0.2,
    },
    {
      icon: DollarSign,
      title: "Missed Compliance",
      description: "Breaches cost millions",
      impact: "Zero ROI on calls",
      delay: 0.3,
    },
  ];

  return (
    <div className="min-h-screen bg-[#060606] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 lg:pt-8">
        {/* Header Section */}
        <div
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-2xl lg:text-4xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
            Why
            <span className=" font-normal text-white"> Convoze?</span>
          </h1>
        </div>

        {/* Animated Stats Showcase */}
        <div
          className={`mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {wastedStats.map((stat, index) => {
              const Icon = stat.icon;
              const isActive = activeStatIndex === index;

              return (
                <div
                  key={index}
                  className={`relative p-6 lg:p-8 rounded-2xl transition-all duration-700 cursor-pointer
                    ${
                      isActive
                        ? "bg-gradient-to-br from-purple-900/40 to-indigo-900/60 scale-105 shadow-xl"
                        : "bg-gradient-to-br from-gray-800/50 to-gray-900/80 hover:scale-102"
                    }
                  `}
                  onClick={() => setActiveStatIndex(index)}
                >
                  <div className="text-start">
                    <div className="flex items-start gap-6">
                      <div className="w-6 h-6 mb-4 ">
                        <Icon className="w-full mt-1 h-full text-white" />
                      </div>

                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-white">
                        {stat.percentage}
                      </div>
                    </div>

                    <h3 className="text-lg font-medium text-white mb-2">
                      {stat.label}
                    </h3>

                    <p className="text-gray-400 text-sm">{stat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Problem Section */}
        <div
          className={`mb-10 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-light text-white mb-4">
              This isn't just inefficient — it's expensive
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              const isHovered = hoveredProblem === index;

              return (
                <div
                  key={index}
                  className={`group transition-all duration-700 cursor-pointer
                    ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }
                  `}
                  style={{ transitionDelay: `${problem.delay + 0.5}s` }}
                  onMouseEnter={() => setHoveredProblem(index)}
                  onMouseLeave={() => setHoveredProblem(null)}
                >
                  <div
                    className={`p-6 lg:p-7 rounded-2xl transition-all duration-500 border border-gray-800/50 
                    ${
                      isHovered
                        ? "scale-105 shadow-xl from-purple-900/30 to-indigo-900/40"
                        : "hover:scale-102"
                    }
                  `}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tl to-[#B462CE] from-[#3F2AB2] p-3 flex-shrink-0">
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {problem.title}
                        </h3>
                        {/* <div className=" px-3 flex justify-start py-1 rounded-full bg-white border border-purple-500">
                          <span className="text-purple-600 font-normal text-sm">
                            {problem.impact}
                          </span>
                        </div> */}
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full text-center mt-6 px-4">
            <p className="text-lg md:text-xl font-light leading-relaxed text-white">
              You’re spending on conversations, but not learning from them.
              
              That’s where Convoze steps in.
            </p>
          </div>
        </div>

        {/* Solution Transition */}
        {/* <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/80 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              You're spending on conversations,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">but not learning from them.</span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Every missed insight is a missed opportunity for growth and customer satisfaction.
            </p>

            <div className="mb-8">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center animate-pulse">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2] mb-6">
              That's where Convoze steps in.
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-2 justify-center">
                  <span className="bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded-full">FREE</span>
                  <span>See How We Work</span>
                </div>
              </button>
              
              <button className="border border-gray-600 hover:border-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-purple-600/10">
                Calculate Your Waste
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WhyConvoze;
