import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillsData = [
    { skill: "Frontend", value: 92, fullMark: 100 },
    { skill: "Backend", value: 88, fullMark: 100 },
    { skill: "Databases", value: 90, fullMark: 100 },
    { skill: "Data Analysis", value: 85, fullMark: 100 },
    { skill: "Finance", value: 87, fullMark: 100 },
    { skill: "Project Mgmt", value: 93, fullMark: 100 },
  ];

  const expertiseAreas = [
    { label: "Frontend & Backend Programming", percentage: 92 },
    { label: "Database Design & SQL", percentage: 90 },
    { label: "Project Management & Leadership", percentage: 93 },
    { label: "Financial Technology & Investing", percentage: 87 },
    { label: "Data Analysis & Research", percentage: 88 },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive proficiency across the full development stack
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800"
          >
            <h3 className="text-3xl mb-8 text-white">Technical Proficiency</h3>
            
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={skillsData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis 
                  dataKey="skill" 
                  tick={{ fill: '#94a3b8', fontSize: 14 }}
                />
                <Radar
                  name="Skills"
                  dataKey="value"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          <div className="space-y-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.label}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white">{area.label}</span>
                  <span className="text-blue-400">{area.percentage}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${area.percentage}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-xl"
            >
              <p className="text-slate-300 leading-relaxed">
                Experienced in building scalable, data-driven applications with expertise spanning 
                frontend design to backend architecture. Strong background in project management from 
                leading software engineering teams at UST, and a passion for financial technology and 
                investment analysis. Fluent in Tagalog and English.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}