import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Database, Brain, Cloud, Wrench } from "lucide-react";
import { Button } from "./ui/button";

const skillCategories = {
  Frontend: [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "React Native", "Vue.js"
  ],
  Backend: [
    "Python", "FastAPI", "Node.js", "PostgreSQL", "Redis", "GraphQL"
  ],
  "AI/ML": [
    "LangChain", "TensorFlow", "GPT-4", "PyTorch", "Hugging Face", "OpenAI API"
  ],
  DevOps: [
    "AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "GitHub Actions"
  ],
  Tools: [
    "Git", "VS Code", "Figma", "Postman", "Jira", "Slack"
  ],
};

const categoryIcons: Record<string, any> = {
  Frontend: Code2,
  Backend: Database,
  "AI/ML": Brain,
  DevOps: Cloud,
  Tools: Wrench,
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Technical Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.keys(skillCategories).map((category) => {
              const Icon = categoryIcons[category];
              return (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="group"
                >
                  <Icon className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                  {category}
                </Button>
              );
            })}
          </div>

          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-lg p-4 text-center font-semibold neon-border group cursor-pointer"
              >
                <span className="group-hover:gradient-text transition-all">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
