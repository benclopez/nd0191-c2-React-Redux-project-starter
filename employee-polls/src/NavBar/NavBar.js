import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import './NavBar.scss';
import { connect } from "react-redux";
import { setAuthedUser } from "../Actions/Users";

// Example learned from Implementing React + Redux in Udacity Course
const NavBar = ({ dispatch, authedUser }) => {
    const navigate = useNavigate();

    const setLogout = (e) => {
        e.preventDefault();
        dispatch(setAuthedUser(""));
        navigate(`/`);
    }

    return (
        <div>
            <nav className="nav-bar">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/leaderboard'>Leaderboard</Link>
                    </li>
                    <li>
                        <Link to='/add'>New Poll</Link>
                    </li>
                </ul>
                <ul>
                    <div className="username">
                        Logged In: {authedUser}
                    </div>
                    <Button className="logout-button" variant="outlined" onClick={setLogout}>Logout</Button>
                </ul>
            </nav>
        </div>
    );
};

const mapStateToProps = ({ authedUser }) => {
    return { authedUser };
};

export default connect(mapStateToProps)(NavBar);