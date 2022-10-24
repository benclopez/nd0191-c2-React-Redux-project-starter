export const GET_USERS = "GET_USERS";
export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const SAVE_ANSWER_USER = "SAVE_ANSWER_USER";
export const SAVE_QUESTION_USER = "SAVE_QUESTION_USER";

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

export function saveUsers(users, question) {
    users[question.author].questions.push(question.id);

    return {
        type: SAVE_QUESTION_USER,
        users
    };
}

export function saveUserAnswer(users, userAnswer) {
    const optionCurrentlySelected = userAnswer.qid in users[userAnswer.authedUser].answers ?
        users[userAnswer.authedUser].answers[userAnswer.qid] : null;

    if (userAnswer.qid in users[userAnswer.authedUser].answers) {
        delete users[userAnswer.authedUser].answers[userAnswer.qid];
    }

    if (userAnswer.answer !== optionCurrentlySelected) {
        users[userAnswer.authedUser].answers[userAnswer.qid] = userAnswer.answer;
    }

    return {
        type: SAVE_ANSWER_USER,
        users
    };
}