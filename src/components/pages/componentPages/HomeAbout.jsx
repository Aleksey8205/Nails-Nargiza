import React from "react";
import face from "../../../public/images/main-image.jpg";
import "./component-style/aboutHome.css";

const HomeAbout = () => {
  return (
    <>
      <section className="about-section">
        <img className="image-about" src={face} alt="" />
        <div>
          <h2 className="caption-about">Немного о себе</h2>
          <p className="text-about">Здесь должен быть текст как в примере </p>
          <p className="text-about">например "Я мастер по маникюру"</p>
          <p className="text-about">"Занимаюсь тем то тем то"</p>
          <p className="text-about">и еще что то или больше блоков можно</p>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
