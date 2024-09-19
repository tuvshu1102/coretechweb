import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
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
    <nav className="bg-head1 shadow-md fixed top-0 z-50 w-full h-[78px]">
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
                src="/logo.svg"
                class="h-8"
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
              className="text-gray-500 hover:text-white hover:font-semibold duration-200 h-full font-light flex justify-center items-center w-[25%]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#top");
              }}
            >
              Нүүр
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white hover:font-semibold duration-200 h-full font-light flex justify-center items-center w-[30%]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#info");
              }}
            >
              Үйлчилгээ
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-white hover:font-semibold duration-200 h-full font-light flex justify-center items-center w-[50%]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#data");
              }}
            >
              БигДата Үйлчилгээ
            </a>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="rounded-2xl border-solid border-2 border-[#F27360] text-white px-4 py-2 "
              type="button"
              class="text-white font-medium rounded-lg text-sm px-4 py-2 text-center border-solid bg-transparent border-[#EF5239] border-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
            >
              Бидэнтэй холбогдох
            </a>
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
                  className="block h-0.5 w-6 bg-[#F27360]"
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-[#F27360]"
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="block h-0.5 w-6 bg-[#F27360]"
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
            className="md:hidden bg-head1 ml-auto flex flex-col justify-between items-center"
          >
            <div className="h-full w-full flex justify-around items-center flex-col">
              <a
                href="#"
                className="block text-white"
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
                className="block text-white"
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
                className="block text-white"
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
                className="block rounded-2xl text-white text-center py-2 border-solid border-2 border-[#F27360]"
                type="button"
                class="text-white font-medium rounded-lg text-sm px-4 py-2 text-center border-solid bg-transparent border-[#EF5239] border-2"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
