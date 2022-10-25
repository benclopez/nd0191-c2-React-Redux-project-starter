import { getInitialData } from "../Utils/api";
import { retrieveUsers } from "./Users";
import { getQuestions } from "./Questions";

export function hanldeDataRetrieval() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(retrieveUsers(users));
            dispatch(getQuestions(questions));
        });
    };
}