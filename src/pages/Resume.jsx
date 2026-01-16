import React, { useRef } from 'react';
import { FaReact, FaNode, FaJs, FaDatabase, FaServer, FaHtml5, FaGitAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SiNextdotjs } from 'react-icons/si';

const Resume = () => {
  const containerRef = useRef(null);
  const bgShapeRef = useRef(null);

  useGSAP(() => {
    gsap.to(bgShapeRef.current, {
        scale: 1.2,
        rotation: 45,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
  }, { scope: containerRef });

  const educationData = [
    {
      title: "Diploma in Computer Science & Technology",
      institution: "Bogura Polytechnic Institute",
      year: "2021 - 2025"
    },
    {
      title: "Mern Stack Web Development",
      institution: "Programming Hero",
      year: "2025 Certification"
    },
    {
      title: "Higher Secondary Education",
      institution: "Alompur High School",
      year: "2015 - 2020"
    }
  ];

  const skillsData = [
    { icon: FaReact, label: "R", name: "React.js", color: "text-blue-400" }, // Added custom colors for variety if needed, or stick to consistent classes
    { icon: SiNextdotjs, label: "N", name: "Next.js (Basic)", color: "text-gray-800 dark:text-white" }, // Custom text icon for Next.js
    { icon: FaNode, label: "N", name: "Node.js", color: "text-green-500" },
    { icon: FaJs, label: "J", name: "JavaScript (ES6+)", color: "text-yellow-400" },
    { icon: FaDatabase, label: "M", name: "MongoDB", color: "text-green-600" },
    { icon: FaServer, label: "E", name: "Express.js", color: "text-gray-500" },
    { icon: FaHtml5, label: "H", name: "HTML5 & CSS3", color: "text-orange-500" },
    { icon: FaGitAlt, label: "G", name: "Git & GitHub", color: "text-red-500" }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "backOut" }
    }
  };

  return (
    <section ref={containerRef} className="flex-grow flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden min-h-[calc(100vh-100px)]">
      {/* GSAP Background */}
      <div ref={bgShapeRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-7xl z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-4"
          >
            My <span className="text-primary">Resume</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            An overview of my academic background and technical skills. As a motivated MERN stack developer, I am eager to apply my knowledge to build innovative web solutions.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-col gap-12"
          >
            <div>
              <div className="flex items-center mb-8">
                <h3 className="text-2xl font-bold dark:text-white text-gray-900">Education</h3>
                <div className="h-px bg-gray-700 flex-grow ml-4"></div>
              </div>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="bg-white dark:bg-surface-dark p-6 rounded-xl relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gray-700 group-hover:bg-primary transition-colors duration-300"></div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{edu.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.institution}</p>
                    <span className="text-primary text-xs font-semibold">{edu.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.2 }}
             variants={containerVariants}
          >
            <div className="flex items-center mb-8">
              <h3 className="text-2xl font-bold dark:text-white text-gray-900">Professional Skills</h3>
              <div className="h-px bg-gray-700 flex-grow ml-4"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {skillsData.map((skill, index) => (
                <motion.div 
                  key={index}
                  variants={skillItemVariants}
                  className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary p-4 rounded-lg text-center transition-colors duration-300 group cursor-default"
                >
                  {skill.icon ? (
                    <skill.icon className={`text-3xl mb-3 text-gray-400 group-hover:text-primary transition-colors mx-auto`} />
                  ) : (
                    <div className="text-3xl mb-3 text-gray-400 group-hover:text-primary transition-colors font-bold">{skill.label}</div>
                  )}
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-white">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
