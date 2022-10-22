export const GET_USERS = "GET_USERS";
export const SET_AUTHED_USER = "SET_AUTHED_USER"
export const SAVE_USER = "SAVE_USER"

export function retrieveUsers(users) {
    return {
        type: GET_USERS,
        users
    };
}

// Setting up Auth Users from Implementing React Plus Redux lesson
export function setAuthedUser(id) {
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function saveUsers(users) {
    return {
        type: SAVE_USER,
        users
    };
}