import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const techCategories = [
    {
      category: "Languages",
      techs: ["Java", "Python", "C++", "JavaScript", "TypeScript", "PHP"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Frontend",
      techs: ["React", "HTML", "CSS", "TailwindCSS"],
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Backend",
      techs: ["Node.js", "Express"],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Databases",
      techs: ["PostgreSQL", "SQL", "NoSQL", "MongoDB"],
      color: "from-orange-500 to-red-500",
    },
    {
      category: "Tools & Platforms",
      techs: ["MS Office", "Google Workspace", "Microsoft Teams", "Git"],
      color: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800"
            >
              <h3 className={`text-2xl mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.15 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} bg-opacity-10 border border-current rounded-lg text-white backdrop-blur-sm cursor-default`}
                    style={{
                      borderColor: `rgb(${categoryIndex % 2 === 0 ? '59, 130, 246' : '168, 85, 247'})`,
                      backgroundColor: `rgba(${categoryIndex % 2 === 0 ? '59, 130, 246' : '168, 85, 247'}, 0.1)`,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full">
            <p className="text-slate-300">
              <span className="text-blue-400">14+</span> technologies mastered
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}