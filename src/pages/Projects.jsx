import React, { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/ProjectCard";

// Images (Assuming these imports are correct based on file structure)
import tastio from "../assets/tastio.png";
import gamespace from "../assets/gamespace.png";
import greenfabric from "../assets/greenfabric.png";
import portfolio from "../assets/portfolio.png";

const Projects = () => {
  const containerRef = useRef(null);
  const bgShapeRef = useRef(null);

  useGSAP(() => {
    gsap.to(bgShapeRef.current, {
        x: -50,
        y: 50,
        rotation: -10,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
  }, { scope: containerRef });

  const projectsData = [
    {
      title: "Tastio",
      description: "Tastio is a food review platform to discover and share authentic Bangladeshi dishes. Built with React and Firebase, it offers a smooth, secure, and responsive experience.",
      image: tastio,
      github: "https://github.com/hasnatfahmidkhan/tastio/",
      demo: "https://tastio-web.firebaseapp.com/",
      tags: [
        { name: "React", bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-800 dark:text-blue-300" },
        { name: "Node.js", bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-800 dark:text-green-300" },
        { name: "Express", bg: "bg-pink-100 dark:bg-pink-900/30", text: "text-pink-800 dark:text-pink-300" },
        { name: "MongoDB", bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-800 dark:text-yellow-300" }
      ]
    },
    {
      title: "Gamespace",
      description: "Gamespace is a game library where users can explore a curated collection of games and view their information, and visit official download/install links.",
      image: gamespace,
      github: "https://github.com/hasnatfahmidkhan/game-space/",
      demo: "https://game-space-app.netlify.app/",
      tags: [
        { name: "React", bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-800 dark:text-blue-300" },
        { name: "Firebase", bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-800 dark:text-orange-300" },
        { name: "Axios", bg: "bg-pink-100 dark:bg-pink-900/30", text: "text-pink-800 dark:text-pink-300" },
        { name: "Motion", bg: "bg-gray-100 dark:bg-gray-700", text: "text-gray-800 dark:text-gray-300" }
      ]
    },
    {
      title: "Green Fabric",
      description: "Green Fabric is a T-Shirt store with Firebase Auth and MongoDB, letting users add and manage products.",
      image: greenfabric,
      github: "https://github.com/hasnatfahmidkhan/green-fabric",
      demo: "https://green-fabric.vercel.app/",
      tags: [
        { name: "Next.js", bg: "bg-indigo-100 dark:bg-indigo-900/30", text: "text-indigo-800 dark:text-indigo-300" },
        { name: "Axios", bg: "bg-teal-100 dark:bg-teal-900/30", text: "text-teal-800 dark:text-teal-300" },
        { name: "Firebase", bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-800 dark:text-orange-300" },
        { name: "MongoDB", bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-800 dark:text-yellow-300" }
      ]
    },
    {
      title: "Portfolio",
      description: "A modern, responsive personal portfolio built to showcase my skills, projects, and experience as a MERN Stack Developer.",
      image: portfolio,
      github: "#",
      demo: "https://hasnatfahmid.netlify.app/",
      tags: [
        { name: "React", bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-800 dark:text-yellow-300" },
        { name: "GSAP", bg: "bg-sky-100 dark:bg-sky-900/30", text: "text-sky-800 dark:text-sky-300" },
        { name: "Framer Motion", bg: "bg-slate-100 dark:bg-slate-700", text: "text-slate-800 dark:text-slate-300" }
      ]
    },
    {
      title: "FitTrack",
      description: "Workout logger and progress visualization app. Users can define custom exercises and view charts of their performance over time.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa0xQPSIjPna2FXtyTufgRIpOD3hXRZy3qA1Nrvf2_RQd7J2SrG_M0rSBIwI9P65ZP14ar6Q6NrLZGpCgWSsjm8GH848uf-2hvIkOo7CmXotAW7C_pKMSStZZx3YLw3OWREtuDFrViwVXWLGcyXcCdpEyF5gjV3Zgean5Fyjeemu6d_5fZOpz_oFYDBPnn6DRJOfXCtyx3m8zvqEn9-X4Fvh_rwDbgFjeRWl4ncozDffGa2KoEKjmARsACtu_CH3cE0YIGxRUwOd8",
      github: "#",
      demo: "#",
      tags: [
        { name: "React", bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-800 dark:text-blue-300" },
        { name: "Chart.js", bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-800 dark:text-red-300" },
        { name: "MongoDB", bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-800 dark:text-green-300" }
      ]
    },
    {
      title: "SnippetVault",
      description: "A secure place for developers to store, organize, and share useful code snippets. Features syntax highlighting and tagging.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlkGnJdiIadhSce8eLEKAdE4UK52LObZDdd5S9HxQVQ5LuWG93J_cIPWyHDpqIS8925jisrotnvkFIgqZpu6Dbusn1H8sBKL6iB8KwapHALINYxMFqAChgx3nUQ66iZ_-in_VZRPCgafa-nJnrjOc-rKYGgUYIwtJVPDtft8JyFUQQU_S4d1qbA0YNPyYPTXiLviLH7BNWkWUtvmHVfiscqaYL8QbvR7r7rgsFpogAhVDgisZeycvgQffkhbaZzTnWu9bQCQe4m2s",
      github: "#",
      demo: "#",
      tags: [
        { name: "Prisma", bg: "bg-violet-100 dark:bg-violet-900/30", text: "text-violet-800 dark:text-violet-300" },
        { name: "PostgreSQL", bg: "bg-cyan-100 dark:bg-cyan-900/30", text: "text-cyan-800 dark:text-cyan-300" },
        { name: "NextAuth", bg: "bg-gray-100 dark:bg-gray-700", text: "text-gray-800 dark:text-gray-300" }
      ]
    }
  ];

  // Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={containerRef} className="flex-grow flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 py-12 relative overflow-hidden min-h-[calc(100vh-100px)]">
      {/* GSAP Bg Shape */}
      <div ref={bgShapeRef} className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto z-10 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-4"
          >
            Latest <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            A collection of projects showcasing my journey in MERN stack
            development. From e-commerce platforms to productivity tools, each
            project represents a step forward in mastering modern web
            technologies.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} variants={cardVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
