import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NavBar from '../NavBar/NavBar';
import { connect } from "react-redux";
import QuestionCard from './QuestionCard';
import Button from '@mui/material/Button';
import { useState } from "react";
import './Dashboard.scss';

// I'm using the Material Table from https://mui.com/material-ui/react-table/ to display data for the dashboard
function Dashboard({ answeredQuestions, unansweredQuestions }) {
    const [newQuestions, setNewQuestions] = useState(true);
    const [done, setDone] = useState(false);
    const [allQuestions, setAll] = useState(false);

    const setToggle = (e, toggleNew, toggleDone, toggleAll) => {
        e.preventDefault();
        setNewQuestions(toggleNew);
        setDone(toggleDone);
        setAll(toggleAll)
    };

    return (
        <div>
            <NavBar />
            <Button variant="outlined" onClick={e => setToggle(e, true, false, false)}>New Questions</Button>
            {' '}
            <Button variant="outlined" onClick={e => setToggle(e, false, true, false)}>Done</Button>
            {' '}
            <Button variant="outlined" onClick={e => setToggle(e, false, false, true)}>All</Button>
            {newQuestions || allQuestions ?
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
                </TableContainer> : ''}
            {done || allQuestions ?
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
                </TableContainer> : ''}
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