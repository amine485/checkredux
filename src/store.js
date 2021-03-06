import { createStore, applyMiddleware  } from "redux";
import CounterReducer from "./reducer"

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
   }
const store=createStore(CounterReducer, applyMiddleware(logger))
export default store
