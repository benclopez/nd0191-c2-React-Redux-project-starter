import Button from '@mui/material/Button';
import './Poll.scss';
import NavBar from '../NavBar/NavBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Page404 from '../Page404/Page404';
import { handleSaveQuestionAnswer } from "../Actions/Questions";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };

    return ComponentWithRouterProp;
};

function Poll(props) {
    const handleQuestionAnswer = (e, answer) => {
        e.preventDefault();
        props.dispatch(
            handleSaveQuestionAnswer({
                authedUser: props.authedUser,
                qid: props.question.id,
                answer,
            }, props.users)
        );
    };

    return props.question ? (
        <div>
            <NavBar />
            <h2>Poll by {props.question.author}</h2>
            <img className="poll-image" src={props.avatar} alt={`Avatar of ${props.question.author}`} />
            <div>Would You Rather</div>
            <div className="polls-answer">
                <div className="poll-text-field" align="center">
                    <Card sx={{ maxWidth: 500 }} className={props.question.optionOne.votes.includes(props.authedUser) ? 'user-voted' : ''}>
                        <CardContent>
                            <Typography variant="body2">
                                {props.question.optionOne.text}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Total Votes: {props.countOptionOne.count}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {!isNaN(props.countOptionOne.percentage) ? props.countOptionOne.percentage : 0.00}{'% of votes'}
                            </Typography>
                        </CardContent>
                        <CardActions className="poll-answer-button">
                            <Button variant="outlined" onClick={e => handleQuestionAnswer(e, 'optionOne')}>Click</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="poll-text-field-option-two" align="center">
                    <Card sx={{ maxWidth: 500 }} className={props.question.optionTwo.votes.includes(props.authedUser) ? 'user-voted' : ''}>
                        <CardContent>
                            <Typography variant="body2">
                                {props.question.optionTwo.text}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                Total Votes: {props.countOptionTwo.count}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {!isNaN(props.countOptionTwo.percentage) ? props.countOptionTwo.percentage : 0.00}{'% of votes'}
                            </Typography>
                        </CardContent>
                        <CardActions className="poll-answer-button">
                            <Button variant="outlined" onClick={e => handleQuestionAnswer(e, 'optionTwo')}>Click</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>

    ) : <Page404 />;
};

const mapStateToProps = ({ questions, users, authedUser }, props) => {
    const question = questions[props.router.params.question_id];
    const countOptionOne = {
        count: question?.optionOne?.votes?.length,
        percentage: ((question?.optionOne?.votes?.length * 100) / (question?.optionOne?.votes?.length + question?.optionTwo?.votes?.length)).toFixed(2)
    };
    const countOptionTwo = {
        count: question?.optionTwo?.votes?.length,
        percentage: ((question?.optionTwo?.votes?.length * 100) / (question?.optionOne?.votes?.length + question?.optionTwo?.votes?.length)).toFixed(2)
    };
    const avatar = users[question?.author]?.avatarURL;
    return { question, avatar, authedUser, countOptionOne, countOptionTwo, users };
};

export default withRouter(connect(mapStateToProps)(Poll));