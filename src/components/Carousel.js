import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import yoga1 from "../assets/yoga/yoga1.jpg";
import yoga2 from "../assets/yoga/yoga2.jpg";
import yoga3 from "../assets/yoga/yoga3.jpeg";
import yoga4 from "../assets/yoga/yoga4.jpeg";
import yoga5 from "../assets/yoga/yoga5.jpg";
import yoga6 from "../assets/yoga/yoga6.jpeg";
import yoga7 from "../assets/yoga/yoga7.jpeg";
import yoga8 from "../assets/yoga/yoga8.jpeg";
import yoga11 from "../assets/yoga/yoga11.jpg";
import yoga12 from "../assets/yoga/yoga12.jpg";
import yoga13 from "../assets/yoga/yoga13.jpg";
import yoga14 from "../assets/yoga/yoga14.jpg";
import yoga15 from "../assets/yoga/yoga15.jpg";
import yoga16 from "../assets/yoga/yoga16.jpg";
import yoga17 from "../assets/yoga/yoga17.jpg";
import yoga18 from "../assets/yoga/yoga18.jpg";
import yoga19 from "../assets/yoga/yoga19.jpeg";
import yoga20 from "../assets/yoga/yoga20.jpeg";
import yoga21 from "../assets/yoga/yoga21.jpeg";
import yoga22 from "../assets/yoga/yoga22.jpeg";
import yoga23 from "../assets/yoga/yoga23.jpeg";
import yoga24 from "../assets/yoga/yoga24.jpeg";
import yoga25 from "../assets/yoga/yoga25.jpeg";
import yoga26 from "../assets/yoga/yoga26.jpeg";
import yoga27 from "../assets/yoga/yoga27.jpeg";

export default function Carousels() {
  var settings = {
    autoplay: true,
    autoplayspeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga1}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga2}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga3}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga4}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga5}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga6}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga7}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga8}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga11}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga12}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga13}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga14}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga15}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga16}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga17}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga18}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga19}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga20}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga21}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga22}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga23}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga24}
            alt=""
          />
        </h3>
      </div>
      {/* <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga25}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga26}
            alt=""
          />
        </h3>
      </div>
      <div>
        <h3>
          <img
            style={{
              width: "40vh",
              marginInline: "auto",
              height: "20vh",
              border: "3px solid white",
            }}
            src={yoga27}
            alt=""
          />
        </h3>
      </div> */}
    </Slider>
  );
}
