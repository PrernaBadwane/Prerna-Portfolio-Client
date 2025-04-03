
import { ICONS } from "../../../../assets";
import "./CircularAnimatedImg.css";

const CircularAnimatedImg = () => {
  return (
    <div className="container">
      <div className="hero-circle">
        <img className="inner-img animate-pulse" src={ICONS.react} alt="" />
        <div className="hero-rotate" id="circle">
          <div className="planet">
            <img src={ICONS.css} alt="" />
          </div>
          <div className="planet">
            <img src={ICONS.js} alt="" />
          </div>
          <div className="planet">
            <img src={ICONS.ts} alt="" />
          </div>
          <div className="planet">
            <img className="" src={ICONS.tailwindcss} alt="" />
          </div>
          <div className="planet">
            <img src={ICONS.node} alt="" />
          </div>
          <div className="planet">
            <img src={ICONS.mongodb} alt="" />
          </div>
          <div className="planet">
            <img src={ICONS.github} alt="" />
          </div>
          <div className="planet">
            <img src={ICONS.html} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircularAnimatedImg;
