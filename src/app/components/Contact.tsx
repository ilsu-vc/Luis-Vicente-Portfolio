import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Github, Linkedin, Twitter, MapPin, Send, Phone } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/ilsu-vc", color: "hover:text-white" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/luis-emmanuel-vicente2018/", color: "hover:text-blue-400" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com/luisvicente", color: "hover:text-sky-400" },
    { icon: Mail, label: "Email", href: "mailto:lvicente@protonmail.com", color: "hover:text-red-400" },
  ];

  return (
    <section id="contact" className="min-h-screen bg-slate-950 py-20 px-4 relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Let's collaborate on your next project or discuss opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-3xl mb-6 text-white">Let's Work Together</h3>
              <p className="text-slate-400 mb-8">
                I'm currently a BS Information Systems student at the University of Santo Tomas,
                available for internships, freelance projects, and collaborative opportunities.
                Whether you need a full-stack developer, project manager, or someone to bring your
                data-driven ideas to life, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <a href="mailto:lvicente@protonmail.com" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <p>lvicente@protonmail.com</p>
                  </div>
                </a>
                <a href="tel:+639764705515" className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <Phone size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Phone</p>
                    <p>+63 976 470 5515</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <MapPin size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p>Meycauayan, Bulacan, Philippines <br></br>
                       Metro Manila, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`p-4 bg-slate-900 border border-slate-700 rounded-xl text-slate-400 ${link.color} transition-colors`}
                >
                  <link.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl border border-slate-700"
          >
            <h3 className="text-2xl mb-6 text-white">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-slate-400 mb-2 text-sm">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-2 text-sm">Subject</label>
                <input
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-2 text-sm">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500"
        >
          <p>© 2026 Luis Emmanuel Vicente. Built with React, TailwindCSS, and Motion.</p>
        </motion.div>
      </div>
    </section>
  );
}