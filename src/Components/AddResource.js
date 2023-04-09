import React from "react";
import { useState, useEffect } from "react";
import "./AddResource.css";
import Navbar from "../Navbar/Navbar";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { valueChanged } from "../redux/action";
import { addData } from "../redux/action";
function AddResource() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    designation: "",
    password: "",
    repassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setFormErrors(validate(formValues));

    setIsSubmit(true);
    const dataToAdd = {
      id: uuidv4(),
      ...formValues,
      today: "10hr",
      billable: "0hr",
      nonbillable: "0hr",
    };
    axios.post(
      "https://repulsive-leotard-fly.cyclic.app/addresource",
      dataToAdd
    );
    navigate("/resources");
    dispatch(
      addData(
        dataToAdd.id,
        formValues.username,
        formValues.email,
        formValues.designation,
        formValues.password,
        dataToAdd.today,
        dataToAdd.billable,
        dataToAdd.nonbillable
      )
    );
    dispatch(valueChanged(1));
  };

  useEffect(() => {
    console.log(formErrors);

    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("form values got printed", formValues);
    }
    // this is used to diable the required values in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    } else if (!values.designation) {
      errors.designation = "Please select the designation";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!values.repassword) {
      errors.repassword = "Re-enter the password";
    } else if (values.password.length < 4) {
      errors.password = "Password length must be more then 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password length must be less then 10 characters";
    }
    return errors;
  };
  return (
    <div style={{ maxHeight: "100vh", overflow: "hidden" }}>
      {" "}
      <Navbar />
      <div className="addResourceContainer">
        <div className="addResourceHere">
          <p>Add Resource</p>
          <p>Enter your new resource detail here</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="text"
            name="username"
            placeholder="Full Name"
            value={formValues.username}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.username}</p>
          <br />
          <input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.email}</p>
          <br />
          <select
            id="designation"
            value={formValues.designation}
            onChange={(e) =>
              setFormValues({ ...formValues, designation: e.target.value })
            }
          >
            <option value="" disabled={true} selected hidden>
              Select Designation
            </option>
            <option value="Partner">Partner</option>
            <option value="Associate">Associate</option>
          </select>
          <p style={{ color: "red" }}>{formErrors.designation}</p>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.password}</p>
          <br />
          <input
            id="repassword"
            type="password"
            name="repassword"
            placeholder="Re-enter Password"
            value={formValues.repassword}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.password}</p>
          <br />
          <button type="submit">Add Resource</button>
        </form>
      </div>
    </div>
  );
}

export default AddResource;
