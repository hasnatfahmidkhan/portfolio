import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background-dark overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter flex items-center">
          <span className="mr-2">Hasnat</span>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
                duration: 0.5, 
                delay: 0.8,
                typ: "spring",
                stiffness: 200 
            }}
            className="text-primary inline-block w-4 h-4 md:w-6 md:h-6 rounded-full bg-primary"
          ></motion.span>
        </h1>
        <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            className="h-1 bg-primary mt-4 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
