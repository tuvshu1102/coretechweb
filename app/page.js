"use client";

import { Suspense } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Nav from "/components/nav.js";
import Navbar from "/components/navbar.js";
import Top from "/components/top.js";
import Info from "/components/info.js";
import Data from "/components/data.js";
import Quote from "/components/quote.js";
import Six from "/components/six.js";
import Footer from "/components/footer.js";
import Link from "next/link";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const scrollToSection = (path) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Suspense fallback={<>Loading...</>}>
      <main className="h-[4560px] w-full bg-[#121212] m-0 p-0 relative flex items-center flex-col scroll-smooth ">
        <div className="absolute z-1 top-[650px] left-[30px] h-[107px] w-[20%] bg-[#5a807c] blur-[100px] rounded-[40%] shadow-[0px_0px_100px_140px_#5a807c]"></div>
        <div className="absolute z-1 top-[1650px] left-[30px] h-[147px] w-[23%] bg-[#5a807c] blur-[200px] rounded-[30%] shadow-[0px_0px_100px_140px_#5a807c]"></div>
        <div className="absolute z-1 top-[1000px] right-[-20px] h-[107px] w-[10%] bg-[#5a807c] blur-[200px] rounded-full shadow-[0px_0px_100px_140px_#5a807c]"></div>
        <div className="absolute z-1 top-[2200px] left-[30px] h-[107px] w-[10%] bg-[#5a807c] blur-[200px] rounded-[40%] shadow-[0px_0px_100px_140px_#5a807c]"></div>
        <div className="absolute z-1 top-[1900px] right-[-30px] h-[27px] w-[3%] bg-[#ef5239] blur-[200px] rounded-[40%] shadow-[0px_0px_100px_140px_#ef5239]"></div>
        {/* <div className="h-[78px] w-full fixed bg-head1 flex justify-around items-center text-white z-50 scroll-smooth">
        <div
          className="h-full w-[20%] justify-center items-center flex"
          href="/"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#top");
          }}
        >
          <Image
            src="/logo.svg"
            width={178}
            height={78}
            className="cursor-pointer"
          />
        </div>
        <div className="sm:flex w-[60%] h-full justify-between hidden">
          <div className="h-full w-[45%] justify-around items-center flex">
            <Link
              className="w-1/3 h-full hover:font-bold font-light flex justify-center items-center duration-150"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#top");
              }}
            >
              Нүүр
            </Link>
            <Link
              className="w-1/3 h-full hover:font-bold font-light flex justify-center items-center duration-150"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#info");
              }}
            >
              Үйлчилгээ
            </Link>
            <Link
              className="w-1/3 h-full hover:font-bold font-light flex justify-center items-center duration-150"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#data");
              }}
            >
              БигДата үйлчилгээ
            </Link>
          </div>
          <div className="w-[35%] h-full flex justify-center items-center">
            <Link
              className="w-full h-full flex justify-center items-center"
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#contact");
              }}
            >
              <button className="border-solid h-[70%] w-[70%] bg-transparent border-[#EF5239] border-2 rounded-3xl flex justify-center items-center">
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
            </Link>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden mr-5">
          <button
            onClick={toggleMenu}
            className=" p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="block h-6 w-6 text-[#F27360]"
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
                className="block h-6 w-6 text-[#F27360]"
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
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              transition={{ duration: 0.3 }}
              className="sm:hidden absolute"
              id="mobile-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="text-gray-300 items-center flex justify-center hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Нүүр
                </Link>
                <Link
                  href="/"
                  className="text-gray-300 items-center flex justify-center hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Үйлчилгээ
                </Link>
                <Link
                  href="/"
                  className="text-gray-300 items-center flex justify-center hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  БигДата үйлчилгээ
                </Link>
                <Link
                  href="/"
                  className="text-gray-300 items-center flex justify-center hover:text-white px-3 py-2 rounded-md text-base font-medium"
                >
                  Бидэнтэй холбогдох
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div> */}
        <Nav />
        <Top id="top" />
        <Info id="info" />
        <Six id="six" />
        <Quote />
        <Data id="data" />
        <Footer id="contact" />
      </main>
    </Suspense>
  );
}
