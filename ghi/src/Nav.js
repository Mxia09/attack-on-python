import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">Attack On Python</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
        <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">|||</NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/1/">Home</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/2/">Login</NavLink></li>
          </ul>
        </li>
        </ul>
      </div>
      </div>
    </nav>
    </header>
  )
}

export default Nav;
