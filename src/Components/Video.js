import React from "react";
import Heading from "../UI/Heading";
// import { newsletter } from "../Assets/asset";
import Button from "../UI/Button";

const Video = () => {
  return (
    <div id="videos" className="mt-36 mx-auto w-[70%]  xl:h-screen  ">
      <Heading name="Videos" />
      <div className="mt-20 xl:h-[85vh]">
        <div className="grid grid-cols-1  xl:grid-cols-3 gap-10">
          <div className="relative w-full h-72 aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/H6_pLQYvTgg?si=92Bthk7267SEsq4A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="relative w-full h-72 aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/H6_pLQYvTgg?si=92Bthk7267SEsq4A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex items-center  justify-around  p-10 shadow-md rounded-md bg-secondary h-full aspect-w-16 aspect-h-9 xl:col-start-3 xl:row-span-2">
            <div className=" flex flex-col justify-start space-y-4 ">
              <h1 className="font-extrabold text-2xl text-white text-center">
                Download Our Latest Newsletter
              </h1>
              <p className="text-xl text-center text-white">
                Download our newsletter and get informed.
              </p>
              <Button classes="bg-action">Download</Button>
            </div>
          </div>

          <div className="relative w-full h-72 aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/H6_pLQYvTgg?si=92Bthk7267SEsq4A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="relative w-full h-72 aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/H6_pLQYvTgg?si=92Bthk7267SEsq4A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
