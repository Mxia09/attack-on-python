import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.email = email;
    data.password = password;

    const loginUrl = "http://localhost:3000/api/login/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(loginUrl, fetchConfig);
    if (response.ok) {
      props.setShowToast(true);
      props.setToastVariant("success");
      props.setToastMessage(`Login Successful`);

      setEmail("");
      setPassword("");
    } else {
      props.setShowToast(true);
      props.setToastVariant("danger");
      props.setToastMessage("Login Unsuccessful");
    }
  };

  return (
    <div>
      <div className="row">
        <div className="offset-3 col-6" style={{ padding: 50 }}>
          <div className="shadow-lg p-4 mt-4">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} id="login-form">
              <div className="form-floating mb-3 text-secondary">
                <input
                  onChange={handleEmail}
                  value={email}
                  placeholder="Email"
                  required
                  type="string"
                  name="email"
                  id="email"
                  className="form-control"
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-floating mb-3 text-secondary">
                <input
                  onChange={handlePassword}
                  value={password}
                  placeholder="Password"
                  required
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
                <label htmlFor="password">Password</label>
              </div>
              <p>
                <NavLink className="nav-link" to="/forgot-password/">
                  reset password | forgot password?
                </NavLink>
              </p>
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
          {props.toast}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
