import { NavLink } from "react-router-dom";
import logo from "./images/attack-on-python-logo.png";
import './darkMode.css'


function Nav(props) {

  const toggleTheme = () => {
  if (props.theme === 'light') {
    props.setTheme('dark');
  } else {
    props.setTheme('light');
  }
}

  return (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid text-right">
        <NavLink className="navbar-brand" to="/"><img src={logo} alt="Logo" style={{ width:' 70px',}}/></NavLink>
        <p className="text-light text-right ms-auto mb-2 mb-lg-0" style={{width: 100}} >Hello, User</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

<<<<<<< HEAD
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/play/">
                  Play
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login/">
                  Login
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup/">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/leaderboard/">
                  LeaderBoard
                </NavLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about/">
                  About Us
                </NavLink>
              </li>
=======
{/* Logged Out */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li className="nav-item"><NavLink className="nav-link" to="/about/">About Us</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li className="nav-item"><NavLink className="nav-link" to="/login/">Login</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li className="nav-item"><NavLink className="nav-link" to="/signup/">Signup</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <label className="toggle-switch" style={{left: 2, right:2, top:2, bottom:2}}>
                  <input type="checkbox" onChange={toggleTheme}/>
                  <span className="slider round"></span>
                  </label>
                </li>
>>>>>>> main
            </ul>

{/* Logged In */}
            {/* <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li className="nav-item"><NavLink className="nav-link" to="/play/">Play</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li className="nav-item"><NavLink className="nav-link" to="/leaderboards/">Leaderboards</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li className="nav-item"><NavLink className="nav-link" to="/about/">About Us</NavLink></li>
                <li><hr className="dropdown-divider"/></li>
                <li className="nav-item"><NavLink className="nav-link" to="/logout/">Logout</NavLink></li>
            </ul> */}

          </div>
        </div>

      </nav>
    </header>
  );
}

export default Nav;
