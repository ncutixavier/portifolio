import { combineReducers } from 'redux'
import articlesReducer from './articlesReducer'
import articleReducer from './articleReducer'

const allReducers = combineReducers({
    articlesList: articlesReducer,
    article: articleReducer,
})

export default allReducers
