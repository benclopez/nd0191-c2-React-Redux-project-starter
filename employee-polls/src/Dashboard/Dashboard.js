import Table from '@mui/material/Table';
import { Link } from "react-router-dom";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import NavBar from '../NavBar/NavBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// I'm using the Material Table from https://mui.com/material-ui/react-table/ to display data for the leaderboard
function Dashboard() {
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
                            <TableCell>
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
                                        <Link to='/poll'>
                                            <Button variant="outlined">Show Poll</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
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
                            <TableCell>
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
                                        <Link to='/poll'>
                                            <Button variant="outlined">Show Poll</Button>
                                        </Link>
                                    </CardActions>
                                </Card>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>

        </div>

    );
};

export default Dashboard;