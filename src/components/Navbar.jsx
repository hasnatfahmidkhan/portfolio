import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    const element = document.getElementById(path.substring(1));
    if (element) {
      if (path === "#portfolio") {
        const yFn = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: yFn - 100, behavior: "smooth" });
      } else {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      setActiveSection(path.substring(1));
      setIsOpen(false);
    }
  };

  return (
    <nav class="w-full py-6 px-6 md:px-12 lg:px-24 flex justify-between items-center z-50 fixed top-0 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm transition-all duration-300 border-b border-gray-200 dark:border-gray-800">
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
        <div class="absolute top-20 left-0 w-full bg-white dark:bg-surface-dark p-6 shadow-xl md:hidden z-40 flex flex-col space-y-4">
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
    </nav>
  );
};

export default Navbar;
