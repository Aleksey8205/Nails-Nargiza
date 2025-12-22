import React from "react";
import faces from "../../../public/images/face-image.jpg"

import "./component-style/aboutHome.css";

const HomeAbout = () => {
  return (
    <>
      <section className="about-section">
        <img className="image-about" src={faces} alt="" />
        <div>
          <h2 className="caption-about">Немного о себе</h2>
          <p  className="text-about">Rакое то описание возможно было бы</p>
          <p  className="text-about">какое то описание возможно было бы</p>
          <p  className="text-about">какое то описание возможно было бы</p>
          <div className="social-item">
            <a className="link_social" href="https://www.instagram.com/nogti_podolsk5?igsh=MW5scGlycWIwbW53Zg%3D%3D&utm_source=qr">
              <p className="social-icon social-instagram">Instagram</p>
              <p>nogti_podolsk5</p>
            </a>
            <a className="link_social" href="https://t.me/+79945550006">
              <p className="social-icon social-telegram">Telegram</p>
              <p>@Cobr006</p>
            </a>
            <a className="link_social" href={`tel:+79945550006 `}>
              <p className="social-icon social-phone">Номер телефона</p>
              <p>+7(994)-555-00-06</p>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default HomeAbout;
