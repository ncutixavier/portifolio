import { GET_PROJECTS, GET_PROJECTS_ERROR } from '../types';
import axios from 'axios';

export const getProjects = () => async (dispatch) => {
    try {
        const res = await axios.get(
            `https://morning-thicket-92126.herokuapp.com/api/v1/projects`
        );
        dispatch({
            type: GET_PROJECTS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: GET_PROJECTS_ERROR,
            payload: error,
        });
    }
};
