import React from "react";
import "../css/navBar.css";

function NavBar() {
  return (
    <div>
      <ul className="navBar">
        <li className="Logo">
          <h2>MattPhotography</h2>
        </li>
        <NavBarElement text="Home" href="" class="underline" />
        <NavBarElement text="About" href="#about" class="underline" />
        <NavBarElement text="Portfolio" href="#portfolio" class="underline" />
        <NavBarElement text="Socials" href="#socials" class="underline" />
        <NavBarElement text="Contact" href="#contact" class="underline" />
      </ul>
    </div>
  );
}

function NavBarElement(props) {
  return (
    <li>
      <a href={props.href} className={props.class}>
        {props.text}
      </a>
    </li>
  );
}

export default NavBar;
