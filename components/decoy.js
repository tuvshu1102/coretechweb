"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import six1 from "@/components/six1.json";
import animationData from "@/components/Application-development-1.json";
import sixsystem from "@/components/system.json";
import iot from "@/components/iot.json";
import devops from "@/components/devops.json";

export default function Home() {
  return (
    <div className="lg:h-[1101px] h-auto md:w-4/5 w-full md:mt-[-25vh] flex items-center flex-col text-white z-30">
      <div className="w-full h-[31%] dark:bg-six1 rounded-[25px] md:flex hidden mb-[30px] bg-desix1">
        <div className="w-[60%] h-full font-normal pl-16 pt-10">
          <p className="text-[32px] w-4/5 font-semibold">Big Data</p>
          <p className="text-[16px] w-4/5 mt-6">
            Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis vestibulum
            ridiculus adipiscing eget. Nibh enim sagittis venenatis volutpat.
            Amet urna purus gravida sit mattis egestas felis quam. Non habitant
            montes tortor a. Sit vestibulum diam fermentum malesuada morbi. Sed
            massa hac eu diam. Odio molestie risus faucibus sed. Scelerisque
            eget commodo vulputate ac mauris purus dictum platea pulvinar.
          </p>
        </div>
        <div className="flex justify-center items-center h-full w-[25%] mr-[-5vh]">
          <img src="/cube.svg" className="h-[250px]" />
        </div>
        <div className="flex justify-center items-start flex-col overflow-hidden">
          <img src="/cube.svg" className="h-[300px] mb-10" />
          <img src="/cube.svg" className="h-[300px]" />
        </div>
      </div>
      <div className="w-full h-[31%] hidden md:flex justify-between mb-[30px]">
        <div className="w-[58%] h-full rounded-[25px] dark:bg-[#151515] flex bg-[#5A807C] items-center">
          <div className="w-[60%] h-full font-normal pl-16 pt-10">
            <p className="text-[32px] w-4/5 font-semibold">System Dev</p>
            <p className="text-[16px] w-4/5 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis
              vestibulum ridiculus adipiscing eget. Nibh enim sagittis at in
              elementum amet venenatis volutpat.
            </p>
          </div>
          <div className="w-[40%] h-[90%] flex justify-end items-center overflow-hidden">
            <img alt="coretech" src="/dsystemdev.svg" className="h-[270px]" />
          </div>
        </div>
        <div className="w-[40%] h-full rounded-[25px] dark:bg-six2 flex bg-desix2 items-center">
          <div className="w-[60%] h-full font-normal pl-16 pt-10">
            <p className="text-[32px] w-4/5 font-semibold">IoT</p>
            <p className="text-[16px] w-4/5 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis
              vestibulum ridiculus adipiscing eget. Nibh enim sagittis at in
              elementum amet venenatis volutpat.
            </p>
          </div>
          <div className="w-[40%] h-[90%] flex justify-end items-center overflow-hidden">
            <img alt="coretech" src="/six3.png" className="h-[250px]" />
          </div>
        </div>
      </div>
      <div className="w-full h-[31%] hidden md:flex justify-between">
        <div className="w-[40%] h-full rounded-[25px] dark:bg-six3 flex bg-desix3">
          <div className="w-[60%] h-full font-normal pl-16 pt-10">
            <p className="text-[32px] w-4/5 font-semibold">AI Dev</p>
            <p className="text-[16px] w-4/5 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis
              vestibulum ridiculus adipiscing eget. Nibh enim sagittis at in
              elementum amet venenatis volutpat.
            </p>
          </div>
          <div className="w-[40%] h-full flex justify-center items-center overflow-hidden relative">
            <img alt="coretech" src="/dai.svg" className=" h-[250px]" />
          </div>
        </div>
        <div className="w-[58%] h-full rounded-[25px] dark:bg-six4 flex bg-desix4">
          <div className="w-[45%] h-full font-normal pl-16 pt-10">
            <p className="text-[32px] w-4/5 font-semibold">Dev Ops</p>
            <p className="text-[16px] w-4/5 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis
              vestibulum ridiculus adipiscing eget. Nibh enim sagittis at in
              elementum amet venenatis volutpat.
            </p>
          </div>
          <div className="w-[55%] h-full flex justify-end items-center overflow-hidden">
            <img
              alt="coretech"
              src="/ddevops.svg"
              width="300"
              height="300"
              className=" h-[250px]"
            />
          </div>
        </div>
      </div>
      <div
        className="w-[90%] h-[32vh] rounded-lg bg-dembsix1 dark:bg-mbsix1  mt-[40px] md:hidden"
        data-aos="fade-up-left"
      >
        <div className="w-full h-[25%] text-2xl items-center flex pl-5 font-bold">
          Big Data
        </div>
        <div className="w-full h-[75%]  relative">
          <p className="w-full h-1/3 px-5 text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis vestibulum
            ridiculus adipiscing eget. Nibh enim sagittis
          </p>
          <div className="w-full h-2/3 flex">
            <p className="w-2/3 h-full pl-5 text-[14px]">
              in elementum amet venenatis volutpat. Amet urna purus gravida sit
              mattis egestas felis quam.
            </p>
            <div className="w-[150px] h-full flex justify-end items-end">
              <img
                alt="coretech"
                src="/cube.svg"
                width="150"
                height="150"
                className="h-[10vh] w-[10vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[90%] h-[32vh] rounded-lg bg-dembsix2 dark:bg-mbsix2 mt-[40px] md:hidden"
        data-aos="fade-up-right"
      >
        <div className="w-full h-[25%] text-2xl items-center flex font-bold">
          System Dev
        </div>
        <div className="w-full h-[75%]  relative">
          <p className="w-full h-1/3 px-5 text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis vestibulum
            ridiculus adipiscing eget. Nibh enim sagittis
          </p>
          <div className="w-full h-2/3 flex">
            <p className="w-2/3 h-full pl-5 text-[14px]">
              in elementum amet venenatis volutpat. Amet urna purus gravida sit
              mattis egestas felis quam.
            </p>
            <div className="w-[150px] h-full flex justify-end items-end">
              <img
                alt="coretech"
                src="/systemdev.svg"
                width="150"
                height="150"
                className="h-[10vh] w-[10vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[90%] h-[32vh] rounded-lg bg-[#9B6C5F] dark:bg-[#5f2921] mt-[40px] md:hidden"
        data-aos="fade-up-left"
      >
        <div className="w-full h-[25%] text-2xl items-center flex pl-5 font-bold">
          AI Dev
        </div>
        <div className="w-full h-[75%]  relative">
          <p className="w-full h-1/3 px-5 text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis vestibulum
            ridiculus adipiscing eget. Nibh enim sagittis
          </p>
          <div className="w-full h-2/3 flex">
            <p className="w-2/3 h-full pl-5 text-[14px]">
              in elementum amet venenatis volutpat. Amet urna purus gravida sit
              mattis egestas felis quam.
            </p>
            <div className="w-[150px] h-full flex justify-end items-end">
              <img
                alt="coretech"
                src="/mai.svg"
                width="300"
                height="300"
                className="h-[10vh] w-[10vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[90%] h-[32vh] rounded-lg bg-dembsix5 dark:bg-mbsix5 mt-[40px] md:hidden"
        data-aos="fade-up-right"
      >
        <div className="w-full h-[25%] text-2xl items-center flex pl-5 font-bold">
          IoT
        </div>
        <div className="w-full h-[75%]  relative">
          <p className="w-full h-1/3 px-5 text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis vestibulum
            ridiculus adipiscing eget. Nibh enim sagittis
          </p>
          <div className="w-full h-2/3 flex">
            <p className="w-2/3 h-full pl-5 text-[14px]">
              in elementum amet venenatis volutpat. Amet urna purus gravida sit
              mattis egestas felis quam.
            </p>
            <div className="w-[150px] h-full flex justify-end items-end">
              <img
                alt="coretech"
                src="/six3.png"
                width="150"
                height="150"
                className="h-[10vh] w-[10vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[90%] h-[32vh] rounded-lg bg-dembsix6 dark:bg-mbsix6 mt-[40px] md:hidden "
        data-aos="fade-up-left"
      >
        <div className="w-full h-[25%] text-2xl items-center flex pl-5 font-bold">
          Dev Ops
        </div>
        <div className="w-full h-[75%]  relative">
          <p className="w-full h-1/3 px-5 text-[14px]">
            Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis vestibulum
            ridiculus adipiscing eget. Nibh enim sagittis
          </p>
          <div className="w-full h-2/3 flex">
            <p className="w-2/3 h-full pl-5 text-[14px]">
              in elementum amet venenatis volutpat. Amet urna purus gravida sit
              mattis egestas felis quam.
            </p>
            <div className="w-[150px] h-full flex justify-end items-end">
              <img
                alt="coretech"
                src="/mdevops.svg"
                width="150"
                height="150"
                className="h-[10vh] w-[10vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
