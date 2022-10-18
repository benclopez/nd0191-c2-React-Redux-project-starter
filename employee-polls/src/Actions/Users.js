export const GET_USERS = "GET_USERS";

export function retrieveUsers(users) {
    return {
        type: GET_USERS,
        users
    };
}