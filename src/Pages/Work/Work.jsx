import React from "react";
import "./Work.css";
import { Link } from "react-router-dom";
import img1 from "../../Assets/Cover images/01.jpg";
import img2 from "../../Assets/Cover images/02.jpg";
import img3 from "../../Assets/Cover images/03.jpg";
import img4 from "../../Assets/Cover images/04.jpg";
import img5 from "../../Assets/Cover images/05.jpg";
import img6 from "../../Assets/Cover images/06.jpg";
import img7 from "../../Assets/Cover images/07.jpg";
import img8 from "../../Assets/Cover images/08.jpg";
import img9 from "../../Assets/Cover images/09.jpg";
import img10 from "../../Assets/Cover images/010.jpg";
import img11 from "../../Assets/Cover images/011.jpg";
import img12 from "../../Assets/Cover images/012.jpg";
import img13 from "../../Assets/Cover images/013.jpg";
import img14 from "../../Assets/Cover images/014.jpg";
import img15 from "../../Assets/Cover images/015.png";

const Work = () => {
  return (
    <div className="work">
      <div className="workContainer py-20">
        <p className="text-center font-secondry">Some of our finest work</p>
        <h4 className="text-center font-primary mt-4 mb-7 text-white">
          Creative <span>Portfolio</span>
        </h4>
        {/* List */}
        <div className="relative right-2/4 translate-x-2/4 flex gap-6 justify-center items-center mt-24">
          <a className="portfolioCategory" href="">
            <p className="font-primary">
              All <span className="diamond relative">&#x2BC1;</span>
            </p>
          </a>
          <a className="portfolioCategory" href="">
            <p className="font-primary">
              Fashion <span className="diamond relative">&#x2BC1;</span>
            </p>
          </a>
          <a className="portfolioCategory" href="">
            <p className="font-primary">
              Travel <span className="diamond relative">&#x2BC1;</span>
            </p>
          </a>
          <a className="portfolioCategory" href="">
            <p className="font-primary">
              Tech <span className="diamond relative">&#x2BC1;</span>
            </p>
          </a>
          <a className="portfolioCategory" href="">
            <p className="font-primary">
              Product <span className="diamond relative">&#x2BC1;</span>
            </p>
          </a>
        </div>
        {/* List End */}

        {/* Card */}
        <div className="flex mt-1 flex-wrap">
          {/* portfolioCard */}
            <div className="portfolioCard w-1/4 relative">
          <Link to="/Projects">
              <img className="portfolioImg w-full" src={img1} />
              <div className="onHover absolute top-0">
                <div className="textContainer m-4">
                  <h5 className="font-primary w-full text-white ml-4">
                    Earthern Soil
                  </h5>
                </div>
              </div>
          </Link>
            </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img2} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">
                  Manfroto
                </h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img3} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">Realme</h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img4} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">
                  Lakme Fashion Week
                </h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img5} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">Oneplus</h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img6} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">
                  Samode Hotels
                </h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img7} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">Samsung</h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img8} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">
                  SriLanka Tourism
                </h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img9} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">
                  Taj Seleqtions
                </h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img10} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">Vietnam</h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img11} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">IQOO</h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img12} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">
                  Cordelia Cruises
                </h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img13} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">
                  Abu Dhabhi
                </h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img14} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">Bonkers</h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}

          {/* portfolioCard */}
          <div className="portfolioCard w-1/4 relative">
             <Link to="/Projects">
            <img className="portfolioImg w-full" src={img15} />
            <div className="onHover absolute top-0">
              <div className="textContainer m-4">
                <h5 className="font-primary w-full text-white ml-4">
                  Safari With Suryansh
                </h5>
              </div>
            </div>
            </Link>
          </div>
          {/* portfolioCard End */}
        </div>

        {/* Card End */}
      </div>
    </div>
  );
};

export default Work;
