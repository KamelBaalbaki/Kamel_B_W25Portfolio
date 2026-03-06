import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  ChevronDown,
  Download,
  Target,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    technologies: ["React", "JavaScript", "Tailwind", "Bootstrap"],
  },
  {
    title: "Backend",
    technologies: ["Node.js", "Express", "ASP.NET", "Java"],
  },
  {
    title: "Database",
    technologies: ["Postgres", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Version Control",
    technologies: ["Docker", "GitHub"],
  },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Developer - Full Stack
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Kamel Baalbaki, a software developer specializing in
                full stack development. I build scalable, performant web
                applications that users love.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a
                href="#contact"
                className="relative flex items-center px-8 py-4 text-lg gap-1 rounded-full font-medium focus:outline-none 
                            focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-colors duration-1000"
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </a>
              <a href="Kamel-Baalbaki-Resume.pdf" target="_blank">
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download Resume
                </AnimatedBorderButton>
              </a>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "https://github.com/kamelbaalbaki" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/kamel-baalbaki",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-300">
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30
                                via-transparent to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Kamel Baalbaki"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>

                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-secondary-foreground text-sm font-medium tracking-wider uppercase mb-6 text-center">
            Technologies that I work with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex w-max animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors p-2">
                    {skill.title}:
                  </span>
                  {skill.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors p-4"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
