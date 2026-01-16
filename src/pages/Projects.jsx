import React, { useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaSearch } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projects";

const Projects = () => {
  const containerRef = useRef(null);
  const bgShapeRef = useRef(null);
  
  // State for Filters
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Categories derived from data
  const categories = ["All", ...new Set(projectsData.map(p => p.category))];

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

  // Filter Logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
        const matchesCategory = activeCategory === "All" || project.category === activeCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Animation Variants
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
    <section ref={containerRef} className="flex-grow flex flex-col items-center justify-start px-6 md:px-12 lg:px-24 py-12 relative overflow-hidden min-h-screen">
      {/* GSAP Bg Shape */}
      <div ref={bgShapeRef} className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto z-10 max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold dark:text-white text-gray-900 mb-4"
          >
            Latest <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
          >
            Explore my recent work. Filter by category or search for specific technologies.
          </motion.p>
        </div>

        {/* Controls: Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeCategory === category 
                            ? "bg-primary text-white shadow-lg shadow-primary/30" 
                            : "bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Search projects..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
            </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          key={activeCategory + searchQuery} // Force re-render on filter change
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
            {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} variants={cardVariants} />
                ))
            ) : (
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="col-span-full text-center py-20 text-gray-500 dark:text-gray-400"
                >
                    No projects found matching your criteria.
                </motion.div>
            )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
