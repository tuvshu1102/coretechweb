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
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6"
        >
          <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
        </svg>
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
