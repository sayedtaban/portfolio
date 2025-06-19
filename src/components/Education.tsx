import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Star } from 'lucide-react';

const Education = () => {
  const education = [
    // {
    //   degree: "Master of Science in Computer Science",
    //   institution: "University of Technology",
    //   location: "San Francisco, CA",
    //   duration: "2018 - 2020",
    //   gpa: "3.9/4.0",
    //   specialization: "Artificial Intelligence & Machine Learning",
    //   achievements: [
    //     "Summa Cum Laude graduate",
    //     "Research in Deep Learning for Computer Vision",
    //     "Published 3 papers in AI conferences",
    //     "Teaching Assistant for Advanced Algorithms"
    //   ],
    //   coursework: [
    //     "Machine Learning & Deep Learning",
    //     "Computer Vision & NLP",
    //     "Distributed Systems",
    //     "Advanced Algorithms & Data Structures"
    //   ]
    // },
    {
      degree: "Bachelor of Science in Computer science",
      institution: "State University of Engineering",
      location: "Swedish, Mittuniversitetet",
      duration: "2015 - 2018",
      gpa: "3.8/4.0",
      specialization: "Full Stack Development & Systems Design",
      achievements: [
        "Magna Cum Laude graduate",
        "President of Computer Science Society",
        "Winner of University Hackathon 2017",
        "Dean's List for 6 consecutive semesters"
      ],
      coursework: [
        "Software Engineering Principles",
        "Database Systems & Design",
        "Web Development Technologies",
        "Operating Systems & Networks"
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001",
      icon: "☁️"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-2023-002",
      icon: "🌐"
    },
    {
      title: "Kubernetes Certified Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-003",
      icon: "⚙️"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2022",
      credentialId: "TF-DEV-2022-004",
      icon: "🧠"
    }
  ];

  const continuousLearning = [
    "Advanced MLOps with Kubeflow",
    "Microservices Architecture Patterns",
    "React 18 & Next.js 14 Advanced Features",
    "AI Ethics & Responsible AI Development",
    "Blockchain & Web3 Technologies"
  ];

  return (
    <section className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Strong academic foundation combined with industry-recognized certifications and continuous learning
          </p>
        </motion.div>

        {/* Academic Education */}
        <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GraduationCap className="text-blue-400" />
            Academic Background
          </motion.h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          {edu.degree}
                        </h4>
                        <p className="text-blue-400 font-semibold text-lg mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                          <Star className="text-yellow-400" size={16} />
                          <span className="text-yellow-400 font-semibold">GPA: {edu.gpa}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-purple-400 font-medium">{edu.specialization}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <Award size={18} className="text-green-400" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2 text-gray-300">
                            <span className="text-green-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <BookOpen size={18} className="text-blue-400" />
                      Relevant Coursework
                    </h5>
                    <div className="space-y-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="text-sm bg-gray-700/30 text-gray-300 px-3 py-2 rounded-md border border-gray-600/30"
                        >
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        {/* <div className="mb-16">
          <motion.h3
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Award className="text-green-400" />
            Professional Certifications
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-green-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-blue-400 font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>Issued: {cert.date}</span>
                      <span>•</span>
                      <span className="font-mono text-xs">{cert.credentialId}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div> */}

        {/* Continuous Learning */}
        <motion.div
          className="bg-gray-800/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <BookOpen className="text-purple-400" />
            Continuous Learning & Development
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Staying at the forefront of technology through continuous learning and professional development. 
            Currently pursuing advanced knowledge in emerging technologies and industry best practices.
          </p>
          <div className="flex flex-wrap gap-3">
            {continuousLearning.map((topic, index) => (
              <motion.span
                key={index}
                className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;