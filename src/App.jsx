import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Force dark mode as per original design
    document.documentElement.classList.add("dark");

    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300 min-h-screen flex flex-col font-body relative pt-20">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          
          <main className="flex-grow">
            <Outlet />
          </main>

          {/* Global Background Blobs */}
          <div className="fixed top-20 right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="fixed bottom-20 left-20 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </>
      )}
    </div>
  );
}

export default App;
