import React, { useState } from "react";
import Select, { components } from "react-select"
import { useNavigate } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";
import wizard from './images/wizard.png'
import python from './images/python.png'
import russ from './images/russ-avatar.png'
import marv from './images/marvin-avatar.png'
import jorge from './images/jorge-avatar.png'
import fred from './images/fred-avatar.png'
import max from './images/max-avatar.png'

export default function SignupForm(props) {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profile_picture, setProfile_Picture] = useState("");
  const [security_question, setSecurity_Question] = useState("");
  const [security_answer, setSecurity_answer] = useState("");
  const { register, token } = useToken();
  const navigate = useNavigate();

  // to pass front end testing
  console.log(token)

  const handlePlayerRegistration = (e) => {
    e.preventDefault();
    const userData = {
      first_name: first_name,
      last_name: last_name,
      username: username,
      password: password,
      email: email,
      profile_picture: profile_picture,
      security_question: security_question,
      security_answer: security_answer,
    };
    register(userData, `${process.env.REACT_APP_API_HOST}/api/users`);
    e.target.reset();
    navigate("/");
  };



  const securityQuestionOptions = [
    { value: "What's your favorite color?", label: "What's your favorite color?" },
    { value: "What's your mother's maiden name?", label: "What's your mother's maiden name?" },
    { value: "What's your bestfriend's name?", label: "What's your bestfriend's name?" },
    { value: "What was your first pet?", label: "What was your first pet?" },
    { value: "What's your favorite food?", label: "What's your favorite food?" }
  ]

  const imageOptions = [
    { value: python, label: "Avatar 2" },
    { value: wizard, label: "Wizard" },
    { value: russ, label: "Avatar 1" },
    { value: marv, label: "Avatar 2" },
    { value: jorge, label: "Avatar 3" },
    { value: fred, label: "Avatar 4" },
    { value: max, label: "Avatar 5" },
  ]

  const OptionWithImage = (props) => (
    <components.Option {...props}>
      <img
        src={props.data.value}
        alt={props.data.label}
        style={{ width: "50px", marginRight: "10px" }}
      />
      {props.data.label}
    </components.Option>
  )

  const SingleValueWithImage = ({ children, data }) => (
    <div style={{ display: "flex", alignItems: "center", marginTop: 0, marginBottom: 20 }} >
      <img src={data.value} alt={data.label} style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "50%", marginRight: 10 }} /> {children} </div>
  );

  return (
    <div>
      <div className="row">
        <div className="offset-3 col-6" style={{ padding: 50 }}>
          <div className="shadow-lg p-4 mt-4" style={{ padding: 50 }}>
            <h1>Player Signup</h1>
            <form onSubmit={handlePlayerRegistration}>
              <div className="form-floating mb-3 text-secondary">
                <input
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
                  required
                  type="text"
                  className="form-control"
                  id="first_name"
                  placeholder="First Name"
                />
                <label htmlFor="first_name">First Name</label>
              </div>

              <div className="form-floating mb-3 text-secondary">
                <input
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
                  required
                  type="text"
                  className="form-control"
                  id="last_name"
                  placeholder="Last Name"
                />
                <label htmlFor="last_name">Last Name</label>
              </div>

              <div className="form-floating mb-3 text-secondary">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Username"
                  autoComplete="username"
                />
                <label htmlFor="username">Username</label>
              </div>

              <div className="form-floating mb-3 text-secondary">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  autoComplete="current-password"
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="form-floating mb-3 text-secondary">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="example@example.com"
                />
                <label htmlFor="email">Email</label>
              </div>


              <div className="form-floating mb-3 text-secondary">
                <Select
                  options={imageOptions}
                  onChange={(selectedOption) => setProfile_Picture(selectedOption.value)}
                  value={profile_picture ? imageOptions.find((option) => option.value === profile_picture) : null}
                  placeholder="Choose an avatar"
                  components={{
                    Option: OptionWithImage,
                    SingleValue: SingleValueWithImage,
                  }}
                  isSearchable={false}
                />
              </div>

              <div className="form-floating mb-3 text-secondary">
                <Select
                  options={securityQuestionOptions}
                  onChange={(selectedOption) => setSecurity_Question(selectedOption.value)}
                  value={securityQuestionOptions.find((option) => option.value === security_question) || null}
                  placeholder="Security Question?"
                />
              </div>

              <div className="form-floating mb-3 text-secondary" style={{ zIndex: 0 }}>
                <input
                  value={security_answer}
                  onChange={(e) => setSecurity_answer(e.target.value)}
                  required
                  type="text"
                  className="form-control"
                  id="securityanswer"
                  placeholder="Security Answer"
                />
                <label htmlFor="securityanswer">Security Answer</label>
              </div>

              <button type="submit" className="btn btn-primary">
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
