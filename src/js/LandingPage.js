import React from "react";
import "../css/landingPage.css";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="header">
        <h1>Professional Car Photography</h1>
        <hr />
        <h3>Super - Classic - Sport</h3>
      </div>
      <div className="tripleCar">
        <CarClass class="super carClassBox" title="Super" />
        <CarClass class="classic carClassBox" title="Classic" />
        <CarClass class="sport carClassBox" title="Sport" />
      </div>
    </div>
  );
}

function CarClass(props) {
  return (
    <div className={props.class}>
      <h2 className="underline">{props.title}</h2>
    </div>
  );
}

export default LandingPage;
