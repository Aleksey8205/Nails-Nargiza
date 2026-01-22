import React from "react";

import face from "../../public/images/face-image.jpg"
import "../../shared/home.css";

import HomeHelmet from "../Helmet.jsx";

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
    <HomeHelmet/>
    <div className="container">
      <div className="main">
        <div className="video-container">
          <div className="text-container">
            <h2 className="caption-name">Наргиз</h2>
            <h2 className="caption-name family-right">Орлова</h2>
            <p className="text-beauty">Лучший бьюти мастер</p>
          </div>

          <button onClick={handleTelegramOpen} className="video-button">Записаться</button>
        </div>
        <img className="image-face" src={face} alt="Фото Наргиз орловой" />
      </div>
      <HomeAbout />
      <HomePortfolio /> 
      </div>
      <Price />
      <div className="container">
      <ShedulePlain />
      </div>
    </>
  );
};

export default Home;
