import React from "react";
import "./About.css";
<link href="https://cdn.lineicons.com/4.0/lineicons.css" rel="stylesheet" />;
const About = () => {
  return (
    <section id="about" className="pt-page pt-page-2 ui-block-27 about">
      <div className="container">
        <div
          // className="
          // row align-items-lg-center dot-box"
          className="flex-box"
        >
          {/* <!-- Heading Area--> */}
          <div className="col-lg-6 order-lg-2 content">
            <div className="heading-area pl-lg-4 p-0">
              {/* <!-- <h6 className="sub-title main-color">We are</h6> --> */}
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title wow fadeIn" data-wow-delay="300ms">
                    <h2>
                      Not just a <br />{" "}
                      <span className="color-pink">Creative Agency</span> but a{" "}
                      <br />
                      Community of Artists and Creative Minds.
                    </h2>
                  </div>
                </div>
              </div>{" "}
              <p className="paragraph">
                1shdeep Creatives is India’s first “Premium Quality Oriented”
                content production engine and marketing company backed by the
                community of the best Creative thinkers, filmmakers,
                photographers and artists. A creative network designed to cater
                the needs of all. We believe in empowering our clients to ‘Think
                Forward’ through our strategic creative concepts backed by
                creativity and technology in an environment of rapid change so
                that our clients can succeed in their marketing transformation
                and content production through art.
              </p>
            </div>
          </div>
          {/* <!-- Features Box--> */}
          <div
          //  className="col-lg-6 "
          >
            <div
              className="card-box"
              // className="row d-flex align-items-lg-center"
            >
              <div
              //  className="col-md-6 order-lg-2 p-0 "
              >
                {/* <!-- Feature Item --> */}
                <div className="feature-item cards">
                  <i className="lni lni-patreon"></i>
                  <h5 className="title">
                    Influencer Engagement: The Next Big Thing
                  </h5>
                  {/* <!-- <p>A team of experts in influencer relationship management connect with and collaborate with some of the biggest online influencers to market your services the best. Apart from influencers, we have a team of the best quality content creators who bring impact in the world by the type of content they produce.</p>
                            --> */}
                </div>
                {/* <!-- Feature Item --> */}
                <div className="feature-item cards">
                  <i className="lni-video f-icon"></i>
                  <h5 className="title">
                    Quality Content Production at its best
                  </h5>
                  {/* <!-- <p>We bring you the best team of Directors, Filmmakers, photographers, Editors and the other artists to give your brand and ideas the top notch visuals. 
                            </p> --> */}
                </div>
              </div>
              <div className="col-md-6 p-0 ">
                {/* <!-- Feature Item --> */}
                <div className="feature-item cards">
                  <i className="lni-bullhorn f-icon"></i>
                  <h5 className="title">
                    Marketing Madness with Artful Content
                  </h5>
                  {/* <!-- <p>Our in-house production hub, the Video Production and Photography team, is made up of top-notch photographers, videographers, producers, directors, editors, and animators who work together to develop excellent video and pictorial content. To market a service to its best, a campaign is a must. From ideation to seamless execution, we are here to do it all.
                            </p> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
