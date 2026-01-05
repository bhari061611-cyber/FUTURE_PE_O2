import { 
  MessageSquare, 
  BrainCircuit, 
  Languages, 
  Code2, 
  Network, 
  Settings2, 
  Cpu, 
  BarChart3 
} from "lucide-react";

const skills = [
  {
    icon: MessageSquare,
    name: "Prompt Engineering",
    description: "Crafting effective prompts for optimal AI model responses",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: BrainCircuit,
    name: "Machine Learning",
    description: "Building and training predictive models using ML algorithms",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Languages,
    name: "Natural Language Processing",
    description: "Processing and analyzing human language with AI",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Code2,
    name: "Python Programming",
    description: "Developing robust applications and AI solutions in Python",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Network,
    name: "Deep Learning",
    description: "Designing neural networks for complex problem-solving",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Settings2,
    name: "Model Fine-Tuning",
    description: "Optimizing pre-trained models for specific use cases",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Cpu,
    name: "AI Automation",
    description: "Automating workflows using intelligent AI systems",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: BarChart3,
    name: "Data Analysis",
    description: "Extracting insights from complex datasets",
    color: "from-teal-500 to-cyan-600",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-subtle relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit of AI and programming skills that I bring to every project
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br ${skill.color}`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <skill.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
