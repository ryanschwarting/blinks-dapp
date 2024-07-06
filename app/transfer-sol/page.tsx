"use client";

import { SolanaQRCode } from "@/components/qr-code";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

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
    <section id="action" className="space-y-2 md:space-y-8 p-2 px-4 md:px-20">
      <div className="mx-auto flex w-full md:max-w-[58rem] flex-col items-center space-y-6 text-center pt-4 md:pt-0">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl text-white">
          Donate Solana to Kaktos
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 text-white pb-4 md:pb-0">
          I am embarking on an exciting journey, transitioning from an
          experienced Ethereum developer to diving deep into the Solana
          development ecosystem. Your generous support will empower me to
          continue my studies and make meaningful contributions to this
          innovative blockchain community. Together, we can drive the future of
          decentralized technology. Thank you for supporting my growth and
          learning!
        </p>
      </div>

      <div className="group-hover:border-primary size-[400px] rounded-lg overflow-hidden text-center hidden md:flex items-center justify-center w-min mx-auto border-4 border-[#14F195] shadow-lg">
        <SolanaQRCode
          url={apiPath}
          color="#14F195"
          background="#9945FF"
          size={400}
          className="rounded-lg overflow-clip w-[400px]"
        />
      </div>

      <div className="group-hover:border-primary size-[200px] md:size-[400px] rounded-lg overflow-hidden text-center flex md:hidden items-center justify-center w-min mx-auto border-4 border-[#14F195] shadow-lg">
        <SolanaQRCode
          url={apiPath}
          color="#14F195"
          background="#9945FF"
          size={200}
          className="rounded-lg overflow-clip min-w-[200px] md:min-w-[400px]"
        />
      </div>

      <div className="mx-auto text-center max-w-[85%] pt-4 md:pt-0">
        <p className="text-white leading-normal text-muted-foreground sm:text-lg sm:leading-7">
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
          <h3 className="text-white text-xl font-semibold space-y-3">
            Action Endpoint
          </h3>
        </div>
        <div className="pt-4 space-y-2 text-[14px] md:text-lg">
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
