import { Brain, Target, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "AI Enthusiast",
    description: "Deeply passionate about artificial intelligence and its potential to revolutionize industries.",
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Skilled at breaking down complex challenges into actionable, innovative solutions.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description: "Quick to adapt and master new technologies, frameworks, and methodologies.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an aspiring <span className="text-foreground font-medium">AI and Prompt Engineering professional</span> with 
                a strong foundation in machine learning, natural language processing, and deep learning. 
                My journey in AI began with a curiosity to understand how machines can learn and adapt, 
                and has evolved into a dedicated pursuit of creating intelligent systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently seeking <span className="text-foreground font-medium">internship opportunities</span> where I can apply 
                my skills in real-world projects, collaborate with experienced professionals, 
                and contribute to cutting-edge AI initiatives. I believe in continuous learning 
                and staying updated with the latest advancements in the field.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My goal is to bridge the gap between complex AI technologies and practical 
                business solutions, making AI accessible and impactful for organizations of all sizes.
              </p>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-5 p-6 bg-card rounded-2xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
