import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ScrollEffectText = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const pRefs = useRef([]);

  const handleScroll = () => {
    pRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const middleOfScreen = window.innerHeight / 2;

        if (rect.top < middleOfScreen && rect.bottom > middleOfScreen) {
          setActiveIndex(index); // Set this p tag as active when it's in the middle
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[60vh] flex flex-col items-center justify-center text-white space-y-[22px]">
      <div className="rounded-full w-[74px] h-[43px] bg-quote2 border-[#3D4342] border-[1px] text-[#5A807C] flex justify-center items-center text-4xl font-serif mb-10">
        <img src="/quotation.svg" />
      </div>
      <motion.p
        ref={(el) => (pRefs.current[0] = el)}
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: activeIndex === 0 ? 1 : 0.3,
        }}
        transition={{ duration: 0.3 }}
        className="text-center font-medium md:text-[38px] text-[20px]"
      >
        Хэмжихгүй бол хянаж чадахгүй,
      </motion.p>

      <motion.p
        ref={(el) => (pRefs.current[1] = el)}
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: activeIndex === 1 ? 1 : 0.3,
        }}
        transition={{ duration: 0.3 }}
        className="md:text-[38px] text-[20px] text-center font-medium"
      >
        Хянахгүй бол удирдаж чадахгүй,
      </motion.p>

      <motion.p
        ref={(el) => (pRefs.current[2] = el)}
        initial={{ opacity: 0.3 }}
        animate={{
          opacity: activeIndex === 2 ? 1 : 0.3,
        }}
        transition={{ duration: 0.3 }}
        className="md:text-[38px] text-[20px] text-center font-medium"
      >
        Удирдахгүй бол сайжруулж чадахгүй.
      </motion.p>
    </div>
  );
};

export default ScrollEffectText;
