"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggler"

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  // { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const path = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto h-[72px] px-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <span className="text-2xl font-bold dark:text-white">K</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <div key={link.path} className="relative">
              <Link
                href={link.path}
                className={`text-sm font-medium tracking-wide  ${
                  path === link.path ? "text-teal-400" : "dark:text-white/80 dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>

              {path === link.path && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute left-0 right-0 -bottom-2 h-[2px] bg-teal-400 rounded-full"
                />
              )}
            </div>
          ))}

          {/* Theme */}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/10"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-screen w-[85%] bg-black z-[60] p-6 border-l border-white/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <span className="text-xl font-bold">K</span>

              <div className="flex items-center gap-4">
                <ThemeToggle />
                <button
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10"
                >
                  <X size={22} />
                </button>
              </div>
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-8 text-lg">
              {links.map(link => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`${
                    path === link.path ? "text-teal-400" : "text-white/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}
