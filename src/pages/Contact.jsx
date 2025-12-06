import React, { useRef } from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook, FaDiscord, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Contact = () => {
  const containerRef = useRef(null);
  const bgShapeRef = useRef(null);

  useGSAP(() => {
    gsap.to(bgShapeRef.current, {
        y: -30,
        x: 30,
        rotation: 360,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "linear"
    });
  }, { scope: containerRef });

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/hasnatfahmidkhan" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/hasnatfahmid" },
    { icon: FaFacebook, href: "https://www.facebook.com/hasnatfahmidkhan" },
    { icon: FaDiscord, href: "https://discord.com/users/hasnatfahmid" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section ref={containerRef} className="flex-grow flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 py-12 relative overflow-hidden min-h-[calc(100vh-100px)]">
      {/* GSAP Bg Shape */}
      <div ref={bgShapeRef} className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto z-10 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-4"
          >
            Contact <span className="text-primary">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="flex flex-col space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold dark:text-white text-gray-900">
              Get in <span class="text-primary">Touch</span>
            </motion.h3>
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm currently available for freelance work or full-time opportunities. If you have a project that needs some creative touch, let's chat.
            </motion.p>
            <div className="space-y-6 mt-4">
              <motion.div variants={itemVariants} className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-surface-dark border border-gray-700 flex items-center justify-center text-primary shadow-lg">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</h4>
                  <p className="text-lg font-medium dark:text-white text-gray-900">hasnatfahmidkhan@gmail.com</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-lg bg-surface-dark border border-gray-700 flex items-center justify-center text-primary shadow-lg">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Location</h4>
                  <p className="text-lg font-medium dark:text-white text-gray-900">Bogura, Bangladesh</p>
                </div>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="pt-8">
              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-full bg-surface-dark border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary hover:shadow-neon transition-all duration-300"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-green-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500 -z-10"></div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">Your Name</label>
                  <input
                    className="w-full bg-gray-50 dark:bg-[#161b22] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400"
                    id="name"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email Address</label>
                  <input
                    className="w-full bg-gray-50 dark:bg-[#161b22] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400"
                    id="email"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="subject">Subject</label>
                <input
                  className="w-full bg-gray-50 dark:bg-[#161b22] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400"
                  id="subject"
                  placeholder="Project Inquiry"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="message">Message</label>
                <textarea
                  className="w-full bg-gray-50 dark:bg-[#161b22] border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400 resize-none"
                  id="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                ></textarea>
              </div>
              <button
                className="w-full bg-primary hover:bg-green-400 text-black font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-neon transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                type="button"
              >
                <span>Send Message</span>
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
