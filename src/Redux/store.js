import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";


import ErrorReducer from './Reducers/ErrorReducer'
import MainReducer from '../Redux/Reducers/MainReducer'

const initialState = {};

const rootReducer = combineReducers({
    ErrorReducer,
    MainReducer
});

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
);

export default store;