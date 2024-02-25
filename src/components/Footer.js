import React from "react";
import facebook from "../facebook.png";
import linkedin from "../linkedin.png";
import twitter from "../twitter.png";
import whatsapp from "../whatsapp.png";

export default function Footer() {
  return (
    <footer>
      <div className="socials">
        <a href="https://www.facebook.com/AyodeleNotime">
          <img src={facebook} alt="fbk" />
        </a>
        <a href="https://www.linkedin.com/in/samson-ayodele-idowu-090497193/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://twitter.com/AyodeleNoTime">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="https://wa.me/08032123930">
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </div>
    </footer>
  );
}
