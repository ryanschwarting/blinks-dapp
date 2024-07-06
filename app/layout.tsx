import type { Metadata, Viewport } from "next";
import WalletContextProvider from "../context/WalletContextProvider";
import "@solana/wallet-adapter-react-ui/styles.css";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blinks dApp",
  description:
    "Support my developer journey on the solana blockchain by donating Solana!",
  openGraph: {
    title: "Blinks dApp",
    description:
      "Support my developer journey on the solana blockchain by donating Solana!",
    url: "https://blinks-dapp.vercel.app/",
    siteName: "Blinks dApp",
    images: [
      {
        url: "/kaktosSMB.png",
        width: 1260,
        height: 800,
      },
    ],
  },
  twitter: {
    site: `https://x.com/`,
    creator: `https://x.com/KaktosSol`,
    card: "summary",
  },
  category: "blockchain",
  icons: "/kaktosSMB.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <WalletContextProvider>{children}</WalletContextProvider>
        <Footer />
      </body>
    </html>
  );
}
