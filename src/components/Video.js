import React from "react";
import { Link } from "react-router-dom";
import spaceVideo from "../assests/space.mp4"
import "./Video.css";

function Video() {
  return (
    <div className="hero">
      <video src={spaceVideo}  autoPlay muted loop id="video">
        {/* <source src={spaceVideo} type="video.mp4" /> */}
      </video>
      <div className="content">
        <h1>Galaxy. Travel.</h1>
        <p>Explore the wonders of the universe with Galaxy Travel - your ticket to a journey beyond your wildest dreams.</p>
      

      <div>
      <Link to='./training' className= "btn btn-light" >Training</Link>
      <Link to='./contact' className="btn btn-light">Launch</Link>
      </div>


    </div>
    </div>
  );
}

export default Video;
