import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Youtube } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import ProjectModal from "@/components/ProjectModal";
import ContactForm from "@/components/ContactForm";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  techStack: string[];
  category: string;
  overview: string;
  role: string;
  challenges: string;
  github?: string;
  demo?: string;
  gallery: string[];
}

const projects: Project[] = [
  {
    id: "inspectre-ai",
    title: "Inspectre AI",
    description: "Deep learning computer vision system for intelligent inspection and analysis",
    image: "/assets/images/inspectre-ai/main.jpg",
    video: "/assets/videos/inspectre-ai/demo.mp4",
    techStack: ["Python", "TensorFlow", "OpenCV", "FastAPI", "Docker"],
    category: "AI",
    overview: "Inspectre AI is a cutting-edge computer vision system that leverages deep learning to perform intelligent inspection and analysis across various domains. The system combines state-of-the-art neural networks with real-time processing capabilities.",
    role: "Lead AI Engineer - Designed and implemented the core deep learning architecture, developed the computer vision pipeline, and optimized model performance for real-time inference.",
    challenges: "The main challenge was achieving real-time performance while maintaining high accuracy. We solved this through model optimization techniques including quantization, pruning, and efficient data preprocessing pipelines.",
    github: "https://github.com",
    demo: "https://demo.inspectreai.com",
    gallery: [
      "/assets/images/inspectre-ai/main.jpg",
      "/assets/images/inspectre-ai/gallery-1.jpg",
      "/assets/images/inspectre-ai/gallery-2.jpg"
    ]
  },
  {
    id: "sprout-scan",
    title: "Sprout Scan",
    description: "AI-powered plant health prediction system for precision agriculture",
    image: "/assets/images/sprout-scan/main.jpg",
    video: "/assets/videos/sprout-scan/demo.mp4",
    techStack: ["PyTorch", "Python", "React", "AWS", "TensorFlow Lite"],
    category: "AI",
    overview: "Sprout Scan revolutionizes agriculture through AI-driven plant health monitoring. Using computer vision and machine learning, it predicts diseases early and optimizes crop yields.",
    role: "Full-Stack AI Developer - Built the complete ML pipeline from data collection to deployment, created the mobile-friendly interface, and integrated IoT sensors for real-time monitoring.",
    challenges: "Working with diverse plant species and varying environmental conditions required extensive data augmentation and transfer learning techniques to ensure model robustness across different scenarios.",
    github: "https://github.com",
    gallery: [
      "/assets/images/sprout-scan/main.jpg",
      "/assets/images/sprout-scan/gallery-1.jpg"
    ]
  },
  {
    id: "traffic-simulation",
    title: "Traffic Flow Simulation",
    description: "Advanced traffic pattern analysis and optimization system",
    image: "/assets/images/traffic-simulation/main.jpg",
    video: "/assets/videos/traffic-simulation/demo.mp4",
    techStack: ["Python", "NumPy", "Matplotlib", "Simulation", "Data Analysis"],
    category: "Simulation",
    overview: "A comprehensive traffic simulation system that models complex urban traffic patterns, optimizes signal timing, and predicts congestion hotspots using advanced mathematical models.",
    role: "Simulation Engineer - Developed the core simulation algorithms, implemented traffic flow models, and created visualization tools for traffic pattern analysis.",
    challenges: "Modeling realistic traffic behavior required implementing complex agent-based systems and optimizing computational efficiency for large-scale urban simulations.",
    github: "https://github.com",
    gallery: [
      "/assets/images/traffic-simulation/main.jpg",
      "/assets/images/traffic-simulation/gallery-1.jpg"
    ]
  },
  {
    id: "quantum-photon",
    title: "Quantum Photon Transceiver",
    description: "Quantum simulation of photon behavior and quantum communication protocols",
    image: "/assets/images/quantum-photon/main.jpg",
    video: "/assets/videos/quantum-photon/demo.mp4",
    techStack: ["Qiskit", "Python", "Quantum Computing", "Linear Algebra", "Physics"],
    category: "Quantum",
    overview: "An advanced quantum simulation system that models photon behavior in quantum communication protocols, exploring the fundamentals of quantum information transfer and entanglement.",
    role: "Quantum Software Developer - Designed quantum circuits, implemented photon behavior simulations, and developed educational visualizations for quantum concepts.",
    challenges: "Translating complex quantum mechanics into understandable simulations while maintaining scientific accuracy required deep understanding of both quantum physics and computational methods.",
    github: "https://github.com",
    gallery: [
      "/assets/images/quantum-photon/main.jpg",
      "/assets/images/quantum-photon/gallery-1.jpg"
    ]
  },
  {
    id: "csgo-aimbot",
    title: "CS:GO Neural Network Aimbot",
    description: "Advanced neural network-based aim assistance system using computer vision",
    image: "/assets/images/csgo-aimbot/main.jpg",
    video: "/assets/videos/csgo-aimbot/demo.mp4",
    techStack: ["Python", "PyTorch", "OpenCV", "YOLO", "Real-time Processing", "Computer Vision"],
    category: "AI",
    overview: "A sophisticated neural network system that uses computer vision and deep learning to analyze game frames in real-time. The system demonstrates advanced object detection, tracking algorithms, and predictive modeling for competitive gaming scenarios.",
    role: "AI Research Developer - Designed and implemented the neural network architecture, developed real-time object detection pipeline, optimized inference speed for sub-millisecond latency, and created training datasets for model accuracy.",
    challenges: "The primary challenges included achieving real-time performance with sub-10ms latency, handling dynamic lighting conditions, distinguishing between player models and environment objects, and implementing smooth tracking algorithms that account for player movement prediction.",
    github: "https://github.com",
    gallery: [
      "/assets/images/csgo-aimbot/main.jpg",
      "/assets/images/csgo-aimbot/detection-demo.jpg",
      "/assets/images/csgo-aimbot/neural-network-arch.jpg",
      "/assets/images/csgo-aimbot/performance-metrics.jpg"
    ]
  }
];

