import { users, authedUser } from "./Users";
import questions from "./Questions";
import { combineReducers } from "redux";

export default combineReducers({
    users,
    authedUser,
    questions
});