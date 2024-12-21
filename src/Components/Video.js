import React from "react";
import Heading from "../UI/Heading";

const Video = () => {
  return (
    <div className="mt-36 mx-auto w-[70%] relative ">
      <Heading name="Videos" />
      <div className="mt-20 grid grid-cols-1  xl:grid-cols-3 gap-10">
        {/* Video 1 */}
        <div className="relative w-full h-72 aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/ly36kn0ug4k?si=vpOpAl0Uhpu0Ln1P"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 2 */}
        <div className="relative w-full h-72  aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/ly36kn0ug4k?si=vpOpAl0Uhpu0Ln1P"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 3 */}
        <div className="relative w-full h-72  aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/ly36kn0ug4k?si=vpOpAl0Uhpu0Ln1P"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 4 */}
        <div className="relative w-full h-72  aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/ly36kn0ug4k?si=vpOpAl0Uhpu0Ln1P"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 5 */}
        <div className="relative w-full h-72  aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/ly36kn0ug4k?si=vpOpAl0Uhpu0Ln1P"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video 6 */}
        <div className="relative w-full h-72  aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/ly36kn0ug4k?si=vpOpAl0Uhpu0Ln1P"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
