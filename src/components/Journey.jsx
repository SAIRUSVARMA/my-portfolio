import { motion } from "framer-motion";

const journey = [
  {
    title: "The Beginning",
    desc: "Started with basic HTML/CSS",
    link: "https://github.com/SAIRUSVARMA/Tea-Station",
  },
  {
    title: "Layouts & Structure",
    desc: "Mastered Flexbox & Grid systems",
    link: "https://github.com/SAIRUSVARMA/Web-Agency",
  },
  {
    title: "Client Work",
    desc: "Built real-world frontend websites",
    link: "https://github.com/SAIRUSVARMA/MRO-TECH-NY",
  },
  {
    title: "CRUD Applications",
    desc: "Built dynamic apps with state & APIs",
    link: "https://github.com/SAIRUSVARMA/React-Users-Project",
  },
  {
    title: "First Full Stack",
    desc: "Developed complete MERN application",
    link: "https://github.com/SAIRUSVARMA/NOTEZIPPER",
  },
  {
    title: "System Design",
    desc: "Built scalable platforms like DevTinder",
    link: "https://github.com/SAIRUSVARMA/devTinder-project",
  },
  {
    title: "AI Integration",
    desc: "Integrated GPT into applications",
    link: "https://github.com/SAIRUSVARMA/Netflix-Project",
  },
  {
    title: "Software Development Internship",
    desc: "Built end-to-end MERN platforms (Dream Brain), AI video production, and collaborated at Kodryx AI",
    link: "https://dreambrain-1.onrender.com/",
    linkText: "View Live Work →",
  },
];

const Journey = () => {
  return (
    <section id="journey" className="py-24 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
        My Evolution
      </h2>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto space-y-12">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative pl-10 border-l border-gray-700 hover:border-primary transition"
          >
            {/* Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-primary rounded-full shadow-md shadow-blue-500/30"></div>

            {/* Content */}
            <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>

            <p className="text-gray-400 mt-3 leading-relaxed">{item.desc}</p>

            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-primary text-sm hover:underline"
            >
              {item.linkText || "View Project →"}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
