"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TextAnimate } from "@/components/magicui/text-animate";

export function AccordionDemo() {
  return (
    <div
      id="faq"
      className="w-full px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-12 lg:py-40 bg-[#F7F6F2]"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2">
          <div className="flex w-fit rounded-lg px-2.5 sm:px-3 py-1.5 sm:py-2 gap-1.5 sm:gap-2">
            <p className="text-[#B1AD4E] text-xs sm:text-sm font-medium">
              WE HAVE ANSWERS
            </p>
          </div>

          <div className="mt-4 sm:mt-6 flex flex-col gap-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1F253F] leading-tight max-w-4xl">
              <TextAnimate animation="slideUp" by="word">
                Frequently Asked Questions
              </TextAnimate>
            </h2>
            <div className="flex flex-col gap-6 sm:gap-10">
              <p className="text-[#6B7280]">
                Find answers to the most common questions about our generator
                sales, repairs, and maintenance services.
              </p>
              <div className="text-[#6B7280]">
                For more inquiries, reach us at{" "}
                <p className="text-[#1F253F] font-medium">
                  boltonengineeringltd@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full lg:w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What brands of generators do you sell and rent?
            </AccordionTrigger>
            <AccordionContent>
              We specialize in SDMO generators and also offer other trusted brands including Honda, Caterpillar, and Yamaha. All our generators are of the highest quality and come with comprehensive warranties.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I determine the right generator size for my needs?</AccordionTrigger>
            <AccordionContent>
              Use our Power Load Estimator tool on the website, or contact our experts for a free consultation. We'll analyze your power requirements, consider starting currents, and recommend the perfect generator size for optimal performance and cost-effectiveness.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do you provide installation and maintenance services?
            </AccordionTrigger>
            <AccordionContent>
              Yes! We offer complete installation services and comprehensive maintenance programs. Our certified technicians ensure proper installation and provide regular maintenance to keep your generator running at peak performance throughout its lifespan.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              What are your repair terms and pricing?
            </AccordionTrigger>
            <AccordionContent>
              We offer flexible repair terms for both short-term and long-term needs. Pricing varies based on generator size, repair duration, and location. Contact us for a customized quote that fits your specific requirements and budget.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Do you deliver generators across Southwest Nigeria?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we deliver and provide services across all Southwest Nigeria states including Lagos, Ogun, Oyo, Osun, Ondo, and Ekiti. We have a reliable logistics network to ensure timely delivery and installation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What warranty do you provide on your generators?
            </AccordionTrigger>
            <AccordionContent>
              All our generators come with manufacturer warranties, typically ranging from 1-3 years depending on the brand and model. We also offer extended warranty options and comprehensive service agreements for added peace of mind.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
