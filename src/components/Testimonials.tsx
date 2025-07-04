import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Roberto Perez",
      // role: "CTO at HealthFlow",
      // company: "HealthFlow Inc.",
      rating: 5,
      testimonial: "Sayed is hands down the best freelancer I've worked with on Upwork. His enthusiasm is contagious, and the ideas he gave us were so valuable. A multi-talented individual, and an excellent programmer with diverse interests, he was able to give us valuable inputs for our project and is obviously good at what he does. Talented, motivated, responsive and very professional. He has deep knowledge of coding and components. I had a great time working with him and will definitely choose him for future programming work as well. Highly recommend, actually he should be your go to person if you're looking for any programming and electronics related work. A special thanks to Sayed for the great experience.",
      // image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Mandeep Premi, Mandeep P",
      // role: "Product Manager",
      // company: "TechStart Solutions",
      rating: 5,
      testimonial: "Working with Sayed was a smooth and positive experience. He quickly understood the project requirements and delivered high-quality work with great attention to detail. Throughout the project, his communication was clear, professional, and prompt. Sayed was proactive in providing updates and always open to feedback. Deadlines were consistently met, and the overall execution exceeded expectations. I would gladly work with him again and highly recommend his services to others",
      // image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    // {
    //   name: "Michael Rodriguez",
    //   role: "Founder",
    //   company: "DataDriven Co.",
    //   rating: 5,
    //   testimonial: "Sayed's MLOps expertise helped us deploy our machine learning models efficiently. The automated pipeline he built reduced our deployment time from days to minutes. Highly recommended for AI projects.",
    //   image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150"
    // },
    // {
    //   name: "Emily Johnson",
    //   role: "Operations Director",
    //   company: "LogiTech Solutions",
    //   rating: 5,
    //   testimonial: "The automation workflows Sayed created using n8n eliminated 80% of our manual processes. His understanding of business requirements and ability to translate them into technical solutions is remarkable.",
    //   image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150"
    // },
    // {
    //   name: "David Kim",
    //   role: "Lead Developer",
    //   company: "InnovateTech",
    //   rating: 5,
    //   testimonial: "Sayed's full-stack development skills are top-notch. He built our entire e-commerce platform with AI recommendations. The code quality and architecture are exceptional. A true professional.",
    //   image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    // }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What clients say about working with me
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentTestimonial}
            className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-700/50"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>

            <blockquote className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed italic">
              "{testimonials[currentTestimonial].testimonial}"
            </blockquote>

            <div className="flex items-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30 mr-4"
              />
              <div>
                <h4 className="text-xl font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-blue-400 font-medium">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].company}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-gray-800/60 rounded-full text-white hover:bg-gray-700 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 bg-gray-800/60 rounded-full text-white hover:bg-gray-700 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;