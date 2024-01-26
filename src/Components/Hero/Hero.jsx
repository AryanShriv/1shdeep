import React from "react";
import './Hero.css'

import BG from '../../Assets/Hero-Video/slider-video.mp4'


const VideoSection = () => {
  return (
    <section className="relative h-screen">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 object-cover w-full h-full"
      >
        <source src={BG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="banner-overlay"></div>

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Create</h1>
        <p className="tagline text-lg">
          {" "}
          Creativity is contagious, pass it on.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
