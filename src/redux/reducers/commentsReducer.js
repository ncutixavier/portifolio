import { GET_COMMENTS_BY_ID, GET_COMMENTS_BY_ID_ERROR } from "../types";

const initialState = {
  data: [],
  loading: true,
  error: "",
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS_BY_ID:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case GET_COMMENTS_BY_ID_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
}
