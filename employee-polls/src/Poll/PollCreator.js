import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './PollCreator.scss';
import NavBar from '../NavBar/NavBar';

function PollCreator() {
    return (
        <div class="polls-login">
            <NavBar/>
            <h2>Would You Rather</h2>
            <div>Create Your Own Poll</div>
            <div className="text-field">
                First Option
                <TextField fullWidth id="filled-basic" label="Option One" variant="filled" />
            </div>
            <div className="text-field">
                Second Option
                <TextField fullWidth id="filled-basic" label="Option Two" variant="filled" />
            </div>
            <Button variant="contained">Submit</Button>
        </div>

    );
};

export default PollCreator;