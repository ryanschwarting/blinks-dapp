"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

export const Hero: React.FC = () => {
  const router = useRouter();
  const path = usePathname();

  const handleButtonClick = () => {
    router.push("/transfer-sol");
  };

  return (
    <nav className="p-4 h-[500px] flex justify-center">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        <div className="flex flex-col justify-center items-center gap-8 ">
          <h1 className="text-white">Check out my list of blink examples!</h1>

          <Link href={"/transfer-sol"}>
            <button
              onClick={handleButtonClick}
              className="bg-[#14F195] text-black py-2 px-4 rounded transition-transform duration-300 hover:scale-95 flex justify-center items-center"
            >
              Donation Blink{" "}
              <span className="text-[20px] text-black ml-2 ">
                <FaLongArrowAltRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
