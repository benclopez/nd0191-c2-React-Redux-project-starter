import { getUsers } from "../Utils/api";
import { retrieveUsers } from "./Users";

export function hanldeDataRetrieval() {
    return (dispatch) => {
        return getUsers().then(users => {
            dispatch(retrieveUsers(users));
        });
    };
}