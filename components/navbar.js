import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage for theme preference on initial load
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="dark:bg-head1 shadow-md fixed top-0 z-50 w-full h-[78px] backdrop-blur-md">
      <div className="w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          {/* Logo */}
          <div className="flex-shrink-0 h-full items-center justify-center flex">
            <a
              href="/"
              className="text-xl font-bold"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#top");
              }}
            >
              <Image
                src="/logodark.svg"
                class="h-8 dark:hidden"
                alt="Flowbite Logo"
                width="200"
                height="200"
              />
              <Image
                src="/logo.svg"
                class="h-8 dark:block hidden"
                alt="Flowbite Logo"
                width="200"
                height="200"
              />
            </a>
          </div>

          {/* Middle Links */}
          <div className="hidden md:flex h-full w-[30%]">
            <a
              href="#"
              className="text-gray-400 dark:hover:text-white hover:text-black hover:font-semibold duration-150 h-full font-light flex justify-center items-center w-[25%]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#top");
              }}
            >
              Нүүр
            </a>
            <a
              href="#"
              className="text-gray-400 dark:hover:text-white hover:text-black hover:font-semibold duration-150 h-full font-light flex justify-center items-center w-[30%]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#info");
              }}
            >
              Үйлчилгээ
            </a>
            <a
              href="#"
              className="text-gray-400 dark:hover:text-white hover:text-black hover:font-semibold duration-150 h-full font-light flex justify-center items-center w-[50%]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#data");
              }}
            >
              БигДата Үйлчилгээ
            </a>
          </div>

          {/* Contact Us Button */}
          <div className="md:flex hidden items-center">
            <button
              onClick={toggleDarkMode}
              className="relative w-10 h-10 p-2 mr-5 rounded-full transition-all duration-300 flex items-center justify-center"
            >
              <svg
                className={`w-6 h-6 absolute transition-opacity duration-150 text-[#EF5239] ${
                  darkMode ? "opacity-0" : "opacity-100"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>

              {/* Sun Icon (for light mode) */}

              {/* Moon Icon (for dark mode) */}
              <svg
                className={`w-6 h-6 absolute transition-opacity duration-150 text-[#EF5239] ${
                  darkMode ? "opacity-100" : "opacity-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div className="hidden md:flex">
              <a
                href="#"
                className="flex items-center space-x-2 rounded-xl border-2 dark:text-white text-black font-medium text-sm px-4 py-2 text-center bg-transparent border-[#EF5239]"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
              >
                <span>Бидэнтэй холбогдох</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 rotate-[-135deg]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none relative z-50"
            >
              {/* Custom Hamburger / X Icon */}
              <div className="w-6 h-6 flex flex-col justify-between items-center">
                <motion.span
                  className="block h-0.5 w-6 bg-[#EF5239]"
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-[#EF5239]"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-[#EF5239]"
                  animate={
                    isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence for smooth exit */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0, width: 200 }}
            animate={{ opacity: 1, height: 200, width: 200 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden dark:bg-head1 bg-dehead1 ml-auto flex flex-col justify-between items-center"
          >
            <div className="h-full w-full flex justify-around items-center flex-col">
              <a
                href="#"
                className="block dark:text-white text-black"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#top");
                  setTimeout(() => {
                    closeMenu();
                  }, 1000);
                }}
              >
                Нүүр
              </a>
              <a
                href="#"
                className="block dark:text-white text-black"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#info");
                  setTimeout(() => {
                    closeMenu();
                  }, 1000);
                }}
              >
                Үйлчилгээ
              </a>
              <a
                href="#"
                className="block dark:text-white text-black"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#data");
                  setTimeout(() => {
                    closeMenu();
                  }, 1000);
                }}
              >
                БигДата Үйлчилгээ
              </a>
              <a
                href="#"
                className="block rounded-2xl dark:text-white text-black text-center py-2 border-solid border-2 border-[#F27360]"
                type="button"
                class="dark:text-white font-medium rounded-lg text-sm px-4 py-2 text-center border-solid bg-transparent border-[#EF5239] border-2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contactt");
                  setTimeout(() => {
                    closeMenu();
                  }, 1000);
                }}
              >
                Бидэнтэй холбогдох
              </a>
              <button
                onClick={toggleDarkMode}
                className="relative w-10 h-10 p-2 rounded-full transition-all duration-300 flex items-center justify-center [#EF5239]"
              >
                <svg
                  className={`w-6 h-6 absolute transition-opacity duration-150 text-[#EF5239] ${
                    darkMode ? "opacity-0" : "opacity-100"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>

                {/* Sun Icon (for light mode) */}

                {/* Moon Icon (for dark mode) */}
                <svg
                  className={`w-6 h-6 absolute transition-opacity duration-150 text-[#EF5239] ${
                    darkMode ? "opacity-100" : "opacity-0"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
