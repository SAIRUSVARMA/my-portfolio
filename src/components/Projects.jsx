import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "DevTinder",
    desc: "Full-stack developer matchmaking platform with authentication and connection system.",
    tech: "MERN Stack, JWT, MongoDB",
    impact: "Handles authentication, connections, and scalable backend logic",
    live: "https://devtinder-brob.onrender.com/",
    github: "https://github.com/SAIRUSVARMA/devTinder-project",
    case: "/devtinder",
    image: "/images/devtinder.png",
  },
  {
    title: "Netflix GPT",
    desc: "AI-powered movie discovery system combining GPT with TMDB.",
    tech: "React, Node.js, OpenRouter, Firebase",
    impact: "Integrates AI responses with real-time TMDB data pipeline",
    live: "https://netflix-project-eehp.onrender.com/",
    github: "https://github.com/SAIRUSVARMA/Netflix-Project",
    case: "/netflixgpt",
    image: "/images/netflixgpt.png",
  },
  {
    title: "Dream Brain",
    desc: "Interactive personal assessment platform with guided workflows and progress tracking.",
    tech: "React, Node.js, Express, MongoDB",
    impact: "Provides smooth multi-step questionnaire flows with privacy-first data storage",
    live: "https://dreambrain-1.onrender.com/",
    github: "https://github.com/SAIRUSVARMA/DreamBrain",
    case: "/dreambrain",
    image: "/images/dreambrain.png",
  },
  {
    title: "YouTube Clone",
    desc: "Optimized video platform with debouncing, caching and live chat.",
    tech: "React, Redux",
    impact: "Implements caching, debouncing, and live chat simulation",
    live: "https://youtube-clone-chi-rouge.vercel.app/",
    github: "https://github.com/SAIRUSVARMA/Youtube-Clone",
    image: "/images/youtubeclone.png",
  },
  {
    title: "Food Heaven",
    desc: "Responsive UI with routing and reusable components.",
    tech: "React",
    impact: "Component-driven UI with reusable architecture",
    live: "https://food-heaven-nine.vercel.app/",
    github: "https://github.com/SAIRUSVARMA/Food-Heaven",
    image: "/images/foodheaven.png",
  },
  {
    title: "NoteZipper",
    desc: "First full-stack MERN app with authentication and CRUD.",
    tech: "MERN",
    impact: "Full CRUD system with authentication and persistent storage",
    live: "https://notezipper-sairus.onrender.com/",
    github: "https://github.com/SAIRUSVARMA/NOTEZIPPER",
    image: "/images/notezipper.png",
  },
];

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -8 }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="bg-card p-7 md:p-8 rounded-2xl border border-gray-800 hover:border-primary hover:shadow-2xl hover:shadow-blue-500/20 transition duration-300 flex flex-col justify-between"
  >
    <div>
      {/* 🔥 IMAGE WITH ZOOM */}
      <div className="overflow-hidden rounded-lg mb-5">
        <img
          src={project.image}
          alt={project.title}
          className="h-40 md:h-44 w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-bold text-primary text-center transition hover:scale-105">
        {project.title}
      </h3>

      {/* DESC */}
      <p className="text-gray-400 mt-4 leading-relaxed text-[15px] md:text-base text-center">
        {project.desc}
      </p>

      {/* TECH */}
      <p className="text-sm text-gray-500 mt-4 text-center">{project.tech}</p>

      {/* IMPACT */}
      <p className="text-xs text-primary mt-3 text-center">{project.impact}</p>
    </div>

    {/* BUTTONS */}
    <div className="flex justify-center gap-4 mt-6 flex-wrap">
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

      {project.case && (
        <Link to={project.case}>
          <button className="px-5 py-2.5 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">
            Case Study
          </button>
        </Link>
      )}
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 blur-2xl"></div>

      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-20">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
