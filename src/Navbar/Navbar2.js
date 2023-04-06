import React from "react";
import { useState } from "react";
import MenuList from "./MenuList";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import "./Navbar2.css";
import { NavLink } from "react-router-dom";
function Navbar2() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav>
      <div className="logoAndCompantCont">
        <div
          className="logo one"
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
        </div>

        <div className="companyName two">
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

export default Navbar2;
