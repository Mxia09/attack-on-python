import React, { useState } from "react";
// import useToken from "@galvanize-inc/jwtdown-for-react";
// import { useNavigate } from "react-router-dom";

export default function SignupForm(props) {
  return (
    <div>
      <h1>Player Signup</h1>

      <div className="shadow p-4 mt-4 offset-3 col-6"></div>
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
        type="text"
        className="form-control"
        id="name"
        placeholder="Name"
      />

      <div className="shadow p-4 mt-4"></div>
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="example@example.com"
      />

      <div className="shadow p-4 mt-4"></div>
      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="password"
      />
    </div>
  );
}

// const SignupForm = (props) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [securityQuestion, setSecurityQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const { register } = useToken();
//   const navigate = useNavigate();

//   const handleRegistration = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     const accountData = {
//       name: name,
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword,
//       securityQuestion: securityQuestion,
//       answer: answer,
//     };
//     register(
//       accountData,
//       `${process.env.REACT_APP_AOP_USER_SERVICE_API_HOST}/api/users`
//     );
//     e.target.reset();
//     navigate("/play");
//   };

//   return (
//     <main>
//       <div className="row">
//         <div className="offset-md-3 col-md-6">
//           <div className="card mb-4">
//             <div className="card-body">
//               <h1 className="card-title">Player Signup</h1>
//               <form onSubmit={(e) => handleRegistration(e)}>
//                 <div className="mb-3">
//                   <label className="form-label">Name</label>
//                   <input
//                     id="name"
//                     name="name"
//                     type="text"
//                     className="form-control"
//                     onChange={(e) => {
//                       setName(e.target.value);
//                     }}
//                     autoComplete="first_name"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Email</label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     className="form-control"
//                     onChange={(e) => {
//                       setEmail(e.target.value);
//                     }}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label">Password</label>
//                   <input
//                     name="password"
//                     type="password"
//                     className="form-control"
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                     }}
//                     autoComplete="password"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label">
//                     Confirm Password
//                   </label>
//                   <input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type="password"
//                     className="form-control"
//                     onChange={(e) => {
//                       setConfirmPassword(e.target.value);
//                     }}
//                     required
//                     autoComplete="confirmPassword"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="password" className="form-label">
//                     securityQuestion
//                   </label>
//                   <input
//                     id="securityQuestion"
//                     name="securityQuestion"
//                     type="text"
//                     className="form-control"
//                     onChange={(e) => {
//                       setSecurityQuestion(e.target.value);
//                     }}
//                     required
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="confirmPassword" className="form-label">
//                     Answer
//                   </label>
//                   <input
//                     id="answer"
//                     name="answer"
//                     type="text"
//                     className="form-control"
//                     onChange={(e) => {
//                       setAnswer(e.target.value);
//                     }}
//                     required
//                   />
//                 </div>
//                 <div className="d-grid">
//                   <button className="btn btn-primary" type="submit">
//                     Sign Up
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default SignupForm;
