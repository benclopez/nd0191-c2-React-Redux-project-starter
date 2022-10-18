import Button from '@mui/material/Button';
import { connect } from "react-redux";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import './Login.scss';

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.users.forEach(user => {
            if (user.id === username && user.password === password) {
                return (console.log("booyah!"));
            }
        })
    };

    return (
        <div className="polls-login">
            <h1>Employee Polls</h1>
            <h3>Login</h3>
            <div className="text-field">
                <TextField id="filled-basic" label="Username" variant="filled" value={username} onChange={handleUsernameChange} />
            </div>
            <div className="text-field">
                <TextField id="filled-basic" label="Password" variant="filled" value={password} onChange={handlePasswordChange} />
            </div>
            <Button variant="contained" disabled={password === "" || username === ""} onClick={handleSubmit}>Submit</Button>
        </div>

    );
};

const mapStateToProps = ({ Users }) => {
    const userIds = Users && Users?.users ? Object.keys(Users?.users) : null; // fix this Users.user
    const users = userIds?.map(id => Users.users[id]);
    console.log(users);
    return {users};
};

export default connect(mapStateToProps)(Login);