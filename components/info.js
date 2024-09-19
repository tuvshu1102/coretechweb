import Image from "next/image";

export default function Home() {
  return (
    <div
      className="lg:h-[650px] h-[280px] w-full bg-transparent flex justify-end items-end overflow-hidden scroll-smooth z-20 md:mt-0"
      id="info"
    >
      <div className="lg:h-[550px] h-[200px] w-full border-[#C68173] md:border-[5px] border-[2px] rounded-3xl md:mr-[-12vh] mr-[-2vh]">
        <div className=" text-transparent mt-6 ml-6">
          <p className="uppercase bg-clip-text bg-info1 md:text-[38px] text-[20px] pr-[3vh] md:pr-0">
            &quot;Coretech&quot; Компани нь Мэдээлэл технологийн чиглэлээр тэр
            дундаа дараах үндсэн чиглэлээр үйл ажиллагаа явуулдаг.
          </p>
        </div>
        <ul className="list-disc pl-5 md:flex mt-10 text-white hidden">
          <li className="ml-24 font-normal z-30">Big Data</li>
          <li className="ml-24 font-normal">AI Development</li>
          <li className="ml-24 font-normal">IOT Development</li>
          <li className="ml-24 font-normal">System Development</li>
        </ul>
      </div>
    </div>
  );
}
