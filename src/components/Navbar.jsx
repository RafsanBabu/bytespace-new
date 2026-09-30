import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar container">
      <Link to="/" className="logo">
        <span className="logo-mark">b</span> ByteSpace
      </Link>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/creator">Creators</NavLink>
      </div>
      <div className="nav-right">
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Join Us</Link>
      </div>
    </nav>
  );
}