"use client";

import { Suspense } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";

const Data = dynamic(() => import("../components/data"), {
  ssr: false,
});

const Quote = dynamic(() => import("../components/quote"), {
  ssr: false,
});

const Top = dynamic(() => import("../components/top"), {
  ssr: false,
});

const Info = dynamic(() => import("../components/info"), {
  ssr: false,
});

const Six = dynamic(() => import("../components/six"), {
  ssr: false,
});

const Footer = dynamic(() => import("../components/footer"), {
  ssr: false,
});

const Navbar = dynamic(() => import("../components/navbar"), {
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
      <main className="h-auto w-full bg-[#121212] m-0 p-0 relative flex items-center flex-col scroll-smooth ">
        <div className="absolute z-1 top-[650px] left-[30px] h-[107px] w-[20%] bg-[#5a807c] blur-[100px] rounded-[40%] shadow-[0px_0px_100px_140px_#5a807c]"></div>
        <div className="absolute z-1 top-[1650px] left-[30px] h-[147px] w-[23%] bg-[#5a807c] blur-[200px] rounded-[30%] shadow-[0px_0px_100px_140px_#5a807c]"></div>
        <div className="absolute z-1 top-[1000px] right-[0px] h-[107px] w-[10%] bg-[#5a807c] blur-[200px] rounded-full shadow-[0px_0px_100px_140px_#5a807c]"></div>
        <div className="absolute z-1 top-[2200px] left-[30px] h-[107px] w-[10%] bg-[#5a807c] blur-[200px] rounded-[40%] shadow-[0px_0px_100px_140px_#5a807c]"></div>
        <div className="absolute z-1 top-[1900px] right-[0px] h-[27px] w-[3%] bg-[#ef5239] blur-[200px] rounded-[40%] shadow-[0px_0px_100px_140px_#ef5239]"></div>
        <Navbar />
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
