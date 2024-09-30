import Image from "next/image";

export default function Home() {
  return (
    <div
      className="h-[780px] w-full dark:bg-gradient-to-r from-[#131313] to-[#252525] bg-[length:60px] bg-repeat-x z-4 bg-topdark"
      id="top"
    >
      <div className="h-full w-full bg-gradient-to-r from-[#e0e0e023]  to-[#ffffff00] bg-[length:60px] bg-repeat-x dark:bg-none z-4">
        <div className="h-full w-full dark:bg-gradient-to-b dark:from-[#121212] dark:via-transparent dark:to-[#121212] flex justify-center items-end bg-gradient-to-b from-white via-transparent to-white">
          <div className="w-4/5 h-[80%] dark:text-white text-gray-900 font-normal flex justify-center flex-col items-center ">
            <p className="md:text-3xl uppercase text-[20px] z-30">
              Бид таны бизнесийн найдвартай
            </p>
            <p className="lg:text-[65px] uppercase font-medium my-14 z-0 text-transparent text-[40px] text-center">
              <span className="bg-clip-text dark:bg-head2 tracking-widest font-semibold bg-darkhead2">
                Хяналтын тогтолцоо
              </span>
            </p>
            <p className="text-base text-center lg:w-3/5 mb-[5vh] z-20 w-4/5">
              Өнөөдрийн байдлаар манай компани нь "
              <strong className="font-boldocto">Big Data</strong>" чиглэлээр "
              <strong className="font-boldocto">Datalake house</strong>"
              консепцийг тухайн байгууллагуудын шаардлагад нь нийцүүлэн
              хөгжүүлэлтийг хийж өгч байна.
            </p>
            <div className="flex justify-center items-center h-[180px] w-full">
              <div className="flex justify-center border-[3px] dark:border-white border-gray-700 h-[70px] w-[40px] rounded-xl pt-6">
                <div className="w-[9px] h-[9px] bg-[#F27360] rounded-full animate-bounce bg-mouse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
