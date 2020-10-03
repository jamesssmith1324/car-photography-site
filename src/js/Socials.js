import React from "react";
import "../css/socials.css";

function Socials() {
  return (
    <div className="socials" id="socials">
      <h1>Socials</h1>
      <hr />

      <div className="socialIcons">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nibh
          felis, fringilla a lorem sit amet, ultrices sollicitudin ligula.
          Nullam pulvinar nulla ut vehicula porta. Duis volutpat tincidunt elit
          eu congue. Phasellus luctus dictum augue, hendrerit pharetra nunc
          sodales in.
        </p>
        <ul>
          <li>
            <i class="fa fa-facebook-official" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </li>
          <li>
            <i class="fa fa-twitter-square" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Socials;
