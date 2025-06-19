import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, Calendar, User, Briefcase } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Apps', 'AI/ML', 'DevOps', 'Automation', 'Mobile'];

  const projects = [
    {
      id: 1,
      title: "Dental Aligner Tracking System",
      category: "Web Apps",
      description: "Comprehensive dental hospital management system with AI chatbot integration for managing doctors, patients, collections, and equipment. Built with Django and deployed using modern DevOps practices.",
      image: "https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Django", "Python", "Docker", "Kubernetes", "CI/CD", "DigitalOcean", "AI Chatbot"],
      role: "Full Stack Developer, DevOps Engineer, Git Code Reviewer, OS Administrator",
      publishedDate: "May 31, 2025",
      github: "#",
      demo: "#",
      highlights: [
        "Implemented AI chatbot for patient assistance",
        "Full hospital management system",
        "Kubernetes orchestration",
        "CI/CD pipeline setup"
      ]
    },
    {
      id: 2,
      title: "Web Scraping & HubSpot Integration",
      category: "Automation",
      description: "End-to-end automation system using N8N for web scraping, personalized email communication, and seamless HubSpot CRM integration. Optimized data flow and improved communication efficiency.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["n8n", "Web Scraping", "HubSpot API", "Email Automation", "CRM Integration"],
      role: "Web Scraping Specialist, Email Automation Engineer, HubSpot Integration Developer",
      publishedDate: "Jun 4, 2025",
      github: "#",
      demo: "#",
      highlights: [
        "Automated data scraping workflows",
        "Personalized email campaigns",
        "HubSpot CRM synchronization",
        "Complete documentation provided"
      ]
    },
    {
      id: 3,
      title: "Urban Fair Space Management",
      category: "Mobile",
      description: "Urban space management system addressing city governance challenges with iCity ontology. Supports multiple stakeholders including city planners, businesses, and citizens for transparent public space management.",
      image: "https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "FastAPI", "Jenkins", "Docker", "Linux", "VPN", "CI/CD"],
      role: "Backend Developer, DevOps Engineer, Git Code Reviewer, OS Admin, VPN Admin, DB Admin",
      publishedDate: "Jun 1, 2025",
      github: "#",
      demo: "#",
      highlights: [
        "Multi-stakeholder urban planning solution",
        "iCity ontology implementation",
        "Jenkins CI/CD pipeline",
        "Comprehensive infrastructure management"
      ]
    },
    {
      id: 4,
      title: "AI-Powered E-commerce Platform",
      category: "AI/ML",
      description: "Full-stack e-commerce solution with AI-driven product recommendations and inventory management",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Python", "TensorFlow", "PostgreSQL", "Docker"],
      role: "Full Stack Developer, AI Engineer",
      publishedDate: "Mar 15, 2025",
      github: "#",
      demo: "#",
      highlights: [
        "AI recommendation engine",
        "Real-time inventory tracking",
        "Scalable architecture",
        "Advanced analytics dashboard"
      ]
    },
    {
      id: 5,
      title: "IoT Smart Home Dashboard",
      category: "DevOps",
      description: "Real-time monitoring and control system for smart home devices using MQTT and WebSocket",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MQTT", "Raspberry Pi", "InfluxDB", "Grafana"],
      role: "IoT Developer, System Architect",
      publishedDate: "Feb 20, 2025",
      github: "#",
      demo: "#",
      highlights: [
        "Real-time device monitoring",
        "MQTT protocol implementation",
        "Custom dashboard interface",
        "Raspberry Pi integration"
      ]
    },
    {
      id: 6,
      title: "Automated MLOps Pipeline",
      category: "DevOps",
      description: "End-to-end ML pipeline with automated training, validation, and deployment using GitHub Actions",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "MLflow", "Docker", "Kubernetes", "GitHub Actions"],
      role: "MLOps Engineer, DevOps Specialist",
      publishedDate: "Jan 10, 2025",
      github: "#",
      demo: "#",
      highlights: [
        "Automated model deployment",
        "Continuous integration pipeline",
        "Model versioning and tracking",
        "Kubernetes orchestration"
      ]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world solutions across web development, AI, IoT, and automation delivered for clients worldwide
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Filter size={16} />
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-800 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.demo}
                    className="p-2 bg-gray-900/80 rounded-full text-white hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="text-xs bg-blue-600/90 text-white px-2 py-1 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{project.publishedDate}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-1 mb-1">
                    <User size={14} className="text-blue-400" />
                    <span className="text-xs font-medium text-blue-400">Role:</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {project.role}
                  </p>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {project.highlights && (
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-white mb-2 flex items-center gap-1">
                      <Briefcase size={12} />
                      Key Highlights:
                    </h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2">
                          <span className="text-green-400 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-md">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            These projects represent real solutions delivered to clients worldwide, 
            showcasing expertise across multiple technologies and domains.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
            <ExternalLink size={20} />
            View All Projects on Upwork
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;