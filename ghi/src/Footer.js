import { NavLink } from 'react-router-dom';
import logo from './attack-on-python-logo.png';

function Footer() {
  return (
    <footer>
      <div>
        <img src={logo} alt="Logo" style={{ width: '100px' }} />
      </div>
      <h1>Hi</h1>
      {/* Add more footer content here */}
    </footer>
  );
}

export default Footer;