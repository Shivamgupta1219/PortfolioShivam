import "./Navbar.css";
import { useState, useEffect } from "react";
import light_mode from "../assets/sun.svg";
import dark_mode from "../assets/night.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "enabled"
  );

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "enabled");
      document.getElementById("night_mode").style.display = "block";
      document.getElementById("light_mode").style.display = "none";
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "disabled");
      document.getElementById("night_mode").style.display = "none";
      document.getElementById("light_mode").style.display = "block";

    }
  }, [darkMode]);

  return (
    <div className={`navbar ${darkMode ? "dark" : ""}`}>
      {/* img use for the logo */}
      {/* <img src="" alt="" />  */}
      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>RESUME</li>
        <li>CONTACT ME</li>
        <li>PROJECTS</li>
      </ul>
      {/* Dark Mode Toggle */}
        <img
          src={light_mode}
          alt="sun img"
          style={{ width: "40px" }}
          id="light_mode"
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        />
        <img
          src={dark_mode}
          alt="sun img"
          style={{ width: "40px" }}
          id="night_mode"
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        />
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
}
