import React from 'react'
import './Projects.css'
import { Carousel } from "react-responsive-carousel";

import Video from "../../Assets/Projects-bg.mp4";
import Image from '../../Assets/BG/bg-1.jpg'

const Projects = () => {
  return (
    <div className="projects">
      <div className="relative h-screen">
        <video
          className="absolute top-0 left-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          src={Video}
          // Add additional video attributes as needed, such as poster="/path/to/poster.jpg"
        />
        {/* In case we want a title here, Just remove the comment */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Your Title Here</h1>
      </div> */}
      </div>

      <div className="container mx-auto py-16 flex flex-col md:flex-row items-center">
        {/* Left side */}
        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <h2 className="heading text-3xl text-white-700 font-bold mb-4">
            ABOUT PROJECT
          </h2>
          <p className="text-lg text-white-700">
            Your paragraph text here. Write some information about the video or
            any relevant content.
          </p>
        </div>

        {/* Right side */}
        <div className="md:w-1/2">
          <video
            className="w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
            src={Video}
            // Add additional video attributes as needed
          />
        </div>
      </div>

      <div className="container mx-auto py-16">
        <h2 className="heading text-3xl font-bold mb-8 text-center">Works</h2>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={5000}
          className="carousel-wrapper"
        >
          {/* Each video slide */}
          <div>
            <iframe
              title="Video 1"
              width="100%"
              height="auto"
              src={Video}
              frameBorder="1"
            />
          </div>
          <div>
            <iframe
              title="Video 2"
              width="100%"
              height="auto"
              src={Video}
              frameBorder="1"
            />
          </div>
          {/* Add more video slides as needed */}
        </Carousel>
      </div>

      <div className="container mx-auto py-16">
        <h2 className="heading text-center text-3xl font-bold mb-8">
          Our Other Projects
        </h2>
        <Carousel
          showIndicators={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          className="carousel-wrapper"
        >
          {/* Each project slide */}
          <div>
            <img src={Image} alt="Project 1" />
            <p className="legend">Project 1 Description</p>
          </div>
          <div>
            <img src={Image} alt="Project 2" />
            <p className="legend">Project 2 Description</p>
          </div>
          {/* Add more project slides as needed */}
        </Carousel>
      </div>

      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8">Let's Get in Touch</h2>
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side (contact information) */}
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <h3 className="heading text-xl font-semibold mb-2">
              1SHDEEP CREATIVES
            </h3>
            <p>F. No 2/6 Panchwati Complex, 3B Saket Nagar, Bhopal.</p>
            <p className="mt-2">Mobile: +91 9179940591</p>
            <p>Email: vanshdeepofficial@gmail.com</p>
            <p>Mon-Fri: 9am to 6pm</p>
          </div>
          {/* Right side (contact form) */}
          <div className="md:w-1/2 w-full max-w-[300px] bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Contact Form
            </h2>
            <form className="flex flex-col">
              <input
                type="text"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Full Name"
              />
              <input
                type="email"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Email"
              />
              <input
                type="number"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Phone Number"
              />
              <textarea
                name="message"
                className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Message"
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Projects