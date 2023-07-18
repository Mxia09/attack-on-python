import React, { useState, useEffect } from "react";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [created, setCreated] = useState(false);
  const [notCreated, setNotCreated] = useState(false);

  useEffect(() => {}, []);

  const handleName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPassword = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const handleSecurityQuestion = (event) => {
    const value = event.target.value;
    setSecurityQuestion(value);
  };

  const handleAnswer = (event) => {
    const value = event.target.value;
    setAnswer(value);
  };

  const signUpURL = "http://localhost:3000/api/signup/";
  const fetchConfig = () => ({
    method: "post",
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      securityQuestion: securityQuestion,
      answer: answer,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(signUpURL, fetchConfig());

    if (response.ok) {
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setSecurityQuestion("");
      setAnswer("");
      setCreated(true);
    } else if (response.status !== 200) {
      setNotCreated(true);
    }
  };

  let messageClasses = "alert alert-success d-none mb-0";
  let messageFailedClasses = "alert alert-danger d-none mb-0";
  if (created) {
    messageClasses = "alert alert-success mb-0";
  } else if (notCreated) {
    messageFailedClasses = "alert alert-danger mb-0";
  }

  return (
    <div className="row">
      <div className="offset-3 col-6" style={{padding: 50}}>
        <div className="shadow p-4 mt-4">
          <h1>Signup</h1>
          <form id="signup-form" onSubmit={handleSubmit}>
            <div className="form-floating mb-3 text-secondary">
              <input
                onChange={handleName}
                value={name}
                placeholder="Name"
                required
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-floating mb-3 text-secondary">
              <input
                onChange={handleEmail}
                value={email}
                placeholder="Email"
                required
                type="email"
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

            <div className="form-floating mb-3 text-secondary">
              <input
                onChange={handleConfirmPassword}
                value={confirmPassword}
                placeholder="Confirm Password"
                required
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="form-control"
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>

            <div className="form-floating mb-3 text-secondary">
              <input
                onChange={handleSecurityQuestion}
                value={securityQuestion}
                placeholder="Security Question"
                required
                type="text"
                name="securityQuestion"
                id="securityQuestion"
                className="form-control"
              />
              <label htmlFor="securityQuestion">Security Question</label>
            </div>

            <div className="form-floating mb-3 text-secondary">
              <input
                onChange={handleAnswer}
                value={answer}
                placeholder="Answer"
                required
                type="text"
                name="answer"
                id="answer"
                className="form-control"
              />
              <label htmlFor="answer">Answer</label>
            </div>

            <button type="submit" className="btn btn-primary">
              Signup
            </button>
            <div className={messageClasses} id="success-message">
              User signed up!
            </div>
            <div className={messageFailedClasses} id="unsuccessful-message">
              Unable to sign up new user, please try again.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
