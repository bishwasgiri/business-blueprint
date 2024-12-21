import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  strategy,
  risk,
  financial,
  operation,
  advisory,
  brand,
  startup,
  market,
  feasibility,
} from "../Assets/asset";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Swipe = () => {
  const services = [
    {
      id: "startup",
      name: "startup consulting",
      imageLink: startup,
    },
    {
      id: "strategy",
      name: "business strategy development",
      imageLink: strategy,
    },
    {
      id: "risk",
      name: "business risk management",
      imageLink: risk,
    },
    {
      id: "financial",
      name: "financial projections",
      imageLink: financial,
    },
    {
      id: "market",
      name: "market analysis & research",
      imageLink: market,
    },
    {
      id: "feasibility",
      name: "market feasibility study",
      imageLink: feasibility,
    },
    {
      id: "operation",
      name: "operational optimizations",
      imageLink: operation,
    },
    {
      id: "branding",
      name: "branding & marketing solutions",
      imageLink: brand,
    },
    {
      id: "advisory",
      name: "advisory services",
      imageLink: advisory,
    },
  ];
  return (
    <div className="relative overflow-visible">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper mt-10"
        breakpoints={{
          // For screens >= 480px (sm)
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // For screens >= 768px (md)
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // For screens >= 1020px (lg)
          1020: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // For screens >= 1440px (xl)
          1440: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {services.map((service) => (
          <SwiperSlide
            key={service.id}
            className="shadow-xl rounded-lg border-2  bg-zinc-50 cursor-pointer"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "300px",
              height: "300px",
              gap: "10px",
            }}
          >
            <div className="inline-block bg-tint rounded-full p-3 ">
              {service.imageLink}
            </div>
            <p className="uppercase text-xl font-bold text-secondary text-center">
              {service.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Swipe;
