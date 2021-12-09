import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div id="logo-container">
      <a href="https://www.youtube.com/watch?v=yGZKmyAKaRU" onClick={() => {}}>
        <img
          id="logo-image"
          src="https://cdn.discordapp.com/attachments/791594565278367746/918595456710361088/chicken.png"
          alt="Badass Armored PFA"
        />
      </a>
      <Link id="logo" to="/">
          HSDC Password Manager
      </Link>
    </div>

  )
}
export default Logo;
