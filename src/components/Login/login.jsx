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
  }).then(res => res.text()).then(data => { 
    response = data;
    console.log(response);
    if(response.success === "true") {
      window.location.href = "/success";
    } else {
      window.location.href = "/fail";
    }
  });

  // return (response === "success");
};

const handleLogin = (params = {}) => {
  let response;
  fetch("http://localhost:9000/login", {
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
  }).then(res => res.json()).then(data => { 
    response = data;
    console.log(response);
    if(response.success) {
      window.location.href = "/success";
    } else {
      window.location.href = "/fail";
    }
  
  });
}

export default function Login() {

  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [login, setLogin] = useState({
    username: "",
    password: ""
  })

  const handleChange = ({ target }) => {
    let name = target.name;
    let value = target.value;
    setRegister(prevState => ({ ...prevState, [name]: value }))
  };

  const handleChangeLogin = ({target}) => {
    setLogin(prevState => ({ ...prevState, [target.name]: target.value }))
  }

  return (
    <>
      <div className="container1">
        <div className="forms-container1">
          <div className="signin-signup">
            <form className="sign-in-form" onSubmit={(event) => { event.preventDefault(); handleLogin(login)}} >
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" name="username" onChange={handleChangeLogin} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" name="password" onChange={handleChangeLogin} />
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
    </>
  );
}
