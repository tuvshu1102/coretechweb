import Image from "next/image";

export default function Home() {
  return (
    <div
      className="h-[780px] w-full bg-gradient-to-r from-[#131313] to-[#252525] bg-[length:60px] bg-repeat-x z-2"
      id="top"
    >
      <div className="h-full w-full bg-gradient-to-b from-[#121212] via-transparent to-[#121212] flex justify-center items-end">
        <div className="w-4/5 h-[80%] text-white font-normal flex justify-center flex-col items-center ">
          <p className="md:text-3xl uppercase text-[20px]">
            Бид таны бизнесийн найдвартай
          </p>
          <p className="lg:text-[65px] uppercase font-medium my-14 z-0 text-transparent text-[40px] text-center">
            <span className="bg-clip-text bg-head2">Хяналтын тогтолцоо</span>
          </p>
          <p className="text-base text-center lg:w-3/5 mb-[5vh] z-20 w-4/5">
            Өнөөдрийн байдлаар манай компани нь "<strong>Big Data</strong>"
            чиглэлээр "<strong>Datalake house</strong>" консепцийг тухайн
            байгууллагуудын шаардлагад нь нийцүүлэн хөгжүүлэлтийг хийж өгч
            байна.
          </p>
          <div className="flex justify-center items-center h-[180px] w-full">
            <div className="flex justify-center border-[3px] border-white h-[70px] w-[40px] rounded-xl pt-6">
              <div className="w-[9px] h-[9px] bg-[#F27360] rounded-full animate-bounce bg-mouse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
