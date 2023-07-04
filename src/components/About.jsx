import React from 'react'
import manl from "../images/about/manl.png";
import manr from "../images/about/manr.png";
import "../styles/about.css";

export default function About() {
  return (
    <div>
      <div className="about">
        <div className="about__left">
          <img className="about_img wow animate__animated animate__fadeInLeft" src={manl} alt="manl" />
        </div>
        <div className="about__right">
          <h2 className="about__title">
            We complete every project with extra care as per customer needs
          </h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
            sit amet convallis nuncoe scelerisque in. orem ipsum dolor sit
            amet, consectetur adipisicing elit. Labore eius molestiae facere,
            natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora
            odit laborum iure inventore possimus laboriosam qui nam.
          </p>
          <button className="about__link">Read more</button>
        </div>
      </div>
      <div className="about">
        <div className="about__right">
          <h2 className="about__title">
            We complete every project with extra care as per customer needs
          </h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
            sit amet convallis nuncoe scelerisque in. orem ipsum dolor sit
            amet, consectetur adipisicing elit. Labore eius molestiae facere,
            natus reprehenderit eaque eum, autem ipsam. Magfini, error. Tempora
            odit laborum iure inventore possimus laboriosam qui nam.
          </p>
          <button className="about__link">Read more</button>
        </div>
        <div className="about__left">
          <img className="about_img wow animate__animated animate__fadeInRight" src={manr} alt="manr" />
        </div>
      </div>
    </div>
  );
}
