'use client'
import React from "react";
import Image from "next/image";
import FooterForm from "../components/Forms/FooterForm";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Footer = () => {

  const pathname = usePathname();

  if (pathname === '/get-in-touch') {
    return null;
  }


  return (
    <>
      <div>
        <div className="grid lg:grid-cols-3 bg-[url('/footer_images/Get-in-touch-background.png')] p-5 shadow">
          <div className="text-white merriweather-regular">
            <h3 className="text-4xl font-bold p-5">Related Websites</h3>
            <div className="text-2xl">
              <Link href="https://www.inc.in/">
                <p className="p-5">Indian National Congress</p>
              </Link>
              <Link href="https://www.kpcc.org.in/">
                <p className="p-5">Kerala Pradesh Congress Committee</p>
              </Link>
              <Link href="https://iyc.in/">
                <p className="p-5">Indian Youth Congress</p>
              </Link>
              <Link href="https://niyamasabha.nic.in/">
                <p className="p-5">Kerala Legislative Assembly</p>
              </Link>
            </div>              
          </div>
          <div>
            <FooterForm />
          </div>

          <div className="justify-center items-center">
            <Link href="mailto:hello@vdsatheesan.com">
              <Image
                width={400}
                height={100}
                className="bounce-in mt-10"
                src="/footer_images/ask-me-footer.png"
              />
            </Link>

            <p className="text-3xl text-center mt-3 text-white py-3 merriweather-bold">
              Profile Visitors
            </p>
            <div className="flex mb-5 justify-center py-5">
              <Image width={20} height={50} src="/footer_images/0.gif" />
              <Image width={20} height={50} src="/footer_images/0.gif" />
              <Image width={20} height={50} src="/footer_images/0.gif" />
              <Image width={20} height={50} src="/footer_images/5.gif" />
              <Image width={20} height={50} src="/footer_images/9.gif" />
              <Image width={20} height={50} src="/footer_images/1.gif" />
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#035C96] to-[#022E4B] py-5 text-center text-white text-xl shadow-t merriweather-regular">
          Copyright © 2022 All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
