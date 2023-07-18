import React, { useState } from "react";
import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";
import { useNavigate } from "react-router-dom";

function BootstrapInput(props) {
  const { id, placeholder, labelText, value, onChange, type } = props;

  return (
    <div className="offset-3 col-6">
      {/* <div className="shadow p-4 mt-4"> */}
      <label htmlFor={id} className="form-label">
        {labelText}
      </label>
      <input
        value={value}
        onChange={onChange}
        required
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
      />
      {/* </div> */}
    </div>
  );
}

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = {};
  //   data.name = name;
  //   data.email = setEmail;
  //   data.password = password;
  //   data.confirmPassword = confirmPassword;
  //   data.securityQuestion = securityQuestion;
  //   data.answer = answer;
  //   const url = `${process.env.REACT_APP_AOP_USER_SERVICE_API_HOST}/api/users`;
  //   const fetchConfig = {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   const response = await fetch(url, fetchConfig);
  //   if (response.ok) {
  //     await response.json();
  //     try {
  //       await login(username, password);
  //       setName("");
  //       setEmail("");
  //       setPassword("");
  //       setConfirmPassword("");
  //       setSecurityQuestion("");
  //       setAnswer("");
  //       navigate("/play");
  //     } catch (error) {
  //       console.error("Error logging in:", error);
  //     }
  //   } else {
  //     console.error("Unable to create new account; Please try again");
  //   }
  // };

  return (
    <>
      <h1>Player Signup</h1>
      <form>
        <BootstrapInput
          id="name"
          placeholder="Name"
          labelText="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <BootstrapInput
          id="email"
          placeholder="example@example.com"
          labelText="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <BootstrapInput
          id="password"
          placeholder="Password"
          labelText="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <BootstrapInput
          id="confirmPassword"
          placeholder="Confirm your password"
          labelText="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
        <BootstrapInput
          id="securityQuestion"
          placeholder="Secuity Question"
          labelText="Security Question"
          value={securityQuestion}
          onChange={(e) => setSecurityQuestion(e.target.value)}
          type="password"
        />
        <BootstrapInput
          id="answer"
          placeholder="Answer"
          labelText="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          type="text"
        />
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </>
  );
}

{
  /* export default function SignupForm() {
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

  const signUpURL = `${process.env.REACT_APP_AOP_USER_SERVICE_API_HOST}/api/users`;
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
<<<<<<< HEAD

=======
      <div className="offset-3 col-6" style={{padding: 50}}>
        <div className="shadow p-4 mt-4">
>>>>>>> main
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
} */
}
