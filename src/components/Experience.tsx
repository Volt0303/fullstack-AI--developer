import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Monaca",
    role: "Full-Stack & AI Developer",
    period: "2021 - 2024",
    achievements: [
      "Built AI-driven SaaS platform serving 10K+ users with LangChain integration",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Developed real-time analytics dashboard with React and AWS infrastructure",
      "Led migration to microservices architecture improving scalability 3x",
    ],
  },
  {
    company: "FOURDIGIT",
    role: "Frontend Developer",
    period: "2018 - 2021",
    achievements: [
      "Developed enterprise React/Vue applications for Fortune 500 clients",
      "Improved application performance by 40% through optimization techniques",
      "Mentored junior developers and established coding standards",
      "Collaborated with design teams to create pixel-perfect responsive interfaces",
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass-effect rounded-xl p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary to-secondary group-hover:w-2 transition-all duration-300" />
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold flex items-center gap-2 mb-2">
                      <Briefcase className="h-6 w-6 text-primary" />
                      {exp.company}
                    </h3>
                    <p className="text-lg text-secondary font-semibold">{exp.role}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + i * 0.1, duration: 0.4 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">▹</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
