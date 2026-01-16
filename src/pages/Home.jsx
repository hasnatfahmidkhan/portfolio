import { useRef } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFacebook } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  useGSAP(() => {
    gsap.from([leftContentRef.current, rightContentRef.current], {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.2,
      scale: 0,
    });
  });
  useGSAP(() => {
    gsap.to([leftContentRef.current, rightContentRef.current], {
      opacity: 1,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.2,
      scale: 1,
    });
  });

  return (
    <section class="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-24 py-12 relative overflow-hidden min-h-screen">
      <div class="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-28 lg:gap-16 items-center">
        <div ref={leftContentRef} class="space-y-6 z-10 order-2 lg:order-1">
          <div class="space-y-2">
            <h1 class="text-4xl md:text-6xl font-bold dark:text-white text-gray-900 leading-tight">
              Hasnat Fahmid
            </h1>
            <h2 class="text-2xl md:text-4xl font-semibold dark:text-white text-gray-800 flex gap-2">
              I'm a{" "}
              <span class="text-primary inline-block">
                <Typewriter
                  options={{
                    strings: [
                      "MERN Developer",
                      "FrontEnd Developer",
                      "JS Enthusiast",
                      "AI Enthusiast",
                    ],
                    autoStart: true,
                    loop: true,
                    devMode: true,
                  }}
                />
              </span>
            </h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed text-sm md:text-base text-justify">
            I’m a MERN Stack Developer dedicated to building fast, responsive,
            and user-friendly web applications. I craft clean, efficient code
            and create modern interfaces that deliver a smooth user experience.
            With a continuous drive to learn and improve, I focus on developing
            practical, scalable solutions that bring ideas to life.
          </p>
          <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
            <a
              href="#"
              download="Hasnat_Fahmid_Khan_Resume.pdf"
              class="px-8 py-3 bg-primary text-black font-semibold rounded-full shadow-neon hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit sm:w-auto"
            >
              Download Resume
            </a>
            <div class="flex space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                class="w-10 h-10 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300"
                href="https://github.com/hasnatfahmidkhan"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                class="w-10 h-10 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300"
                href="https://www.linkedin.com/in/hasnatfahmid"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
              <a
                target="_blank"
                aria-label="Email"
                class="w-10 h-10 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300"
                href="mailto:hasnatfahmidkhan@gmail.com"
              >
                <FaEnvelope />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                class="w-10 h-10 border border-primary rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-all duration-300"
                href="https://www.facebook.com/hasnatfahmidkhan"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>
        </div>
        <div
          ref={rightContentRef}
          class="relative flex justify-center items-center order-1 lg:order-2"
        >
          {/* Inner Circle - CW */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            class="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border-t-[3px] border-l-[3px] border-primary/40 rounded-full"
          ></motion.div>
          {/* Middle Circle - CCW */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            class="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full border-r-2 border-b-2 border-primary/60"
          ></motion.div>
          {/* Outer Circle - CW */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            class="absolute w-[340px] h-[340px] md:w-[520px] md:h-[520px] rounded-full border-t-2 border-r-2 border-primary/70"
          ></motion.div>
          <div class="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-transparent shadow-2xl z-20 bg-surface-dark flex items-end justify-center">
            <img
              alt="Portrait of Lucius Meshach"
              class="object-cover w-full h-full transform scale-110 translate-y-4 hover:scale-115 transition-transform duration-500"
              src="hasnatProfile.jpg"
            />
            <div class="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
