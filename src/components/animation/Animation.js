import React from "react";
import animation from "../../images/animation.png";
import "./Animation.css";

function Animation() {
  return (
    <div className="animation">
      <img src={animation} className="animation__image" alt="animation" />
    </div>
  );
}

export default Animation;
