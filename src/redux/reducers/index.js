import { combineReducers } from 'redux'
import articlesReducer from './articlesReducer'
import projectReducer from './ProjectReducer'
import articleReducer from './articleReducer'

const allReducers = combineReducers({
    articlesList: articlesReducer,
    projectsList: projectReducer,
    article: articleReducer,
})

export default allReducers
