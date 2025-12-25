import React from "react";
import video from "../../public/images/nailsVideo.mp4";
import face from "../../public/images/face-image.jpg"
import "../../shared/home.css";

import HomeAbout from "./componentPages/HomeAbout.jsx";
import HomePortfolio from "./componentPages/Homeportfolio.jsx";
import Price from "./componentPages/Price.jsx";
import ShedulePlain from "./componentPages/ShedulePlain.jsx";

const Home = () => {

  const handleTelegramOpen = () => {
    window.location.href = `https://t.me/+79945550006`;
  };
  return (
    <>
      <div className="main">
        <div className="video-container">
          <div className="text-container">
            <h2 className="caption-name">Имя Фамилия</h2>
            <p className="text-beauty">Лучший бьюти мастер</p>
          </div>
          <video className="video" autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={handleTelegramOpen} className="video-button">Записаться</button>
        </div>
        <img className="image-face" src={face} alt="" />
      </div>
      <HomeAbout />
      <HomePortfolio />
      {/* <Price />
      <ShedulePlain /> */}
    </>
  );
};

export default Home;
