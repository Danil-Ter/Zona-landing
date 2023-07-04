import React from "react";
import sunny from "../images/team/sunny.png";
import alina from "../images/team/alina.png";
import alex from "../images/team/alex.png";
import Lea from "../images/team/Lea.png";
import skype from "../images/team/skype.png";
import twitter from "../images/team/twitter.png";
import Facebook from "../images/team/Facebook.png";
import linkedin from "../images/team/linkedin.png";
import "../styles/team.css";

const cardTeam = [
    {
        id: 1,
        src: sunny,
        sername: 'Sunny Khan',
        job: 'Executive officer'
    },
    {
        id: 2,
        src: alina,
        sername: 'Alina Jesia',
        job: 'UX/UI DESIGNER'
    },
    {
        id: 3,
        src: alex,
        sername: 'Alex Sohag ',
        job: 'BUSINESS DEVELOPMENT'
    },
    {
        id: 4,
        src: Lea,
        sername: 'Lea Mou',
        job: 'Head of marketing'
    }

]
export default function Team() {
  return (
    <div className="wow animate__animated animate__zoomIn">
      <h1 className="team__title">Met Our Team</h1>
      <p className="team__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
        accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </p>
    <div className="team__card">
        {cardTeam.map(({id, src, sername, job }) => (
            <div key={id} className="team__item">
                <img className="team__img" src={src} alt="img" />
                <h2 className="team__sername">{sername}</h2>
                <p className="team__job">{job}</p>
                <div className="team__link">
                    <a href="#"><img src={skype} alt="contact" /> </a>
                    <a href="#"><img src={twitter} alt="contact" /> </a>
                    <a href="#"><img src={linkedin} alt="contact" /> </a>
                    <a href="#"><img src={Facebook} alt="contact" /> </a>
                </div>
            </div>
        ))}
    </div>
    </div>
  );
}
