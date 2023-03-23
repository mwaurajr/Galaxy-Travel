import React from "react";
import { Link } from "react-router-dom";
import bgvideo from "../assets/space.mp4";
import "./Video.css";

function Video() {
  return (
    <div className="hero">
      <video  autoPlay muted loop id="video">
        <source src={bgvideo} type="video.mp4" />
      </video>
      <div className="content">
        <h1>Galaxy. Travel.</h1>
        <p>Embark on a voyage through the cosmos with Galaxy Travel, <br/>where the possibilities are as infinite as the stars themselves. Discover breathtaking wonders and unlock the secrets of the universe in a journey that will leave you starry-eyed</p>
      </div>

      <Link to='./training' className="btn">Training</Link>
      <Link to='./contact' className="btn btn-light">Launch</Link>
    </div>
  );
}

export default Video;
