import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github, Database, ShoppingCart, BarChart3, Code2, Cpu, TrendingUp, FileText, Users } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: "UST Software Engineering Project",
      description: "Led a full-cycle software development project as Project Manager. Created comprehensive project plans including WBS, feasibility studies, risk management frameworks, and validation boards. Coordinated client requirements and supervised all development stages.",
      techs: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      icon: Code2,
      gradient: "from-blue-500 to-cyan-600",
      tag: "Project Management",
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data analysis platform with portfolio tracking, investment insights, and predictive modeling. Built with modern web technologies and optimized for data visualization.",
      techs: ["React", "TypeScript", "PostgreSQL", "TailwindCSS"],
      icon: TrendingUp,
      gradient: "from-green-500 to-emerald-600",
      tag: "Finance & Data",
    },
    {
      title: "Enterprise Inventory System",
      description: "Production and inventory management system inspired by real-world enterprise operations. Features supply chain tracking, sales coordination, and operational workflow automation.",
      techs: ["Java", "PostgreSQL", "SQL", "HTML"],
      icon: ShoppingCart,
      gradient: "from-purple-500 to-pink-600",
      tag: "Enterprise Software",
    },
    {
      title: "Data Pipeline & ETL Platform",
      description: "Automated data processing pipeline for large-scale dataset transformation, validation, and analysis. Implements real-time monitoring and performance optimization.",
      techs: ["Python", "PostgreSQL", "Supabase", "PHP"],
      icon: Database,
      gradient: "from-orange-500 to-red-600",
      tag: "Data Engineering",
    },
    {
      title: "Student Organization Portal",
      description: "Web-based management platform for student council operations, event planning, member constituency tracking, and communication workflows. Built during time as UST-ICS Student Council Director.",
      techs: ["React", "Node.js", "MongoDB", "CSS"],
      icon: Users,
      gradient: "from-indigo-500 to-purple-600",
      tag: "Web Application",
    },
    {
      title: "Business Intelligence Reports",
      description: "Interactive BI reporting system with custom data visualizations, KPI tracking, and automated report generation for strategic decision-making across multiple business domains.",
      techs: ["Python", "SQL", "JavaScript", "PHP"],
      icon: BarChart3,
      gradient: "from-pink-500 to-rose-600",
      tag: "Analytics",
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-slate-950 py-20 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            A showcase of solutions across software engineering, data, and finance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-lg w-fit`} style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                    <project.icon className="text-white" size={24} />
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-slate-800 text-slate-400 rounded-full border border-slate-700">
                    {project.tag}
                  </span>
                </div>

                <h3 className="text-xl mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm">
                    <Github size={16} />
                    Code
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm">
                    <ExternalLink size={16} />
                    Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
