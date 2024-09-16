"use client";

import "flowbite";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const scrollToSection = (path) => {
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav class="bg-head1 border-gray-200 dark:bg-gray-900 w-full fixed z-50 scroll-smooth h-[78px]">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#top");
          }}
        >
          <img src="/logo.svg" class="h-8" alt="Flowbite Logo" />
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            class="text-white font-medium rounded-lg text-sm px-4 py-2 text-center border-solid bg-transparent border-[#EF5239] border-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#contact");
            }}
          >
            Бидэнтэй холбогдох
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-[50%] md:order-1 h-full"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-20 rtl:space-x-reverse md:flex-row md:mt-0 text-white w-full bg-head1">
            <li className="md:w-[25%] h-full items-center justify-center flex">
              <a
                href="#"
                class="block py-2 font-light hover:font-medium duration-150 px-3 md:p-0 text-white rounded md:bg-transparent"
                aria-current="page"
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#top");
                }}
              >
                Нүүр
              </a>
            </li>
            <li className="md:w-[30%] h-full items-center justify-center flex">
              <a
                href="#"
                class="block py-2 font-light hover:font-medium duration-150 px-3 md:p-0 text-white rounded"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#info");
                }}
              >
                {" "}
                Үйлчилгээ
              </a>
            </li>
            <li className="md:w-[45%] h-full items-center justify-center flex">
              <a
                href="#"
                class="block py-2 font-light hover:font-medium duration-150 px-3 md:p-0 text-white rounded"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#data");
                }}
              >
                {" "}
                БигДата үйлчилгээ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
