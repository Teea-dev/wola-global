"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
  GoggleLogo,
  GoodLeapLogo,
  GrammalyLogo,
  KohlerGeneratorsLogo,
  LoomLogo,
  ZippoLogo,
} from "../../../../public/icons";

const Hero = () => {
  return (
    <div className="w-full  px-4 sm:px-6 lg:px-4 xl:px-32 py-8 sm:py-12 lg:py-20 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-20">
        <div className="flex flex-col space-y-4 sm:space-y-6 w-full lg:w-[55%] max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#1F253F] leading-tight">
            <TextAnimate animation="slideUp" by="word">
              Reliable Power Solutions
            </TextAnimate>
          </h1>

          <h1 className="text-[#6B7280] text-[14px] sm:text-lg font-[400]">
            <TextAnimate animation="fadeIn" by="line" as="p">
              WOLA Global offers top-quality generator sales and rentals across
              Southwest Nigeria. We ensure uninterrupted power for your home and
              business with our trusted SDMO and premium generator solutions.
            </TextAnimate>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2">
            <Button className="bg-[#1F253F] text-white px-6 sm:px-8 py-5 sm:py-6 rounded-2xl text-sm sm:text-base w-full sm:w-fit transition-colors duration-200">
              Generator Sales
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right transform group-hover:translate-x-1 transition-transform duration-200"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Button>
            <Button className="bg-[#EAE68B] text-[#1F253F] px-6 sm:px-8 py-5 sm:py-6 rounded-2xl text-sm sm:text-base w-full sm:w-fit transition-colors duration-200">
              Generator Rentals
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5.59"
                height="6.56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Button>
          </div>
        </div>

        <div className="relative  h-auto ">
          <Image
            src="/images/heroImg.webp"
            alt="hero image"
            layout="intrinsic"
            width={477}
            height={525}
            className="object-contain"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-12">
        <p className="text-[16px] text-[#6B7280] w-[176px] flex-wrap text-center sm:text-start">
          Trusted brands and partners we work with
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 place-items-center gap-4 sm:gap-8">
          <Image
            src="/images/FGWilsonlogo.webp"
            alt="FG Wilson logo"
            width={100}
            height={525}
          />
          <Image
            src="/images/kohler-generators-logo.webp"
            alt="Kohler Generators logo"
            width={200}
            height={525}
          />
          <Image
            src="/images/perkins.webp"
            alt="Kohler Generators logo"
            width={200}
            height={525}
            className="bg-blue-600 p-2 "
          />
          <Image
            src="/images/volvoLogo.webp"
            alt="Kohler Generators logo"
            width={100}
            height={225}
          />
          <KohlerGeneratorsLogo />
          {/* <GrammalyLogo /> */}
          {/* <GoodLeapLogo /> */}
          {/* <GoggleLogo />
          <LoomLogo /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
