import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[250px] w-4/5 flex justify-between items-center flex-col mt-24">
      <div className="rounded-full w-[74px] h-[43px] bg-quote2 border-[#3D4342] border-[1px] text-[#5A807C] flex justify-center items-center text-4xl font-serif">
        "
      </div>
      <p className="text-center md:text-[38px] text-[20px] bg-clip-text text-transparent bg-quote1">
        Хэмжихгүй бол хянаж чадахгүй, <br /> Хянахгүй бол удирдаж чадахгүй,{" "}
        <br />
        Удирдахгүй бол сайржуулж чадахгүй.
      </p>
    </div>
  );
}
