import { Link } from "react-router-dom";
import Button from "../../Button";
import "./Hero.scss";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";

function Hero() {
  useEffect(() => {
    // Load the Typed.js script dynamically
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject();
        document.body.appendChild(script);
      });
    };

    loadScript("https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js")
      .then(() => {
        const options = {
          strings: ["Let's Play", "Create Quiz"],
          typeSpeed: 200,
          backSpeed: 200,
          backDelay: 500,
          startDelay: 300,
          loop: true,
          showCursor: false,
        };
        const typed = new window.Typed(".text__auto", options);

        // Clean up when the component unmounts
        return () => {
          typed.destroy();
        };
      })
      .catch((err) => console.error("Failed to load script", err));
  }, []);

  return (
    <div className="hero__wrapper">
      {/* Container */}
      <div className="hero__container">
        <div className="hero__title">Ready for a Fun Quiz?</div>
        <div className="hero__subtitle">
          <div className="hero__text">
            <span className="text__auto"></span>
          </div>
        </div>
        <div className="hero__description">
          Get ready for a brain-tickling challenge! Dive into our Fun Quiz and
          put your knowledge to the test. Let's see how well you do!
        </div>
      </div>

      {/* Action */}
      <div className="hero__action">
        <div className="hero__icon"></div>
        {/* &nbsp;&nbsp; 4- 8 kí tự */}
        <Link to="/login">
          <Button primary medium rightIcon={faAngleRight}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
