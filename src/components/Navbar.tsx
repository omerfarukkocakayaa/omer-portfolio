import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <nav aria-label="Main navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;