"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { TextAnimate } from "@/components/magicui/text-animate";
import {
  Decor,
  ExclamationIcon,
  InvestmentIcon,
  MentorshipIcon,
  PartnershipIcon,
  SeedFundingIcon,
} from "../../../../public/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Testimonial = () => {
  const testimonials = [
    {
      type: "founder",
      icon: <ExclamationIcon />,
      title: "WORD FROM FOUNDER",
      description:
        "We're committed to providing reliable power solutions that keep businesses running smoothly across Southwest Nigeria.",
      footer: "— Wola Global, Founder & CEO",
      background: "/images/backgroundImg.webp",
      backgroundColor: null,
    },
    {
      type: "client",
      icon: <InvestmentIcon />,
      title: "CLIENT TESTIMONIAL",
      description:
        "Bolton Engineering's generator repair service has been exceptional. Their SDMO generators provide reliable power for our construction projects, and their support team is always responsive.",
      footerImage: "/images/client1.webp",
      footerName: "Henry Orton",
      footerPosition: "Project Manager, Danganox Construction",
      backgroundColor: "#1F253F",
    },
    {
      type: "client",
      icon: <MentorshipIcon />,
      title: "CLIENT TESTIMONIAL",
      description:
        "Bolton Engineering helped us choose the perfect generator for our office. Their power load estimation service was spot-on, and we've had zero downtime since installation.",
      footerImage: "/images/client2.webp",
      footerName: "Michael Johnson",
      footerPosition: "Operations Manager, Jobber Solutions",
      backgroundColor: "#1D3D3A",
    },
    {
      type: "client",
      icon: <PartnershipIcon />,
      title: "CLIENT TESTIMONIAL",
      description:
        "Bolton Engineering's maintenance service keeps our generators running like new. Their technical expertise and prompt response times have saved us thousands in downtime costs.",
      footerImage: "/images/client3.webp",
      footerName: "Sarah Williams",
      footerPosition: "Facilities Manager, FutureSolutions",
      backgroundColor: "#B1AD4E",
    },
  ];

  const renderTestimonialCard = (
    testimonial:
      | {
          type: string;
          icon: React.JSX.Element;
          title: string;
          description: string;
          footer: string;
          background: string;
          backgroundColor: null;
          footerImage?: undefined;
          footerName?: undefined;
          footerPosition?: undefined;
        }
      | {
          type: string;
          icon: React.JSX.Element;
          title: string;
          description: string;
          footerImage: string;
          footerName: string;
          footerPosition: string;
          backgroundColor: string;
          footer?: undefined;
          background?: undefined;
        },
    index: number
  ) => {
    if (testimonial.type === "founder") {
      return (
        <div
          className="rounded-2xl flex flex-col p-6 sm:p-8 lg:p-10 justify-between gap-3 h-[350px] sm:h-[450px] lg:h-[541px]"
          style={{
            backgroundImage: `url(${testimonial.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="sm:transform sm:scale-100 scale-75 origin-left">
            {testimonial.icon}
          </div>
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
            <h3 className="text-[12px] sm:text-[14px] font-medium text-[#FFFFFF80] mb-2 sm:mb-4 lg:mb-7">
              {testimonial.title}
            </h3>
            <p className="font-medium text-lg sm:text-xl lg:text-2xl text-[#FFFFFF]">
              {testimonial.description}
            </p>
            <p className="font-medium text-[12px] sm:text-[14px] text-[#FFFFFF] mt-2">
              {testimonial.footer}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="rounded-2xl flex flex-col p-6 sm:p-8 lg:p-10 justify-between gap-3 h-[350px] sm:h-[450px] lg:h-[541px] relative overflow-hidden"
          style={{
            backgroundColor: testimonial.backgroundColor || undefined,
          }}
        >
          <Decor />

          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 relative z-10">
            <p className="font-medium text-lg sm:text-xl lg:text-2xl text-[#FFFFFF]">
              {testimonial.description}
            </p>

            <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-4">
              {testimonial.footerImage && (
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 overflow-hidden">
                  <img
                    src={testimonial.footerImage}
                    alt={testimonial.footerName}
                    className="object-cover "
                  />
                </div>
              )}
              <div>
                <p className="font-medium text-[12px] sm:text-[14px] text-[#FFFFFF]">
                  {testimonial.footerName}
                </p>
                <p className="text-[10px] sm:text-[12px] text-[#FFFFFF80]">
                  {testimonial.footerPosition}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32 py-8 sm:py-12 lg:py-24 xl:py-40 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center w-fit rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 gap-1.5 sm:gap-2">
          <p className="text-[#B1AD4E] text-xs sm:text-sm font-medium">
            TESTIMONIAL
          </p>
        </div>

        <div className="mt-4 sm:mt-6 flex flex-col gap-4 sm:gap-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-[#1F253F] text-wrap leading-tight text-center max-w-4xl">
            <TextAnimate animation="slideUp" by="word">
              Success Stories from Satisfied Clients
            </TextAnimate>
          </h2>
        </div>

        <div className="w-full mt-4 sm:mt-6 lg:mt-10">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              540: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            className="mySwiper relative pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="px-1 py-2">
                {renderTestimonialCard(testimonial, index)}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
