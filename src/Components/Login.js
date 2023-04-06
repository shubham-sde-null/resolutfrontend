import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { resourceData } from "../redux/action";
function Login() {
  const dataInRedux = useSelector((state) => state);
  console.log("the data from the redux is", dataInRedux);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState([]);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    const retriveData = async () => {
      const response = await axios.get(
        "https://repulsive-leotard-fly.cyclic.app/users"
      );
      setInfo(response.data);
      console.log("the info is", info);
    };
    retriveData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userPresent = info.filter((data) => {
      return data.email === email && data.password === password;
    });
    if (userPresent.length === 1) {
      alert("login successful");
      navigate("/resources");
    } else {
      alert("user is not present");
    }
    dispatch(resourceData(true));
  };
  return (
    <div className="loginContainer">
      <div className="resolutMobile">
        <NavLink to="/">
          {" "}
          <p className="">
            RESOLÜT <span>MOBILE</span>
          </p>
        </NavLink>
      </div>
      <div className="loginHere">Login Here</div>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
        />
        <br />

        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <button type="submit">Login</button>

        <p style={{ fontSize: "0.8rem", marginTop: "0.7rem" }}>
          New to Resolut Partners?
          <NavLink
            to="/signup"
            style={{
              textDecoration: "none",
              fontWeight: "500",
              color: "rgb(27, 3, 3)",
            }}
          >
            {" "}
            Register
          </NavLink>
        </p>
      </form>
      <p className="footerdata">
        Do Not Have Resource Account?
        <span style={{ color: "orange" }}>
          {" "}
          Contact Your Administrator
        </span>{" "}
      </p>
    </div>
  );
}

export default Login;
