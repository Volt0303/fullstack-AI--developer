import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "./ui/button";

const articles = [
  {
    title: "Building Scalable AI Systems with LangChain",
    excerpt: "A deep dive into architecting production-ready AI applications using LangChain, GPT-4, and FastAPI for enterprise-scale deployments.",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI/ML",
  },
  {
    title: "Next.js 14 Performance Optimization Strategies",
    excerpt: "Exploring advanced techniques for optimizing Next.js applications including server components, streaming, and edge runtime.",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Frontend",
  },
  {
    title: "AWS Infrastructure as Code with Terraform",
    excerpt: "Best practices for managing cloud infrastructure at scale using Terraform, including multi-environment deployments and state management.",
    date: "November 10, 2024",
    readTime: "10 min read",
    category: "DevOps",
  },
];

export const BlogPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center gradient-text">
            Latest Articles
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            Insights on AI, full-stack development, and cloud architecture
          </p>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ x: 10 }}
                className="glass-effect rounded-xl p-6 group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <Button variant="ghost" className="group/btn shrink-0">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
