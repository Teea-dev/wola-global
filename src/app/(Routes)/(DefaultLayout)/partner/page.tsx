"use client";


import { TextAnimate } from "@/components/magicui/text-animate";
import PartnerForm from "@/app/_global-components/form";

export default function PartnerPage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-40 bg-[#F7F6F2]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2">
          <div className="flex w-fit rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 gap-1.5 sm:gap-2">
            <p className="text-[#B1AD4E] text-xs sm:text-sm font-medium">
              GET A QUOTE
            </p>
          </div>

          <div className="mt-4 sm:mt-6 flex flex-col gap-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1F253F] leading-tight max-w-4xl">
              <TextAnimate animation="slideUp" by="word">
                Get Your Generator Quote
              </TextAnimate>
            </h2>
            <div className="flex flex-col gap-6 sm:gap-10">
              <p className="text-[#6B7280]">
                Fill out the form and our team will get back to you shortly with
                a customized quote for your power needs. We'll help you find the
                perfect generator solution.
              </p>
              <div className="text-[#6B7280]">
                For immediate assistance, reach us at{" "}
                <p className="text-[#1F253F] font-medium">
                  contact@wolaglobal.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <PartnerForm />
        </div>
      </div>
    </div>
  );
}
