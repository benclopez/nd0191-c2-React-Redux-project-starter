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
            return {
                ...state,
                [action.qid]: action.question,
            };
        default:
            return state;
    }
}
