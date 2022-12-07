import { GET_ARTICLES, GET_ARTICLES_ERROR } from '../types';
import axios from 'axios';

export const getArticles = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://zany-fox-lab-coat.cyclic.app/api/v1/blogs`
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
