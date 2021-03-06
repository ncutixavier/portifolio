import { GET_ARTICLES_BY_ID, GET_ARTICLES_BY_ID_ERROR } from '../types'
import axios from 'axios';

export const getArticle = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://morning-thicket-92126.herokuapp.com/api/v1/blogs/${id}`
    );
    dispatch({
      type: GET_ARTICLES_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ARTICLES_BY_ID_ERROR,
      payload: error,
    });
  }
};
