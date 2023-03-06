import React from "react";
import img from "../assets/image 1.jpg";
import logo from "../assets/logo1.png";
import insta from "../assets/instagram logo.svg";
import fb from "../assets/Facebook logo.svg";
import youtube from "../assets/Youtube.svg";
import Map from "./Map";
import Reviews from "./Reviews";
import Carousels from "./Carousel";
import "../App.css";
function Home() {
  return (
    <div>
      <div className="Home">
        <img className="homeimg" src={img} alt="" />
      </div>
      <div className="about">
        <div className="aboutTextcontent">
          <h2
            style={{ color: "#D4AF37", fontWeight: "600", fontFamily: "Font" }}
          >
            ABOUT NEERU'S YOGA
          </h2>
          {/* <img src="" alt="" /> */}
          <p>
            A yoga center situated at prime location of Jodhpur.. Circuit House
            road adjoining Ajit Bhawan Palace (near On The Rock restaurent) with
            beautifull scenary of Sunrise and Sunset with addition of Ummaid
            Bhawan Palace, providing a peaceful setting for people to practice
            yoga. The center has modern amenities and experienced teachers, and
            offers a variety of yoga classes suitable for all levels. They also
            organize retreats and workshops, allowing guests to fully immerse
            themselves in the practice. With a focus on mindfulness and
            wellbeing, the center has become a popular destination for those
            seeking relaxation and inner harmony and inner engineering.
          </p>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="margin size">
        <h2
          style={{
            textAlign: "center",
            color: "#D4AF37",
            fontWeight: "600",
            fontFamily: "Font",
            marginTop: "5vh",
            marginBottom: "5vh",
          }}
        >
          GALLERY
        </h2>
        <Carousels />
      </div>
      <div className="margin size">
        <h2
          style={{
            textAlign: "center",
            color: "#D4AF37",
            fontWeight: "600",
            fontFamily: "Font",
            marginTop: "10vh",
            marginBottom: "5vh",
          }}
        >
          CUSTOMER REVIEWS
        </h2>
        <Reviews />
      </div>
      <div className="margin size">
        <h2
          style={{
            textAlign: "center",
            color: "#D4AF37",
            fontWeight: "600",
            fontFamily: "Font",
            marginTop: "10vh",
            marginBottom: "5vh",
          }}
        >
          VISIT US
        </h2>
        <Map />
      </div>
      <div className="margin size" style={{ marginBottom: "10vh" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#D4AF37",
            fontWeight: "600",
            fontFamily: "Font",
            marginTop: "10vh",
            marginBottom: "5vh",
          }}
        >
          FOLLOW US
        </h2>
        <a href="https://www.instagram.com/neeru_kachhwaha/?hl=en">
          <img className="logo" src={insta} alt="" />
        </a>
        <a href="https://www.facebook.com/people/Neerus-Yoga/100063816976516/">
          <img className="logo" src={fb} alt="" />
        </a>
        <a href="https://www.facebook.com/neeru.kachhwaha/">
          <img className="logo" src={fb} alt="" />
        </a>
        <a href="https://www.youtube.com/channel/UC6AKKeLnTdgo_3acr4Rsbag">
          <img className="logo" src={youtube} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Home;
