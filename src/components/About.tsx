import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Globe, Award, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Mastery",
      description: "Expert in React, Next.js, Django, FastAPI with 7+ years of production experience"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Advanced implementations with OpenAI, LangChain, TensorFlow, and custom ML pipelines"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "DevOps & MLOps",
      description: "Kubernetes, Docker, CI/CD, automated deployments, and scalable infrastructure"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "IoT & Automation",
      description: "MQTT protocols, Raspberry Pi, sensor networks, and n8n workflow automation"
    }
  ];

  const expertise = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Technical Leadership",
      description: "Led cross-functional teams, architected enterprise solutions, and mentored junior developers across multiple projects."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Success Focus",
      description: "100% job success rate on Upwork with several completed projects, consistently delivering beyond client expectations."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Problem-Solving Approach",
      description: "Analytical mindset with ability to break down complex business requirements into scalable technical solutions."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation & Optimization",
      description: "Continuously exploring cutting-edge technologies to deliver competitive advantages and operational efficiency."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-85 h-85 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 p-1 bg-gradient-to-r from-blue-500 to-purple-500">
                <img
                  src="../../dist/assets/sayed.png"
                  alt="Sayed - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full bg-gray-800"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Available for Hire
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Transforming Ideas into Intelligent Solutions
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm <span className="text-blue-400 font-semibold">Sayed</span> – a seasoned full-stack engineer with 
                <span className="text-purple-400 font-semibold"> 7+ years</span> of expertise in building scalable, 
                intelligent systems that drive business growth. My passion lies in bridging the gap between complex 
                technology and practical business solutions.
              </p>
              <p>
                With a proven track record of <span className="text-green-400 font-semibold">several successful projects </span> 
                and <span className="text-yellow-400 font-semibold">100% job success rate</span> on Upwork, I specialize 
                in architecting end-to-end solutions that combine modern web technologies, artificial intelligence, 
                and robust DevOps practices.
              </p>
              <p>
                My expertise spans from crafting intuitive user interfaces with React and Next.js to building 
                high-performance backends with Python, Django, and FastAPI. I excel in implementing AI/ML solutions, 
                IoT integrations, and automated workflows that reduce operational overhead while maximizing efficiency.
              </p>
              <p className="text-blue-300">
                <strong>What sets me apart:</strong> I don't just write code – I architect solutions. Every project 
                begins with understanding your business objectives, followed by strategic technical planning, and 
                culminates in delivering maintainable, scalable systems that grow with your needs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Competencies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-blue-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Professional Excellence */}
        <motion.div
          className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Professional Excellence & Approach
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-blue-400 mt-1 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;