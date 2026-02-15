import { Code, Server, Layers } from "lucide-react"


export default function About(){
  return (
    <section className="min-h-screen max-w-6xl mx-auto bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-4xl font-bold text-brand mb-12">About Me</h1>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <img src="about.png" 
               className="rounded-2xl shadow-lg"/>
        </div>
        

        {/* Content */}
        <div>
          <p className="text-gray-400 leading-relaxed">
            I’m a clean, reliable full-stack developer focused on building scalable,
            maintainable, enterprise-grade systems. My mindset is product-first, not framework-first.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="p-5 border border-gray-800 rounded-xl">
              <Code className="text-brand text-2xl"/>
              <h3 className="mt-3 font-semibold">Frontend</h3>
              <p className="text-sm text-gray-400">Angular, React, UI systems</p>
            </div>

            <div className="p-5 border border-gray-800 rounded-xl">
              <Server className="text-brand text-2xl"/>
              <h3 className="mt-3 font-semibold">Backend</h3>
              <p className="text-sm text-gray-400">Node, APIs, Architecture</p>
            </div>

            <div className="p-5 border border-gray-800 rounded-xl">
              <Layers className="text-brand text-2xl"/>
              <h3 className="mt-3 font-semibold">Systems</h3>
              <p className="text-sm text-gray-400">Scalable platforms</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
