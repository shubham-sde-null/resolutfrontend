import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <>
      <p
        style={{
          fontWeight: "500",
          letterSpacing: "0.1rem",
          fontSize: "1.1rem",
          marginTop: "1.2rem",
        }}
      >
        RESOLÜT{" "}
        <span
          style={{
            fontWeight: "400",
            letterSpacing: "0.1rem",
            fontSize: "1.1rem",
          }}
        >
          MOBILE
        </span>
      </p>
      <div className="homePage">
        <h5>
          Welcome to <span style={{ fontWeight: "500" }}>RESOLÜT</span> PARTNERS
        </h5>
        <NavLink to="/signup">
          {" "}
          <button>Create Account</button>
        </NavLink>

        <p>
          Already have an account?{" "}
          <NavLink to="/login">
            {" "}
            <span style={{ color: "rgb(27, 3, 3)", fontWeight: "500" }}>
              Login
            </span>
          </NavLink>
        </p>
      </div>
    </>
  );
}

export default Home;
