import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Database, TrendingUp, Briefcase, GraduationCap, Users, Award } from "lucide-react";
import profilePhoto from "../../assets/2714e0485f43124513f72b61307ad4e8d3e66494.png";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building scalable web applications using React, Node.js, TypeScript, and modern frameworks",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing and optimizing database systems with PostgreSQL, SQL, and NoSQL technologies",
    },
    {
      icon: TrendingUp,
      title: "Financial Systems",
      description: "Passionate about investing, finance, and developing financial technology solutions",
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "Led software engineering projects with WBS, risk management, and agile workflows",
    },
  ];

  const education = [
    {
      school: "University of Santo Tomas",
      location: "España, Manila",
      degree: "Bachelor of Science in Information Systems",
      years: "2023 – Present",
      icon: GraduationCap,
    },
    {
      school: "Claret School of Quezon City",
      location: "UP Village, Quezon City",
      degree: "Accountancy, Business and Management",
      years: "2020 – 2023",
      detail: "2nd Honors Award & Cocurricular Award",
      icon: Award,
    },
    {
      school: "Colegio de San Juan de Letran",
      location: "Intramuros, Manila",
      degree: "High School",
      years: "2018 – 2020",
      icon: GraduationCap,
    },
  ];

  const experience = [
    {
      role: "Project Manager",
      company: "UST Software Engineering",
      location: "España Blvd, Manila",
      years: "2025 – 2026",
      details: [
        "Oversaw and planned the project; created timetable, feasibility plans, WBS, risk management, and communication plan",
        "Coordinated with clients and supervised each stage of development",
        "Monitored and organized flow of activities and procedures",
      ],
    },
    {
      role: "Production Head",
      company: "Taholicious: Food & Beverages",
      location: "UP Village, Quezon City",
      years: "2022 – 2023",
      details: [
        "Managed production process and product handling for the enterprise",
        "Coordinated with sales and marketing teams for supply planning",
        "Ensured seamless inventory replenishment and operational workflows",
      ],
    },
  ];

  const leadership = [
    {
      role: "Director",
      organization: "UST-ICS Student Council",
      location: "España Blvd, Manila",
      years: "2024 – 2025",
    },
    {
      role: "Vice President",
      organization: "Catechism of the Catholic Church",
      location: "UP Village, Quezon City",
      years: "2022 – 2023",
    },
  ];

  return (
    <section id="about" className="bg-slate-950 py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        {/* Bio section with photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 mb-16"
        >
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-sm opacity-60" />
              <img
                src={profilePhoto}
                alt="Luis Emmanuel Vicente"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover border-2 border-slate-800"
              />
            </div>
          </div>
          <div>
            <h3 className="text-3xl mb-4 text-white">Luis Vicente</h3>
            <p className="text-lg text-slate-400 mb-4 max-w-2xl leading-relaxed">
              A driven BS Information Systems student at the University of Santo Tomas with a strong foundation
              in full-stack development, data management, and financial technology. With experience spanning
              software project management, enterprise operations, and student leadership, I bring a unique blend
              of technical expertise and organizational skills to every project.
            </p>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              Fluent in both Tagalog and English, I'm passionate about programming, designing, researching,
              investing, and building data-driven solutions that make a real impact.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20">Meycauayan, Bulacan</span>
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-sm rounded-full border border-purple-500/20">Manila, Philippines</span>
              <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20">Open to Opportunities</span>
            </div>
          </div>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors group"
            >
              <div className="mb-4 p-3 bg-blue-500/10 rounded-lg w-fit group-hover:bg-blue-500/20 transition-colors">
                <item.icon className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl mb-2 text-white">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl mb-8 text-white flex items-center gap-3">
            <GraduationCap className="text-blue-400" size={28} />
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h4 className="text-lg text-white">{edu.school}</h4>
                    <p className="text-slate-400">{edu.degree}</p>
                    {edu.detail && (
                      <p className="text-blue-400 text-sm mt-1">{edu.detail}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500 text-sm">{edu.location}</p>
                    <p className="text-blue-400 text-sm">{edu.years}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-3xl mb-8 text-white flex items-center gap-3">
            <Briefcase className="text-purple-400" size={28} />
            Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg text-white">{exp.role}</h4>
                    <p className="text-purple-400">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500 text-sm">{exp.location}</p>
                    <p className="text-blue-400 text-sm">{exp.years}</p>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                      <span className="text-blue-400 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="text-3xl mb-8 text-white flex items-center gap-3">
            <Users className="text-cyan-400" size={28} />
            Leadership &amp; Activities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadership.map((item, index) => (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors"
              >
                <h4 className="text-lg text-white">{item.role}</h4>
                <p className="text-cyan-400">{item.organization}</p>
                <div className="flex items-center justify-between mt-2">
                  <p className="text-slate-500 text-sm">{item.location}</p>
                  <p className="text-blue-400 text-sm">{item.years}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
