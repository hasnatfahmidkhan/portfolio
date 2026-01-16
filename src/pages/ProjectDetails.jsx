import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === parseInt(id));
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:text-white">
        Project not found
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen py-16 px-6 md:px-12 lg:px-24 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-body"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.button
          variants={itemVariants}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-8 text-primary hover:underline group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        {/* 1. Project Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          {project.title}
        </motion.h1>

        {/* 2. Project Gallery (Swiper) */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12 h-[300px] md:h-[400px] lg:h-[500px]"
        >
          {/* Main Slider - Takes 3 Cols */}
          <div className="lg:col-span-3 h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <Swiper
              key={isLargeScreen ? "desktop-main" : "mobile-main"} // Force re-render on layout switch
              style={{
                "--swiper-navigation-color": "#00df45",
                "--swiper-pagination-color": "#00df45",
              }}
              loop={true}
              spaceBetween={10}
              navigation={false}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs, Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="h-full w-full"
            >
              {project.images?.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Thumbs Slider - Conditional Rendering */}
          {isLargeScreen ? (
            /* Desktop: Vertical Stack */
            <div className="lg:col-span-1 h-full rounded-2xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2">
              <Swiper
                onSwiper={setThumbsSwiper}
                direction="vertical"
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-full w-full thumbs-swiper"
              >
                {project.images?.map((img, index) => (
                  <SwiperSlide
                    key={index}
                    className="rounded-xl overflow-hidden cursor-pointer opacity-50 hover:opacity-100 transition-all !h-[calc(25%-8px)] border-2 border-transparent [&.swiper-slide-thumb-active]:!border-primary [&.swiper-slide-thumb-active]:!opacity-100"
                  >
                    <img
                      src={img}
                      alt={`Thumb ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            /* Mobile: Horizontal */
            <div className="col-span-1 h-24">
              <Swiper
                onSwiper={setThumbsSwiper}
                direction="horizontal"
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="h-full w-full thumbs-swiper"
              >
                {project.images?.map((img, index) => (
                  <SwiperSlide
                    key={index}
                    className="rounded-xl overflow-hidden cursor-pointer opacity-50 hover:opacity-100 transition-all border-2 border-transparent [&.swiper-slide-thumb-active]:!border-primary [&.swiper-slide-thumb-active]:!opacity-100"
                  >
                    <img
                      src={img}
                      alt={`Thumb ${index}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </motion.div>

        {/* Bottom Content Grid - Staggered Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-32"
        >
          {/* Main Content Column */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-2 space-y-10"
          >
            {/* 6. Brief Description (Detailed) */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-10 h-1 bg-primary rounded-full"></span>
                Project Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {project.details}
              </p>
            </motion.section>

            {/* 9. Challenges Faced */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-10 h-1 bg-red-500 rounded-full"></span>
                Challenges Faced
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.challenges}
              </p>
            </motion.section>

            {/* 10. Potential Improvements */}
            <motion.section variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <span className="w-10 h-1 bg-blue-500 rounded-full"></span>
                Future Plans
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.improvements}
              </p>
            </motion.section>
          </motion.div>

          {/* Sidebar / Meta Info Column */}
          <motion.div variants={containerVariants} className="space-y-8">
            {/* 7 & 8. Links */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold mb-6">Links</h3>
              <div className="flex flex-col gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-primary text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
                >
                  <span>Live Demo</span>
                  <FaExternalLinkAlt />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
                >
                  <span>GitHub Code</span>
                  <FaGithub />
                </a>
              </div>
            </motion.div>

            {/* 5. Tech Stack */}
            <motion.div
              variants={itemVariants}
              className="p-6 bg-white dark:bg-surface-dark rounded-xl shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => {
                  const techColors = {
                    React:
                      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800",
                    "Node.js":
                      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
                    Express:
                      "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600",
                    MongoDB:
                      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
                    Firebase:
                      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
                    "Tailwind CSS":
                      "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
                    "Next.js":
                      "bg-black text-white dark:bg-white dark:text-black border-gray-800",
                    Axios:
                      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-800",
                    "Framer Motion":
                      "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 border-pink-200 dark:border-pink-800",
                    GSAP: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800",
                    Vite: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
                    Stripe:
                      "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 border-violet-200 dark:border-violet-800",
                    Motion:
                      "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 border-pink-200 dark:border-pink-800",
                  };
                  const colorClass =
                    techColors[tech] ||
                    "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600";

                  return (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${colorClass}`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
