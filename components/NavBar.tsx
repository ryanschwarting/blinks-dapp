"use client";
import React from "react";
import solanaLogo from "@/assets/images/solanaLogo.png";
import kaktos from "@/assets/images/kaktosSMB.png";
import Image from "next/image";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const path = usePathname();
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
        <Link
          href="https://x.com/KaktosSol"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={kaktos}
            width={100}
            height={100}
            alt="SMB"
            className="rounded-full h-[45px] w-[45px] md:w-[90px] md:h-[90px] transform transition-transform duration-300 hover:scale-95"
          />
        </Link>
      </div>
    </nav>
    // <nav className="bg-gray-800 p-4 h-16">
    //   <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
    //     <div className="text-white text-xl">My DApp</div>
    //     <div>
    //       <WalletMultiButton />
    //     </div>
    //   </div>
    // </nav>
  );
};
