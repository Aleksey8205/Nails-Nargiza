import React from "react";
import aboutImage from "../../../public/images/about-image.jpg";

import "./component-style/aboutHome.css";

const HomeAbout = () => {
  return (
    <>
      <section className="about-section">
        <img className="image-about" src={aboutImage} alt="" />
        <div>
          <h2 className="caption-about">Немного о себе</h2>
          <p className="text-about">Я занимаюсь маникюром более 2-х лет</p>
          <p className="text-about">
            Для красивого маникюра я использую только качественые материалы.
          </p>
          <p className="text-about">
          Владею всеми техниками маникюра, включая аппаратную обработку ногтей.
          </p>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
