import { Link } from "react-router";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project, variants }) => {
    
  return (
    <motion.div 
      variants={variants}
      initial="hidden"
      animate="visible" 
      exit="hidden"
      className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-56 w-full">
        <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay with links */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
            <a 
                href={project.demo} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-primary text-white rounded-full hover:bg-white hover:text-primary transition-colors"
                title="Live Demo"
            >
                <FaExternalLinkAlt />
            </a>
            <a 
                href={project.github} 
                target="_blank" 
                rel="noreferrer" 
                className="p-3 bg-gray-800 text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors"
                title="GitHub"
            >
                <FaGithub />
            </a>
        </div>
        <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
            {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900 group-hover:text-primary transition-colors">
            {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.techStack.slice(0, 3).map((tech, index) => {
                 // Reusing the same color logic for consistency
                 const techColors = {
                    "React": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800",
                    "Node.js": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
                    "Express": "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600",
                    "MongoDB": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
                    "Firebase": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
                    "Tailwind CSS": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
                    "Next.js": "bg-black text-white dark:bg-white dark:text-black border-gray-800",
                    "Axios": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800",
                    "Framer Motion": "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 border-pink-200 dark:border-pink-800",
                    "GSAP": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
                    "Vite": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
                    "Stripe": "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 border-violet-200 dark:border-violet-800",
                    "Motion": "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 border-pink-200 dark:border-pink-800",
                };
                const colorClass = techColors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600";
                
                return (
                    <span 
                        key={index} 
                        className={`text-xs font-medium px-2 py-1 rounded-full border ${colorClass}`}
                    >
                        {tech}
                    </span>
                );
            })}
            {project.techStack.length > 3 && (
                <span className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                    +{project.techStack.length - 3}
                </span>
            )}
        </div>

        {/* View Details Button */}
        <Link 
            to={`/project/${project.id}`}
            className="w-full flex items-center justify-center gap-2 bg-text-light dark:bg-white text-white dark:text-surface-dark py-2 rounded-lg font-semibold hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-all duration-300 text-sm mt-auto"
        >
            View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;