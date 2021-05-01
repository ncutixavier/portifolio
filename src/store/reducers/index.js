import { combineReducers } from 'redux'
import articlesReducer from './articlesReducer'
import projectsReducer from './projectsReducer'
import articleReducer from './articleReducer'

const allReducers = combineReducers({
    articlesList: articlesReducer,
    projectsList: projectsReducer,
    article: articleReducer,
})

export default allReducers
