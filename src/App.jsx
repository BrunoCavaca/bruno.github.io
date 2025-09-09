import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, ArrowRight, FileDown, Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Education from "./Education.jsx";
import Projects from "./PreviousProjects.jsx";
import ContactPage from "./Contact.jsx";
import FutureProjects from "./FutureProjects.jsx";
import Experience from "./Experience.jsx";
import logo_dm from "./assets/logos/logo_dm.png";
import pictureMe from "./assets/project_imgs/me.jpg";

// Responsive Navbar Component
function Navbar({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/education", label: "Education" },
    { path: "/previous_projects", label: "Previous Projects" },
    { path: "/future_projects", label: "Future Projects" },
    { path: "/experience", label: "Experience" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md flex justify-between items-center px-6 py-4">
      {/* Logo / Branding */}
      <Link to="/" className="flex items-center">
        <img 
          src={logo_dm} 
          alt="Bruno Logo" 
          className="h-10 w-auto md:h-12 
                     [filter:brightness(0)_invert(47%)_sepia(93%)_saturate(3000%)_hue-rotate(190deg)_brightness(95%)_contrast(90%)]
                     dark:filter-none"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        {navItems.map((item, i) => (
          <motion.div whileHover={{ scale: 1.05 }} key={i}>
            <Link
              to={item.path}
              className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Dark Mode & Mobile Hamburger */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-800" />}
        </button>

        <button
          className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center md:hidden py-4 gap-4"
        >
          {navItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}

// Mobile detection hook
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

// Landing/Home Page
function Home() {
  const isMobile = useIsMobile();

  return (
    <motion.div
      className={`flex flex-col items-center justify-center text-center ${
        isMobile ? "px-4 min-h-[60vh]" : "px-6 min-h-[80vh]"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Profile Image */}
      <motion.img
        src= {pictureMe}
        alt="Profile"
        className={`rounded-full shadow-lg mb-6 border-4 ${
          isMobile
            ? "w-24 h-24 border-gray-200 dark:border-gray-700"
            : "w-60 h-60 border-gray-200 dark:border-gray-700"
        } object-cover`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Heading */}
      <h1 className={`${isMobile ? "text-3xl" : "text-5xl"} font-extrabold mb-4 text-gray-900 dark:text-white`}>
        Hi, I’m <span className="text-blue-600 dark:text-blue-400">Bruno Cavaca</span>
      </h1>

      {/* Subheading */}
      <p className={`${isMobile ? "text-sm" : "text-xl"} text-gray-600 dark:text-gray-300 mb-6 max-w-2xl`}>
        A 4th Year MSci Computer Science with Artificial Intelligence Student at King's College London
      </p>

      {/* Call-to-Action Button */}
      <Link to="/previous_projects">
        <Button size={isMobile ? "sm" : "lg"} className="rounded-2xl shadow-md bg-blue-600 hover:bg-blue-700 text-white">
          View My Work <ArrowRight className="ml-2" size={isMobile ? 16 : 20} />
        </Button>
      </Link>
    </motion.div>
  );
}


// Animated Routes Wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/previous_projects" element={<Projects />} />
        <Route path="/future_projects" element={<FutureProjects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

// Main App
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}
