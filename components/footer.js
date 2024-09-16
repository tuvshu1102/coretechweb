"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function Home() {
  return (
    <div className="h-auto w-full overflow-hidden scroll-smooth">
      <div className="h-[140px] w-full rotate-2 transform bg-[#5A807C] mt-[120px] relative z-30 overflow-hidden items-center flex">
        <div
          className="absolute w-[200px] h-[100px] left-full animate-scrollLeft flex justify-center items-center"
          style={{ animationDelay: `calc(30s / 8 * (8 - 1) * -1)` }}
        >
          <Image width="100" height="100" src="/aws.svg" />
        </div>
        <div
          className="absolute w-[200px] h-[100px] left-full animate-scrollLeft flex justify-center items-center"
          style={{ animationDelay: `calc(30s / 8 * (8 - 2) * -1)` }}
        >
          <Image width="200" height="200" src="/azure.svg" />
        </div>
        <div
          className="absolute w-[200px] h-[100px] left-full animate-scrollLeft flex justify-center items-center"
          style={{ animationDelay: `calc(30s / 8 * (8 - 3) * -1)` }}
        >
          <Image width="100" height="100" src="/sap.svg" />
        </div>
        <div
          className="absolute w-[200px] h-[100px] left-full animate-scrollLeft flex justify-center items-center"
          style={{ animationDelay: `calc(30s / 8 * (8 - 4) * -1)` }}
        >
          <Image width="200" height="200" src="/googlecloud.svg" />
        </div>
        <div
          className="absolute w-[200px] h-[100px] left-full animate-scrollLeft flex justify-center items-center"
          style={{ animationDelay: `calc(30s / 8 * (8 - 5) * -1)` }}
        >
          <Image width="100" height="100" src="/aws.svg" />
        </div>
        <div
          className="absolute w-[200px] h-[100px] left-full animate-scrollLeft flex justify-center items-center"
          style={{ animationDelay: `calc(30s / 8 * (8 - 6) * -1)` }}
        >
          <Image width="200" height="200" src="/azure.svg" />
        </div>
        <div
          className="absolute w-[200px] h-[100px] left-full animate-scrollLeft flex justify-center items-center"
          style={{ animationDelay: `calc(30s / 8 * (8 - 7) * -1)` }}
        >
          <Image width="100" height="100" src="/sap.svg" />
        </div>
        <div
          className="absolute w-[200px] h-[100px] left-full animate-scrollLeft flex justify-center items-center"
          style={{ animationDelay: `calc(30s / 8 * (8 - 8) * -1)` }}
        >
          <Image width="200" height="200" src="/googlecloud.svg" />
        </div>
      </div>
      <div className="h-[140px] w-[105%] bg-[#1A1A1A] transform rotate-[-2deg] z-[-10]"></div>
      <div className="h-[630px] w-full bg-[#1A1A1A66] mt-[70px]" id="contact">
        <div className="h-[235px] w-full border-t-[1px] border-b-[1px] border-[#5A807C]">
          <span className="bg-head3 text-transparent bg-clip-text w-[45%] h-full flex justify-center flex-col ml-[10%]">
            <p className="text-[40px]">Interested in growing your business?</p>
            <p className="text-[70px]">Write to us!</p>
          </span>
        </div>
        <div className="h-[350px] w-full flex">
          <div className="w-1/2 h-full pl-[10%] flex justify-center flex-col">
            <span>
              <Image src="/logo.svg" width={178} height={48} />
            </span>
            <span className="bg-head3 text-transparent bg-clip-text w-[55%] mt-4">
              Companies that can help you in developing your company for the
              future
            </span>
          </div>
          <div className="w-1/2 h-full flex justify-center">
            <div className="w-[60%] h-[530px] bg-[#1F1F1F] mt-[-200px] rounded-[20px] flex justify-center items-center flex-col">
              <input
                className="w-[80%] h-[45px] pl-5 bg-[#2A2A2A] rounded-[5px] border-[1px] border-[#4C4C4C] text-white outline-none"
                placeholder="Your name"
              ></input>
              <input
                className="w-[80%] h-[45px] pl-5 bg-[#2A2A2A] rounded-[5px] border-[1px] border-[#4C4C4C] text-white mt-5 outline-none focus:none"
                placeholder="Email"
                type="email"
              ></input>
              <input className="w-[80%] h-[185px] pl-5 bg-[#2A2A2A] rounded-[5px] border-[1px] border-[#4C4C4C] text-white mt-5 text-start align-text-top pb-[110px] outline-none"></input>
              <button className="w-[80%] h-[45px] mt-5 bg-[#F27360] rounded-[5px] flex justify-center items-center text-white font-bold">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[45px] flex justify-center">
          <div className="w-[90%] flex justify-between h-full text-white text-sm">
            <p>© 2024 Coretech. All rights reserved.</p>
            <span className="flex w-[10%] justify-between text-white">
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 30 30"
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
              </svg>
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 50 50"
                className="text-white"
              >
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
              </svg>
              <svg
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="35"
                height="35"
                viewBox="0 0 50 50"
              >
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
