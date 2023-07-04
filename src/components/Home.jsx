import React from "react";
import men from "../images/men.png";
import video from "../images/video.png";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home__left">
        <h1 className="Home__title">
          Virtual Reality <br /> Business Solutions
        </h1>
        <p className="Home__text">
          We have over 15 year exprience in business consultting arena. We have
          over 15 year exprience in business consultting arena and artficial
          intelligence.
        </p>
        <div className="Home__nav">
          <button className="Home__join">Join Us</button>
          <a className="Home__video">
            <img src={video} alt="video" /> Watch video
          </a>
        </div>
      </div>
      <div className="Home__right">
        <img className="Home__img wow animate__animated animate__fadeInRight" src={men} alt="men" />
      </div>
    </div>
  );
}