const skills = [
  "Python", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning",
  "Computer Vision", "NLP", "Quantum Computing", "React", "FastAPI",
  "Docker", "AWS", "Git", "NumPy", "Pandas"
];

const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-navy-950 text-white custom-scrollbar">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-poppins font-bold text-xl gradient-text">
              Israel Kevin Anaba
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-violet-400 ${
                    activeSection === item.toLowerCase() ? "text-violet-400" : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Israel Kevin Anaba</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            AI/ML Engineer | Building Intelligence for Tomorrow
          </p>
          <Button
            onClick={() => scrollToSection("projects")}
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Explore My Work
          </Button>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-violet-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins text-4xl font-bold text-center mb-16 gradient-text">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-violet-500/30 mb-8 md:mb-0">
                  <img
                    src="/assets/images/profile/headshot.jpg"
                    alt="Israel Kevin Anaba"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Passionate AI/ML Engineer with expertise in developing cutting-edge artificial intelligence solutions. 
                  I specialize in computer vision, deep learning, and quantum computing, with a track record of building 
                  innovative systems that solve real-world problems.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  My work spans from agricultural AI systems to quantum simulations, always pushing the boundaries 
                  of what's possible with machine learning and emerging technologies.
                </p>
                <div className="mb-8">
                  <h3 className="font-poppins text-xl font-semibold mb-4 text-violet-400">Skills & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-violet-900/30 text-violet-300 border-violet-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-full">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="font-poppins text-4xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="glassmorphism border-white/20 overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-poppins text-xl font-semibold text-white">{project.title}</h3>
                    <Badge variant="outline" className="border-violet-500/50 text-violet-400">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-navy-800 text-blue-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="secondary" className="bg-navy-800 text-blue-300 text-xs">
                        +{project.techStack.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <Button variant="outline" className="w-full border-violet-500/50 text-violet-400 hover:bg-violet-500/20">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins text-4xl font-bold text-center mb-16 gradient-text">
              Let's Connect
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-poppins text-2xl font-semibold mb-6 text-violet-400">Get In Touch</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborations in AI/ML. Feel free to reach out if you'd like to connect!
                </p>
                <div className="flex space-x-6">
                  <a
                    href="https://github.com"
                    className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-violet-500/20 transition-colors duration-200"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-violet-500/20 transition-colors duration-200"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://youtube.com"
                    className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-violet-500/20 transition-colors duration-200"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Israel Kevin Anaba. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Index;
