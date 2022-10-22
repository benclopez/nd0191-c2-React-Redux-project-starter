import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { connect } from "react-redux";
import './Leaderboard.scss';
import NavBar from '../NavBar/NavBar';

// I'm using the Material Table from https://mui.com/material-ui/react-table/ to display data for the leaderboard
function Leaderboard({ userList }) {
    return (
        <div>
            <NavBar />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                User's Name
                            </TableCell>
                            <TableCell>
                                Answered
                            </TableCell>
                            <TableCell>
                                Asked
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {userList.map((user) => (
                            <TableRow
                                key={user.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img className="leaderboard-image" src={user.avatarURL} alt={`Avatar of ${user.name}`}/>
                                    {user.name}
                                </TableCell>
                                <TableCell align="left">{Object.keys(user.answers).length}</TableCell>
                                <TableCell align="left">{user.questions.length}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>

    );
};

const mapStateToProps = ({ users }) => {
    const userIds = users ? Object.keys(users).sort(
        (a, b) => (Object.keys(users[b].answers).length + users[b].questions.length)
        - (Object.keys(users[a].answers).length + users[a].questions.length)
      ) : null;
    const userList = userIds?.map(id => users[id]);
    return { userList };
};
export default connect(mapStateToProps)(Leaderboard);