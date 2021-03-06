import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer';
import gameRoomReducer from './gameRoomReducer'
const rootReducer = combineReducers({
    reducer,
    gameRoomReducer
})
export default createStore (rootReducer,applyMiddleware(promiseMiddleware));
