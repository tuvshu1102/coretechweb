import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-head1 w-[90%] mt-[80px] ">
      <div className="max-w-7xl">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo and Menu on the left */}
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0 text-white text-lg font-bold">
              <Image src="/logo.png" width={178} height={78} />
            </div>
            {/* Desktop Menu */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 items-center flex justify-center hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Нүүр
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:bg-gray-700 items-center flex justify-center hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Үйлчилгээ
                </Link>
                <Link
                  href="/services"
                  className="text-gray-300 hover:bg-gray-700 items-center flex justify-center hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  БигДата үйлчилгээ
                </Link>
                <button className="border-solid h-[70%] w-[80%] bg-transparent border-[#EF5239] border-2 rounded-3xl flex justify-center items-center text-white">
                  <p className="font-medium mr-4">Бидэнтэй холбогдох</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 rotate-[-45deg]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="sm:hidden"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="text-gray-300 hover:bg-gray-700 items-center flex justify-center hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:bg-gray-700 items-center flex justify-center hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-300 hover:bg-gray-700 items-center flex justify-center hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:bg-gray-700 items-center flex justify-center hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
