"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  const router = useRouter();
  const path = usePathname();

  const handleButtonClick = () => {
    router.push("/transfer-sol");
  };

  const leftAnimation = {
    hidden: { x: "-150vh" },
    visible: { x: 0, transition: { duration: 2 } },
  };

  const rightAnimation = {
    hidden: { x: "100vh" },
    visible: { x: 0, transition: { duration: 2 } },
  };

  return (
    <div className="h-[500px] flex overflow-hidden p-4">
      <div className="max-w-7xl mx-auto flex justify-between h-full">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center border border-[#14F195] w-[350px] md:w-[900px] px-10 rounded-lg shadow-2xl shadow-[#9945FF]">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="flex flex-col items-center md:items-start leading-tight tracking-tighter gap-2"
          >
            <motion.div>
              <h1 className="text-white text-[28px] md:text-[42px] font-bold leading-tight">
                Check out my list
              </h1>
              <h1 className="text-white text-[28px] md:text-[42px] font-bold leading-tight">
                of blink examples!
              </h1>
            </motion.div>
            <motion.div>
              <p className="text-white text-[12px] md:text-[16px] font-normal mt-2 leading-tight">
                This is just a description for now so I can see
              </p>
              <p className="text-white text-[12px] md:text-[16px] font-normal mt-2 leading-tight">
                the look of things on the screen yeet sauce.
              </p>
            </motion.div>
            <motion.div>
              <a
                href="https://solana.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14F195] text-[12px] md:text-[14px] flex items-center mt-2 tracking-tighter transition-transform duration-300 hover:scale-95 hover:underline leading-none"
              >
                Official actions & blinks documentation
                <span className="text-[20px] text-[#14F195] ml-2">
                  <FaLongArrowAltRight />
                </span>
              </a>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-10 mt-4 md:mt-0">
            <motion.div
              className="border-l-8 border border-[#14F195] p-4 px-10 flex flex-row justify-between gap-10 rounded-lg "
              initial="hidden"
              animate="visible"
              variants={rightAnimation}
            >
              <div className="flex flex-col justify-center text-white text-[10px] md:text-[16px] items-start">
                <h1>Live now</h1>
                <h1>Donation Blink </h1>
              </div>

              <Link href={"/transfer-sol"}>
                <button className=" text-black py-2 px-4 rounded transition-transform duration-300 hover:scale-95 flex justify-center items-center">
                  <span
                    onClick={handleButtonClick}
                    className="text-[24px] text-[#14F195] ml-2 "
                  >
                    <FaLongArrowAltRight />
                  </span>
                </button>
              </Link>
            </motion.div>

            <motion.div
              className="border-l-8 border border-[#14F195] p-4 px-10 flex flex-row justify-between gap-10 rounded-lg"
              initial="hidden"
              animate="visible"
              variants={rightAnimation}
            >
              <div className="flex flex-col text-white text-[10px] md:text-[16px] justify-center items-start">
                <h1>Coming soon...</h1>
                <h1>NFT Mint Blink </h1>
              </div>

              {/* <Link href={"/transfer-sol"}> */}
              <button
                disabled
                className=" text-black md:text-[16px] py-2 px-4 rounded transition-transform duration-300 hover:scale-95 flex justify-center items-center"
              >
                <span
                  onClick={handleButtonClick}
                  className="text-[24px] text-[#14F195] ml-2 "
                >
                  <FaLongArrowAltRight />
                </span>
              </button>
              {/* </Link> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
