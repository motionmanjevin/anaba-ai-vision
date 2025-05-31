
import { X, Github, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-navy-900 border-violet-500/30 text-white overflow-y-auto custom-scrollbar">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Hero Image */}
          <div className="aspect-video overflow-hidden rounded-lg mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="font-poppins text-3xl font-bold gradient-text">{project.title}</h1>
              <Badge variant="outline" className="border-violet-500/50 text-violet-400">
                {project.category}
              </Badge>
            </div>
            <p className="text-xl text-gray-300 mb-6">{project.description}</p>
            
            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              {project.github && (
                <Button
                  variant="outline"
                  className="border-violet-500/50 text-violet-400 hover:bg-violet-500/20"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              )}
              {project.demo && (
                <Button
                  className="bg-violet-600 hover:bg-violet-700"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  Live Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-8">
            <h3 className="font-poppins text-xl font-semibold mb-4 text-violet-400">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-violet-900/30 text-violet-300 border-violet-500/30">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h3 className="font-poppins text-xl font-semibold mb-4 text-violet-400">Overview</h3>
            <p className="text-gray-300 leading-relaxed">{project.overview}</p>
          </div>

          {/* Role & Contribution */}
          <div className="mb-8">
            <h3 className="font-poppins text-xl font-semibold mb-4 text-violet-400">My Role & Contribution</h3>
            <p className="text-gray-300 leading-relaxed">{project.role}</p>
          </div>

          {/* Challenges & Learnings */}
          <div className="mb-8">
            <h3 className="font-poppins text-xl font-semibold mb-4 text-violet-400">Challenges & Learnings</h3>
            <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
          </div>

          {/* Gallery */}
          {project.gallery.length > 0 && (
            <div>
              <h3 className="font-poppins text-xl font-semibold mb-4 text-violet-400">Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="aspect-video overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${project.title} gallery ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
