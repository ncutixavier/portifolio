import { GET_COMMENTS_BY_ID, GET_COMMENTS_BY_ID_ERROR } from "../types";
import axios from "axios";

export const getComments = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://portifolio-backend.onrender.com/api/v1/blogs/${id}/comments`
    );
    dispatch({
      type: GET_COMMENTS_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENTS_BY_ID_ERROR,
      payload: error,
    });
  }
};
