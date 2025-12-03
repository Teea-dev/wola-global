"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../../../../public/icons";
import { Mail, Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const socialMediaLinks = [
    { icon: <LinkedinIcon />, key: "linkedin" },
    // { icon: <DiscordIcon />, key: "discord" },
    { icon: <FacebookIcon />, key: "facebook" },
    { icon: <InstagramIcon />, key: "instagram" },
  ];
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }
    // if element not found on current page, navigate to home with hash
    router.push(`/#${id}`);
  };

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 mt-10 sm:mt-16 md:mt-20 bg-white">
      <div className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div className="w-fit lg:w-[40%] flex flex-col gap-6 md:gap-10">
            <Link href="/">
              <Image
                src="/images/bolton-logo.png"
                alt="Bolton engineering logo"
                width={100}
                height={30}
                className="object-contain"
              />
            </Link>
            <p className="text-[#6B7280] text-sm sm:text-base font-normal">
              To send out experienced and happy engineers that will provide a
              standard, high quality and satisfactory electromechanical
              engineering services to all our clients for good reports and
              returns on investment.
            </p>
            {/* <div className="flex items-center justify-between max-w-[145px]">
              {socialMediaLinks.map((item) => (
                <Link key={item.key} href={"/#"}>
                  {item.icon}
                </Link>
              ))}
            </div> */}
          </div>

          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-[#1F253F] font-medium text-base sm:text-lg">
                Quick links
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  { label: "Service", id: "service" },
                  { label: "Products", href: "/products" },
                  { label: "About Us", id: "about-us" },
                  { label: "Benefits", id: "benefits" },
                  { label: "FAQ?", id: "faq" },
                ].map((item) => (
                  <Link
                    key={item.id || item.href}
                    href={item.href || `/#${item.id}`}
                    className="text-[#6B7280] hover:text-gray-900 transition-colors text-sm sm:text-base"
                    onClick={
                      item.href
                        ? undefined
                        : (e) => {
                            e.preventDefault();
                            if (item.id) {
                              handleLinkClick(item.id);
                            }
                          }
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-[#1F253F] font-medium text-base sm:text-lg">
                Address
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                {[
                  "13, Fagbile Street, Surulere , Lagos",
                  "14, Anambra Street, Sun Citi Estate,Abuja",
                ].map((item) => (
                  <div
                    key={item}
                    // href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-[#6B7280] hover:text-gray-900 transition-colors text-sm sm:text-base"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 col-span-2 md:col-span-1">
              <h3 className="text-[#1F253F] font-medium text-base sm:text-lg">
                Contact Us
              </h3>
              <div className="flex flex-col gap-3 sm:gap-4">
                <p className="text-[#6B7280] text-sm sm:text-base font-normal flex items-center gap-2">
                  <a
                    href="mailto:boltonengineeringltd@gmail.com"
                    className="flex items-center gap-2 text-muted-foreground text-sm hover:text-blue-950 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    boltonengineeringltd@gmail.com
                  </a>{" "}
                </p>
                <p className="text-[#6B7280] text-sm sm:text-base font-normal flex items-center gap-2">
                  <a
                    href="tel:+2349115899034"
                    className="flex items-center gap-2 text-muted-foreground text-sm hover:text-blue-950 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +2349115899034
                  </a>
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
            © {new Date().getFullYear()} Bolton Engineering Inc. All rights
            reserved.
          </h3>
          <div className="flex items-center flex-row-reverse gap-1 sm:gap-10 text-[#6B7280] text-sm sm:text-base font-normal">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <p className="text-[16px]">.</p>
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
