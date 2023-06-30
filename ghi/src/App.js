import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ErrorNotification from "./ErrorNotification";
import Nav from "./Nav";
import Mainpage from "./Mainpage";
import LoginForm from "./LoginForm";


function App() {
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
          <Route path="/login/" element={<LoginForm />} />
        </Routes>
      </div>
      </main>
    </BrowserRouter>
  );
}


export default App;
