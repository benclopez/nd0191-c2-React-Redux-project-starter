import { GET_USERS } from "../Actions/Users";

export default function Users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
