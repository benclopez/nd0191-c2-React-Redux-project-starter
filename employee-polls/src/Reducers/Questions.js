import { GET_QUESTIONS, SAVE_QUESTION, SAVE_QUESTION_ANSWER } from "../Actions/Questions";


export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };
        case SAVE_QUESTION_ANSWER:
            if (action.answer === "optionOne") {
                if (state[action.qid].optionOne.votes.includes(action.authedUser)) {
                    const optionIndex = state[action.qid].optionOne.votes.indexOf(action.authedUser);
                    state[action.qid].optionOne.votes.splice(optionIndex, 1)
                }
                else if (state[action.qid].optionTwo.votes.includes(action.authedUser)) {
                    state[action.qid].optionOne.votes.push(action.authedUser);
                    const optionIndex = state[action.qid].optionTwo.votes.indexOf(action.authedUser);
                    state[action.qid].optionTwo.votes.splice(optionIndex, 1)
                }
                else {
                    state[action.qid].optionOne.votes.push(action.authedUser);
                    state[action.qid].optionTwo.votes.filter(vote => vote !== action.authedUser);
                }
            }
            else if (action.answer === "optionTwo") {
                if (state[action.qid].optionTwo.votes.includes(action.authedUser)) {
                    const optionIndex = state[action.qid].optionTwo.votes.indexOf(action.authedUser);
                    state[action.qid].optionTwo.votes.splice(optionIndex, 1)
                }
                else if (state[action.qid].optionOne.votes.includes(action.authedUser)) {
                    state[action.qid].optionTwo.votes.push(action.authedUser);
                    const optionIndex = state[action.qid].optionOne.votes.indexOf(action.authedUser);
                    state[action.qid].optionOne.votes.splice(optionIndex, 1)
                }
                else {
                    state[action.qid].optionTwo.votes.push(action.authedUser);
                    state[action.qid].optionTwo.votes.filter(vote => vote !== action.authedUser);
                }
            }
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid]
                }
            };
        default:
            return state;
    }
}
