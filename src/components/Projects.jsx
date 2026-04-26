import { motion } from "framer-motion";

const projects = [
  {
    title: "DevTinder",
    desc: "Full-stack developer matchmaking platform with authentication and connection system.",
    tech: "MERN Stack, JWT, MongoDB",
    live: "https://devtinder-brob.onrender.com/",
    github: "https://github.com/SAIRUSVARMA/devTinder-project",
  },
  {
    title: "Netflix GPT",
    desc: "AI-powered movie discovery system combining GPT with TMDB.",
    tech: "React, Node.js, OpenRouter, Firebase",
    live: "https://netflix-project-eehp.onrender.com/",
    github: "https://github.com/SAIRUSVARMA/Netflix-Project",
  },
  {
    title: "YouTube Clone",
    desc: "Optimized video platform with debouncing, caching and live chat.",
    tech: "React, Redux",
    live: "https://youtube-clone-chi-rouge.vercel.app/",
    github: "https://github.com/SAIRUSVARMA/Youtube-Clone",
  },
  {
    title: "Food Heaven",
    desc: "Responsive UI with routing and reusable components.",
    tech: "React",
    live: "https://food-heaven-nine.vercel.app/",
    github: "https://github.com/SAIRUSVARMA/Food-Heaven",
  },
  {
    title: "NoteZipper",
    desc: "First full-stack MERN app with authentication and CRUD.",
    tech: "MERN",
    live: "https://notezipper-sairus.onrender.com/",
    github: "https://github.com/SAIRUSVARMA/NOTEZIPPER",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-card p-7 md:p-8 rounded-2xl border border-gray-800 hover:border-primary hover:shadow-xl hover:shadow-blue-500/10 transition duration-300"
  >
    <h3 className="text-2xl font-bold text-primary">{project.title}</h3>

    <p className="text-gray-400 mt-4 leading-relaxed text-[15px] md:text-base">
      {project.desc}
    </p>

    <p className="text-sm text-gray-500 mt-4">{project.tech}</p>

    <div className="flex justify-center gap-4 mt-6">
      <a href={project.live} target="_blank" rel="noreferrer">
        <button className="px-5 py-2.5 bg-primary rounded-lg text-white hover:scale-105 transition">
          Live
        </button>
      </a>

      <a href={project.github} target="_blank" rel="noreferrer">
        <button className="px-5 py-2.5 border border-gray-600 rounded-lg hover:border-primary hover:scale-105 transition">
          Code
        </button>
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 blur-2xl"></div>

      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto space-y-10">
          {/* ROW 1 */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* ROW 2 */}
          <div className="flex justify-center gap-8">
            {projects.slice(3, 5).map((project, index) => (
              <div key={index} className="w-full md:w-[32%]">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
