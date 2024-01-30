import React from "react";
import "./Quote.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
const Quote = () => {
  return (
    <div className="quoteSection">
      <div className="content">
        <FontAwesomeIcon className="leftQuote" icon={faQuoteLeft} />
        <h4 className="heading quote">
          Creativity is the greatest rebellion in existence.
        </h4>

        <h5 className="text">Osho</h5>
        <FontAwesomeIcon className="rightQuote" icon={faQuoteRight} />
      </div>
    </div>
  );
};

export default Quote;
