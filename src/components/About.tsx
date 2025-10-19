import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ParticleField } from "./ParticleField";
import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiLangchain,
  SiFastapi,
  SiTensorflow,
} from "react-icons/si";
import { Brain } from "lucide-react"; // for AI/ML
import { FaAws } from "react-icons/fa"; // From Font Awesome


const skills = [
  { icon: SiPython, name: "Python", color: "text-primary" },
  { icon: SiReact, name: "React", color: "text-secondary" },
  { icon: Brain, name: "AI/ML", color: "text-primary" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-secondary" },
  { icon: SiLangchain, name: "LangChain", color: "text-primary" },
  { icon: FaAws, name: "AWS", color: "text-secondary" },
  { icon: SiFastapi, name: "FastAPI", color: "text-primary" },
  { icon: SiTensorflow, name: "TensorFlow", color: "text-secondary" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      className="py-20 px-4 bg-muted/30 relative overflow-hidden"
    >
      <ParticleField />
      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center gradient-text">
            About Me
          </h2>

          <p className="text-lg md:text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            I'm{" "}
            <span className="text-primary font-semibold">
              Tomohiro Komiyama
            </span>
            , a Full-Stack Developer & AI Engineer with 6+ years of experience
            building intelligent, cloud-native solutions. I specialize in
            creating scalable automation systems that combine cutting-edge AI
            with robust engineering practices to deliver impactful,
            production-ready software.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="glass-effect rounded-lg p-6 text-center group cursor-pointer"
              >
                <skill.icon
                  className={`h-10 w-10 mx-auto mb-3 ${skill.color} group-hover:animate-glow-pulse`}
                />
                <p className="font-semibold">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
