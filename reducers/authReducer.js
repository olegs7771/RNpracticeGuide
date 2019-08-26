import { LOGIN_USER } from "../action/types";

const initialState = {
  isAuthenticated: false,
  user: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
