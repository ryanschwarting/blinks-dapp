import type { Metadata, Viewport } from "next";
import WalletContextProvider from "../context/WalletContextProvider";
import "@solana/wallet-adapter-react-ui/styles.css";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blinks Dapp",
  description:
    "Support my developer journey on the solana blockchain by donating Solana!",
  icons: "/solana.svg",
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
