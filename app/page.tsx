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

        {/* <!-- Primary Meta Tags --> */}
        <title>Donate Solana</title>
        <meta name="title" content="Donate Solana" />
        <meta
          name="description"
          content="Support my developer journey on the solana blockchain by donating solana!"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blinks-dapp.vercel.app/" />
        <meta property="og:title" content="Donate Solana" />
        <meta
          property="og:description"
          content="Support my developer journey on the solana blockchain by donating solana!"
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://blinks-dapp.vercel.app/"
        />
        <meta property="twitter:title" content="Donate Solana" />
        <meta
          property="twitter:description"
          content="Support my developer journey on the solana blockchain by donating solana!"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
      </Head>
      <NavBar />
      <h1>Welcome to my blinks test dapp</h1>
    </div>
  );
}
