import { saveQuestion, saveQuestionAnswer } from "../Utils/api";
import { saveUsers } from "./Users";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    };
}

function saveNewQuestion(question, users) {
    return {
        type: SAVE_QUESTION,
        question,
        users
    };
}

export function handleSaveQuestion(question, users) {
    return (dispatch) => {

        return saveQuestion({
            optionOneText: question.optionOne,
            optionTwoText: question.optionTwo,
            author: question.authedUser
        })
            .then((question) => {
                dispatch(saveNewQuestion(question));
                users[question.author].questions.push(question.id);
                dispatch(saveUsers(users));
            });
    };
}

function saveAnswer({ authedUser, qid, answer }) {
    return {
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer
    };
}

// Error handling utilized from redux course twitter clone lesson
export function handleSaveQuestionAnswer(answer, users) {
    return (dispatch) => {
      dispatch(saveAnswer(answer));
  
      return saveQuestionAnswer(answer).catch((e) => {
        console.warn("Error in handleSaveQuestionAnswer: ", e);
        dispatch(saveAnswer(answer));
        users[answer.authedUser].answers.push(answer.qid);
        dispatch(saveUsers(users));
        alert("The was an error saving your answer. Try again.");
      });
    };
  }
  