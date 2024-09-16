"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import Lottie from "lottie-react";
import six1 from "@/components/six1.json";
import animationData from "@/components/Application-development-1.json";
import sixsystem from "@/components/system.json";
import iot from "@/components/iot.json";
import devops from "@/components/devops.json";

export default function Home() {
  return (
    <div className="lg:h-[1101px] h-[500vh] md:w-4/5 w-full md:mt-[-25vh] flex items-center flex-col text-white z-30">
      <div className="w-full h-[31%] bg-six1 rounded-[25px] md:flex hidden">
        <div className="w-[60%] h-full font-normal pl-16 pt-10">
          <p className="text-[32px] w-4/5 font-medium">Big Data</p>
          <p className="text-[16px] w-4/5 mt-6">
            Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis vestibulum
            ridiculus adipiscing eget. Nibh enim sagittis at in elementum amet
            venenatis volutpat. Amet urna purus gravida sit mattis egestas felis
            quam. Non habitant montes tortor a. Sit vestibulum diam fermentum
            malesuada morbi. Sed massa hac eu diam. Odio molestie risus faucibus
            sed. Scelerisque eget commodo vulputate ac mauris purus dictum
            platea pulvinar.
          </p>
        </div>
        <div className="w-[40%] h-full overflow-hidden flex">
          <div className="w-[80%] flex items-center justify-end">
            <img
              src="/cube.svg"
              width="200"
              height="200"
              className="mr-[3vh] animate-[spin_7s_linear_infinite]"
            />
          </div>
          <div className="flex justify-center items-end flex-col w-[40%] ">
            <img
              src="/cube.svg"
              width="200"
              height="200"
              className="mb-[2vh] animate-[spin_5s_linear_infinite]"
            />
            <img
              src="/cube.svg"
              width="200"
              height="200"
              className="animate-[spin_8s_linear_infinite]"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[31%] hidden md:flex justify-between">
        <div className="w-[58%] h-full rounded-[25px] bg-[#151515] flex">
          <div className="w-[60%] h-full font-normal pl-16 pt-10">
            <p className="text-[32px] w-4/5 font-medium">System Dev</p>
            <p className="text-[16px] w-4/5 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis
              vestibulum ridiculus adipiscing eget. Nibh enim sagittis at in
              elementum amet venenatis volutpat.
            </p>
          </div>
          <div className="w-[40%] h-full flex justify-end items-center overflow-hidden">
            {/* <motion.img
              src="/six2.png"
              width={700}
              height={500}
              className="mr-[-5vh]"
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.1, 1.1, 1],
                transition: {
                  duration: 4,
                  times: [0, 0.25, 0.75, 1],
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            /> */}
            <Lottie
              animationData={sixsystem}
              className="flex justify-center items-center"
              loop={true}
            />
          </div>
        </div>
        <div className="w-[40%] h-full rounded-[25px] bg-six2 flex">
          <div className="w-[60%] h-full font-normal pl-16 pt-10">
            <p className="text-[32px] w-4/5 font-medium">IoT</p>
            <p className="text-[16px] w-4/5 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis
              vestibulum ridiculus adipiscing eget. Nibh enim sagittis at in
              elementum amet venenatis volutpat.
            </p>
          </div>
          <div className="w-[40%] h-full flex justify-end items-center overflow-hidden">
            {/* <motion.img
              src="/six3.png"
              width={700}
              height={500}
              className="mr-[-2vh]"
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.1, 1],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
              }}
            /> */}
            <Lottie
              animationData={iot}
              className="flex justify-center items-center"
              loop={true}
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[31%] hidden md:flex justify-between">
        <div className="w-[40%] h-full rounded-[25px] bg-six3 flex">
          <div className="w-[60%] h-full font-normal pl-16 pt-10">
            <p className="text-[32px] w-4/5 font-medium">AI Dev</p>
            <p className="text-[16px] w-4/5 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis
              vestibulum ridiculus adipiscing eget. Nibh enim sagittis at in
              elementum amet venenatis volutpat.
            </p>
          </div>
          <div className="w-[40%] h-full flex justify-center items-center overflow-hidden">
            <Image src="/ai.svg" width="200" height="200" />
          </div>
        </div>
        <div className="w-[58%] h-full rounded-[25px] bg-six4 flex">
          <div className="w-[45%] h-full font-normal pl-16 pt-10">
            <p className="text-[32px] w-4/5 font-medium">Dev Ops</p>
            <p className="text-[16px] w-4/5 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis
              vestibulum ridiculus adipiscing eget. Nibh enim sagittis at in
              elementum amet venenatis volutpat.
            </p>
          </div>
          <div className="w-[55%] h-full flex justify-center items-center overflow-hidden">
            <Image src="/devops.png" width="450" height="450" />
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[50vh] rounded-[25px] bg-[#151515] md:hidden mt-[40px]">
        <div className="w-full h-[12%] pl-8 flex items-center text-xl font-medium">
          Big Data
        </div>
        <div className="w-full h-[30%] px-8">
          Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis vestibulum
          ridiculus adipiscing eget. Nibh enim sagittis at in elementum amet
          venenatis volutpat. Amet urna purus gravida sit mattis egestas felis
          quam.
        </div>
        <div className="w-full h-[58%] overflow-hidden flex">
          <div className="w-[60%] flex items-center justify-end">
            <img
              src="/cube.svg"
              width="150"
              height="150"
              className=" animate-[spin_7s_linear_infinite]"
            />
          </div>
          <div className="flex justify-center items-start flex-col w-[40%] pl-[20px]">
            <img
              src="/cube.svg"
              width="100"
              height="100"
              className="mb-[2vh] animate-[spin_5s_linear_infinite]"
            />
            <img
              src="/cube.svg"
              width="100"
              height="100"
              className="animate-[spin_8s_linear_infinite]"
            />
          </div>
        </div>
      </div>
      <div className="w-[90%] h-[50vh] rounded-[25px] bg-[#151515] md:hidden mt-[40px]">
        <div className="w-full h-[12%] pl-8 flex items-center text-xl font-medium">
          System Dev
        </div>
        <div className="w-full h-[30%] px-8">
          Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis vestibulum
          ridiculus adipiscing eget. Nibh enim sagittis at in elementum amet
          venenatis volutpat. Amet urna purus gravida sit mattis egestas felis
          quam.
        </div>
        <div className="w-full h-[58%] overflow-hidden flex justify-center items-center">
          <Lottie
            animationData={sixsystem}
            className="flex justify-center items-center"
            loop={true}
          />
        </div>
      </div>
    </div>
  );
}
