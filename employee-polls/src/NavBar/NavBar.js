import { Link } from "react-router-dom";
import './NavBar.scss';

// Example learned from Implementing React + Redux in Udacity Course
const NavBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/leaderboard'>Leaderboard</Link>
                </li>
                <li>
                    <Link to='/add'>New Poll</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;