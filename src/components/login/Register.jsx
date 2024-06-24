import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
function Register() {
  // login page data get in State
  const [loginInputData, setLoginInputData] = useState({});

  // Input Data get And set in state

  const InputHandlar = (e) => {
    const { name, value } = e.target;
    setLoginInputData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  // Register User
  const CheckData = async (e) => {
    e.preventDefault();
    try {
      if (loginInputData.password === loginInputData.confirmpassword ) {
        const res = await axios.post("http://localhost:3000/user", loginInputData)
        alert(res.data.username)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }; 
 

  return (
    <>
      <div className="Login">
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
        <form onSubmit={CheckData}>
          <h3>Register</h3>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            onChange={(e) => InputHandlar(e)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={(e) => InputHandlar(e)}
          />
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmpassword"
            name="confirmpassword"
            onChange={(e) => InputHandlar(e)}
          />
          <input type="submit" className="submit" value={"Register"} />
          <span className="mt-3">Have already an account ? <b><Link to={'/login'} className="colorText"> Login here</Link></b> </span>
        </form >
      </div >
    </>
  );
}

export default Register;
