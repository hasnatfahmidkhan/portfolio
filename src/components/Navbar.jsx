import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If we are on a project details page, force active section to 'portfolio'
    if (location.pathname.startsWith("/project/")) {
        setActiveSection("portfolio");
        return; // Stop scroll listener from overwriting this
    }

    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "resume",
        "portfolio",
        "contact",
      ];
      // Offset matches scroll-padding-top (100px) + a bit of buffer (20px) to trigger 'active' slightly before the top hits exactly
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Resume", path: "#resume" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Contact", path: "#contact" },
  ];

  const isActive = (path) => {
    return activeSection === path.substring(1)
      ? "text-primary"
      : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary";
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const targetId = path.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      if (path === "#portfolio") {
        const yFn = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: yFn - 100, behavior: "smooth" });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      setActiveSection(targetId);
      setIsOpen(false);
    } else {
        // If element not found (e.g., we are on details page), go to home and pass target ID in state
        navigate("/", { state: { scrollTo: targetId } });
    }
  };

  return (
    <nav class="w-full fixed top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm transition-all duration-300 border-b border-gray-200 dark:border-gray-800">
      <div class="container mx-auto max-w-7xl py-6 px-2 flex justify-between items-center">
        <div class="text-2xl font-bold tracking-tight dark:text-white text-gray-900">
          Hasnat<span class="text-primary">.</span>
        </div>

        {/* Desktop Menu */}
        <div class="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              class={`transition-colors ${isActive(link.path)}`}
              onClick={(e) => handleNavClick(e, link.path)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          class="md:hidden text-gray-600 dark:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div class="absolute top-full left-0 w-full bg-white dark:bg-surface-dark p-6 shadow-xl md:hidden z-40 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                class={`block ${isActive(link.path)}`}
                onClick={(e) => handleNavClick(e, link.path)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
