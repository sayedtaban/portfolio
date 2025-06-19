import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      skills: [
        { name: "OpenAI & LangChain", level: 90 },
        { name: "TensorFlow & PyTorch", level: 85 },
        { name: "Computer Vision (YOLO)", level: 88 },
        { name: "NLP & Text Processing", level: 92 }
      ]
    },
    {
      title: "Full Stack Web",
      icon: "🌐",
      skills: [
        { name: "React & Next.js", level: 95 },
        { name: "Python & Django", level: 98 },
        { name: "FastAPI & Flask", level: 90 },
        { name: "MongoDB & PostgreSQL", level: 85 }
      ]
    },
    {
      title: "DevOps & Automation",
      icon: "🔁",
      skills: [
        { name: "GitHub Actions", level: 88 },
        { name: "Docker & Kubernetes", level: 85 },
        { name: "CI/CD Pipelines", level: 90 },
        { name: "n8n Automation", level: 95 }
      ]
    },
    {
      title: "IoT & Embedded",
      icon: "📡",
      skills: [
        { name: "Raspberry Pi", level: 92 },
        { name: "MQTT & Sensor Networks", level: 88 },
        { name: "ESP32 & Arduino", level: 85 },
        { name: "Real-time Data Processing", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mastering the art of technology across multiple domains to deliver exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-4">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;