import React from "react";
import "../css/about.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="aboutText">
        <h1>About</h1>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh
          felis, fringilla a lorem sit amet, ultrices sollicitudin ligula.
          Nullam pulvinar nulla ut vehicula porta. Duis volutpat tincidunt elit
          eu congue. Phasellus luctus dictum augue, hendrerit pharetra nunc
          sodales in. Vestibulum fermentum consequat purus, id vulputate nisl
          consectetur nec. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; In hac habitasse platea dictumst.
          Nullam ut nunc tortor. Donec volutpat ante nec tellus feugiat, sed
          ultrices lectus suscipit.
        </p>
      </div>
      <div className="aboutImgs">
        <img
          className="img1"
          src="https://images.pexels.com/photos/86993/pexels-photo-86993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""></img>
        <img
          className="img2"
          src="https://images.pexels.com/photos/76769/pexels-photo-76769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""></img>
        <img
          className="img3"
          src="https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""></img>
        <img
          className="img4"
          src="https://images.pexels.com/photos/3007436/pexels-photo-3007436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""></img>
      </div>
    </div>
  );
}

export default About;
