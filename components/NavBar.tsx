// "use client";
// import React from "react";
// import solanaLogo from "@/assets/images/solanaLogo.png";
// import kaktos from "@/assets/images/kaktosSMB.png";
// import Image from "next/image";
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import { usePathname, useRouter } from "next/navigation";
// import Link from "next/link";

// export const NavBar: React.FC = () => {
//   const router = useRouter();
//   const path = usePathname();
//   return (
//     <nav className="space-y-2 md:space-y-8 p-2 px-4 md:px-20">
//       <div className="flex justify-between items-center h-[50px] md:h-[100px]">
//         <Link href="/">
//           <Image
//             src={solanaLogo}
//             width={300}
//             height={300}
//             alt="SolanaLogo"
//             className="w-[200px] h-[30px] md:w-[300px] md:h-[50px] transform transition-transform duration-300 hover:scale-95"
//           />
//         </Link>
//         <Link
//           href="https://x.com/KaktosSol"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             src={kaktos}
//             width={100}
//             height={100}
//             alt="SMB"
//             className="rounded-full h-[45px] w-[45px] md:w-[90px] md:h-[90px] transform transition-transform duration-300 hover:scale-95"
//           />
//         </Link>
//       </div>
//     </nav>
//     // <nav className="bg-gray-800 p-4 h-16">
//     //   <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
//     //     <div className="text-white text-xl">My DApp</div>
//     //     <div>
//     //       <WalletMultiButton />
//     //     </div>
//     //   </div>
//     // </nav>
//   );
// };

"use client";
import React, { useState } from "react";
import solanaLogo from "@/assets/images/solanaLogo.png";
import kaktos from "@/assets/images/kaktosSMB.png";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export const NavBar: React.FC = () => {
  const router = useRouter();
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="space-y-2 md:space-y-8 p-2 px-4 md:px-20">
      <div className="flex justify-between items-center h-[50px] md:h-[100px]">
        <Link href="/">
          <Image
            src={solanaLogo}
            width={300}
            height={300}
            alt="SolanaLogo"
            className="w-[200px] h-[30px] md:w-[300px] md:h-[50px] transform transition-transform duration-300 hover:scale-95"
          />
        </Link>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          className="relative"
        >
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full h-[45px] w-[45px] md:w-[90px] md:h-[90px] transform transition-transform duration-300 hover:scale-95"
          >
            <Image
              src={kaktos}
              width={100}
              height={100}
              alt="SMB"
              className="rounded-full"
            />
            <motion.div
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
              className="absolute top-0 right-0"
            >
              <svg width="15" height="15" viewBox="0 0 20 20">
                <path d="M0 7 L 20 7 L 10 16" />
              </svg>
            </motion.div>
          </motion.button>
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 text-[14px] mt-2 bg-[#9945FF] text-black rounded-lg shadow-lg w-[150px] flex flex-col justify-center items-center"
          >
            <motion.li
              variants={itemVariants}
              className="p-2 hover:text-[#14F195]"
            >
              <a
                href="https://x.com/KaktosSol"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="p-2 hover:text-[#14F195]"
            >
              <a
                href="https://github.com/ryanschwarting"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="p-2 hover:text-[#14F195]"
            >
              <a
                href="https://linkedin.com/in/ryanschwarting"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="p-2 hover:text-[#14F195]"
            >
              <a
                href="https://www.tensor.trade/portfolio?wallet=CZ1ECvdDRdutT5w6XZGcFh32fzS9yR4ryAwyCoJLCMbh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tensor
              </a>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="p-2 hover:text-[#14F195]"
            >
              <Link href="/contact-us">Contact Form</Link>
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </nav>
  );
};
