import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./styles.css";
// import "./app";

const handleRegister = (params = {}) => {
  let response;
  fetch("http://localhost:9000/register", {
    method: "POST",
    mode: "cors",
    cache: "default",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(params)
  }).then(res => res.text()).then(data => { response = data });

  return (response === "success");
}

export default function Login() {

  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = ({ target }) => {
    let name = target.name;
    let value = target.value;
    setRegister(prevState => ({ ...prevState, [name]: value }))
  };

  return (
    <>
      <div className="container1">
        <div className="forms-container1">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
            </form>
            <form className="sign-up-form" onSubmit={() => handleRegister(register)} >
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" name="username" onChange={handleChange} />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" name="email" onChange={handleChange} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" name="password" onChange={handleChange} />
              </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
          </div>
        </div>

        <div className="panels-container1">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                “A journey of a thousand miles begins with a single step.”{" "}
                <br />
                —Lao Tzu
              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={() => document.querySelector(".container1").classList.add("sign-up-mode")}>
                Sign up
              </button>
            </div>
            <img src="img/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                “A room without books is like a body without a soul.” <br />~
                Cicero
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={() => document.querySelector(".container1").classList.remove("sign-up-mode")}>
                Sign in
              </button>
            </div>
            <img src="img/register.svg" className="image" alt="" />
          </div>
        </div>
      </div>

      <script src="app.js"></script>
    </>
  );
}
