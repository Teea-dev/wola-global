
import Nav from "./_global-components/navbar";
import Hero from "./_global-components/hero";
import WhoWeAre from "./_global-components/who we are";
import WhatWeDo from "./_global-components/what we do";
import Benefit from "./_global-components/benefit";
// import Products from "./_global-components/products";
import Testimonial from "./_global-components/testimonial";
import PowerEstimator from "./_global-components/power-estimator";
import { AccordionDemo } from "./_global-components/faq";
import WaitlistBanner from "./_global-components/waitlist";
import Footer from "./_global-components/footer";
import { Projects } from "./_global-components/projects";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Benefit />
      {/* <Products /> */}
      <PowerEstimator />
      <Projects />
      <Testimonial />
      <AccordionDemo />
      <WaitlistBanner />
      <Footer />
    </div>
  );
}
