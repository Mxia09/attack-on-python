import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "@galvanize-inc/jwtdown-for-react";

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
    navigate("/play");
  };

  return (
    <div>
      <h1>Player Signup</h1>
      <form onSubmit={handlePlayerRegistration}>
        <div className="shadow p-4 mt-4 offset-3 col-6"></div>
        <label htmlFor="first_name" className="form-label">
          First Name
        </label>
        <input
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
          required
          type="text"
          className="form-control"
          id="first_name"
          placeholder="First Name"
        />

        <div className="shadow p-4 mt-4"></div>
        <label htmlFor="last_name" className="form-label">
          Last Name
        </label>
        <input
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}
          required
          type="text"
          className="form-control"
          id="last_name"
          placeholder="Last Name"
        />

        <div className="shadow p-4 mt-4"></div>
        <label htmlFor="password" className="form-label">
          Username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          type="test"
          className="form-control"
          id="username"
          placeholder="Username"
        />

        <div className="shadow p-4 mt-4"></div>
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          className="form-control"
          id="password"
          placeholder="password"
        />

        <div className="shadow p-4 mt-4"></div>
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
          className="form-control"
          id="email"
          placeholder="example@example.com"
        />

        <div className="shadow p-4 mt-4"></div>
        <label htmlFor="securityquestion" className="form-label">
          Profile Pic
        </label>
        <input
          value={profile_picture}
          onChange={(e) => setProfile_Picture(e.target.value)}
          type="url"
          className="form-control"
          id="profile_picture"
          placeholder="url"
        />

        <div className="shadow p-4 mt-4"></div>
        <label htmlFor="securityquestion" className="form-label">
          Security Question
        </label>
        <input
          value={security_question}
          onChange={(e) => setSecurity_Question(e.target.value)}
          required
          type="text"
          className="form-control"
          id="securityquestion"
          placeholder="Security Question"
        />

        <div className="shadow p-4 mt-4"></div>
        <label htmlFor="securityanswer" className="form-label">
          Security Answer
        </label>
        <input
          value={security_answer}
          onChange={(e) => setSecurity_answer(e.target.value)}
          required
          type="text"
          className="form-control"
          id="securityanswer"
          placeholder="Security Answer"
        />
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
}
