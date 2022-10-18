import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NavBar from '../NavBar/NavBar';

// I'm using the Material Table from https://mui.com/material-ui/react-table/ to display data for the leaderboard
function Leaderboard() {
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
                </Table>
            </TableContainer>

        </div>

    );
};

export default Leaderboard;