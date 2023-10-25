import React from "react";
import { useState } from "react";
import { routes } from "../Data/schema";
import "../Styles/navbar.scss";


const Navbar = () => {
  const [bgColor, setBgColor] = useState(false);

  function changeNavbarBackgroundColor() {
    if (window.scrollY >= 70) {
      setBgColor(true);
    } else {
      setBgColor(false);
    }
  }

  window.addEventListener("scroll", changeNavbarBackgroundColor);

  return (
    <div className={bgColor ? "app__navbar active" : "app__navbar"}>
      <div className="navbar__logo">
        <p>Density Exchange</p>
      </div>
      <ul className="navbar__routes">
        {routes.map((route, index) => (
          <li key={index} className="route">
            <a href={route.path}> {route.name}</a>
          </li>
        ))}
      </ul>
      <div className="navbar__buttons">
        <button
          style={{
            color: bgColor ? "#0c1727" : "white",
          }}
          className="onebtn"
        >
          Fees
        </button>
        <button
          style={{
            color: bgColor ? "white" : "#0c1727",
            background: bgColor ? "#0c1727" : "white",
          }}
        >
          Trade Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
