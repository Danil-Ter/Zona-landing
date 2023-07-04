import React from "react";
import social from "../images/serves/social.png";
import crypto from "../images/serves/crypto.png";
import analyzer from "../images/serves/analyzer.png";
import module from "../images/serves/module.png";
import arrow from "../images/serves/arrow.png";
import "../styles/service.css";

const cardData = [
  {
    id: 1,
    src: analyzer,
    title: 'Order Management',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
  },
  {
    id: 2,
    src: social,
    title: 'Social Assistant',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
  },
  {
    id: 3,
    src: crypto,
    title: 'Crypto Platform',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
  },
  {
    id: 4,
    src: crypto,
    title: 'Smart Trading Modules',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
  },
  {
    id: 5,
    src: analyzer,
    title: 'Analyzer of the News',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
  },
  {
    id: 6,
    src: module,
    title: 'Module of Price Notification',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
  },
];

export default function Service() {
  return (
    <div className="services">
      <h1 className="service__title">Our Service</h1>
      <p className="service__text">
        We turn information into actionable insights. We work to understand your
        issues and are driven to ask better questions in the pursuit of making
        work.
      </p>
      <div className="card">
        {cardData.map(({ id, src, title, text }) => (
          <div key={id} className="card__item">
            <img className="card__img" src={src} alt={title} />
            <h2 className="card__title">{title}</h2>
            <p className="card__text">{text}</p>
             <a className="card__link" href="#">Learn more <img src={arrow} alt="arrow" /></a>
          </div>
        ))}
      </div>
    </div>
  );
}
