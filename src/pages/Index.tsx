import { ThemeProvider } from "@/components/ThemeProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Testimonials } from "@/components/Testimonials";
import { BlogPreview } from "@/components/BlogPreview";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen cursor-none md:cursor-auto">
        <ScrollProgress />
        <CustomCursor />
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Testimonials />
        <BlogPreview />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
