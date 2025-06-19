import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechInnovate Solutions",
      location: "Remote",
      duration: "2022 - Present",
      description: "Led development of AI-powered web applications serving 10,000+ users. Implemented MLOps pipelines reducing model deployment time by 75%. Architected scalable microservices using Python, React, and Docker.",
      technologies: ["Python", "React", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
      achievements: [
        "Increased system performance by 40% through optimization",
        "Mentored 5 junior developers",
        "Delivered 15+ successful projects"
      ]
    },
    {
      title: "AI & IoT Engineer",
      company: "SmartTech Industries",
      location: "San Francisco, CA",
      duration: "2021 - 2022",
      description: "Developed IoT solutions for smart manufacturing, integrating sensor networks with real-time analytics. Built computer vision models for quality control, achieving 95% accuracy in defect detection.",
      technologies: ["Python", "TensorFlow", "MQTT", "Raspberry Pi", "InfluxDB", "Grafana"],
      achievements: [
        "Reduced manufacturing defects by 30%",
        "Deployed 50+ IoT devices across 3 facilities",
        "Saved $200K annually in quality control costs"
      ]
    },
    {
      title: "Python Developer",
      company: "DataFlow Systems",
      location: "New York, NY",
      duration: "2019 - 2020",
      description: "Built data processing pipelines handling 100GB+ daily data. Developed REST APIs using Flask and FastAPI. Created automated reporting systems reducing manual work by 60%.",
      technologies: ["Python", "Flask", "FastAPI", "PostgreSQL", "Pandas", "Celery"],
      achievements: [
        "Processed 10TB+ of data monthly",
        "Built 25+ REST API endpoints",
        "Improved data processing speed by 50%"
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-cyan-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A journey of continuous learning and delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <motion.div
                    className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-blue-400 font-semibold mb-2">
                          {exp.company}
                        </p>
                      </div>
                      <ExternalLink className="text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" size={18} />
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Achievements:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <span className="text-green-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md border border-gray-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
            <ExternalLink size={20} />
            Download Full Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;