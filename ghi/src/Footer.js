import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './images/attack-on-python-logo.png'

function Footer() {
  return (
  <footer className="bg-dark text-center text-lg-start">
    <div className="container p-3 text-left">
      <div className="row">

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0 text-light">Account</h5>
              <ul className="list-unstyled mb-0 text-light">
                <li><NavLink className="nav-link" to="/login/" >Login</NavLink></li>
                <li><NavLink className="nav-link" to="/signup/">Signup</NavLink></li>
              </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0 text-light">Game</h5>
              <ul className="list-unstyled mb-0 text-light">
                <li><NavLink className="nav-link" to="/leaderboards/">Leaderboards</NavLink></li>
                <li><NavLink className="nav-link" to="/my-stats/">My Stats</NavLink></li>
                <li><NavLink className="nav-link" to="/play/">Play</NavLink></li>
              </ul>
        </div>

        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0 text-light">About</h5>
              <ul className="list-unstyled mb-0 text-light">
                <li><NavLink className="nav-link" to="/about/">About Us</NavLink></li>
                <li><NavLink className="nav-link" to="/about/">Meet The Team</NavLink></li>
              </ul>
        </div>


        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-0 text-light">Contact Us</h5>

          <ul className="list-unstyled text-light">
            <li>
              Help@AttackOnPython.com
            </li>
            <li>
              (123) 456-7890
            </li>
          </ul>
        </div>

      </div>

    </div>


    <div className="text-center p-2 text-secondary" style={{padding: 50}}>
      <p>2023 Attack on Python ©
        <NavLink className="nav-link" to="http://localhost:3000/">AttackOnPython.com</NavLink>
        <img src={logo} style={{width:30}} alt="logo" />
      </p>
    </div>

  </footer>
  )
}

export default Footer;