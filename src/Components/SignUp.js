import React from "react";
import { useState, useEffect } from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SignUp() {
  const dataIsCorrect = (values) => {
    if (values.password !== values.repassword) {
      return false;
    }
    if (
      values.username !== "" &&
      values.email !== "" &&
      values.password !== ""
    ) {
      return true;
    }

    return false;
  };
  const navigate = useNavigate();
  //I have just used it outside to make the code clean I could have put it inside the useState as well
  const initialValues = {
    username: "",
    email: "",
    password: "",
    repassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  //this is for managing the form errors
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    //here inside the name I will get either username, email or password and inside value I will get the corresponding values
    const { name, value } = e.target;
    //when I used the name inside the setFormValues without any square bracket then it will put name as a key in the object formValues and the corresponding value but I want to put the values inside the username, email or password so in order to get this value I will use the square bracket which take the variable name as key and inside name I am getting either username, email or password that is the reason I am using the square bracket while updating the values
    // setFormValues({ ...formValues, name: value });
    //this is the correct way now name is a varaible not the direct key and inside name I will get the either username, email or password
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //here all the erros which I have got I am going to put it inside the formErrors and form their I will validate the user input values
    setFormErrors(validate(formValues));
    //whenever somenone clicks on the submit the the value of isSubmit will become true
    setIsSubmit(true);
    if (formValues.password !== formValues.repassword) {
      alert("re entered password is not matching");
    }
    if (dataIsCorrect(formValues)) {
      const userInfoToAdd = {
        ...formValues,
      };
      axios.post(
        "https://repulsive-leotard-fly.cyclic.app/registeruser",
        userInfoToAdd
      );
      navigate("/login");
    }
  };
  //here I am using the useEffect to check if the errors are present in the form field or not
  useEffect(() => {
    //we can get the keys of the object using object.keys method
    console.log(formErrors);
    //this will only work if there are no errors in the formerror object
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("form values got printed", formValues);
    }
    // this is used to diable the required values in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);
  //this function is for the validation it will take all the form values which we have entered from the input field
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
    <div className="signUpContainer">
      <div className="signUpHere">Create Admin Account</div>

      <form onSubmit={handleSubmit}>
        <input
          id="email"
          type="text"
          name="username"
          placeholder="Full Name"
          value={formValues.username}
          onChange={handleChange}
        />
        <p
          style={{
            color: "red",
            fontSize: "0.8rem",
            textAlign: "left",
            paddingLeft: "0.9rem",
          }}
        >
          {formErrors.username}
        </p>
        <br />
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
        <p
          style={{
            color: "red",
            fontSize: "0.8rem",
            textAlign: "left",
            paddingLeft: "0.9rem",
          }}
        >
          {formErrors.email}
        </p>
        <br />

        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
        <p
          style={{
            color: "red",
            fontSize: "0.8rem",
            textAlign: "left",
            paddingLeft: "0.9rem",
          }}
        >
          {formErrors.password}
        </p>
        <br />
        <input
          id="repassword"
          type="password"
          name="repassword"
          placeholder="Re-enter Password"
          value={formValues.repassword}
          onChange={handleChange}
          style={{ marginBottom: "1.2rem" }}
        />
        {/* <p style={{ color: "red" }}>{formErrors.password}</p>
        <br /> */}
        <button type="submit">Register</button>
      </form>
      <p className="footerdata">
        By Registering you confirm that you accept our
        <span style={{ color: "orange" }}> Terms of Use</span> and{" "}
        <span style={{ color: "orange" }}> Privacy Policy</span>
      </p>
      <p className="alreadyHaveAccount">
        Already have an account?{" "}
        <NavLink to="/login" style={{ color: "rgb(27, 3, 3)" }}>
          Login here
        </NavLink>
      </p>
    </div>
  );
}

export default SignUp;
