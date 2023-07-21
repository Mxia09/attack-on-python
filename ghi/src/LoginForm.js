import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useToken, { AuthContext } from "@galvanize-inc/jwtdown-for-react";

export default function LoginForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useToken();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await login(email, password);
      // console.log("Logged in successfully!");
      // loginSuccess();
      // e.target.reset();
      // navigate("/play");
      await login(email, password);
      props.setShowToast(true);
      props.setToastVariant("success");
      props.setToastMessage("Login Successful");
    } catch (error) {
      // console.error("Error during login:", error);
      // logingError();
      props.setShowToast(true);
      props.setToastVariant("danger");
      props.setToastMessage("Login Unsuccessful");
    }
  };

  //   if (e.ok) {
  //     await login(email, password);
  //     props.setShowToast(true);
  //     props.setToastVariant("success");
  //     props.setToastMessage("Login Successful");
  //   } else {
  //     props.setShowToast(true);
  //     props.setToastVariant("danger");
  //     props.setToastMessage("Login Unsuccessful");
  //   }
  // };

  // const loginSuccess = props.setshowtoast("Wecome to Attack on Python!", {
  //   position: "bottom-right",
  //   autoClose: 2000,
  //   hideProgressBar: true,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "colored",
  // });

  // const logingError = () =>
  //   toast.error(
  //     "There was an error with your login/password; please try again or visit attoackonpython.com/forgot if you need to reset",
  //     {
  //       position: "bottom-right",
  //       utoClose: 2000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "colored",
  //     }
  //   );

  return (
    <div>
      <div style={{ position: "fixed", right: 0, width: 200 }}>
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
                  className="btn bg-info btn-block text-black font-bold rounded hover:bg-secondary focus:accent-outline"
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
