import { NavBar } from "../components/NavBar";
import Head from "next/head";

import {
  CoinsIcon,
  FileTextIcon,
  ImageIcon,
  ShieldIcon,
  WalletIcon,
} from "lucide-react";

const actionCards: Array<{
  title: string;
  href: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}> = [
  {
    title: "On-chain Memo",
    href: "/memo",
    description: "Send a simple message on-chain using an SPL Memo.",
    icon: <FileTextIcon className="size-12" />,
  },
  {
    title: "Staking SOL",
    href: "/stake",
    description:
      "Help secure the Solana network by staking SOL to a validator.",
    icon: <ShieldIcon className="size-12" />,
  },
  {
    title: "Transfer Native SOL",
    href: "/transfer-sol",
    description: "Easily transfer native SOL to any other Solana wallet.",
    icon: <WalletIcon className="size-12" />,
  },
  // {
  //   title: "Transfer SPL Tokens",
  //   href: "/transfer-spl",
  //   description: "Easily transfer SPL tokens to any other Solana wallet.",
  //   icon: <CoinsIcon className="size-12" />,
  // },
  // {
  //   title: "Mint an NFT",
  //   href: "/mint-nft",
  //   description:
  //     "Allow anyone to claim a digital collectible from a Collection.",
  //   icon: <ImageIcon className="size-12" />,
  // },
];

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>My Awesome Website</title>
        <meta
          name="description"
          content="Welcome to my awesome website, where you can find amazing content and resources."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@KaktosSol" />
        <meta name="twitter:title" content="My Awesome Website" />
        <meta
          name="twitter:description"
          content="Welcome to my awesome website, where you can find amazing content and resources."
        />
        <meta
          name="twitter:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/kaktosSMB.png`}
        />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="My Awesome Website" />
        <meta
          property="og:description"
          content="Welcome to my awesome website, where you can find amazing content and resources."
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/kaktosSMB.png`}
        />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />
      </Head>
      <NavBar />
      <h1>Welcome to my blinks test dapp</h1>
    </div>
  );
}
