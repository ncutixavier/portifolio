import { GET_ARTICLES_BY_ID, GET_ARTICLES_BY_ID_ERROR } from '../types'

const initialState = {
    post: [],
    loading: true,
    error: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES_BY_ID:
            return {
                post: action.payload,
                loading: false,
                error: ''
            }
        case GET_ARTICLES_BY_ID_ERROR:
            return {
                loading: false,
                error: action.payload,
                post: [],
            }
        default:
            return state
    }
}
