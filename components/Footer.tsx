"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const path = usePathname();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dataCompany = [
    { link: "/about_us", name: "About" },
    { link: "/contact-us", name: "Contact" },
    { link: "/faqs", name: "FAQ" },
    { link: "https://solana.com/docs", name: "Documentation" },
  ];

  const dataSocial = [
    { link: "https://x.com/KaktosSol", icon: <FaXTwitter size={24} /> },

    {
      link: "https://www.linkedin.com/in/ryanschwarting/",
      icon: <FaLinkedinIn size={24} />,
    },
    { link: "https://github.com/ryanschwarting", icon: <FaGithub size={24} /> },
  ];

  //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();

  //     const PORTAL_ID = "46292874";
  //     const FORM_ID = "142a3626-b366-4032-b736-17b226bb4654";

  //     if (!email) {
  //       console.error("Form fields are missing");
  //       return;
  //     }

  //     const requestBody = {
  //       portalId: PORTAL_ID,
  //       formGuid: FORM_ID,
  //       fields: [
  //         {
  //           name: "email",
  //           value: email,
  //         },
  //       ],
  //     };

  //     try {
  //       const response = await fetch(
  //         `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
  //         {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(requestBody),
  //         }
  //       );

  //       if (response.ok) {
  //         console.log("Form submission successful");
  //         setMessage("Subscription successful");
  //         setEmail(""); // Reset the email field
  //         setTimeout(() => {
  //           setMessage("");
  //         }, 3000);
  //       } else {
  //         console.error("Form submission error");
  //         const responseData = await response.json();
  //         console.error(responseData);
  //         setMessage("Subscription failed");
  //       }
  //     } catch (error) {
  //       console.error("There was an error submitting the form", error);
  //       setMessage("Subscription failed");
  //     }
  //   };

  return (
    <div className="flex justify-center items-center px-2 md:px-0">
      <div className="bg-[#9945FF] p-10 w-full max-w-6xl mt-24 rounded-t-xl">
        <div className="flex flex-wrap justify-between mb-8">
          <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
            <p className="font-normal text-[14px] text-black leading-[20px] tracking-tight mt-4">
              Contact me directly via
            </p>
            <p className="font-normal text-[14px] text-black leading-[20px] tracking-tight">
              email with any questions
            </p>
            <a
              href="mailto:0xKaktos@gmail.com"
              className="text-[#14F195] mt-4 inline-block underline text-[14px] tracking-tight transform transition-transform duration-300 hover:scale-95"
            >
              0xKaktos@gmail.com
            </a>
          </div>

          <div className="w-full lg:w-1/3">
            <h2 className="ml-1 font-normal text-black text-[13px] tracking-tight leading-[20px]">
              Subscribe Now
            </h2>
            <form
              //   onSubmit={handleSubmit}
              className="flex mt-4 items-center bg-white rounded-full p-1 pr-1"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-2 text-[14px] text-black bg-white border-none outline-none rounded-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#14F195] text-black font-medium text-[16px] leading-[24px] tracking-tight px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-95"
              >
                Send
              </button>
            </form>
            {message && <p>{message}</p>}
            <div className="flex justify-between px-2 pt-2 md:px-0 md:pt-0 md:justify-start lg:gap-12 lg:mt-4">
              <div>
                <ul>
                  {dataCompany.map((item, index) => (
                    <li
                      key={index}
                      className="ml-0 md:ml-2 mb-2 transform transition-transform duration-300 hover:scale-95"
                    >
                      <Link
                        href={item.link}
                        className="font-normal text-black text-[14px] md:text-[14px] tracking-tight leading-[20px]"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul>
                  {dataSocial.map((item, index) => (
                    <li
                      key={index}
                      className="mb-6 transform transition-transform duration-300 hover:scale-95"
                    >
                      <a
                        href={item.link}
                        className="font-normal text-black text-[16px] md:text-[14px] tracking-tight leading-[20px] "
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center border-t pt-2 border-white">
          <p className="text-black text-sm sm:mb-0">&copy; 2024 Kaktos</p>
          <div className="text-black text-sm flex justify-center space-x-4">
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
