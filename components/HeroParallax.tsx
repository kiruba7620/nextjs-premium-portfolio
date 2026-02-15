'use client'
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroParallax() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 120]);

  return (
    <motion.div style={{ y }} className="absolute inset-0 -z-10 opacity-20">
      <div className="w-full h-full bg-gradient-to-br from-brand/30 via-transparent to-transparent" />
    </motion.div>
  );
}
