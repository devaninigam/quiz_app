import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
function Login() {
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

  // get user
  const CheckData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3000/user");
      const FilterData = res.data.filter(
        (item) =>
          item.username === loginInputData.username &&
          item.password === loginInputData.password
      );

      if (FilterData.length === 0) {
        alert("Add Proper data");
      } else {
        // Set cookie with the username
        Cookies.set("id", FilterData[0].id);
        Cookies.set("username", FilterData[0].username);
        location.reload("/");
      }
      console.log(FilterData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Skip Option for quiz
  const Skip = () => {
    Cookies.set("id", 0);
    Cookies.set("username", "Skip");
    location.reload("/");
  }

  return (
    <>
      <div className="Login">
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
        <form onSubmit={CheckData}>
          <h3>Login</h3>
          <label className="text-start" htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            onChange={(e) => InputHandlar(e)}
          />
          <label className="text-start" htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            onChange={(e) => InputHandlar(e)}
          />
          <input type="submit" className="submit" value={"LogIn"} />
          <div className="social ">
            <div className="mx-2 py-2 cursor-pointer">
              <Link className="Link" to={"/register"}>
                Register
              </Link>
            </div>
            <div className="mx-2 py-2 cursor-pointer" onClick={Skip}>
              Skip
            </div>
          </div>
        </form >
      </div >
    </>
  );
}

export default Login;
