import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechVision",
    content: "Tomohiro's AI-driven solutions transformed our content workflow. His expertise in LangChain and GPT integration delivered an 85% improvement in productivity. Exceptional technical depth combined with creative problem-solving.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Product Lead at CloudScale",
    content: "Working with Tomohiro on our AWS infrastructure was a game-changer. His cloud-native approach and automation expertise reduced our deployment time by 60%. A true full-stack engineer who delivers results.",
    rating: 5,
  },
  {
    name: "Emily Nakamura",
    role: "CEO at DataFlow",
    content: "Tomohiro built our real-time analytics platform from scratch. The combination of Next.js, D3.js, and AWS created a scalable solution that handles millions of data points seamlessly. Highly recommended!",
    rating: 5,
  },
];

export const Testimonials = () => {
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
            Client Testimonials
          </h2>
          <p className="text-lg text-center text-muted-foreground mb-12">
            What people say about working with me
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl p-6 relative group"
              >
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors" />
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
