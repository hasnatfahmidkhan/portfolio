import React, { useRef } from "react";
import { FaCode, FaEnvelope, FaGamepad, FaMap } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
  const containerRef = useRef(null);
  const blob1Ref = useRef(null);
  const blob2Ref = useRef(null);

  useGSAP(() => {
    gsap.to(blob1Ref.current, {
      y: -30,
      x: 15,
      rotation: 10,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(blob2Ref.current, {
      y: 30,
      x: -15,
      rotation: -10,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="overflow-hidden">
      <section className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-24 py-12 relative">
        <div className="container mx-auto z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-8"
            >
              <div>
                <motion.h4 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="text-primary font-bold uppercase tracking-widest text-sm mb-2"
                >
                  Who I am
                </motion.h4>
                <h1 className="text-5xl md:text-6xl font-bold dark:text-white text-gray-900 mb-6 leading-tight">
                  About <span className="text-primary">Me</span>
                </h1>
                <div className="h-1.5 w-24 bg-primary rounded-full mb-8" />
                <h3 className="text-2xl font-semibold dark:text-gray-200 text-gray-800 mb-4">
                  Passionate MERN Stack Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6">
                  Hello! I'm Hasnat Fahmid, a dedicated fresher in the world of
                  web development with a specialized focus on the MERN stack
                  (MongoDB, Express.js, React, Node.js). My journey into coding
                  started with a curiosity for how things work on the web, which
                  quickly turned into a passion for building dynamic and
                  scalable applications.
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                  I am constantly learning and evolving, aiming to create
                  seamless user experiences and efficient backend architectures.
                  When I'm not coding, I enjoy exploring new tech trends,
                  gaming, and contributing to open-source communities.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                {[
                  { icon: FaCode, title: "Interest", desc: "Web Development" },
                  { icon: FaGamepad, title: "Hobby", desc: "Gaming" },
                  { icon: FaMap, title: "Location", desc: "Bogura, BD" },
                  { icon: FaEnvelope, title: "Whats'app", desc: "01944224475" }
                ].map((item, index) => (
                   <motion.div 
                     key={index}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                     viewport={{ once: true }}
                     className="flex items-center gap-3"
                   >
                    <div className="w-10 h-10 rounded-full bg-surface-dark flex items-center justify-center text-primary border border-gray-700">
                      <item.icon />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-semibold">
                        {item.title}
                      </p>
                      <p className="dark:text-white font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md aspect-[3/4] group">
                {/* Blobs with GSAP refs */}
                <div ref={blob1Ref} className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
                <div ref={blob2Ref} className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
                
                <div className="absolute inset-0 border-2 border-primary/50 rounded-2xl transform translate-x-5 translate-y-5 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
                <div className="absolute inset-0 bg-surface-dark rounded-2xl transform -translate-x-2 -translate-y-2 -z-10" />
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-60" />
                  <img
                    alt="Hasnat Fahmid"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src="hasnatProfile.jpg"
                  />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-lg flex items-center gap-3"
                  >
                    <div className="bg-primary text-black text-xs font-bold px-2 py-1 rounded">
                      MERN DEVELOPER
                    </div>
                    <span className="text-white text-sm font-medium">
                      Available for Opportunities
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
