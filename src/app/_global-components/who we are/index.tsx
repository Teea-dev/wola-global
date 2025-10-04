"use client";
import React from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { IdeaIcon, RouteIcon } from "../../../../public/icons";

const WhoWeAre = () => {
  return (
    <div
      id="about-us"
      className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-40 bg-[#fff]"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center w-fit rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 gap-1.5 sm:gap-2">
          <p className="text-[#B1AD4E] text-xs sm:text-sm font-medium">
            WHO WE ARE
          </p>
        </div>

        <div className="mt-4 sm:mt-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1F253F] leading-tight text-center max-w-4xl">
            <TextAnimate animation="slideUp" by="word">
              Your Trusted Partner In Reliable Power Solutions
            </TextAnimate>
          </h2>
        </div>

        <div className="w-full mt-6 sm:mt-10 flex flex-col lg:flex-row justify-between items-center gap-7">
          <div className="bg-[#1F253F] rounded-2xl p-8 sm:p-12 lg:p-16 flex flex-col justify-between gap-3 w-full lg:w-1/2">
            <div className="mb-8 sm:mb-16 lg:mb-28">
              <RouteIcon />
            </div>
            <h3 className="text-2xl font-medium text-white mb-7">
              Our Mission
            </h3>
            <p className="font-light text-white">
              Our mission is to provide reliable power solutions across Southwest Nigeria
              by offering top-quality generator sales and rentals, ensuring uninterrupted
              power for homes, businesses, and large-scale operations.
            </p>
          </div>
          <div className="bg-[#1D3D3A] rounded-2xl p-8 sm:p-12 lg:p-16 flex flex-col justify-between gap-3 w-full lg:w-1/2">
            <div className="mb-8 sm:mb-16 lg:mb-28">
              <IdeaIcon />
            </div>
            <h3 className="text-2xl font-medium text-white mb-7">Our Vision</h3>
            <p className="font-light text-white">
              To be the leading generator service provider in Southwest Nigeria,
              empowering businesses and communities with reliable power solutions
              that drive economic growth and improve quality of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
