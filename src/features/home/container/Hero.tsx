"use client";

import { fadeIn, fadeInUp, scaleIn } from "@/shared/lib/animation";
import Button from "../components/Button";
import MainText from "../components/MainText";
import Pattern from "../components/Pattern";
import { motion } from "framer-motion";
import ScrollIcon from "../components/ScrollIcon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Pattern />
      <div className="max-w-6xl mx-auto text-center relative z-20 mt-20">
        <motion.div {...fadeInUp}>
          <MainText />
        </motion.div>
        <motion.div {...fadeIn(0.5)}>
          <Button />
        </motion.div>
        <motion.div {...scaleIn}>
          <ScrollIcon />
        </motion.div>
      </div>
    </section>
  );
}
