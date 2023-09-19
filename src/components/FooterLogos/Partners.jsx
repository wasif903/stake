import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/element/css/autoplay"; // Import Swiper CSS
import slider1 from "../../assets/home/sec1-img2.png";
import slider2 from "../../assets/home/slider2.jpg";
import slider3 from "../../assets/home/slider3.png";

import img1 from "../../assets/partners/1.png";
import img2 from "../../assets/partners/2.png";
import img3 from "../../assets/partners/3.png";
import img4 from "../../assets/partners/4.png";
import img5 from "../../assets/partners/5.png";
import img6 from "../../assets/partners/6.png";
import img7 from "../../assets/partners/7.png";
import img8 from "../../assets/partners/8.png";
import img9 from "../../assets/partners/9.png";
import img10 from "../../assets/partners/10.png";
import img11 from "../../assets/partners/11.png";
import img12 from "../../assets/partners/12.png";
import img13 from "../../assets/partners/13.png";
import img14 from "../../assets/partners/14.png";
import img15 from "../../assets/partners/15.png";
import img16 from "../../assets/partners/16.png";
import img17 from "../../assets/partners/17.png";
import img18 from "../../assets/partners/18.png";
import img19 from "../../assets/partners/19.png";
import img20 from "../../assets/partners/20.png";
import img21 from "../../assets/partners/21.png";
import img22 from "../../assets/partners/22.png";
import img23 from "../../assets/partners/23.png";
import img24 from "../../assets/partners/24.png";
import img25 from "../../assets/partners/25.png";
import img26 from "../../assets/partners/26.png";
import img27 from "../../assets/partners/27.png";
import img28 from "../../assets/partners/28.png";
import img29 from "../../assets/partners/29.png";
import img30 from "../../assets/partners/30.png";
import img31 from "../../assets/partners/31.png";
import img32 from "../../assets/partners/32.png";
import img33 from "../../assets/partners/33.png";
import img34 from "../../assets/partners/34.png";

export default function Partners() {
  const sliderImgs = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
  ];

  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };

  return (
    <>
      <Swiper
        autoplay={{
          delay: 4000, // 4 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={breakpoints}
        style={{ zIndex: 0 }}
      >
        {sliderImgs.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={img} alt="img" style={{width:"180px"}} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
