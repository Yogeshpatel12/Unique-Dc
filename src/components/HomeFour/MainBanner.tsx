"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const MainBanner: React.FC = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <Swiper 
        navigation={true} 
        autoHeight={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Navigation, Autoplay]} 
        className="home-slides"
      >
        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(https://unitorq.in/img/slide-1.jpg)`,
            }}
          >
            
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(https://unitorq.in/img/slide-2.jpg)`,
            }}
          >
    
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="main-banner"
            style={{
              backgroundImage: `url(https://unitorq.in/img/slide-3.jpg)`,
            }}
          >
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MainBanner;
