import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    category: "Cloud",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    year: "2022",
    category: "AI/ML",
  },
  {
    title: "React Advanced Certification",
    issuer: "Meta",
    year: "2023",
    category: "Frontend",
  },
  {
    title: "Python Professional Certification",
    issuer: "Python Institute",
    year: "2021",
    category: "Backend",
  },
  {
    title: "Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2023",
    category: "DevOps",
  },
  {
    title: "LangChain Expert Developer",
    issuer: "LangChain",
    year: "2024",
    category: "AI/ML",
  },
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
            Certifications & Awards
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Professional credentials and achievements
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-xl p-6 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-secondary" />
                      <span className="text-xs text-secondary font-semibold">{cert.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
