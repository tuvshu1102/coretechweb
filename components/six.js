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
    <div className="lg:h-[1101px] h-auto md:w-4/5 w-full md:mt-[-25vh] flex items-center flex-col text-white z-30">
      <div className="w-full h-[31%] bg-six1 rounded-[25px] md:flex hidden mb-[30px]">
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
        <div className="w-[40%] h-full overflow-hidden flex">
          <div className="w-[80%] flex items-center justify-end">
            <Image
              alt="coretech"
              src="/cube.svg"
              width="200"
              height="200"
              className="mr-[3vh] animate-[spin_7s_linear_infinite]"
            />
          </div>
          <div className="flex justify-center items-end flex-col w-[40%] ">
            <Image
              alt="coretech"
              src="/cube.svg"
              width="200"
              height="200"
              className="mb-[2vh] animate-[spin_5s_linear_infinite]"
            />
            <Image
              alt="coretech"
              src="/cube.svg"
              width="200"
              height="200"
              className="animate-[spin_8s_linear_infinite]"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-[31%] hidden md:flex justify-between mb-[30px]">
        <div className="w-[58%] h-full rounded-[25px] bg-[#151515] flex">
          <div className="w-[60%] h-full font-normal pl-16 pt-10">
            <p className="text-[32px] w-4/5 font-semibold">System Dev</p>
            <p className="text-[16px] w-4/5 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis
              vestibulum ridiculus adipiscing eget. Nibh enim sagittis at in
              elementum amet venenatis volutpat.
            </p>
          </div>
          <div className="w-[40%] h-full flex justify-end items-center overflow-hidden">
            <Lottie
              animationData={sixsystem}
              className="flex justify-center items-center"
              loop={true}
            />
          </div>
        </div>
        <div className="w-[40%] h-full rounded-[25px] bg-six2 flex">
          <div className="w-[60%] h-full font-normal pl-16 pt-10">
            <p className="text-[32px] w-4/5 font-semibold">IoT</p>
            <p className="text-[16px] w-4/5 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis
              vestibulum ridiculus adipiscing eget. Nibh enim sagittis at in
              elementum amet venenatis volutpat.
            </p>
          </div>
          <div className="w-[40%] h-full flex justify-end items-center overflow-hidden">
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
            <p className="text-[32px] w-4/5 font-semibold">AI Dev</p>
            <p className="text-[16px] w-4/5 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis
              vestibulum ridiculus adipiscing eget. Nibh enim sagittis at in
              elementum amet venenatis volutpat.
            </p>
          </div>
          <div className="w-[40%] h-full flex justify-center items-center overflow-hidden">
            <Image alt="coretech" src="/ai.svg" width="200" height="200" />
          </div>
        </div>
        <div className="w-[58%] h-full rounded-[25px] bg-six4 flex">
          <div className="w-[45%] h-full font-normal pl-16 pt-10">
            <p className="text-[32px] w-4/5 font-semibold">Dev Ops</p>
            <p className="text-[16px] w-4/5 mt-6">
              Lorem ipsum dolor sit amet consectetur. Nisi mi sed quis
              vestibulum ridiculus adipiscing eget. Nibh enim sagittis at in
              elementum amet venenatis volutpat.
            </p>
          </div>
          <div className="w-[55%] h-full flex justify-center items-center overflow-hidden">
            <Image alt="coretech" src="/devops.svg" width="280" height="280" />
          </div>
        </div>
      </div>
      <div
        className="w-[90%] h-[32vh] rounded-lg bg-mbsix1 mt-[40px] md:hidden"
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
            <div className="w-[150px] h-full flex justify-end items-end pr-5 pb-5">
              <Image
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
        className="w-[90%] h-[32vh] rounded-lg bg-mbsix2 mt-[40px] md:hidden"
        data-aos="fade-up-right"
      >
        <div className="w-full h-[25%] text-2xl items-center flex pl-5 font-bold">
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
            <div className="w-[150px] h-full flex justify-end items-end pr-5 pb-5">
              <Image
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
        className="w-[90%] h-[32vh] rounded-lg bg-[#5f2921] mt-[40px] md:hidden"
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
            <div className="w-[150px] h-full flex justify-end items-end pr-5 pb-5">
              <Image
                alt="coretech"
                src="/mai.svg"
                width="150"
                height="150"
                className="h-[10vh] w-[10vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[90%] h-[32vh] rounded-lg bg-mbsix5 mt-[40px] md:hidden"
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
            <div className="w-[150px] h-full flex justify-end items-end pr-5 pb-5">
              <Image
                alt="coretech"
                src="/iot.svg"
                width="150"
                height="150"
                className="h-[10vh] w-[10vh]"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[90%] h-[32vh] rounded-lg bg-mbsix6 mt-[40px] md:hidden "
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
            <div className="w-[150px] h-full flex justify-end items-end pr-5 pb-5">
              <Image
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
