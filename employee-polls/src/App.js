import Login from './Login/Login'
import Dashboard from './Dashboard/Dashboard'
import Leaderboard from './Leaderboard/Leaderboard'
import PollCreator from './Poll/PollCreator'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Poll from './Poll/Poll';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { hanldeDataRetrieval } from './Actions/Shared';

function App(props) {

  useEffect(() => {
    props.dispatch(hanldeDataRetrieval());
  })

  return props.authedUser ? (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/leaderboard" element={<Leaderboard />}/>
        <Route path="/add" element={<PollCreator />} />
        <Route path="/questions/:question_id" element={<Poll />} />
      </Routes>
    </div>
  ): <Login />;
}

const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(App);
