import { motion } from "framer-motion";

const experience = [
  {
    role: "Software Development Intern",
    company: "Kodryx AI",
    duration: "Jun 2026 – Present",
    points: [
      "Independently built and deployed the Dream Brain platform end-to-end using the MERN stack, covering UI, backend logic and deployment.",
      "Collaborated with the team lead on a parallel build of Dream Brain, contributing features through a shared Git workflow with code reviews.",
      "Trained a batch of international interns on audio and voice production tools, including VoiceBox, Open Montage and Audacity.",
      "Produced ad creatives for client brands MedEco AI, Kodryx Social, Sakshi and JP Dental Clinic using Google Flow for AI-assisted video generation.",
      "Used modern AI developer tools such as ChatGPT, Claude, Cursor and Devin daily to speed up development, debugging and code review.",
    ],
    skills: [
      "MERN Stack",
      "Git",
      "AI Tools",
      "Deployment",
      "Team Collaboration",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">
        Experience
      </h2>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto space-y-12">
        {experience.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative pl-10 border-l border-gray-700 hover:border-primary transition bg-card p-7 md:p-8 rounded-2xl border-t border-r border-b border-gray-800 hover:shadow-2xl hover:shadow-blue-500/20"
          >
            {/* Dot */}
            <div className="absolute -left-[9px] top-9 w-4 h-4 bg-primary rounded-full shadow-md shadow-blue-500/30"></div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
              <h3 className="text-xl md:text-2xl font-semibold text-primary">
                {item.role}
              </h3>
              <span className="text-sm text-gray-500">{item.duration}</span>
            </div>

            <p className="text-gray-300 font-medium mt-1">{item.company}</p>

            {/* Points */}
            <ul className="mt-4 space-y-2 list-disc list-inside">
              {item.points.map((point, i) => (
                <li
                  key={i}
                  className="text-gray-400 leading-relaxed text-[15px]"
                >
                  {point}
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mt-5">
              {item.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
