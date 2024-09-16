"use client";

import { Suspense } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";

const Data = dynamic(() => import("../components/data"), {
  ssr: false,
});

const Nav = dynamic(() => import("../components/nav"), {
  ssr: false,
});

const Top = dynamic(() => import("../components/top"), {
  ssr: false,
});

const Info = dynamic(() => import("../components/info"), {
  ssr: false,
});

const Quote = dynamic(() => import("../components/quote"), {
  ssr: false,
});

const Six = dynamic(() => import("../components/six"), {
  ssr: false,
});

const Footer = dynamic(() => import("../components/footer"), {
  ssr: false,
});

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
        <Nav isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
        <Top
          id="top"
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
        <Info
          id="info"
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
        <Six
          id="six"
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
        <Quote isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
        <Data
          id="data"
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
        <Footer
          id="contact"
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </main>
    </Suspense>
  );
}
