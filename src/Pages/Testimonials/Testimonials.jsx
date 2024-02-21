import React from "react";
import "./Testimonials.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import image1 from "../../Assets/Testimonials/client/1.png";
import image2 from "../../Assets/Testimonials/client/2.png";
import image3 from "../../Assets/Testimonials/client2/10.png";
import image4 from "../../Assets/Testimonials/client2/11.png";
import image5 from "../../Assets/Testimonials/client2/5.png";
import image6 from "../../Assets/Testimonials/client2/8.png";
import mp from "../../Assets/Testimonials/client/2.png";
import image8 from "../../Assets/Testimonials/client/10.png";
import oneplus from "../../Assets/Testimonials/client/11.png";
import image10 from "../../Assets/Testimonials/client/5.png";
import abudhabi from "../../Assets/Testimonials/client/8.png";
import realme from "../../Assets/Testimonials/client/7.png";
import lakme from "../../Assets/Testimonials/client/5.png";
import { color } from "@chakra-ui/react";
// import Lakme from "../../Assets/Testimonials/2.png";
const Testimonials = () => {
  return (
    <section id="clients" className="bg-white p-0 cursor-light no-transition">
      <div className="section-padding parallax-setting parallaxie parallax2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title wow fadeIn" data-wow-delay="300ms">
                <h2
                  className="mb-0"
                  style={{ color: "white", justifySelf: "center" }}
                >
                  Valuable<span className="color-pink">Clients</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="testimonial-images">
            <div className="owl-thumbs owl-dots d-lg-block d-none">
              <div className="owl-dot animated-wrap active">
                <img src={image1} alt="" className="animated-element" />
              </div>
              <div className="owl-dot animated-wrap">
                <img src={image2} alt="" className="animated-element" />
              </div>
              <div className="owl-dot animated-wrap">
                <img src={image3} alt="" className="animated-element" />
              </div>

              <div className="owl-dot animated-wrap">
                <img src={image4} alt="" className="animated-element" />
              </div>
              <div className="owl-dot animated-wrap">
                <img src={image5} alt="" className="animated-element" />
              </div>
              <div className="owl-dot animated-wrap">
                <img src={image6} alt="" className="animated-element" />
              </div>
            </div>
          </div>

          <div className="row align-items-center position-relative">
            <div className="col-md-12">
              <div
                className="owl-carousel owl-theme testimonial-two hide-cursor mx-auto wow zoomIn"
                data-wow-delay="400ms"
              >
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={false}
                  pagination={{
                    clickable: true,
                    el: `swiper-container swiper-container-testClass`,
                  }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <p className="color-white testimonial-para mb-15px">
                        Successfully Developed And Executed Social Media And
                        Website Content For Cordellia Cruises, One Of India’s
                        Most Renowned Cruise Organizations. Covered Places Like
                        Lakshadweep, Mumbai, Goa, And Further Planning To
                        Broaden Our Horizon By Going International To Cities
                        Like Dubai And Maldives. 1shdeep Creatives Has Created
                        More Than 100 Pictures And 30 Videos For Cordellia
                        Cruises.
                      </p>
                      <div className="testimonial-post">
                        <a href="/javascript:void(0)" className="post ">
                          <img src={image1} alt="" />
                        </a>
                        <div className="text-content">
                          <h5 className="color-white text-capitalize">
                            Cordellia Cruises
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="testimonial-item hide-cursor">
                      <p className="color-white testimonial-para mb-15px">
                        {" "}
                        Exclusively covered the beautiful city Abu Dhabi and
                        created multiple large format, short format and
                        pictorial content for the tourism board. The content was
                        promoted organically on the Abu Dhabi Tourism website
                        and all the social media handles including 1shdeep
                        Creatives. Created and amplified more than 40+ pictures
                        and 10+ video content.
                      </p>

                      <div className="testimonial-post">
                        <a href="/javascript:void(0)" className="post">
                          <img src={abudhabi} alt="image" />
                        </a>
                        <div className="text-content">
                          <h5 className="color-white text-capitalize">
                            Abu Dhabi Tourism/ VisitAbuDhabi
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <p className="color-white testimonial-para mb-15px">
                        {" "}
                        Madhya Pradesh Tourism The tourism board licensed one of
                        our viral travel videos made on Bhopal & several photos
                        to be used by them for their digital promotional
                        purposes.
                      </p>

                      <div className="testimonial-post">
                        <a href="/javascript:void(0)" className="post">
                          <img src={mp} alt="image" />
                        </a>
                        <div className="text-content">
                          <h5 className="color-white text-capitalize">
                            Madhya Pradesh Tourism{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial-item">
                      <p className="color-white testimonial-para mb-15px">
                        {" "}
                        1shdeep Creatives is a part of RealMe exclusive
                        creators’ hub. Getting to travel to places like Ladakh,
                        Kerala, Delhi etc. we have expanded our horizon and how.
                        Designed and developed more than 10 digital
                        advertisements for RealMe in the last 2 years.
                      </p>

                      <div className="testimonial-post">
                        <a href="/javascript:void(0)" className="post">
                          <img src={realme} alt="image" />
                        </a>
                        <div className="text-content">
                          <h5 className="color-white text-capitalize">
                            RealMe
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="testimonial-item">
                      <p className="color-white testimonial-para mb-15px">
                        {" "}
                        Started from just a series of pictures, 1shdeep
                        Creatives has now built a long-term partnership with
                        OnePlus, one of the fastest growing mobile brands in
                        India. Created more than 100 pictorial and video content
                        for the company. In these projects, 1shdeep Creatives
                        has covered more than 10 locations in India and is
                        further planning to explore nations abroad.
                      </p>

                      <div className="testimonial-post">
                        <a href="/javascript:void(0)" className="post">
                          <img src={oneplus} alt="image" />
                        </a>
                        <div className="text-content">
                          <h5 className="color-white text-capitalize">
                            OnePlus
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="testimonial-item">
                      <p className="color-white testimonial-para mb-15px">
                        Covered the 5 day fashion week organized by one of the
                        finest makeup and beauty brands of India – Lakmé. We
                        covered the project sponsored by RealMe and created
                        content for the mobile brand which was augmented on the
                        official channels of both Lakmé and RealMe.{" "}
                      </p>

                      <div className="testimonial-post">
                        <a href="/javascript:void(0)" className="post">
                          <img src={lakme} alt="image" />
                        </a>
                        <div className="text-content">
                          <h5 className="color-white text-capitalize">
                            Lakmé Fashion Week{" "}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
