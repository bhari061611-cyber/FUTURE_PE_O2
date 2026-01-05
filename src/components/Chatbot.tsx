import { useState } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { Button } from "./ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const initialMessages: Message[] = [
  {
    role: "assistant",
    content: "Hi! I'm Kasthuri's AI assistant. I can answer questions about skills, projects, experience, and how to get in touch. How can I help you today?",
  },
];

const quickResponses: Record<string, string> = {
  skills: "Kasthuri specializes in Prompt Engineering, Machine Learning, NLP, Python Programming, Deep Learning, Model Fine-Tuning, AI Automation, and Data Analysis. These skills are applied to create intelligent, real-world solutions.",
  projects: "Kasthuri has worked on notable projects including an AI Portfolio Website (this one!) featuring smooth animations and AI integration, and an AI Chatbot Assistant that understands context and provides helpful responses using advanced language models.",
  experience: "As an AI & Prompt Engineering Intern, Kasthuri focuses on crafting effective prompts for AI models, building ML solutions, and automating workflows. Currently seeking internship opportunities to apply these skills in real-world projects.",
  contact: "You can reach out through the Contact section above! Kasthuri is open to internship opportunities, freelance projects, and collaborations. Just fill out the form with your message.",
  hello: "Hello! Great to meet you. I'm here to help you learn more about Kasthuri Eswar's skills, projects, and how to connect. What would you like to know?",
  hi: "Hi there! How can I help you today? Feel free to ask about Kasthuri's skills, projects, or how to get in touch.",
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(quickResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    if (lowerMessage.includes("who") || lowerMessage.includes("about")) {
      return "Kasthuri Eswar is an aspiring AI and Prompt Engineering professional with expertise in machine learning, NLP, and deep learning. Passionate about creating intelligent solutions that make a real-world impact. Currently seeking internship opportunities!";
    }

    if (lowerMessage.includes("hire") || lowerMessage.includes("work")) {
      return "Kasthuri is actively looking for internship and freelance opportunities! You can reach out through the Contact section to discuss potential collaborations. Whether it's AI projects, prompt engineering, or ML solutions – let's connect!";
    }

    return "That's a great question! For more specific information about Kasthuri's work, feel free to explore the portfolio sections above or reach out directly through the Contact form. Is there anything specific about skills, projects, or experience I can help with?";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = getResponse(input);
    const assistantMessage: Message = { role: "assistant", content: response };
    setMessages((prev) => [...prev, assistantMessage]);
    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-primary rounded-full shadow-lg flex items-center justify-center text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-110 animate-pulse-glow ${
          isOpen ? "hidden" : ""
        }`}
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] bg-card border border-border/50 rounded-2xl shadow-xl flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gradient-primary text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-sm">AI Assistant</h3>
                <p className="text-xs opacity-80">Ask me anything</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 ${
                  message.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] p-3 rounded-2xl text-sm leading-relaxed ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-muted text-foreground rounded-bl-md"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-muted p-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about skills, projects..."
                className="flex-1 px-4 py-2.5 bg-muted border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm placeholder:text-muted-foreground/50"
              />
              <Button
                onClick={handleSend}
                variant="hero"
                size="icon"
                disabled={!input.trim()}
                className="rounded-xl"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
