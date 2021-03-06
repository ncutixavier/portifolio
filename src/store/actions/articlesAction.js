import { GET_ARTICLES, GET_ARTICLES_ERROR } from '../types';
import axios from 'axios';

export const getArticles = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://morning-thicket-92126.herokuapp.com/api/v1/blogs`
    );
    dispatch({
      type: GET_ARTICLES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ARTICLES_ERROR,
      payload: error,
    });
  }
};
