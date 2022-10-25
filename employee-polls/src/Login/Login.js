import Button from '@mui/material/Button';
import { connect } from "react-redux";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import './Login.scss';
import { setAuthedUser } from "../Actions/Users";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Login({ dispatch, userList }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let authedUser = userList.find(user => (user.id === username && user.password === password));

        if (authedUser && authedUser !== undefined) {
            dispatch(setAuthedUser(authedUser.id));
            setError(false);
        }
        else {
            setError(true);
        }
    };

    return (
        <div className="polls-login">
            {error ? <Stack sx={{ width: '100%' }}>
                <Alert severity="error">Incorrect User/Password!</Alert>
            </Stack> : <></>}
            <h1>Employee Polls</h1>
            <h3>Login</h3>
            <div className="text-field">
                <TextField label="Username" variant="filled" value={username} onChange={handleUsernameChange} />
            </div>
            <div className="text-field">
                <TextField label="Password" variant="filled" type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <Button variant="contained" disabled={password === "" || username === ""} onClick={handleSubmit}>Submit</Button>
        </div>

    );
};

const mapStateToProps = ({ users }) => {
    const userIds = users ? Object.keys(users) : null;
    const userList = userIds?.map(id => users[id]);
    return { userList };
};

export default connect(mapStateToProps)(Login);