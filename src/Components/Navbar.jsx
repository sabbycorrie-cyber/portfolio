import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const linkClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li>
                    <NavLink to="/" className={linkClass} end>
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about" className={linkClass}>
                        About
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/skills" className={linkClass}>
                        Skills
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/portfolio" className={linkClass}>
                        Portfolio
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/services" className={linkClass}>
                        What I Do
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
