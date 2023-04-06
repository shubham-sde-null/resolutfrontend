import React from "react";
import { useState } from "react";
import "./AddResource.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function EditResource() {
  const location = useLocation();
  const actualObjecet = location.state.resource;
  const [oldFormValues, setOldFormValues] = useState(actualObjecet);
  console.log("the actual objects are the", actualObjecet);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOldFormValues({ ...oldFormValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateValues = {
      username: oldFormValues.username,
      email: oldFormValues.email,
      designation: oldFormValues.designation,
    };
    await axios.put(
      `https://repulsive-leotard-fly.cyclic.app/allresource/${oldFormValues.id}`,
      updateValues
    );
    navigate("/resources");
  };

  return (
    <div style={{ maxHeight: "100vh", overflow: "hidden" }}>
      {" "}
      <Navbar />
      <div className="addResourceContainer">
        <div className="addResourceHere">
          <p>Edit Resource</p>
          <p>Update your new resource detail here</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="text"
            name="username"
            placeholder="Full Name"
            value={oldFormValues.username}
            onChange={handleChange}
            style={{ marginBottom: "1.3rem" }}
          />

          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            value={oldFormValues.email}
            onChange={handleChange}
            style={{ marginBottom: "1.3rem" }}
          />

          <select
            id="designation"
            value={oldFormValues.designation}
            onChange={(e) =>
              setOldFormValues({
                ...oldFormValues,
                designation: e.target.value,
              })
            }
          >
            <option value="" disabled={true} selected hidden>
              Select Designation
            </option>
            <option value="Partner">Partner</option>
            <option value="Associate">Associate</option>
          </select>

          <button type="submit">Update Resource</button>
        </form>
      </div>
    </div>
  );
}

export default EditResource;
