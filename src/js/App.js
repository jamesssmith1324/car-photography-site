import React from "react";
import NavBar from "./NavBar.js";
import LandingPage from "./LandingPage.js";
import About from "./About.js";
import Portfolio from "./Portfolio.js";
import Socials from "./Socials.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <About />
      <Portfolio />
      <Socials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
