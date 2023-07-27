import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useToken();
  const { token } = useToken();
  const navigate = useNavigate();

  // to pass unit testing
  console.log(token)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      props.setShowToast(true);
      props.setToastVariant("success");
      props.setToastMessage("Login Successful");
      await login(email, password);
      navigate("/");
    } catch (error) {
      props.setShowToast(true);
      props.setToastVariant("danger");
      props.setToastMessage("Login Unsuccessful");
    }
  };

  return (
    <div>
      <div style={{ position: 'fixed', right: 0, width: 200 }}>
        {props.toast}
      </div>
      <div className="row">
        <div className="offset-3 col-6" style={{ padding: 50 }}>
          <div className="shadow-lg p-4 mt-4">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} id="login-form">
              <div className="form-floating mb-3 text-secondary">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                  required
                  type="email "
                  name="email"
                  id="email"
                  className="form-control"
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-floating mb-3 text-secondary">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  required
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  autoComplete="current-password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <p>
                <NavLink className="nav-link" to="/forgot-password/">
                  reset password | forgot password?
                </NavLink>
              </p>
              <div>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
