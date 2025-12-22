import React from "react";
import video from "../../public/images/nailsVideo.mp4";
import face from "../../public/images/face-image.jpg"
import "../../shared/home.css";

import HomeAbout from "./componentPages/HomeAbout.jsx";
import HomePortfolio from "./componentPages/HomePortfolio.jsx";

const Home = () => {

  const handleTelegramOpen = () => {
    window.location.href = `https://t.me/+79945550006`;
  };
  return (
    <>
      <div className="main">
        <div className="video-container">
          <div className="text-container">
            <h2>Имя Фамилия</h2>
            <p className="text-beauty">Лучший бьюти мастер</p>
          </div>
          <video className="video" autoPlay loop muted playsInline>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={handleTelegramOpen} className="video-button">Записаться</button>
        </div>
        <div>
          <img className="image-face" src={face} alt="" />
        </div>
      </div>
      <HomeAbout />
      <HomePortfolio />
    </>
  );
};

export default Home;
