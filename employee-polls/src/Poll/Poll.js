import Button from '@mui/material/Button';
import './PollCreator.scss';
import NavBar from '../NavBar/NavBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Poll() {
    return (
        <div class="polls-login">
            <NavBar />
            <h2>Poll by</h2>
            <div>Would You Rather</div>
            <div className="text-field">
                <Card sx={{ maxWidth: 250 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                            <Button variant="outlined">Click</Button>
                    </CardActions>
                </Card>
            </div>
            <div className="text-field">
                <Card sx={{ maxWidth: 250 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            adjective
                        </Typography>
                        <Typography variant="body2">
                            well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                            <Button variant="outlined">Click</Button>
                    </CardActions>
                </Card>
            </div>
        </div>

    );
};

export default Poll;