
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul style={{display: "flex", justifyContent:"space-around"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
