import { GET_ARTICLES, GET_ARTICLES_ERROR } from '../types'

const initialState = {
    posts: [],
    loading: true,
    error: ''
}

export default function articlesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return {
                posts: action.payload,
                loading: false,
                error: ''
            }
        case GET_ARTICLES_ERROR:
            return {
                loading: false,
                error: action.payload,
                posts: [],
            }
        default:
            return state
    }
}
