import { combineReducers } from 'redux'
import articlesReducer from './articlesReducer'
import projectReducer from './ProjectReducer'
import articleReducer from './articleReducer'
import commentsReducer from './commentsReducer'

const allReducers = combineReducers({
    articlesList: articlesReducer,
    projectsList: projectReducer,
    article: articleReducer,
    comments: commentsReducer,
})

export default allReducers
