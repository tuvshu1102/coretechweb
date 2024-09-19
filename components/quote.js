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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
          />
        </svg>
      </div>
      <motion.p
        ref={(el) => (pRefs.current[0] = el)}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: activeIndex === 0 ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
        className="text-center md:text-[38px] text-[20px]"
      >
        Хэмжихгүй бол хянаж чадахгүй,
      </motion.p>

      <motion.p
        ref={(el) => (pRefs.current[1] = el)}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: activeIndex === 1 ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
        className="md:text-[38px] text-[20px] text-center"
      >
        Хянахгүй бол удирдаж чадахгүй,
      </motion.p>

      <motion.p
        ref={(el) => (pRefs.current[2] = el)}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: activeIndex === 2 ? 1 : 0.3 }}
        transition={{ duration: 0.3 }}
        className="md:text-[38px] text-[20px] text-center"
      >
        Удирдахгүй бол сайжруулж чадахгүй.
      </motion.p>
    </div>
  );
};

export default ScrollEffectText;
