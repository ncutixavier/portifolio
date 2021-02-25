import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import allReducers from './reducers'
import promise from 'redux-promise-middleware'

const initalState = {}
const middleware = [thunk, promise]

const store = createStore(
    allReducers,
    initalState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
