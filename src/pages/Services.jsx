import React, { useRef } from 'react';
import { FaReact, FaNode, FaDatabase, FaLayerGroup } from 'react-icons/fa';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Services = () => {
  const containerRef = useRef(null);
  const bgShapeRef = useRef(null);

  useGSAP(() => {
    gsap.to(bgShapeRef.current, {
        rotation: 360,
        x: 100,
        y: -50,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
  }, { scope: containerRef });

  const services = [
    {
      icon: FaReact,
      title: "Frontend Development",
      description: <>Building responsive, interactive, and high-performance user interfaces using <span className="text-primary font-medium">React.js</span>. I create seamless experiences with modern CSS frameworks.</>
    },
    {
      icon: FaNode,
      title: "Backend Development",
      description: <>Developing fast, scalable, and secure server-side applications and RESTful APIs using <span className="text-primary font-medium">Node.js</span> and <span className="text-primary font-medium">Express</span>.</>
    },
    {
      icon: FaDatabase,
      title: "Database Management",
      description: <>Designing and optimizing NoSQL database schemas with <span className="text-primary font-medium">MongoDB</span> to ensure efficient data storage, retrieval, and reliability.</>
    },
    {
      icon: FaLayerGroup,
      title: "Full-stack Development",
      description: "End-to-end web application development. I integrate frontend interfaces with robust backend logic to deliver complete, production-ready MERN solutions."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={containerRef} className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-24 py-12 relative overflow-hidden min-h-[calc(100vh-100px)]">
      {/* GSAP Background Element */}
      <div ref={bgShapeRef} className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto z-10 flex flex-col justify-center h-full">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-4"
          >
            My <span className="text-primary">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            Specialized in building robust and scalable web applications using the MERN stack. Here is how I can help you build your next product.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="service-card bg-white dark:bg-surface-dark p-8 rounded-2xl text-center hover:shadow-[0_0_20px_rgba(0,223,69,0.2)] border border-gray-200 dark:border-transparent hover:border-primary dark:hover:border-primary transition-all duration-300 group cursor-default"
            >
              <div className="w-16 h-16 mx-auto bg-gray-100 dark:bg-background-dark rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="text-3xl text-primary group-hover:text-surface-dark transition-colors duration-300" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold dark:text-white text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
