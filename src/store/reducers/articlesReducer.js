import { GET_ARTICLES, GET_ARTICLES_ERROR } from '../types'

const initialState = {
    articles: [],
    loading: true
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload,
                loading: false
            }
        case GET_ARTICLES_ERROR:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
