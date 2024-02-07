import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitbucket } from "@fortawesome/free-brands-svg-icons";
import { faVideo, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import circle from "../../Assets/About/about-circle.png";
import "./About.css";

const About = () => {

  return (
    <div
      className="about flex justify-center item-center relative"

    >
      <img src={circle} className="absolute right-0 top-1/4" />

      <div className="aboutContainer flex">
        <div className="about-graphics w-2/4 flex gap-5">
          <div className="w-2/4 flex flex-col gap-6 justify-center item-center">
            <div className="about-card p-6">
              <FontAwesomeIcon
                class="card-icon font-primary"
                icon={faBullhorn}
              />
              <div className="aboutHeading">
                <p class="text-left font-primary mt-6  text-black">
                  Marketing Madness with Artful Content
                </p>
              </div>
            </div>
          </div>
          <div className="w-2/4 flex flex-col gap-6 justify-center item-center">
            <div className="about-card p-6">
              <FontAwesomeIcon class="card-icon" icon={faBitbucket} />
              <div className="aboutHeading">
                <p class="text-left font-primary mt-6  text-black">
                  Influencer Engagement: The Next Big Thing
                </p>
              </div>
            </div>
            <div className="about-card p-6">
              <FontAwesomeIcon class="card-icon" icon={faVideo} />
              <div className="aboutHeading">
                <p class="text-left font-primary mt-6  text-black">
                  Quality Content Production at its best
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4 flex flex-col justify-between">
          <h2 className="about-content m-3 text-center font-primary text-white font-semibold">
            Not just a <br></br> <span>Creative Agency</span> but a Community of
            Artists and Creative Minds.
          </h2>
          <p class="text-left mb-7">
            1shdeep Creatives is India’s first “Premium Quality Oriented”
            content production engine and marketing company backed by the
            community of the best Creative thinkers, filmmakers, photographers
            and artists. A creative network designed to cater the needs of all.
            We believe in empowering our clients to ‘Think Forward’ through our
            strategic creative concepts backed by creativity and technology in
            an environment of rapid change so that our clients can succeed in
            their marketing transformation and content production through art.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
