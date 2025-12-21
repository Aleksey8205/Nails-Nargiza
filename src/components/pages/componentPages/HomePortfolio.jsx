import React from "react";
import { useScroll } from "react-use-gesture";
import images from "../../../public/images/images.js";
import "./component-style/portfolioHome.css";

import { animated, useSpring } from "react-spring";

const clamp = (value, clampAt = 30) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

const HomePortfolio = () => {
    const [style, set] = useSpring(() => ({
        transform: "perspective(500px) rotateY(0deg)"
        }));
        const bind = useScroll(event => {
        set({
        transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
        }deg)`
        });
        });

  return (
    <>
      <section className="portfolio">
        <h2 className="caption-portfolio">Портфолио</h2>
        <div className="portfolio-section" {...bind()}>
          {images.map((src) => (
            <animated.div
              key={src}
              className="card"
              style={{
                ...style,
                backgroundImage: `url(${src})`,
              }}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePortfolio;
