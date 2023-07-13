import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toast, ToastContainer } from "react-bootstrap";
// import ErrorNotification from "./ErrorNotification";
import Nav from "./Nav";
import Mainpage from "./Mainpage";
import LoginForm from "./LoginForm";

//   const [launchInfo, setLaunchInfo] = useState([]);
//   const [error, setError] = useState(null);

import Play from "./Play";
import Play from "./Play";
import About from "./About";
import ForgotPasswordForm from "./ForgotPassword";

function App(props) {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("");
  const toast = (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-body-secondary position-relative rounded-3"
        style={{ top: 100, right: 17 }}
      >
        <div
          className="toast-container p-3"
          id="toastPlacement"
          data-original-class="toast-container p-3"
          style={{ width: "1000px" }}
        >
          <ToastContainer
            className="p-3"
            position={"bottom-start"}
            containerPosition={""}
            style={{ zIndex: 1 }}
          >
            <Toast
              onClose={() => setShowToast(false)}
              show={showToast}
              delay={12500}
              autohide
              animation={true}
              className={`bg-${toastVariant} text-white align-items-center`}
            >
              <Toast.Header>
                <strong className={`me-auto ${toastVariant}`}>
                  Notification
                </strong>
              </Toast.Header>
              <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </div>
    </>
  );
  //   const [launchInfo, setLaunchInfo] = useState([]);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     async function getData() {
  //       let url = `${process.env.REACT_APP_API_HOST}/api/launch-details`;
  //       console.log("fastapi url: ", url);
  //       let response = await fetch(url);
  //       console.log("------- hello? -------");
  //       let data = await response.json();

  //       if (response.ok) {
  //         console.log("got launch data!");
  //         setLaunchInfo(data.launch_details);
  //       } else {
  //         console.log("drat! something happened");
  //         setError(data.message);
  //       }
  //     }
  //     getData();
  //   }, []);

  return (
    <BrowserRouter>
      <Nav />
      <main>
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route
              path="/login"
              element={
                <LoginForm
                  toast={toast}
                  showToast={showToast}
                  setShowToast={setShowToast}
                  toastMessage={toastMessage}
                  setToastMessage={setToastMessage}
                  toastVariant={toastVariant}
                  setToastVariant={setToastVariant}
                />
              }
            />
            <Route path="/play" element={<Play />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
