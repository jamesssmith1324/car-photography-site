import React from "react";
import "../css/about.css";

function About() {
  return (
    <div className="about" id="about">
      <div className="aboutText">
        <h1>About</h1>
        <p>
          d scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently wntially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently w
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
