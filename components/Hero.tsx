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
    hidden: { x: "-100vw" },
    visible: { x: 0, transition: { duration: 2 } },
  };

  const rightAnimation = {
    hidden: { x: "100vw" },
    visible: { x: 0, transition: { duration: 2 } },
  };

  return (
    <div className="p-4 h-[500px] flex">
      <div className="max-w-7xl mx-auto flex justify-between h-full">
        <div className="flex flex-col items-center gap-8 md:gap-8 ">
          <h1 className="text-white text-[20px] md:text-[24px]">
            Check out my list of blink examples!
          </h1>
          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              className="border-2 border-[#14F195] p-5 md:p-10 flex flex-col justify-between gap-10 rounded-lg"
              initial="hidden"
              animate="visible"
              variants={leftAnimation}
            >
              <h1 className="text-white text-[14px] flex justify-center items-center">
                Live now
              </h1>
              <Link href={"/transfer-sol"}>
                <button
                  onClick={handleButtonClick}
                  className="bg-[#14F195] text-black text-[14px] py-2 px-4 rounded transition-transform duration-300 hover:scale-95 flex justify-center items-center"
                >
                  Donation Blink{" "}
                  <span className="text-[20px] text-black ml-2 ">
                    <FaLongArrowAltRight />
                  </span>
                </button>
              </Link>
            </motion.div>
            <motion.div
              className="border-2 border-[#14F195] p-5 md:p-10 flex flex-col justify-between gap-10 rounded-lg"
              initial="hidden"
              animate="visible"
              variants={rightAnimation}
            >
              <h1 className="text-white text-[14px] flex justify-center items-center">
                Coming soon ...
              </h1>
              {/* <Link href={"/transfer-sol"}> */}
              <button
                disabled
                onClick={handleButtonClick}
                className="bg-[#14F195] text-black text-[14px] py-2 px-4 rounded transition-transform duration-300 hover:scale-95 flex justify-center items-center"
              >
                NFT Mint Blink{" "}
                <span className="text-[20px] text-black ml-2 ">
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
