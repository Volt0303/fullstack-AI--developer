import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import projectAiContent from "@/assets/project-ai-content.jpg";
import projectAnalytics from "@/assets/project-analytics.jpg";
import projectAutomation from "@/assets/project-automation.jpg";
import projectMobile from "@/assets/project-mobile.jpg";
import projectRecommendation from "@/assets/project-recommendation.jpg";
import projectCloud from "@/assets/project-cloud.jpg";

const projects = [
  {
    title: "AI Content Engine",
    description: "GPT-Turbo powered content creation system with LangChain integration achieving 85% faster generation.",
    tags: ["GPT-4", "LangChain", "FastAPI", "React"],
    gradient: "from-primary to-secondary",
    image: projectAiContent,
  },
  {
    title: "Next.js Analytics Dashboard",
    description: "Real-time analytics platform with D3.js visualizations deployed on AWS infrastructure.",
    tags: ["Next.js 13", "D3.js", "AWS", "TypeScript"],
    gradient: "from-secondary to-primary",
    image: projectAnalytics,
  },
  {
    title: "Automation Assistant",
    description: "Workflow automation system using FastAPI and Celery with AWS ECS deployment.",
    tags: ["FastAPI", "Celery", "AWS ECS", "Python"],
    gradient: "from-primary to-secondary",
    image: projectAutomation,
  },
  {
    title: "Cross-Platform App",
    description: "React Native application with Expo achieving 50K+ downloads and 4.7★ rating.",
    tags: ["React Native", "Expo", "TypeScript", "Redux"],
    gradient: "from-secondary to-primary",
    image: projectMobile,
  },
  {
    title: "AI Recommendation System",
    description: "Personalized recommendation engine built with TensorFlow and Redis caching.",
    tags: ["TensorFlow", "Redis", "Python", "AWS"],
    gradient: "from-primary to-secondary",
    image: projectRecommendation,
  },
  {
    title: "Cloud Monitoring Dashboard",
    description: "WebGL-powered 3D visualization dashboard for AWS infrastructure metrics.",
    tags: ["Three.js", "WebGL", "AWS", "React"],
    gradient: "from-secondary to-primary",
    image: projectCloud,
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                
                <div className="p-6">
                  <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${project.gradient} mb-4 group-hover:w-full transition-all duration-500`} />
                
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" variant="ghost" className="group/btn">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button size="sm" variant="ghost" className="group/btn">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                      Demo
                    </Button>
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
