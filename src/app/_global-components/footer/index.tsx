import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../../../../public/icons";

const Footer = () => {
  const socialMediaLinks = [
    { icon: <LinkedinIcon />, key: "linkedin" },
    { icon: <DiscordIcon />, key: "discord" },
    { icon: <FacebookIcon />, key: "facebook" },
    { icon: <InstagramIcon />, key: "instagram" },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 mt-10 sm:mt-16 md:mt-20 bg-white">
      <div className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="w-fit lg:w-[40%] flex flex-col gap-6 md:gap-10">
            <Link href="/">
              <Image
                src="/images/logo.webp"
                alt="Ventsphere logo"
                width={100}
                height={30}
                className="object-contain"
              />
            </Link>
            <p className="text-[#6B7280] text-sm sm:text-base font-normal">
              Empowering visionary startups to reach new heights through funding
              and support.
            </p>
            <div className="flex items-center justify-between max-w-[145px]">
              {socialMediaLinks.map((item) => (
                <Link key={item.key} href={"/#"}>
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-[#1F253F] font-medium text-base sm:text-lg">
                Quick links
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  "Our Service",
                  "Benefits Offered",
                  "Mission & Vision",
                  "FAQ",
                ].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-[#6B7280] hover:text-gray-900 transition-colors text-sm sm:text-base"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-[#1F253F] font-medium text-base sm:text-lg">
                Partnership
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  "Seed Funding",
                  "Investor Partner",
                  "Mentorship",
                  "Partnership",
                ].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-[#6B7280] hover:text-gray-900 transition-colors text-sm sm:text-base"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 col-span-2 md:col-span-1">
              <h3 className="text-[#1F253F] font-medium text-base sm:text-lg">
                Contact Us
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="text-[#6B7280] text-sm sm:text-base font-normal flex items-center gap-2">
                  contact@wolaglobal.com
                </p>
                <p className="text-[#6B7280] text-sm sm:text-base font-normal flex items-center gap-2">
                  +1 (123) 456-7890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      <div className="max-w-6xl mx-auto mt-6 sm:mt-8 px-4 sm:px-0">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          <h3 className="text-[#6B7280] text-sm sm:text-base font-normal text-center sm:text-left">
            © {new Date().getFullYear()} Wola Global Inc. All rights reserved.
          </h3>
          <div className="flex items-center flex-row-reverse gap-1 sm:gap-10 text-[#6B7280] text-sm sm:text-base font-normal">
            <Link
              href="/privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <p className="text-[16px]">.</p>
            <Link
              href="/terms"
              className="hover:text-gray-900 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
