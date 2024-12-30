import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Workprocess from "./Workprocess";
import Team from "./Team";
import Footer from "./Footer";
import Video from "./Video";
import Faq from "./Faq";
import Contact from "./Contact";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const Mainpage = () => {
  const [isDocumentLoaded, setIsDocumentLoaded] = useState(false);

  useEffect(() => {
    const checkReadyState = () => {
      if (document.readyState === "complete") {
        setIsDocumentLoaded(true);
      }
    };
    // Initial check
    checkReadyState();

    // Listen for state changes
    document.addEventListener("readystatechange", checkReadyState);

    // Cleanup
    return () => {
      document.removeEventListener("readystatechange", checkReadyState);
    };
  }, []);

  return (
    <>
      {!isDocumentLoaded ? (
        <Loader />
      ) : (
        <div className="bg-gray-50 font-playfair overflow-hidden relative">
          <Header />
          <Hero />
          <Services />
          <Team />
          <Video />
          <Workprocess />
          <Faq />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Mainpage;
