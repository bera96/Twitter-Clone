import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension'

const middleware=[thunk]

if(process.env.NODE_ENV==="development"){
    middleware.push(logger)
}
export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middleware),
    // other store enhancers if any
    ));


