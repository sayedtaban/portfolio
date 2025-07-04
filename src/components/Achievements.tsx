import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Star, Globe, Bot, Users } from 'lucide-react';

const Achievements = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    hours: 0,
    rating: 0,
    countries: 0,
    models: 0,
    clients: 0
  });

  const finalValues = {
    projects: 2,
    hours: 15,
    rating: 100,
    countries: 2,
    models: 1,
    clients: 2
  };

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      label: "Completed Projects",
      value: counters.projects,
      suffix: "+",
      color: "text-blue-400"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      label: "Upwork Hours",
      value: counters.hours,
      suffix: "+",
      color: "text-green-400"
    },
    {
      icon: <Star className="w-8 h-8" />,
      label: "Success Rate",
      value: counters.rating,
      suffix: "%",
      color: "text-yellow-400"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      label: "Countries Served",
      value: counters.countries,
      suffix: "",
      color: "text-purple-400"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      label: "AI Models Deployed",
      value: counters.models,
      suffix: "+",
      color: "text-red-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      label: "Happy Clients",
      value: counters.clients,
      suffix: "+",
      color: "text-pink-400"
    }
  ];

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounters(prev => ({
        projects: Math.min(prev.projects + finalValues.projects / steps, finalValues.projects),
        hours: Math.min(prev.hours + finalValues.hours / steps, finalValues.hours),
        rating: Math.min(prev.rating + finalValues.rating / steps, finalValues.rating),
        countries: Math.min(prev.countries + finalValues.countries / steps, finalValues.countries),
        models: Math.min(prev.models + finalValues.models / steps, finalValues.models),
        clients: Math.min(prev.clients + finalValues.clients / steps, finalValues.clients)
      }));
    }, stepDuration);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setCounters(finalValues);
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Achievements & Impact
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Numbers that reflect the quality and scale of my work
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`${achievement.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {Math.round(achievement.value)}{achievement.suffix}
              </div>
              <div className="text-gray-400 font-medium text-sm">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            These numbers represent more than just statistics – they reflect meaningful solutions 
            delivered to businesses across the globe, helping them scale, automate, and innovate 
            with cutting-edge technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;