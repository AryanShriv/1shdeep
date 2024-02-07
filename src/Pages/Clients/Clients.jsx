import React from "react";
import "./Clients.css";
import client1 from "../../Assets/Clients/1.png";
import client2 from "../../Assets/Clients/2.png";
import client3 from "../../Assets/Clients/3.png";
import client4 from "../../Assets/Clients/4.png";
import client5 from "../../Assets/Clients/5.png";
import client6 from "../../Assets/Clients/6.png";
import client7 from "../../Assets/Clients/7.png";
import client8 from "../../Assets/Clients/8.png";
import client9 from "../../Assets/Clients/9.png";
import client10 from "../../Assets/Clients/10.png";
import client11 from "../../Assets/Clients/11.png";
import client12 from "../../Assets/Clients/12.png";
import circleImg from '../../Assets/Clients/team-circle.png'
const Clients = () => {
  return (
    <div className="client container relative pt-24 pb-8">
      <img src={circleImg} className="circleImg absolute top-36"/>

      <h2 className="text-center font-primary font-thin">
        Our <span>Clientele</span>
      </h2>
      <p className="clientText text-center ">
        More than 100 clients have trusted us…
      </p>

      <div className="flex gap-14 justify-center items-center w-3/4 relative left-2/4 -translate-x-2/4">
        <div className="brandCol w-1/4 flex flex-col justify-center items-center">
          <img src={client1} alt="Loading" />
          <img src={client3} alt="Loading" />
          <img src={client9} alt="Loading" />
        </div>
        <div className="brandCol w-1/4 flex flex-col justify-center items-center">
          <img src={client8} alt="Loading" />
          <img src={client2} alt="Loading" />
          <img src={client11} alt="Loading" />
        </div>
        <div className="brandCol w-1/4 flex flex-col justify-center items-center">
          <img src={client6} alt="Loading" />
          <img src={client10} alt="Loading" />
          <img src={client7} alt="Loading" />
        </div>
        <div className="brandCol w-1/4 flex flex-col justify-center items-center">
          <img src={client4} alt="Loading" />
          <img src={client5} alt="Loading" />
          <img src={client12} alt="Loading" />
        </div>
      </div>

      <p className="clientText mt-6 text-center w-3/4 relative left-2/4 -translate-x-2/4 ">
        We are not your advertisers next door, we are a team of creative
        thinkers who thrive on innovation. We just don’t take projects, we
        collaborate. We don’t just believe in serving our clients, we believe in
        growing with them.{" "}
      </p>
    </div>
  );
};

export default Clients;
