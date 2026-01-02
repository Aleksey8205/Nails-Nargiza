import React from "react";
import "../shared/footer.css";
import insta from "../public/images/instagram.png";
import telegram from "../public/images/telegram.png";
import phone from "../public/images/phone.png"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h3 className="caption-portfolio">Контакты</h3>
        

        <div className="social-item">
          <a
            className="link_social"
            href="https://www.instagram.com/nogti_podolsk5?igsh=MW5scGlycWIwbW53Zg%3D%3D&utm_source=qr">
            <img className="social-icon" src={insta} alt="" />
          </a>
          <a className="link_social" href="https://t.me/+79945550006">
          <img className="social-icon" src={telegram} alt="" />
          </a>
          <a className="link_social" href={`tel:+79945550006 `}>
            <img className="social-icon" src={phone} alt="" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
