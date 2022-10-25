import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NavBar from '../NavBar/NavBar';
import { connect } from "react-redux";
import QuestionCard from './QuestionCard';
import './Dashboard.scss';

// I'm using the Material Table from https://mui.com/material-ui/react-table/ to display data for the dashboard
function Dashboard({ answeredQuestions, unansweredQuestions }) {
    return (
        <div>
            <NavBar />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <h1>New Questions</h1>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="question-card">
                                {unansweredQuestions?.map((question) => <QuestionCard key={question.id} question={question} />)}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <h1>Done</h1>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="question-card">
                                {answeredQuestions?.map((question) => <QuestionCard key={question.id} question={question} />)}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>

        </div>

    );
};

const mapStateToProps = ({ questions, authedUser, users }) => {
    const questionIds = questions ? Object.keys(questions).sort(
        (a, b) => questions[b].timestamp - questions[a].timestamp
      ) : null;
    const allQuestions = questionIds.map(id => questions[id]);
    const answeredQuestions = allQuestions?.filter(question =>
        Object.keys(users[authedUser].answers).includes(question.id));
    const unansweredQuestions = allQuestions?.filter(question =>
        !Object.keys(users[authedUser].answers).includes(question.id));
    return { answeredQuestions, unansweredQuestions };
};

export default connect(mapStateToProps)(Dashboard);