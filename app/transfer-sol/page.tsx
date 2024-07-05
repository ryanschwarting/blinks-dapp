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
    <section
      id="action"
      className={
        "container space-y-12 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      }
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-6 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Donate Solana to Kaktos
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
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
          color="white"
          background="black"
          size={400}
          className="rounded-lg overflow-clip min-w-[400px]"
        />
      </div>

      <div className="mx-auto text-center md:max-w-[58rem]">
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          View the{" "}
          <Link
            href={`${siteConfig.links.github}/app${apiPath}/route.ts`}
            target="_blank"
          >
            <button className="text-blue-500 underline hover:text-blue-700">
              source code for this sample Action
            </button>
          </Link>{" "}
          on GitHub.
        </p>
      </div>

      <div className="group-hover:border-primary border border-gray-300 rounded-lg p-6 shadow-lg">
        <div className="pb-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold space-y-3">Action Endpoint</h3>
        </div>
        <div className="pt-4 space-y-2">
          <p className="text-muted-foreground">
            <Link
              href={apiEndpoint}
              target="_blank"
              className="underline hover:text-primary"
            >
              {apiEndpoint}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
