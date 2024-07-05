"use client";

import { SolanaQRCode } from "@/components/qr-code";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";
import solanaLogo from "@/assets/images/solanaLogo.png";
import kaktos from "@/assets/images/kaktosSMB.png";

export default function Pages() {
  const apiPath = "/api/actions/transfer-sol";
  const [apiEndpoint, setApiEndpoint] = useState("");

  useEffect(() => {
    setApiEndpoint(new URL(apiPath, window.location.href).toString());

    return () => {
      setApiEndpoint(new URL(apiPath, window.location.href).toString());
    };
  }, []);

  return (
    <section id="action" className="space-y-8 p-8 px-20">
      <div className="flex justify-between items-center h-[100px]">
        <Image src={solanaLogo} width={300} height={300} alt="SolanaLogo" />
        <Image
          src={kaktos}
          width={100}
          height={100}
          alt="SMB"
          className="rounded-full"
        />
      </div>
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-gray-300">
          Donate Solana to Kaktos
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-gray-300">
          I am embarking on an exciting journey, transitioning from an
          experienced Ethereum developer to diving deep into the Solana
          development ecosystem. Your generous support will empower me to
          continue my studies and make meaningful contributions to this
          innovative blockchain community. Together, we can drive the future of
          decentralized technology. Thank you for supporting my growth and
          learning!
        </p>
      </div>

      <div className="group-hover:border-primary size-[400px] rounded overflow-hidden text-center flex items-center justify-center w-min mx-auto border border-gray-300 shadow-lg">
        <SolanaQRCode
          url={apiPath}
          color="#14F195"
          background="#9945FF"
          size={400}
          className="rounded-lg overflow-clip min-w-[400px]"
        />
      </div>

      <div className="mx-auto text-center md:max-w-[58rem]">
        <p className="text-gray-300 leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          View the{" "}
          <Link
            href={`${siteConfig.links.github}/app${apiPath}/route.ts`}
            target="_blank"
          >
            <button className="text-[#14F195] underline hover:text-[#9945FF]">
              source code for this sample Action
            </button>
          </Link>{" "}
          on GitHub.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center group-hover:border-primary rounded-lg p-6 shadow-lg">
        <div className="pb-4 ">
          <h3 className="text-gray-300 text-xl font-semibold space-y-3">
            Action Endpoint
          </h3>
        </div>
        <div className="pt-4 space-y-2">
          <p className="text-muted-foreground">
            <Link
              href={apiEndpoint}
              target="_blank"
              className="text-[#14F195] underline hover:text-primary hover:text-[#9945FF]"
            >
              {apiEndpoint}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
