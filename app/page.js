"use client"

import Container from "@/components/container";
import BookDemo from "@/components/hero/BookDemo";
import Customers from "@/components/hero/Customers";
import Faq from "@/components/hero/Faq";
import FeaturesCart from "@/components/hero/FeaturesCart";
import Hero from "@/components/hero/hero";
import { Industries } from "@/components/hero/Industries";
import SolutionCarts from "@/components/hero/SolutionCarts";
import StatsCart from "@/components/hero/StatsCart";
import { Timelinecomp } from "@/components/hero/TimelineComp";
import WhatCustomerSays from "@/components/hero/WhatCustomerSays";
import WhyConvoze from "@/components/hero/WhyConvoze";
import WhyTrustUs from "@/components/hero/WhyTrustUs";
import Orb from "@/components/org";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function Home() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  
  return (
   <motion.div ref={lenisRef} initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:1.5}}>
    <Container className={" justify-between"}>
<Hero />
<Customers/>
<StatsCart/>
<WhyConvoze/>
<FeaturesCart/>
<Timelinecomp/>
<SolutionCarts/>
<WhyTrustUs/>
<Industries/>
<WhatCustomerSays/>
<BookDemo/>
<Faq/>

    </Container>
    
   </motion.div>
  );
}
