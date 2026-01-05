import { ExternalLink, Github, Globe, Bot } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "AI Portfolio Website",
    description: "A modern, responsive portfolio website built to showcase AI and machine learning expertise. Features smooth animations, an integrated AI chatbot, and a clean professional design optimized for recruiters and potential clients.",
    tags: ["React", "TypeScript", "Tailwind CSS", "AI Integration"],
    icon: Globe,
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    featured: true,
  },
  {
    title: "AI Chatbot Assistant",
    description: "An intelligent conversational AI assistant powered by advanced language models. Capable of understanding context, providing helpful responses, and guiding users through complex queries with natural language understanding.",
    tags: ["NLP", "Python", "Machine Learning", "LLM"],
    icon: Bot,
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    featured: true,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Showcasing my work in AI, machine learning, and prompt engineering
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-card rounded-3xl border border-border/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Header with gradient */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-8 flex items-end`}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                  
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-white">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="inline-block mt-1 px-3 py-0.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="glass" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="glass" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
