import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Workprocess from "./Workprocess";
import Team from "./Team";
import Footer from "./Footer";
// import Companies from "./Companies";
// import Testimonials from "./Testimonials";
import Faq from "./Faq";

const Mainpage = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <Companies /> */}
      <Services />
      <Team />
      <Workprocess />
      {/* <Testimonials /> */}
      <Faq />
      <Footer />
    </>
  );
};

export default Mainpage;
