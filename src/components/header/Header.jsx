import { useState } from "react";
import "./header.css";

const Header = () => {
  let isOpen = false;
  const [menuClass, setMenuClass] = useState("");
  const [icon, setIcon] = useState("fa-solid fa-bars");

  const toggleBtn = () => {
    console.log("got clicked");
    if (!isOpen) {
      setMenuClass("open");
      setIcon("fa-solid fa-xmark");
      isOpen = true;
    } else if (isOpen) {
      setMenuClass("");
      setIcon("fa-solid fa-bars");
      isOpen = false;
    }
  };

  return (
    <div className="navbar ">
      <div className="logo">
        <img src="Logo.jpg" alt="Xend Green Logo" />
      </div>
      <ul className="links">
        <li className="link">HOME</li>
        <li className="link">ABOUT US</li>
        <li className="link">GALLERY</li>
        <li className="link">CONTACT US</li>
        <li className="link">LOGIN</li>
      </ul>
      <div className="toggle_btn" onClick={toggleBtn}>
        <i className={icon}> </i>
      </div>

      <div className={`dropdown_menu ${menuClass}`}>
        <li className="link">HOME</li>
        <li className="link">ABOUT US</li>
        <li className="link">GALLERY</li>
        <li className="link">CONTACT US</li>
        <li className="link">LOGIN</li>
      </div>
    </div>
  );
};

export default Header;
