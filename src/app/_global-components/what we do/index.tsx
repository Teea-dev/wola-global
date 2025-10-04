"use client";
import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import {
  InvestmentIcon,
  MentorshipIcon,
  PartnershipIcon,
  SeedFundingIcon,
} from "../../../../public/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const WhatWeDo = () => {
  return (
    <div
      id="service"
      className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-40 bg-[#F7F6F2]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center w-fit rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 gap-1.5 sm:gap-2">
          <p className="text-[#B1AD4E] text-xs sm:text-sm font-medium">
            WHAT WE DO
          </p>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col gap-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1F253F] leading-tight text-center max-w-4xl">
            <TextAnimate animation="slideUp" by="word">
              Power Solutions You Can Trust
            </TextAnimate>
          </h2>
          <p className="text-[#6B7280] text-center font-light text-[16px]">
            We understand that reliable power is essential for your business
            operations, which is why we offer:
          </p>
        </div>

        <div className="w-full mt-6 sm:mt-10 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="gap-11 flex flex-col w-full lg:w-1/2">
            <div className="bg-[#FFFFFF] rounded-2xl flex p-6 sm:p-8 lg:p-10 justify-between gap-3">
              <div>
                <SeedFundingIcon />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#1D3D3A] mb-7">
                  Generator Sales
                </h3>
                <p className="font-light text-[#6B7280]">
                  We offer top-quality generators from trusted brands like SDMO,
                  providing reliable power solutions for homes, businesses, and
                  industrial operations.
                </p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-2xl flex p-6 sm:p-8 lg:p-10 justify-between gap-3">
              <div>
                <InvestmentIcon />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#1D3D3A] mb-7">
                  Generator Rentals
                </h3>
                <p className="font-light text-[#6B7280]">
                  We provide flexible rental options for short-term and long-term
                  power needs, perfect for events, construction projects, and
                  temporary power requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="gap-11 flex flex-col w-full lg:w-1/2">
            <div className="bg-[#FFFFFF] rounded-2xl flex p-6 sm:p-8 lg:p-10 justify-between gap-3">
              <div>
                <MentorshipIcon />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#1D3D3A] mb-7">
                  Maintenance & Support
                </h3>
                <p className="font-light text-[#6B7280]">
                  We provide comprehensive maintenance services and technical support
                  to ensure your generators operate at peak performance throughout
                  their lifespan.
                </p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] rounded-2xl flex p-6 sm:p-8 lg:p-10 justify-between gap-3">
              <div>
                <PartnershipIcon />
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#1D3D3A] mb-7">
                  Power Load Estimation
                </h3>
                <p className="font-light text-[#6B7280]">
                  Our expert team helps you determine the right generator size
                  for your specific power needs, ensuring optimal performance
                  and cost-effectiveness.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-6 mt-16 sm:mt-20 lg:mt-32 space-y-4 sm:space-y-5 pt-2">
          <Button className="bg-[#1F253F] text-white px-6 sm:px-8 py-5 sm:py-6 rounded-md text-sm sm:text-base w-fit transition-colors duration-200">
            <Link
              href="/partner"
              className="flex items-center gap-2 justify-between space-x-2"
            >
              Get a Quote
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
                className="lucide lucide-arrow-up-right"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
