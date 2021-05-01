import { GET_PROJECTS, GET_PROJECTS_ERROR } from '../types'

const initialState = {
    projects: [],
    loading: true,
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                projects: action.payload,
                loading: false,
                error: ''
            }
        case GET_PROJECTS_ERROR:
            return {
                loading: false,
                error: action.payload,
                projects: [],
            }
        default:
            return state
    }
}
