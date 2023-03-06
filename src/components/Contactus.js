import React from "react";
import phone from "../assets/phone.png";
import address from "../assets/address.png";
import insta from "../assets/instagram.png";
import YT from "../assets/youtube.png";
import FB from "../assets/facebook.png";

function Contactus() {
  return (
    <div className="ContactUs-Container">
      <h1>Get In Touch</h1>
      <div className="flex">
        <img className="Contactusimg" src={phone} alt="" />
        <a href="tel: 7568970169">7568970169</a>
      </div>
      <br />
      <div className="flex-pro">
        <img className="Contactusimg" src={address} alt="" />
        <a href="https://goo.gl/maps/PevG5KkuACWvM3Pc9">
          20, West Patel Nagar, Circuit House Road, Jodhpur, Rajasthan
        </a>
      </div>
      <br />
      <div className="flex">
        <img className="Contactusimg" src={insta} alt="" />
        <a href="https://www.instagram.com/neeru_kachhwaha/?hl=en">
          @neeru_kachhwaha
        </a>
      </div>
      <br />
      <div className="flex">
        <img className="Contactusimg" src={YT} alt="" />
        <a href="https://www.youtube.com/channel/UC6AKKeLnTdgo_3acr4Rsbag">
          Neeru Kachhwaha
        </a>
      </div>
      <br />
      <div className="flex">
        <img className="Contactusimg" src={FB} alt="" />
        <a href="https://www.facebook.com/people/Neerus-Yoga/100063816976516/">
          Neerus Yoga
        </a>
      </div>
      <br />
      <div className="flex">
        <img className="Contactusimg" src={FB} alt="" />
        <a href="https://www.facebook.com/neeru.kachhwaha/">Neerus Kachhwaha</a>
      </div>
    </div>
  );
}

export default Contactus;
