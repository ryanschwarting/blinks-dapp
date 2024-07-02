"use client";
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 h-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        <div className="text-white text-xl">My DApp</div>
        <div>
          <WalletMultiButton />
        </div>
      </div>
    </nav>
  );
};
