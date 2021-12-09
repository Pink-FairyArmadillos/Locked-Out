import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div>
      <Link id="logo" to="/">
        <div>
          HSDC Password Manager
        </div>
      </Link>
      <a href="https://www.youtube.com/watch?v=yGZKmyAKaRU">
        <img
          id="logo-image"
          src="https://cdn.discordapp.com/attachments/791594565278367746/918595456710361088/chicken.png"
          alt="Badass Armored PFA"
        />
      </a>
    </div>

  )
}
export default Logo;
