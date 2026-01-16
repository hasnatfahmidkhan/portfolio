import { useEffect } from "react";
import { useLocation } from "react-router";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Resume from "../pages/Resume";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import About from "../pages/About";

const MainSections = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const targetId = location.state.scrollTo;
            const element = document.getElementById(targetId);
            if (element) {
                // Small timeout to ensure layout is ready
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="lg:space-y-20">
            <div id="home">
              <Home />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="services">
              <Services />
            </div>
            <div id="resume">
              <Resume />
            </div>
            <div id="portfolio">
              <Projects />
            </div>
            <div id="contact">
              <Contact />
            </div>
        </div>
    );
};

export default MainSections;
