import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Workprocess from "./Workprocess";
import Team from "./Team";
import Footer from "./Footer";
import Video from "./Video";
import Faq from "./Faq";

const Mainpage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Team />
      <Workprocess />
      <Video />
      <Faq />
      <Footer />
    </>
  );
};

export default Mainpage;
