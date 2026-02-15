'use client'
import HeroParallax from "../components/HeroParallax";
import { motion } from "framer-motion";

export default function Home(){
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-white text-black dark:bg-black dark:text-white">
      <HeroParallax/>
      <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Kirubakaran <span className="text-brand">K</span>
        </h1>
        <p className="mt-6 text-gray-400 text-lg">
          Clean. Reliable. Scalable. Full Stack Engineer building production-grade systems.
        </p>

        <div className="mt-10 flex gap-6 justify-center flex-wrap">
          <a href="/projects" className="px-8 py-4 bg-brand text-black rounded-xl font-semibold">
            View Work
          </a>
          <a href="/Kirubakaran_Angular_Developer.pdf" className="px-8 py-4 border border-gray-700 rounded-xl">
            Download Resume
          </a>
        </div>
      </motion.div>
    </main>
  )
}
