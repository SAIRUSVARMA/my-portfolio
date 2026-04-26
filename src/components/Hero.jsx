import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-start justify-center text-center px-6 pt-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 blur-2xl"></div>

      <div className="relative z-10 max-w-3xl">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
        >
          I build systems.
          <br />
          <span className="text-primary">
            That scale. That perform. That matter.
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed"
        >
          Full Stack Developer focused on building scalable applications, clean
          architectures, and real-world systems.
        </motion.p>

        {/* Extra Line (Subtle Differentiator) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-sm text-gray-500"
        >
          From frontend interfaces to backend logic — I build complete
          solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:scale-105 transition"
          >
            View Projects
          </button>

          <a
            href="https://github.com/SAIRUSVARMA"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-6 py-3 border border-gray-600 rounded-lg hover:border-primary hover:scale-105 transition">
              GitHub
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
