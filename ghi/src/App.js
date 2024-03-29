import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toast, ToastContainer } from "react-bootstrap";
// import ErrorNotification from "./ErrorNotification";
import Nav from "./Nav";
import Mainpage from "./Mainpage";
import LoginForm from "./LoginForm";
import { AuthProvider } from "@galvanize-inc/jwtdown-for-react";
import SignupForm from "./SignupForm";

//   const [launchInfo, setLaunchInfo] = useState([]);
//   const [error, setError] = useState(null);
import { Play } from "./components";
import About from "./About";
import ForgotPasswordForm from "./ForgotPassword";
import Footer from "./Footer";
import Leaderboards from "./Leaderboards";
import TestimonialForm from "./TestimonialForm";
import UserPage from "./UserPage";

function App() {
  const [theme, setTheme] = useState("light");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("");
  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, "");
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
    <div className={`App ${theme}`}>
      <BrowserRouter basename={basename}>
        <AuthProvider baseUrl={process.env.REACT_APP_API_HOST}>
          <Nav theme={theme} setTheme={setTheme} />
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
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/id" element={<UserPage />} />
                <Route
                  path="/forgot-password"
                  element={<ForgotPasswordForm />}
                />
                <Route path="/leaderboards"
                  element={<Leaderboards
                    toast={toast}
                    showToast={showToast}
                    setShowToast={setShowToast}
                    toastMessage={toastMessage}
                    setToastMessage={setToastMessage}
                    toastVariant={toastVariant}
                    setToastVariant={setToastVariant} />}
                />
                <Route path="/create-testimonial"
                  element={<TestimonialForm
                    toast={toast}
                    showToast={showToast}
                    setShowToast={setShowToast}
                    toastMessage={toastMessage}
                    setToastMessage={setToastMessage}
                    toastVariant={toastVariant}
                    setToastVariant={setToastVariant} />}
                />
              </Routes>
            </div>
          </main>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
