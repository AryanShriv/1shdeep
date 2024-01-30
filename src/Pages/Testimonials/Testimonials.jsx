import React from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

import Lakme from "../../Assets/Testimonials/2.png";
const Testimonials = () => {
  return (
    <div className="testimonials">
      {/* Heading  */}
      <p className="heading">
        Our<span>Client</span>
      </p>
      {/* Feedback */}
      <div className="text feedback">
        <p>
          <FontAwesomeIcon className="apostrophy" icon={faQuoteLeft} />
          Covered the 5 day fashion week organized by one of the finest makeup
          and beauty brands of India – Lakmé. We covered the project sponsored
          by RealMe and created content for the mobile brand which was augmented
          on the official channels of both Lakmé and RealMe.
        </p>
        <div className="saidBy">
          <img src={Lakme} alt="Lakmé Fashion Week" />
          <h5 className="heading">Lakmé Fashion Week </h5>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
