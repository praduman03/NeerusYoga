import React from "react";
import Neeru from "../assets/neeru.jpeg";

function Aboutus() {
  return (
    <div className="AboutUsContainer">
      <h1 style={{ fontFamily: "Font" }}>About Neeru Kachhwaha</h1>
      <div className="AboutUsFlex">
        <div className="AboutUsText">
          <p>
            Neeru Kachhwaha has over 15 years of experience and is a double M.A
            in Yoga, Human Science and Psychology, she also holds multiple
            certificates both national and international from various
            organization, she is also highly skilled in various styles and
            techniques of yoga. With years of experience teaching and helping
            students improve their physical and mental health, She have a deep
            understanding of the practice of yoga.
          </p>
        </div>
        <img src={Neeru} alt="" />
      </div>
      <p>
        Having taught many students over the years, She gained a wealth of
        knowledge about how to tailor yoga classes to the needs of different
        individuals. They may have experience working with people of all ages
        and abilities, including those with injuries or health conditions.
        <br />
        Additionally, teaching yoga to the army on International Yoga Day 2022
        at Jodhpur Konark Corps shows that this teacher has a passion for
        spreading the benefits of yoga to as many people as possible. The army
        can be a challenging environment to teach in, as it requires a different
        approach and focus than teaching a regular class. This teacher's
        experience teaching in this setting demonstrates their versatility and
        adaptability as a teacher.
        <br />
        Overall, a yoga teacher with this level of experience and certification
        has likely honed their skills over many years and is highly qualified to
        help students improve their physical and mental health through yoga
        practice. Her dedication to spreading the benefits of yoga to as many
        people as possible is a testament to their passion for the practice and
        commitment to their students' well-being.
      </p>
    </div>
  );
}

export default Aboutus;
