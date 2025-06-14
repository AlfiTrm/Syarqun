"use client";

import { Card } from "../components/Card";
import Header from "../components/Header";
import Benefits from "../components/Benefits";
import { motion } from "framer-motion";
import { fadeIn, fadeInUp } from "@/shared/lib/animation";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeInUp}>
          <Header />
        </motion.div>
        <motion.div {...fadeIn(0.5)}>
          <Card />
        </motion.div>
        <motion.div {...fadeIn}>
          <Benefits />
        </motion.div>
      </div>
    </section>
  );
}
