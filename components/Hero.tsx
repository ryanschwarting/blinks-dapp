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
    visible: { x: 0, transition: { duration: 1.5 } },
  };

  const rightAnimation = {
    hidden: { x: "100vh" },
    visible: { x: 0, transition: { duration: 1.5 } },
  };

  return (
    <div className="h-[500px] flex overflow-hidden p-4 ">
      <div className="max-w-7xl mx-auto flex justify-between h-full">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center border border-[#14F195] w-[350px] md:w-[900px] px-10 rounded-xl shadow-2xl shadow-[#9945FF]">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [1, 1, 0.8, 1.5],
            }}
            className="flex flex-col items-start leading-tight tracking-tighter gap-2 ml-2 md:ml-0"
          >
            <motion.div>
              <h1 className="text-white text-[28px] md:text-[42px] font-bold leading-tight">
                Check out my list
              </h1>
              <h1 className="text-white text-[28px] md:text-[42px] font-bold leading-tight">
                of blink examples
              </h1>
            </motion.div>
            <motion.div>
              <p className="text-white text-[12px] md:text-[16px] font-normal mt-2 leading-tight w-full md:w-[350px]">
                Explore various actions and blinks available in the Solana
                ecosystem. Dive into my GitHub repo to understand the
                implementation.
              </p>
              <p className="text-white text-[12px] md:text-[16px] font-normal mt-2 leading-tight"></p>
            </motion.div>
            <motion.div>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                href="https://solana.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#14F195] text-[12px] md:text-[14px] flex items-center mt-2 tracking-tighter hover:underline leading-none"
              >
                Official actions & blinks documentation
                <span className="text-[20px] text-[#14F195] ml-2">
                  <FaLongArrowAltRight />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-10 mt-4 md:mt-0">
            <motion.div
              className="border-l-8 border border-[#14F195] p-4 px-10 flex flex-row justify-between gap-10 rounded-xl shadow-lg shadow-[#9945FF]"
              initial="hidden"
              animate="visible"
              variants={rightAnimation}
            >
              <div className="flex flex-col justify-center text-white  items-start">
                <h1 className="font-bold underline text-[10px] md:text-[18px] mb-2">
                  Live now
                </h1>
                <h1 className="text-[10px] md:text-[16px]">Donation Blink </h1>
              </div>

              <Link href={"/transfer-sol"}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className=" text-black py-2 px-4 rounded flex justify-center items-center"
                >
                  <span
                    onClick={handleButtonClick}
                    className="text-[24px] md:text-[32px] text-[#14F195] ml-2 "
                  >
                    <FaLongArrowAltRight />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
            <motion.div
              className="border-l-8 border border-[#14F195] p-4 px-10 flex flex-row justify-between gap-10 rounded-xl shadow-lg shadow-[#9945FF]"
              initial="hidden"
              animate="visible"
              variants={rightAnimation}
            >
              <div className="flex flex-col text-white  justify-center items-start">
                <h1 className="font-bold underline text-[10px] md:text-[18px] mb-2">
                  Coming soon
                </h1>
                <h1 className="text-[10px] md:text-[16px]">NFT Mint Blink </h1>
              </div>

              {/* <Link href={"/transfer-sol"}> */}
              <motion.button
                // whileHover={{ scale: 1.2 }}
                // whileTap={{ scale: 0.8 }}
                disabled
                className=" text-black md:text-[16px] py-2 px-4 rounded flex justify-center items-center"
              >
                <span
                  // onClick={handleButtonClick}
                  className="text-[24px] md:text-[32px] text-[#14F195] ml-2 "
                >
                  <FaLongArrowAltRight />
                </span>
              </motion.button>
              {/* </Link> */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
