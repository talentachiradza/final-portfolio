import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Github, Eye, Filter, FileText, Lock, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      category: "frontend",
      description: "A modern, responsive portfolio website built with React.js and Next.js featuring advanced performance optimization and stunning visual effects.",
      image: "https://tcsdtzmaybuqyviywghy.supabase.co/storage/v1/object/public/Images/Screenshot%202025-09-23%20125037.png",
      technologies: ["React.js", "Vite", "TailwindCSS", "Framer Motion"],
      liveUrl: null,
      githubUrl: null,
      caseStudyUrl: null,
      status: "Live"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "fullstack",
      description: "Full-stack e-commerce solution with payment gateway integration, inventory management, and admin dashboard.",
      image: "https://tcsdtzmaybuqyviywghy.supabase.co/storage/v1/object/public/Images/Screenshot%202025-09-23%20124838.png",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: null,
      githubUrl: null, // Private Repo
      caseStudyUrl: "/projects/ecommerce-platform",
      status: "Coming Soon"
    },
    {
      id: 3,
      title: "Blog Platform",
      category: "fullstack",
      description: "Real-time blog platform with Firebase backend, featuring user authentication, content management, and social features.",
      image: "https://tcsdtzmaybuqyviywghy.supabase.co/storage/v1/object/public/Images/Screenshot%202025-09-23%20125929.png",
      technologies: ["React.js", "Firebase", "TailwindCSS"],
      liveUrl: null,
      githubUrl: null,
      caseStudyUrl: null,
      status: "Coming Soon"
    },
    {
      id: 4,
      title: "Community Education Platform",
      category: "frontend",
      description: "Educational platform for Dzikwa Trust community programs, featuring course management and progress tracking.",
      image: "https://tcsdtzmaybuqyviywghy.supabase.co/storage/v1/object/public/Images/Screenshot%202025-09-23%20124944.png",
      technologies: ["React.js", "Vite", "TailwindCSS", "Framer Motion"],
      liveUrl: null,
      githubUrl: null,
      caseStudyUrl: null,
      status: "Coming Soon"
    },
    {
      id: 4,
      title: "EchoVerse Academy",
      category: "frontend",
      description: "Echoverse is a revolutionary tech academy based in Bulawayo with a mission to ignite talent in AI, Machine Learning, and Data Science across Africa and beyond.",
      image: "https://tcsdtzmaybuqyviywghy.supabase.co/storage/v1/object/public/Images/Screenshot%202025-09-23%20124918.png",
      technologies: ["React.js", "Vite", "TailwindCSS", "Framer Motion"],
      liveUrl: null,
      githubUrl: null,
      caseStudyUrl: null,
      status: "Coming Soon"
    },
    {
      id: 4,
      title: "CampusKey Zimbabwe",
      category: "frontend",
      description: "Discover quality accommodation near Zimbabwe's top universities. Safe, affordable, and verified properties for students.",
      image: "https://tcsdtzmaybuqyviywghy.supabase.co/storage/v1/object/public/Images/Screenshot%202025-09-23%20124903.png",
      technologies: ["React.js", "Vite", "TailwindCSS", "Framer Motion"],
      liveUrl: null,
      githubUrl: null,
      caseStudyUrl: null,
      status: "Coming Soon"
    },
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'frontend', label: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'fullstack', label: 'Full-Stack', count: projects.filter(p => p.category === 'fullstack').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleButtonClick = (url, type) => {
    if (url) {
      if (type === 'caseStudy') {
        navigate(url);
      } else {
        window.open(url, '_blank');
      }
    } else {
      let title = '';
      if (type === 'live') title = 'Live Demo Unavailable';
      if (type === 'code') title = 'Code is Private';
      if (type === 'caseStudy') title = 'Case Study Unavailable';
      
      toast({
        title: title,
        description: "This feature isn't implemented yet—but you can request it! 🚀"
      });
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Live':
        return <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"><Eye className="w-3 h-3" />{status}</span>;
      case 'Private Repo':
        return <span className="bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"><Lock className="w-3 h-3" />Private</span>;
      case 'Coming Soon':
        return <span className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1"><Clock className="w-3 h-3" />{status}</span>;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions and technical expertise through real-world applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'glass-effect hover:glow-effect'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>{filter.label}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {filter.count}
                </span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="project-card glass-effect rounded-2xl overflow-hidden group flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={project.title}
                    src={project.image} />
                  <div className="absolute top-4 right-4">
                    {getStatusBadge(project.status)}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-2">
                    <Button
                      onClick={() => handleButtonClick(project.githubUrl, 'code')}
                      variant="outline"
                      size="sm"
                      disabled={!project.githubUrl}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                    <Button
                      onClick={() => handleButtonClick(project.liveUrl, 'live')}
                      size="sm"
                      disabled={!project.liveUrl}
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    {project.caseStudyUrl && (
                      <Button
                        onClick={() => handleButtonClick(project.caseStudyUrl, 'caseStudy')}
                        variant="secondary"
                        size="sm"
                        className="col-span-2"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Case Study
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Have a Project in Mind?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited to work on new and challenging projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <motion.button
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;