import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './PollCreator.scss';
import NavBar from '../NavBar/NavBar';
import { useState } from "react";
import { handleSaveQuestion } from "../Actions/Questions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

function PollCreator({ dispatch, authedUser, users }) {
    const navigate = useNavigate();
    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");

    const handleOptionOneChange = (e) => {
        setOptionOne(e.target.value);
    };

    const handleOptionTwoChange = (e) => {
        setOptionTwo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleSaveQuestion({ optionOne, optionTwo, authedUser }, users));
        navigate("/");
    };

    return (
        <div data-testid="poll-creator">
            <NavBar />
            <h2>Would You Rather</h2>
            <div>Create Your Own Poll</div>
            <div className="question-text-field">
                First Option
                <TextField inputProps={{ "data-testid": "option-one-input" }} fullWidth id="filled-basic" value={optionOne} label="Option One" variant="filled" onChange={handleOptionOneChange} />
            </div>
            <div className="question-text-field-option-two">
                Second Option
                <TextField inputProps={{ "data-testid": "option-two-input" }} fullWidth id="filled-basic" value={optionTwo} label="Option Two" variant="filled" onChange={handleOptionTwoChange} />
            </div>
            <Button data-testid="submit-button" variant="contained" disabled={optionOne === "" || optionTwo === ""} onClick={handleSubmit}>Submit</Button>
        </div>

    );
};

const mapStateToProps = ({ authedUser, questions, users }) => {
    return { authedUser, questions, users };
};

export default connect(mapStateToProps)(PollCreator);