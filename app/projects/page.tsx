'use client'
import { motion } from "framer-motion";

const projects = [
  {
    title: "Beauty Spa – E-Commerce Booking System",
    description: [
      "Designed a responsive booking flow using Angular reactive forms and RxJS observables.",
      "Improved UI performance through lazy loading and reusable component architecture.",
    ],
    tech: ["Angular", "RxJS", "TypeScript", "SCSS"],
  },
  {
    title: "HRMS – Human Resource Management System",
    description: [
      "Developed Angular components for employee management, attendance tracking, and payroll modules.",
      "Secured frontend using JWT-based authentication with role-based route guards.",
    ],
    tech: ["Angular", "JWT", "REST APIs", "Bootstrap"],
  },
  {
    title: "VIDA – Halliburton Internal Project",
    description: [
      "Designed Angular UI for data visualization and task management dashboards.",
      "Debugged and optimized Angular services to improve reliability and performance.",
    ],
    tech: ["Angular", "Charts", "Services", "Enterprise UI"],
  },
  {
    title: "SOLIZE – B2B / B2C Platform",
    description: [
      "Built a responsive Angular frontend supporting both B2B and B2C workflows.",
      "Integrated REST APIs and ensured cross-device compatibility.",
    ],
    tech: ["Angular", "API Integration", "Responsive Design"],
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-28 max-w-6xl mx-auto">
      
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Selected <span className="text-brand">Projects</span>
      </motion.h1>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="p-6 rounded-2xl border border-gray-800
                       hover:border-brand hover:shadow-[0_0_25px_rgba(20,184,166,0.15)] 
                       transition-all duration-300"
          >
            <h2 className="text-xl font-semibold dark:text-white">
              {project.title}
            </h2>

            <ul className="mt-4 space-y-2 dark:text-gray-400 text-sm leading-relaxed">
              {project.description.map((point, i) => (
                <li key={i}>• {point}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full 
                             border border-gray-700 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
