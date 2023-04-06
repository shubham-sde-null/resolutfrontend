import React from "react";
import { useState } from "react";
import MenuList from "./MenuList";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav>
      <div
        className="logo"
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        {clicked ? (
          <div className="cross">
            <RxCross2 />
          </div>
        ) : (
          <div className="bars">
            <AiOutlineMenu />
          </div>
        )}

        <div className="companyName">
          {/* <NavLink to="/"> */}
          <p className="main">
            RESOLÜT <span>PARTNERS</span>
          </p>
          {/* </NavLink> */}
        </div>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        {MenuList.map(({ title, url, index = uuidv4() }) => (
          <li key={index}>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to={url}
            >
              {title}
            </NavLink>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
