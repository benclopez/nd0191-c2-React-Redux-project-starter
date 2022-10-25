import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from "react-redux";
import formatDate from '../Utils/helpers';

// I'm using the Material Card here from https://mui.com/material-ui/react-card/
function QuestionCard({ question }) {
    return (
        <Card sx={{ maxWidth: 250, margin: 2 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {question?.author}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {formatDate(question?.timestamp)}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/questions/${question.id}`}>
                    <Button variant="outlined">Show Poll</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default connect()(QuestionCard);