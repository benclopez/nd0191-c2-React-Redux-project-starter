import { GET_USERS, SET_AUTHED_USER, SAVE_USER } from "../Actions/Users";

export function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
      case SAVE_USER:
        return {
          ...state,
          ...action.users,
        };
    default:
      return state;
  }
}

// Authorizing user learned from Implementing React plus Redux in Tweet project lesson
export function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
