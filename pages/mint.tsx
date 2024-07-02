// src/app/mint.tsx

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import { ConfirmOptions } from "@solana/web3.js"; // Import ConfirmOptions
import idl from "../idl/solana_nft.json";
import { useState } from "react";

const { SystemProgram, Keypair } = web3;

const opts: ConfirmOptions = {
  // Use ConfirmOptions type
  preflightCommitment: "processed",
};

const Mint = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction, signAllTransactions } = useWallet();
  const [minting, setMinting] = useState<boolean>(false);

  const getProvider = (): AnchorProvider | null => {
    if (!publicKey || !signTransaction) {
      console.error("Wallet not connected or signTransaction not available");
      return null;
    }

    const provider = new AnchorProvider(
      connection,
      {
        publicKey,
        signTransaction,
        signAllTransactions:
          signAllTransactions || (async (txs: web3.Transaction[]) => txs),
      },
      opts
    );
    return provider;
  };

  const onClick = async () => {
    setMinting(true);
    const provider = getProvider();
    if (!provider) {
      setMinting(false);
      return;
    }

    const program = new Program(idl as any, idl.metadata.address, provider);

    try {
      await program.rpc.mintNft({
        accounts: {
          mint: new Keypair().publicKey, // Replace with your mint address
          user: provider.wallet.publicKey,
          tokenAccount: new Keypair().publicKey, // Replace with your token account
          tokenProgram: SystemProgram.programId,
          systemProgram: SystemProgram.programId,
        },
      });
      console.log("NFT minted!");
    } catch (err) {
      console.error("Transaction error:", err);
    } finally {
      setMinting(false);
    }
  };

  return (
    <div>
      <button onClick={onClick} disabled={!publicKey || minting}>
        {minting ? "Minting..." : "Mint NFT"}
      </button>
    </div>
  );
};

export default Mint;
